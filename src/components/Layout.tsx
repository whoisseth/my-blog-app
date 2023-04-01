/** @format */

import React from "react";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <div className="p-4">
        <section className="flex justify-between mb-6">
          <Link
            href="/"
            className="px-6 py-2  text-white center bg-blue-500 hover:bg-blue-700 rounded-md 
         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
        "
          >
            Home page
          </Link>
          <Link
            href="/user-roles"
            className="px-6 py-2  text-white center bg-blue-500 hover:bg-blue-700 rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Select Role
          </Link>
        </section>
        {children}
      </div>
    </>
  );
}
