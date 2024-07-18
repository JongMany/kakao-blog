import { JoinSchemaType } from "@/features/join/model/JoinForm.entity";

export async function join(joinForm: JoinSchemaType) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/join`, {
      method: "POST",
      body: JSON.stringify(joinForm),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("회원가입에 실패했습니다.");
  }
}
