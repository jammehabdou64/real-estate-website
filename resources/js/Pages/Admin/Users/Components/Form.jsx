import React, { useEffect } from "react";
import AppForm from "@/Components/AppForm";
import FormGroupInput from "@/Components/FormGroupInput";
import FormGroupSelect from "@/Components/FormGroupSelect";
import { Button } from "../../../../Components/ui/button";
import { useForm, usePage } from "@inertiajs/react";
import { router } from "@inertiajs/react";

const Form = ({ formData, closeForm }) => {
  const { errors } = usePage().props;

  const { data, setData, reset } = useForm({
    name: "",
    email: "",
    phone: "",
    status: "",
    address: "",
  });

  useEffect(() => {
    setData({
      name: formData?.name || "",
      email: formData?.email || "",
      phone: formData?.primary_phone || "",
      address: formData?.secondary_phone || "",
      status: formData?.status || "",
    });
  }, [formData]);

  const submitHandler = (e) => {
    const url = formData ? `/admin/users/${formData.id}` : "/admin/users";
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
      <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-1 md:grid-cols-2">
        <div className="col-span-2">
          <FormGroupInput
            label="Name"
            id="name"
            name="name"
            onChange={onChangeHandler}
            error={errors.name}
            value={data.name}
          />
        </div>
        <FormGroupInput
          label="Email"
          id="email"
          name="email"
          onChange={onChangeHandler}
          error={errors.email}
          value={data.email}
        />

        <FormGroupInput
          label="Phone"
          id="primary-phone"
          name="phone"
          onChange={onChangeHandler}
          error={errors.phone}
          value={data.phone}
        />

        <FormGroupInput
          label="Address"
          id="address"
          name="address"
          onChange={onChangeHandler}
          error={errors.address}
          value={data.address}
        />

        <FormGroupSelect
          label="status"
          id="status"
          name="status"
          onChange={onChangeHandler}
          error={errors.status}
          value={data.status}
          items={["Active", "Inactive"]}
        />
      </div>
      {/* <div className="py-1"> */}
      <Button>Submit</Button>
      {/* </div> */}
    </AppForm>
  );
};

export default Form;
