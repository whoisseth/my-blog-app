/** @format */

import React, { useState } from "react";
import Quill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/router";

const CreatePostPage: React.FC = () => {
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
    // TODO: Handle form submission here
    router.push("/"); // Redirect to home page after submitting the form
  };
  // const ImageSrc =URL.createObjectURL(image)

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <h1 className="text-3xl font-bold mb-4">Create New Blog Post</h1>
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
            {/* <img src={previewImage} alt="uplod img" /> */}
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Create Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePostPage;