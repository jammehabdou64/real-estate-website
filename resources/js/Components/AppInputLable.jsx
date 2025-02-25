import React from "react";

const AppLabel = ({ value, forId, children }) => {
  return (
    <label
      className="block font-medium text-sm text-foreground"
      htmlFor={forId}
    >
      {value ? <span>{value}</span> : <span>{children}</span>}
    </label>
  );
};

export default AppLabel;
