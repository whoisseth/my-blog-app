/** @format */

import React, { useState } from "react";
// import dynamic from "next/dynamic";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { userRoleStore } from "@/store/userStore";
import NotFound from "@/components/NotFound";
import { postStore } from "@/store/postsStore";
import CreatePost from "@/components/CreatePost";

// const CreatePost = dynamic(() => import("@/components/CreatePost"), {
//   loading: () => <p>Loading...</p>
// });

export default function Create() {
  const { setPosts, posts } = postStore();
  const { userRole } = userRoleStore();

  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

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

    setPosts([
      ...posts,
      {
        id: `${posts.length + 1}`,
        title: title,
        content: content,
        previewImage: previewImage,
        image: image,
        author: {
          userName: userRole.userName,
          role: userRole.role
        },
        comments: [{}]
      }
    ]);

    router.push("/"); // Redirect to home page after submitting the form
  };

  return (
    <>
      {!(userRole.role === "reader") ? (
        <Layout>
          <CreatePost
            {...{
              handleSubmit,
              title,
              image,
              handleTitleChange,
              content,
              handleContentChange,
              handleImageChange
            }}
          />
          <p>create page</p>
        </Layout>
      ) : (
        <NotFound />
      )}
    </>
  );
}
