/** @format */

import React from "react";
import { posts } from "@/data/post";
import Posts from "@/components/Posts";
import Link from "next/link";
type Props = {};

export default function Home({}: Props) {
  return (
    <div className="p-4">
      <section className="flex justify-between mb-6">
        <Link href="/" className="px-6 py-2  text-white bg-blue-600 rounded-md 
        hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
        ">
          Home page
        </Link>
        <Link
          href="/user-roles"
          className="px-6 py-2  text-white bg-blue-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Select Role
        </Link>
      </section>
      <Posts posts={posts} />
    </div>
  );
}
