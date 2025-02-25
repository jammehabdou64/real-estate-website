import AppInputError from "./AppInputError";
import AppLabel from "./AppInputLable";
import AppTextAreaInput from "./AppTextarea";
import React from "react";

const FormGroupTextarea = ({ id, label, error, ...props }) => {
  return (
    <div className="col-span-1">
      <AppLabel value={label} forId={id} />
      <div className={label ? "mt-1" : "mt-0"}>
        <AppTextAreaInput {...props} />
      </div>
      <AppInputError message={error} />
    </div>
  );
};

export default FormGroupTextarea;
