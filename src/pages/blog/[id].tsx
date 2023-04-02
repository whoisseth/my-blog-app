/** @format */

import { useRouter } from "next/router";
import React from "react";
import Layout from "@/components/Layout";
import NotFound from "@/components/NotFound";
import { postStore } from "@/store/postsStore";
import ReactHtmlParser from "react-html-parser";

export default function SinglePost({}) {
  const { posts } = postStore();
  const router = useRouter();
  console.log("router.pathname", router.pathname);
  const id = router.query.id as string;

  const data = posts.filter((d) => d.id === id);
  // console.log("posts-", posts);

  return (
    <>
      {data[0]?.id == id ? (
        <Layout>
          <p>id - {data[0]?.id} </p>
          <p>author - {data[0]?.author.userName} </p>
          <p> content - {ReactHtmlParser(data[0]?.content)} </p>
        </Layout>
      ) : (
        <NotFound />
      )}
    </>
  );
}
