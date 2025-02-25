import AppInputError from "./AppInputError";
import AppLabel from "./AppInputLable";
import AppInput from "./AppInput";
import React from "react";

const FormGroupInput = ({ id, label, error, ...props }) => {
  return (
    <div className="col-span-1">
      <AppLabel value={label} forId={id} />
      <div className={label ? "mt-[6px]" : "mt-0"}>
        <AppInput {...props} id={id} />
      </div>
      <AppInputError message={error} />
    </div>
  );
};

export default FormGroupInput;
