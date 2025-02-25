import AppInputError from "./AppInputError";
import AppLabel from "./AppInputLable";
import AppSelectInput from "./AppSelect";
import React from "react";

const FormGroupSelect = ({
  id,
  label,
  error,
  items = [],
  title = "",
  text = "",
  ...props
}) => {
  return (
    <div className="col-span-1">
      <AppLabel value={label} forId={id} />
      <div className={label ? "mt-1" : "mt-0"}>
        <AppSelectInput items={items} title={title} text={text} {...props} />
      </div>
      <AppInputError message={error} />
    </div>
  );
};

export default FormGroupSelect;
