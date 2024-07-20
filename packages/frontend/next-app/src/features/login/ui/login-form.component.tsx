"use client";

import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { LoginSchemaType } from "@/features/login/model/index";
import { LoginSchema } from "@/features/login/model/index";
import { Checkbox, Form, Input } from "@blog/components/src";
import ErrorConfirm from "@/shared/ui/errorConfirmation/ErrorConfirm";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  const submitHandler = (form: LoginSchemaType) => {
    signIn("credentials", {
      ...form,
      redirect: false,
      callbackUrl: "/login",
    });
  };

  return (
    <section className="h-[450px] flex flex-col justify-evenly gap-y-5 border-2 px-4 rounded-2xl">
      <h1 className="font-notoSansKr text-xl font-bold text-center">로그인</h1>
      <Form className="flex flex-col gap-y-2" onSubmit={handleSubmit(submitHandler)}>
        <Input
          className="border-2 rounded-md w-[400px] py-[2px] px-[6px] text-[14px] "
          type="email"
          label="이메일"
          placeholder="이메일을 입력해주세요"
          {...register("email")}
        />
        <Input
          className="border-2 rounded-md w-[400px] py-[2px] px-[6px] text-[14px]"
          type="password"
          label="비밀번호"
          placeholder="이메일을 입력해주세요"
          {...register("password")}
        />
        <ErrorConfirm errors={errors} />

        <div className="flex justify-between mt-4 px-4">
          <Checkbox label="이메일 기억하기" />
          <Link href="/find-password" className="text-[14px]">
            비밀번호 찾기
          </Link>
        </div>

        <div className="flex items-center justify-center gap-x-8 mt-6">
          <button className="text-[15px] border-2 rounded-md w-[100px] py-[2px]" type="submit">
            로그인
          </button>
          <Link
            href="/join"
            className="text-[15px] border-2 rounded-md w-[100px] py-[2px] text-center"
          >
            회원가입
          </Link>
        </div>
      </Form>
    </section>
  );
}
