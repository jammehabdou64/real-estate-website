import React, { useState } from "react";
import AuthLayout from "@/Components/Layout/AuthLayout";
import PageHeader from "@/Components/PageHeader";
import AppCard from "@/Components/AppCard";
import AppTable from "@/Components/AppTable";
import AppTd from "@/Components/AppTd";
import AppTr from "@/Components/AppTr";
import CreatePropertyType from "./Components/Create";
import EditPropertyType from "./Components/Edit";
import { Plus } from "lucide-react";
import { Button } from "@/Components/ui/button";
import Modal from "@/Components/Modal";

const Index = ({ propertyTypes }) => {
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [propertyTypeData, setpropertyTypeData] = useState(null);

  const EditpropertyTypeHandler = (data) => {
    setpropertyTypeData(data);
    setEditOpen(true);
  };

  console.log({ propertyTypes });

  return (
    <AuthLayout>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Add New Company"
        description="A Enter the propertyType information below"
      >
        <CreatePropertyType closeForm={setOpen} />
      </Modal>

      <Modal
        open={editOpen}
        onClose={() => setEditOpen(false)}
        title="Edit Company"
      >
        <EditPropertyType closeForm={setEditOpen} data={propertyTypeData} />
      </Modal>
      <PageHeader title="Property Types">
        <Button onClick={() => setOpen(true)} className="flex items-center">
          <Plus className="mr-1 h-4 w-4" /> Add Property Type
        </Button>
      </PageHeader>
      <AppCard title="All Property Types">
        <AppTable columns={["Index", "Name", "Description", "Date", "Actions"]}>
          {propertyTypes?.data?.map((type, index) => (
            <AppTr key={type.id}>
              <AppTd>{index + 1}</AppTd>
              <AppTd>{type.name}</AppTd>
              <AppTd>{type.description}</AppTd>
              <AppTd>{type.created_at}</AppTd>
              <AppTd>
                <div className="flex space-x-2">
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-900"
                    onClick={() => EditpropertyTypeHandler(type)}
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
    </AuthLayout>
  );
};

export default Index;
