"use client";
import { Form, Input } from "@blog/components";

export default function JoinCard() {
  return (
    <section>
      <h1>Join</h1>
      <Form>
        <Input label="성함" placeholder="성함을 입력해주세요" />
        <Input label="이메일" placeholder="이메일을 입력해주세요" />
        <Input label="비밀번호" placeholder="비밀번호를 입력해주세요" />
      </Form>
    </section>
  );
}
// yarn workspace next-app add react-hook-form zod @hookform/resolvers
