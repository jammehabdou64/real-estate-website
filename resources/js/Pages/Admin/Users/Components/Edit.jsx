import React from "react";
import Form from "./Form";

const Edit = ({ userData, closeForm }) => {
  return (
    <div>
      <Form formData={userData} closeForm={closeForm} />
    </div>
  );
};

export default Edit;
