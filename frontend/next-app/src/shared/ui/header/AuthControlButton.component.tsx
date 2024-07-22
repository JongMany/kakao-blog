import { auth } from "@/app/auth";
import LogoutButton from "@/shared/ui/button/LogoutButton";
import Link from "next/link";
import React from "react";

export default async function AuthControlButton() {
  const session = await auth();
  const isAuth = session !== null;
  console.log(session);
  return (
    <div className="flex gap-x-2">
      {!isAuth && <Link href="/login">로그인</Link>}
      {isAuth && (
        <>
          <span>
            <strong className="font-semibold underline underline-offset-2 cursor-pointer">
              <Link href={`/profile/${session.user?.nickname}`}>
                {session.user?.nickname || "Guest"}
              </Link>
            </strong>
            님 안녕하세요
          </span>
          <LogoutButton className="text-[14px]" />
        </>
      )}
    </div>
  );
}
