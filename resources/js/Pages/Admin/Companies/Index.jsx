import React, { useState } from "react";
import AuthLayout from "@/Components/Layout/AuthLayout";
import PageHeader from "@/Components/PageHeader";
import AppTable from "@/Components/AppTable";
import AppTd from "@/Components/AppTd";
import AppTr from "@/Components/AppTr";
import Modal from "@/Components/Modal";
import Form from "./Components/Form";
import AppCard from "@/Components/AppCard";
import { Button } from "@/Components/ui/button";
import { Plus } from "lucide-react";
import { useModal } from "../../../Components/Modal";
const Companies = () => {
  const [open, setOpen] = useState(false);
  const { state, dispatch } = useModal();
  console.log({ d: state.isModalOpen });

  return (
    <AuthLayout>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        ButtonName="Add Company"
        title="Add New Company"
        description="A Enter the company information below"
      >
        <Form />
      </Modal>
      <PageHeader title="Companies">
        <Button onClick={() => setOpen(true)} className="flex items-center">
          <Plus className="mr-1 h-4 w-4" /> Add Company
        </Button>
      </PageHeader>
      <div className="p-4 ">
        <AppCard title={"All Companies"}>
          <AppTable
            columns={[
              "Index",
              "Name",
              "Email",
              "Phone",
              "Secondary Phone",
              "Location",
              "Website",
              "description",
              "Status",
              "Actions",
            ]}
          >
            {[
              {
                id: 1,
                name: "Kombo Real Estate",
                email: "kombo@gmail.com",
                primary_phone: "777777",
                secondary_phone: "7777772",
                location: "Sukuta",
                website: "www.kombo.com",
                description: "",
                status: "Active",
              },
            ].map((company) => (
              <AppTr key={company.id}>
                <AppTd>1</AppTd>
                <AppTd>{company.name}</AppTd>
                <AppTd>{company.email}</AppTd>
                <AppTd>{company.primary_phone}</AppTd>
                <AppTd>{company.secondary_phone}</AppTd>
                <AppTd>{company.location}</AppTd>
                <AppTd>{company.website}</AppTd>
                <AppTd>{company.description}</AppTd>
                <AppTd>
                  {/* {company.status} */}

                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      company.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {company.status}
                  </span>
                </AppTd>
                <AppTd>
                  <div className="flex space-x-2">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Edit
                    </a>
                    <a href="#" className="text-red-600 hover:text-red-900">
                      Delete
                    </a>
                  </div>
                </AppTd>
              </AppTr>
            ))}
          </AppTable>
        </AppCard>
      </div>
    </AuthLayout>
  );
};

export default Companies;
