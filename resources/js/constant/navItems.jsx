import {
  BarChart,
  Calendar,
  DollarSign,
  Microscope,
  Package,
  Pill,
  Settings,
  UserCog,
  Users,
} from "lucide-react";

export const navItems = [
  { name: "Dashboard", href: "/admin/dashboard", icon: BarChart },
  { name: "Companies", href: "/admin/companies", icon: Users },
  { name: "Users", href: "/admin/users", icon: Users },
  { name: "Properties", href: "/admin/properties", icon: Calendar },
  { name: "Property Types", href: "/admin/property-types", icon: UserCog },
  { name: "Agents", href: "/admin/agents", icon: Microscope },
  { name: "Customers", href: "/admin/customers", icon: Pill },
  { name: "Staffs", href: "/admin/staffs", icon: DollarSign },
  { name: "Images", href: "/admin/image", icon: Package },
  // { name: "Settings", href: "/settings", icon: Settings },
];

export const settingsNavigation = [
  { name: "General", href: "/settings/general" },
  { name: "Security", href: "/settings/security" },
  { name: "Notifications", href: "/settings/notifications" },
  { name: "Roles", href: "/settings/roles" },
  { name: "Permissions", href: "/settings/permissions" },
];
