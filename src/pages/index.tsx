/** @format */

import React from "react";

import Posts from "@/components/Posts";
import Link from "next/link";
import clsx from "clsx";
import { RiAddLine } from "react-icons/ri";
import Layout from "@/components/Layout";
import { postStore } from "./../store/postsStore";
type Props = {};

export default function Home({}: Props) {
  const { posts } = postStore();
  return (
    <Layout>
      <CreatePostButton className="mb-4" />
      <Posts posts={posts} />
    </Layout>
  );
}

interface CreatePostButtonProps {
  onClick?: () => void;
  className?: string;
}

const CreatePostButton: React.FC<CreatePostButtonProps> = ({
  onClick,
  className
}) => {
  return (
    <Link
      href="/create"
      type="button"
      onClick={onClick}
      className={clsx(
        "flex items-center w-fit bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
        className
      )}
    >
      <RiAddLine className="mr-2" />
      Create Post
    </Link>
  );
};
