import type { InputHTMLAttributes } from "react";
import { forwardRef } from "react";

type Props = {
  label?: string;
  labelColor?: string;
} & InputHTMLAttributes<HTMLInputElement>;
export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, labelColor = "black", name, ...props }, ref) => {
    return (
      <>
        {label && (
          <label
            htmlFor={name}
            style={{
              color: labelColor,
              fontWeight: 600,
            }}
          >
            {label}
          </label>
        )}
        <input name={name} ref={ref} {...props} />
      </>
    );
  },
);
