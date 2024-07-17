import { type ButtonHTMLAttributes, type PropsWithChildren } from "react";

export const Button = ({
  children,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return <button {...props}>{children}</button>;
};
