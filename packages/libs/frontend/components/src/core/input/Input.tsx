import { forwardRef, InputHTMLAttributes } from "react";

type Props = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;
export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, name, ...props }, ref) => {
    return (
      <>
        {label && <label htmlFor={name}>{label}</label>}
        <input name={name} ref={ref} {...props} />
      </>
    );
  },
);
