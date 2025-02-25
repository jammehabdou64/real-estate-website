import { Link } from "@inertiajs/react";
import {
  Sidebar,
  Sidebar as SidebarContainer,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarItem,
} from "../ui/sidebar";
import { cn } from "@/lib/utils";
import { navItems } from "@/constant/navItems";
import { LogOut } from "lucide-react";
import AppImage from "../AppImage";
import { usePage } from "@inertiajs/react";

const AppSidebar = () => {
  const { url } = usePage();

  return (
    <SidebarContainer className="h-screen">
      <Sidebar variant="icon">
        <SidebarHeader className="flex items-center justify-between py-4 px-4 xl:min-w-60">
          <AppImage
            src="/logo.png"
            alt="CMS Logo"
            className="h-10 w-auto rounded-full"
          />
          <h2 className="font-bold ">Admin</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarGroup>
                {navItems.map((item) => (
                  <SidebarItem key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center w-full mt-2",
                        url === item.href
                          ? "text-primary"
                          : "text-muted-foreground",
                      )}
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.name}
                    </Link>
                  </SidebarItem>
                ))}
              </SidebarGroup>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <div className="mt-auto p-4">
          <SidebarItem>
            <Link
              href="/logout"
              className="flex items-center w-full text-red-500 dark:text-red-400"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Link>
          </SidebarItem>
        </div>
      </Sidebar>
    </SidebarContainer>
  );
};

export default AppSidebar;
