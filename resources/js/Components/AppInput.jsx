import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export default forwardRef(function TextInput(
  { className, type, ...props },
  ref,
) {
  return (
    <input
      type={type}
      className={cn("form-input-control", className)}
      ref={ref}
      {...props}
    />
  );
});
