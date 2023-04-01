/** @format */

// import CreatePostPage from "@/components/CreatePostPage";
import React from "react";
import dynamic from "next/dynamic";
import Layout from "@/components/Layout";
import { postStore } from "./../store/postsStore";

const CreatePostPage = dynamic(() => import("@/components/CreatePostPage"), {
  loading: () => <p>Loading...</p>
});

interface Props {}

export default function create({}: Props) {
  return (
    <Layout>
      <CreatePostPage />
    </Layout>
  );
}
