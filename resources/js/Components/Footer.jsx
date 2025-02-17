import React from "react";
import { Button } from "./ui/button";
import { Link } from "@inertiajs/react";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-950 text-white">
      <div className="max-container grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">AKR Property</h3>
          <p className="text-gray-400">Your trusted partner in real estate</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">About</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="#" className="hover:text-white">
                Company
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Team
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="#" className="hover:text-white">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Terms
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Get in touch</h4>
          <Button variant="outline" className="w-full">
            <Mail className="mr-2 h-4 w-4" />
            Contact us
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
