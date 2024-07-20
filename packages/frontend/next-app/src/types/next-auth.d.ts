import type { DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  email: string;
  accessToken: string;
  refreshToken: string;
  nickname: string;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}

declare module "@auth/core/jwt" {
  interface JWT extends ExtendedUser {}
}
