"use client";
import {
  JoinSchema,
  type JoinSchemaType,
} from "@/features/join/model/JoinForm.entity";
import { Form, Input } from "@blog/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { join } from "@/features/join/api/join.api";

export function JoinCard() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<JoinSchemaType>({
    resolver: zodResolver(JoinSchema),
  });

  const submitHandler: SubmitHandler<JoinSchemaType> = async (data) => {
    // TODO: Fetch하기...
    const joinResult = await join(data);
    console.log(joinResult);
  };

  return (
    <section>
      <h1 className="font-notoSansKr text-xl font-bold mb-[24px]">
        회원정보 입력
      </h1>
      <Form className="flex flex-col" onSubmit={handleSubmit(submitHandler)}>
        <Input
          label="이름"
          type="text"
          // name="username"
          placeholder="성함을 입력해주세요"
          {...register("username")}
        />
        <Input
          label="닉네임"
          type="text"
          // name="nickname"
          placeholder="닉네임을 입력해주세요"
          {...register("nickname")}
        />
        <Input
          label="이메일"
          type="email"
          // name="email"
          placeholder="이메일을 입력해주세요"
          {...register("email")}
        />
        <Input
          label="비밀번호"
          type="password"
          // name="password"
          placeholder="비밀번호를 입력해주세요"
          {...register("password")}
        />
        <Input
          label="비밀번호 확인"
          type="password"
          // name="confirmPassword"
          placeholder="비밀번호를 입력해주세요"
          {...register("passwordConfirmation")}
        />
        <button type="submit">가입하기</button>
      </Form>
    </section>
  );
}
// yarn workspace next-app add react-hook-form zod @hookform/resolvers
