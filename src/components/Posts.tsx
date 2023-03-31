/** @format */

import React, { useState } from "react";
import { PostInterface } from "@/data/post";
import { userRoleStore } from "@/store/userStore";

interface Props {
  posts: PostInterface[];
}

const Posts: React.FC<Props> = ({ posts }) => {
  const { userRole, setUserRole } = userRoleStore();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  // Logic for displaying current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Function to change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Function to handle deleting a post
  const handleDelete = (postId: number) => {
    // TODO: Implement post deletion logic
    console.log(`Deleting post with ID ${postId}`);
  };

  // Function to handle editing a post
  const handleEdit = (postId: number) => {
    // TODO: Implement post editing logic
    console.log(`Editing post with ID ${postId}`);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Blog Posts</h1>
      {currentPosts.map((post) => (
        <div key={post.id} className="mb-4 border rounded p-2">
          <h2 className="text-2xl font-bold">{post.title}</h2>
          <p className="text-gray-700">{post.content.substring(0, 100)}...</p>
          {userRole === "admin" || userRole === "author"  && (
            <div className="mt-2">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
                onClick={() => handleEdit}
              >
                Edit
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-md"
                onClick={() => handleDelete}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
      <Pagination
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};
export default Posts;

interface PaginationProps {
  currentPage: number;
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  postsPerPage,
  totalPosts,
  paginate
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="flex justify-center mt-4">
      <li>
        <button
          className={`px-4 py-2 rounded-md ${
            currentPage === 1
              ? "bg-gray-200 text-gray-700 cursor-not-allowed"
              : "bg-blue-500 text-white"
          }`}
          disabled={currentPage === 1}
          onClick={() => paginate(currentPage - 1)}
        >
          Previous
        </button>
      </li>
      {pageNumbers.map((pageNumber) => (
        <li key={pageNumber} className="px-2">
          {pageNumber === currentPage ? (
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
              {pageNumber}
            </button>
          ) : (
            <button
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
              onClick={() => paginate(pageNumber)}
            >
              {pageNumber}
            </button>
          )}
        </li>
      ))}
      <li>
        <button
          className={`px-4 py-2 rounded-md ${
            currentPage === Math.ceil(totalPosts / postsPerPage)
              ? "bg-gray-200 text-gray-700 cursor-not-allowed"
              : "bg-blue-500 text-white"
          }`}
          disabled={currentPage === Math.ceil(totalPosts / postsPerPage)}
          onClick={() => paginate(currentPage + 1)}
        >
          Next
        </button>
      </li>
    </ul>
  );
};
