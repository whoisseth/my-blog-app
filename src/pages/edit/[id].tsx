/** @format */

import { useRouter } from "next/router";
import React, { useState } from "react";
import Layout from "@/components/Layout";
import NotFound from "@/components/NotFound";
import { userRoleStore } from "@/store/userStore";
import { postStore } from "@/store/postsStore";
// import dynamic from "next/dynamic";
import CreatePost from "@/components/CreatePost";

// const EditPostComponent = dynamic(() => import("@/components/CreatePost"), {
//   loading: () => <p>Loading...</p>import { CreatePostPage } from '@/components/CreatePostPage';

// });

export default function EditPost() {
  const { setPosts, posts } = postStore();
  const router = useRouter();
  console.log("router.pathname", router.pathname);
  const id = router.query.id as string;
  const data = posts.filter((d) => d.id === id);
  const post = data[0];

  const { userRole } = userRoleStore();

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [image, setImage] = useState<File | null>(post.image || null);
  const [previewImage, setPreviewImage] = useState<string | null>(
    post.previewImage || null
  );

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (value: string) => {
    setContent(value);
  };
  console.log("previewImage", previewImage);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedImage = event.target.files[0];
      setImage(selectedImage);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(selectedImage);
    } else {
      setImage(null);
      setPreviewImage(null);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const editedPost = posts.map((p) => {
      if (p.id === post.id) {
        return {
          id: post.id,
          title: title,
          content: content,
          previewImage: previewImage,
          image: image,
          author: {
            userName: userRole.userName,
            role: userRole.role
          },
          comments: post.comments
        };
      } else return p;
    });
    setPosts(editedPost);
    router.push("/"); // Redirect to home page after submitting the form
  };

  console.log("POST-", post);
  return (
    <Layout>
      {post?.id === id && !(userRole.role === "reader") ? (
        <CreatePost
          {...{
            title,
            content,
            image,
            handleSubmit,
            handleTitleChange,
            handleContentChange,
            handleImageChange
          }}
        />
      ) : (
        <NotFound />
      )}
    </Layout>
  );
}
