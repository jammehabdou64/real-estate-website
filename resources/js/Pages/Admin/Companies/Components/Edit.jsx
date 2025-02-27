import React from "react";
import Form from "./Form";

const Edit = ({ companyData, closeForm }) => {
  return (
    <div>
      <Form formData={companyData} closeForm={closeForm} />
    </div>
  );
};

export default Edit;
