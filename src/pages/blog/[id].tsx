/** @format */

import { useRouter } from "next/router";

import React from "react";
import { posts } from "@/data/post";
import Layout from "@/components/Layout";

export default function SinglePost({}) {
  const router = useRouter();
  console.log("router.pathname", router.pathname);
  const id = router.query.id as string;

  const data = posts.filter((d) => d.id === id);

  return (
    <Layout>
      {data[0]?.id === id ? (
        <>
          <p>id - {data[0]?.id} </p>
          <p>author - {data[0]?.author.userName} </p>
          <p>content - {data[0]?.content} </p>
        </>
      ) : (
        <p>Page not found</p>
      )}
    </Layout>
  );
}
