"use client";

import Fobidden from "@/pages/join-success/forbidden";
import type { PropsWithChildren } from "react";
import { useEffect, useState } from "react";

export default function CheckSuccessContaienr({ children }: PropsWithChildren) {
  const [isValidate, setIsValidate] = useState(true);

  useEffect(() => {
    const afterJoin = sessionStorage.getItem("joinSuccess");
    if (afterJoin) {
      setIsValidate(true);
    }

    return () => {
      // sessionStorage.removeItem("joinSuccess");
    };
  }, []);

  return isValidate ? children : <Fobidden />;
}
