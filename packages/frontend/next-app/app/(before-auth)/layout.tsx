import type { PropsWithChildren } from "react";
import React from "react";
import UnauthenticatedHeader from "../../src/shared/ui/header/UnauthenticatedHeader.component";

export default function UnauthenticatedLayout({ children }: PropsWithChildren) {
  return (
    <>
      <UnauthenticatedHeader />
      {children}
    </>
  );
}
