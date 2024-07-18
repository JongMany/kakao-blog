"use client";

import { type PropsWithChildren, useState, useEffect } from "react";

const isMockingMode = process.env.NEXT_PUBLIC_MOCKING_MODE === "enabled";

export const MSWProvider = ({ children }: PropsWithChildren) => {
  const [mswReady, setMswReady] = useState(() => !isMockingMode);

  useEffect(() => {
    const init = async () => {
      if (isMockingMode) {
        const file = await import("@/app/provider/msw/libs/index");
        const initMocks = file.initMocksWhenDevelopment;
        await initMocks();
        setMswReady(true);
      }
    };
    if (!mswReady) {
      init();
    }
  }, [mswReady]);

  if (mswReady) return null;

  return <>{children}</>;
};
