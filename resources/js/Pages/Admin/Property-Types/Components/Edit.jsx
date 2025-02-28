import React from "react";
import Form from "./Form";

const Edit = ({ data, closeForm }) => {
  return (
    <div>
      <Form formData={data} closeForm={closeForm} />
    </div>
  );
};

export default Edit;
