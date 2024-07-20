import Credentials from "next-auth/providers/credentials";
import type { UserEntity } from "@/features/login/model/index";
import { LoginSchema } from "@/features/login/model/index";
import { login } from "@/features/login/api/index";
import cookie from "cookie";
import { cookies } from "next/headers";

export const CredentialsProvider = Credentials({
  id: "credentials",
  name: "Credentials",
  async authorize(credentials) {
    const validatedFields = LoginSchema.safeParse(credentials);

    if (validatedFields.success) {
      const { email, password } = validatedFields.data;

      try {
        const response = await login({
          email,
          password,
        });

        const contentType = response.headers.get("content-type");
        console.log("contentType", contentType);
        if (!contentType || !contentType.includes("application/json")) {
          return null;
        }
        console.log("status", response.status);
        if (response.status === 200) {
          const setCookie = response.headers.get("Set-Cookie");
          console.log("setCookie", setCookie, response.headers);
          if (setCookie) {
            const parsed = cookie.parse(setCookie);
            const cookieStore = cookies();
            cookieStore.set("refreshToken", parsed["refreshToken"], {
              httpOnly: true,
              maxAge: 1000 * 60 * 60 * 24 * 7,
            });
            const data = (await response.json()) as UserEntity;
            if (!data) return null;
            return {
              ...data,
              refreshToken: parsed["refreshToken"] ?? null,
              // 다른 데이터도 넣어야 함
            };
          }
          return null;
        }
      } catch (error) {
        console.error("로그인 실패", error);
        return null;
      }
    }

    // 유효성 검사를 실패하거나, 로그인을 실패한 경우
    return null;
  },
});
