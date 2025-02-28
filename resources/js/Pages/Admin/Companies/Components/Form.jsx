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
  const { errors, users } = usePage().props;
  // console.log({ users });

  const { data, setData, reset } = useForm({
    name: "",
    email: "",
    primary_phone: "",
    secondary_phone: "",
    location: "",
    website: "",
    status: "",
    description: "",
    logo: "",
    user_id: "",
  });

  useEffect(() => {
    setData({
      name: formData?.name || "",
      email: formData?.email || "",
      primary_phone: formData?.primary_phone || "",
      secondary_phone: formData?.secondary_phone || "",
      location: formData?.location || "",
      website: formData?.website || "",
      description: formData?.description || "",
      user_id: formData?.user_id || "",
    });
  }, [formData]);

  const submitHandler = (e) => {
    const url = formData
      ? `/admin/companies/${formData.id}`
      : "/admin/companies";
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
          <FormGroupSelect
            label="Owner"
            id="user"
            name="user_id"
            onChange={onChangeHandler}
            error={errors.status}
            optionValue={"id"}
            items={users}
            title="Select user"
            text="name"
            value={data.user_id}
          />
        </div>
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
        <div className="col-span-2">
          <FormGroupTextarea
            label="Description"
            id="description"
            name="description"
            onChange={onChangeHandler}
            error={errors.description}
            value={data.description}
          />
        </div>
        {/*
        import FormGroupSelect from "@/Components/FormGroupSelect";
         <div className="col-span-2">
          <FormGroupImage
            id="Image"
            label="Image"
            value={data.logo}
            name="logo"
            error={errors.logo}
            onChange={(file) => setData({ ...data, logo: file })}
          />
        </div> */}
      </div>
      {/* <div className="py-1"> */}
      <Button>Submit</Button>
      {/* </div> */}
    </AppForm>
  );
};

export default Form;
