import React, { useEffect, useState } from "react";
import { ModalProvider } from "../Modal";
import { ThemeProvider } from "@/Providers/ThemeProvider";
import { usePage } from "@inertiajs/react";
import Toast from "../Toast";
import AppSidebar from "./AppSidebar";
import { ThemeToggle } from "./ThemeToggle";

const AuthLayout = ({ children }) => {
  const { flash } = usePage().props;
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (flash?.status && flash?.message) {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        flash.message = "";
      }, 3000);
    }
  }, [flash]);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Toast
        show={showToast}
        closeToast={() => setShowToast(false)}
        message={flash?.message}
      />
      <ModalProvider>
        <div className="flex min-h-screen">
          <AppSidebar />
          <div className="flex-1">
            <div className="flex h-16 items-center justify-end border-b px-4">
              <ThemeToggle />
            </div>
            <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">{children}</div>
          </div>
        </div>
      </ModalProvider>
    </ThemeProvider>
  );
};

export default AuthLayout;
