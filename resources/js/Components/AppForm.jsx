import React from "react";

const AppForm = ({ submitHandler, children }) => {
  return (
    <form className="space-y-8" onSubmit={submitHandler}>
      {children}
    </form>
  );
};

export default AppForm;
