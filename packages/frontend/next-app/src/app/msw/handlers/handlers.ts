import { JoinSchema } from "@/features/join";
import { http, HttpResponse } from "msw";

export const handlers = [
  http.post(`*/api/join`, async ({ request }) => {
    const form = await request.json();
    try {
      JoinSchema.parse(form);
      return HttpResponse.json({
        message: "회원가입에 성공했습니다.",
        success: true,
      });
    } catch (error) {
      console.log("회원가입 실패", error);
      return HttpResponse.json({
        message: "회원가입에 실패했습니다.",
        success: false,
      });
    }
  }),
];
