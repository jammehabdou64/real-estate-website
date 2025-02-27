import React, { useState } from "react";
import AuthLayout from "@/Components/Layout/AuthLayout";
import PageHeader from "@/Components/PageHeader";
import { Plus } from "lucide-react";
import { Button } from "@/Components/ui/button";

const Index = () => {
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [companyData, setCompanyData] = useState(null);
  return (
    <AuthLayout>
      <PageHeader title="Properties">
        <Button onClick={() => setOpen(true)} className="flex items-center">
          <Plus className="mr-1 h-4 w-4" /> Add Property
        </Button>
      </PageHeader>
    </AuthLayout>
  );
};

export default Index;
