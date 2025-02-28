import React, { useEffect } from "react";
import AppForm from "@/Components/AppForm";
import FormGroupInput from "@/Components/FormGroupInput";
import FormGroupTextarea from "@/Components/FormGroupTextarea";
// import FormGroupImage from "@/Components/FormGroupImage";
import FormGroupSelect from "@/Components/FormGroupSelect";
import { Button } from "../../../../Components/ui/button";
import { useForm, usePage } from "@inertiajs/react";
import { router } from "@inertiajs/react";

const Form = ({ formData, closeForm }) => {
  const { errors } = usePage().props;

  const { data, setData, reset } = useForm({
    name: "",
    description: "",
  });

  useEffect(() => {
    setData({
      name: formData?.name || "",
      description: formData?.description || "",
    });
  }, [formData]);

  const submitHandler = (e) => {
    const url = formData
      ? `/admin/property-types/${formData.id}`
      : "/admin/property-types";
    const method = formData ? "patch" : "post";
    e.preventDefault();

    router[method](url, data, {
      onSuccess: () => {
        reset();
        closeForm(false);
      },
    });
  };

  const onChangeHandler = (e) => {
    return setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <AppForm submitHandler={submitHandler}>
      <div className="grid grid-cols-1 gap-y-6 gap-x-4 ">
        <FormGroupInput
          label="Name"
          id="name"
          name="name"
          onChange={onChangeHandler}
          error={errors.name}
          value={data.name}
        />

        <FormGroupTextarea
          label="Description"
          id="description"
          name="description"
          onChange={onChangeHandler}
          error={errors.description}
          value={data.description}
        />
      </div>
      <Button>Submit</Button>
    </AppForm>
  );
};

export default Form;
