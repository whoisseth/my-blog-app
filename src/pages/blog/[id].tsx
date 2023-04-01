/** @format */

import PostPage from "@/components/PostPage";
import { useRouter } from "next/router";

import axios from "axios";

import React from "react";
import { GetServerSideProps } from "next";
import { posts } from "@/data/post";

// type Props = {};

export default function SinglePost({}) {
  const router = useRouter();
  console.log("router.pathname", router.pathname);
  // const id = router.query.id as string;
  const id = router.query.id;

  const data = posts.filter((d) => d.id === id);
  console.log("data", typeof data[0]);

  return (
    <div className="p-4">
      {/* {JSON.stringify(data)} */}
      <p>id - {data[0]?.id} </p>
      <p>author - {data[0]?.author.userName} </p>
      <p>content - {data[0]?.content} </p>
    </div>
  );
}

// eslint-disable-next-line @next/next/no-typos
// export async function getServerSideProps({ params }) {

//   const res = fetch(`https://fakestoreapi.com/products/ ${params.id}`);
//   const data = await res.json();
//   return {
//     props: { data }
//   };
// }
