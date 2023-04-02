/** @format */

import { userRoleStore } from "@/store/userStore";
import React, { DOMAttributes, InputHTMLAttributes, useState } from "react";
import Quill from "react-quill";
import "react-quill/dist/quill.snow.css";
import NotFound from "./NotFound";
import { useRouter } from "next/router";

interface CreatePostPageProps {
  image: File | null;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  title: string;
  handleTitleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  content: string;
  handleContentChange: (value: string) => void;
  handleImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CreatePost: React.FC<CreatePostPageProps> = ({
  handleSubmit,
  title,
  handleTitleChange,
  content,
  handleContentChange,
  handleImageChange,
  image
}) => {
  const router = useRouter();

  return (
    <>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold mb-4">
            {router.pathname.includes("edit")
              ? "Edit Post"
              : " Create New Blog Post"}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-lg font-medium text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                value={title}
                onChange={handleTitleChange}
                className="mt-1 h-10 border outline-none focus:ring-gray-200 focus:ring-[1px]   block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-2"
              />
            </div>
            <div>
              <label
                htmlFor="content"
                className="block text-lg font-medium text-gray-700"
              >
                Content
              </label>
              <Quill
                value={content}
                onChange={handleContentChange}
                className="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="image"
                className="block text-lg font-medium text-gray-700"
              >
                Image -
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-1 block w-fit cursor-pointer "
              />
              {image && image.name}
              {/* <img src={previewImage} alt="uplod img" /> */}
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {" "}
                {router.pathname.includes("edit")
                  ? "Update Post"
                  : "Create Post"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
