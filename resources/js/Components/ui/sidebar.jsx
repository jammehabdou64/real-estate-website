import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const sidebarVariants = cva(
  "flex flex-col h-full bg-background text-foreground",
  {
    variants: {
      variant: {
        default: "border-r",
        floating: "shadow-lg rounded-lg m-4",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Sidebar = React.forwardRef(
  ({ className, variant, collapsible, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(sidebarVariants({ variant }), className)}
        {...props}
      />
    );
  },
);

const SidebarHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("px-2 py-4", className)} {...props} />
));

const SidebarContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex-1 overflow-auto", className)} {...props} />
));

const SidebarFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("mt-auto px-2 py-4", className)} {...props} />
));

const SidebarGroup = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("px-2 py-2", className)} {...props} />
));

const SidebarGroupLabel = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mb-2 px-2 text-xs font-semibold", className)}
    {...props}
  />
));

const SidebarGroupContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-1", className)} {...props} />
));

const sidebarItemVariants = cva(
  "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground hover:bg-accent",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const SidebarItem = React.forwardRef(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(sidebarItemVariants({ variant }), className)}
      {...props}
    />
  ),
);

export {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarItem,
};
