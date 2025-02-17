import React from "react";
import { Link } from "@inertiajs/react";
import { Button } from "./ui/button";
import { Home } from "lucide-react";

const Header = () => {
  return (
    <header className="  border-b">
      <div className="max-container flex h-16 items-center">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          <Home className="h-6 w-6" />
          <span>House</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline" href="#">
            Featured
          </Link>
          <Link className="text-sm font-medium hover:underline" href="#">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline" href="#">
            Explore
          </Link>
          <Link className="text-sm font-medium hover:underline" href="#">
            Contact
          </Link>
        </nav>
        <Button className="ml-4 bg-orange-500 hover:bg-orange-600">
          Sign Up
        </Button>
      </div>
    </header>
  );
};

export default Header;
