"use client";
import type { LoginSchemaType } from "@/features/login/model/LoginForm.entity";
import { LoginSchema } from "@/features/login/model/LoginForm.entity";
import { Form, Input } from "@blog/components/src";
import ErrorMessageConfirmation from "@blog/components/src/core/messageConfirmation/ErrorMessageConfirmation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  console.log(errors);
  const submitHandler = () => {};

  return (
    <section>
      <h1 className="font-notoSansKr text-xl font-bold mb-[24px]">로그인</h1>
      <Form className="flex flex-col" onSubmit={handleSubmit(submitHandler)}>
        <Input
          type="email"
          label="이메일"
          labelColor="black"
          placeholder="이메일을 입력해주세요"
          {...register("email")}
        />
        <ErrorMessageConfirmation hasError={"email" in errors} message={errors.email?.message} />
        <Input
          type="password"
          label="비밀번호"
          placeholder="이메일을 입력해주세요"
          {...register("password")}
        />
        <ErrorMessageConfirmation
          hasError={"password" in errors}
          message={errors.password?.message}
        />
        <div className="flex items-center">
          <button type="submit">로그인</button>
          <Link href="/join">회원가입</Link>
        </div>
      </Form>
    </section>
  );
}
