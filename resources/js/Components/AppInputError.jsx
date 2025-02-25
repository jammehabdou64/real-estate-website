import React from "react";

const AppInputError = ({ message }) => {
  return !message ? (
    ""
  ) : (
    <div>
      <p className="text-sm text-red-600 dark:text-red-400">{message}</p>
    </div>
  );
};

export default AppInputError;
