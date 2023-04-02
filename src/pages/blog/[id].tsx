/** @format */

import { useRouter } from "next/router";
import React from "react";
import Layout from "@/components/Layout";
import NotFound from "@/components/NotFound";
import { postStore } from "@/store/postsStore";
import PostPage from "@/components/PostPage";

export default function SinglePost({}) {
  const { posts } = postStore();
  const router = useRouter();
  console.log("router.pathname", router.pathname);
  const id = router.query.id as string;

  const data = posts.filter((d) => d.id === id);
  const post = data[0];
  // console.log("posts-", posts);

  return (
    <>
      {data[0]?.id == id ? (
        <Layout>
          <PostPage
            post={post}
            // postId={post.id}
            title={post?.title}
            author={post?.author.userName}
            content={post?.content}
            comments={post?.comments}
          />
        </Layout>
      ) : (
        <NotFound />
      )}
    </>
  );
}
