/** @format */

import React, { useState } from "react";
import { PostInterface } from "@/data/post";
import { userRoleStore } from "@/store/userStore";
import Link from "next/link";
import ReactHtmlParser from "react-html-parser";
import { postStore } from "@/store/postsStore";

interface Props {
  posts: PostInterface[];
}

const Posts: React.FC<Props> = ({ posts }) => {
  const { userRole, setUserRole } = userRoleStore();
  const { setPosts } = postStore();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  // Logic for displaying current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Function to change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Function to handle deleting a post
  const handleDelete = (postId: number | string) => {
    // TODO: Implement post deletion logic
    const delPost = posts.filter((post) => post.id !== postId);
    setPosts(delPost);
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
        <section key={post.id}>
          <div className="mb-4 border rounded p-2  ">
            <Link
              href={`/blog/${post.id}`}
              key={post.id}
              className="flex gap-2 items-center"
            >
              <h2 className="text-2xl font-bold">{post.title}</h2>
              <span className="text-sm text-gray-500">
                - by {post.author.userName}{" "}
              </span>
            </Link>
            <p className="text-gray-700 ">
              {ReactHtmlParser(post.content.substring(0, 100) + "...")}
            </p>
            {userRole.role == "admin" ||
            (userRole.userName == post.author.userName &&
              userRole.role == post.author.role) ? (
              <div className="mt-2">
                <Link
                  href={`/edit/${post.id}`}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
                  onClick={() => handleEdit}
                >
                  Edit
                </Link>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-md"
                  onClick={() => handleDelete(post.id)}
                >
                  Delete
                </button>
              </div>
            ) : null}
          </div>
        </section>
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
