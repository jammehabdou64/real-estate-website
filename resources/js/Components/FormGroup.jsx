import AppInputError from "./AppInputError";
import AppLabel from "./AppInputLable";
import React from "react";

const FormGroup = ({ id, label, error, children }) => {
  return (
    <div className="col-span-1">
      <slot name="label">
        <AppLabel value={label} forId={id} />
      </slot>
      <div className={label ? "mt-1" : "mt-0"}>{children}</div>
      <slot name="error">
        <AppInputError message={error} />
      </slot>
    </div>
  );
};

export default FormGroup;
