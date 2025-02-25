import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export default forwardRef(function AppTextarea(
  { className, type, ...props },
  ref,
) {
  return (
    <textarea
      ref={ref}
      className={cn("min-h-[80px] form-input-control", className)}
      {...props}
    />
  );
});
