import React, { useState } from "react";
import AuthLayout from "@/Components/Layout/AuthLayout";
import PageHeader from "@/Components/PageHeader";
import AppTable from "@/Components/AppTable";
import AppTd from "@/Components/AppTd";
import AppTr from "@/Components/AppTr";
import Modal from "@/Components/Modal";
import CreateCompany from "./Components/Create";
import EditCompany from "./Components/Edit";
import AppCard from "@/Components/AppCard";
import { Button } from "@/Components/ui/button";
import { Edit, Plus } from "lucide-react";
const Users = ({ users }) => {
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [companyData, setCompanyData] = useState(null);

  const EditCompanyHandler = (data) => {
    setCompanyData(data);
    setEditOpen(true);
  };

  return (
    <AuthLayout>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Add New User"
        description="A Enter the user's information below"
      >
        <CreateCompany closeForm={setOpen} />
      </Modal>

      <Modal
        open={editOpen}
        onClose={() => setEditOpen(false)}
        title="Edit Company"
      >
        <EditCompany closeForm={setEditOpen} companyData={companyData} />
      </Modal>

      <PageHeader title="Users">
        <Button onClick={() => setOpen(true)} className="flex items-center">
          <Plus className="mr-1 h-4 w-4" /> Add User
        </Button>
      </PageHeader>
      <div className="">
        <AppCard title={"All Companies"}>
          <AppTable
            columns={[
              "Index",
              "Name",
              "Email",
              "Phone",
              "address",
              "role",
              "Status",
              "Actions",
            ]}
          >
            {users?.data?.map((user) => (
              <AppTr key={user.id}>
                <AppTd>1</AppTd>
                <AppTd>{user.name}</AppTd>
                <AppTd>{user.email}</AppTd>
                <AppTd>{user.phone}</AppTd>
                <AppTd>{user.address}</AppTd>
                <AppTd>{user.role}</AppTd>
                <AppTd>{user.status}</AppTd>
                <AppTd>
                  {/* {user.status} */}
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {user.status}
                  </span>
                </AppTd>
                <AppTd>
                  <div className="flex space-x-2">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                      onClick={() => EditCompanyHandler(company)}
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

export default Users;
