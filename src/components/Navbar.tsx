/** @format */

import { userRoleStore } from "@/store/userStore";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { userRole } = userRoleStore();

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-white font-bold text-xl">
              My App
            </Link>
          </div>
          <section className="flex gap-2">
            <div className="hidden md:block">
              <div className="flex items-center">
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/user-roles"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Select Role
                </Link>
              </div>
            </div>
            <div className="flex flex-col text-blue-300 text-sm ">
              <p>{userRole.userName}</p>
              <p className="capitalize">- {userRole.role}</p>
            </div>
          </section>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
