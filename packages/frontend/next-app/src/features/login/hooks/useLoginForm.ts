import { getEmailState, toggleEmailStorage } from "@/features/login/lib/email-storage";
import type { LoginSchemaType } from "@/features/login/model/index";
import { LoginSchema } from "@/features/login/model/index";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const useLoginForm = () => {
  const [rememberEmail, setRememberEmail] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  /**
   * 로그인 폼 제출 핸들러 함수
   * @param form 로그인 폼 데이터
   */
  const submitHandler = (form: LoginSchemaType) => {
    toggleEmailStorage({ shouldRemember: rememberEmail, email: form.email });
    signIn("credentials", {
      ...form,
      redirect: true,
      callbackUrl: "/",
    });
  };

  /**
   * 이메일 기억하기 상태 토글 함수
   */
  const toggleRememberEmail = () => {
    setRememberEmail((prev) => !prev);
  };

  // 이메일 기억하기 설정
  useEffect(() => {
    const emailState = getEmailState();
    if (emailState.shouldRemember) {
      emailState.email && setValue("email", emailState.email);
    }
    setRememberEmail(emailState.shouldRemember);
  }, [setValue]);

  return {
    rememberEmail,
    setRememberEmail,
    register,
    handleSubmit,
    errors,
    submitHandler,
    toggleRememberEmail,
  };
};
