import React, { useEffect } from "react";
import AppForm from "@/Components/AppForm";
import FormGroupInput from "@/Components/FormGroupInput";
import { Button } from "../../../../Components/ui/button";
import { useForm } from "@inertiajs/react";

const Form = ({ submitHandler, formData }) => {
  const { data, setData, errors, post, patch, reset } = useForm({
    name: "",
    email: "",
    primary_phone: "",
    secondary_phone: "",
    location: "",
    website: "",
  });

  useEffect(() => {
    setData({
      name: formData?.name || "",
      email: formData?.email || "",
      primary_phone: formData?.primary_phone || "",
      secondary_phone: formData?.secondary_phone || "",
      location: formData?.location || "",
      website: formData?.website || "",
    });
  }, [formData]);

  const onChangeHandler = (e) => {
    return setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <AppForm submitHandler={submitHandler}>
      <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-1 md:grid-cols-2">
        <FormGroupInput
          label="Name"
          id="name"
          name="name"
          onChange={onChangeHandler}
          error={errors.name}
          value={data.name}
        />
        <FormGroupInput
          label="Email"
          id="email"
          name="email"
          onChange={onChangeHandler}
          error={errors.email}
          value={data.email}
        />

        <FormGroupInput
          label="Primary Phone"
          id="primary-phone"
          name="primary_phone"
          onChange={onChangeHandler}
          error={errors.primary_phone}
          value={data.primary_phone}
        />

        <FormGroupInput
          label="Secondary Phone"
          id="secondary-phone"
          name="secondary_phone"
          onChange={onChangeHandler}
          error={errors.secondary_phone}
          value={data.secondary_phone}
        />

        <FormGroupInput
          label="Location"
          id="location"
          name="location"
          onChange={onChangeHandler}
          error={errors.location}
          value={data.location}
        />

        <FormGroupInput
          label="Website"
          id="website"
          name="website"
          onChange={onChangeHandler}
          error={errors.website}
          value={data.website}
        />
      </div>
      <div className="py-2">
        <Button>Submit</Button>
      </div>
    </AppForm>
  );
};

export default Form;
