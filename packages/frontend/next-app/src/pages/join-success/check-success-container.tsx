"use client";

import type React from "react";
import { useEffect, useState } from "react";

type Props = {
  welcome: React.ReactNode;
  forbidden: React.ReactNode;
};

export default function CheckSuccessContaienr({ welcome, forbidden }: Props) {
  const [isValidate, setIsValidate] = useState(false);

  useEffect(() => {
    const afterJoin = sessionStorage.getItem("joinSuccess");
    if (afterJoin) {
      setIsValidate(true);
    }

    return () => {
      // sessionStorage.removeItem("joinSuccess");
    };
  }, []);

  return isValidate ? welcome : forbidden;
}
