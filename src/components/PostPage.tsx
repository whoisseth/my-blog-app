/** @format */

import { PostInterface } from "@/data/post";
import { postStore } from "@/store/postsStore";
import { UserInterface, userRoleStore } from "@/store/userStore";
import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { commentInterface } from "./../data/post";

interface PostPageProps {
  post: PostInterface;
  // postId:
  title: string;
  author: string;
  content: string;
  comments?: commentInterface[];
}

const PostPage: React.FC<PostPageProps> = ({
  title,
  content,
  comments,
  author,
  post
}) => {
  const { setPosts, posts } = postStore();
  const { userRole } = userRoleStore();

  // const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const editedPost = posts.map((p) => {
      if (p.id == post.id) {
        console.log(" true condition");
        return {
          id: post.id,
          title: title,
          content: content,
          previewImage: post.previewImage,
          image: post.image,
          author: post.author,
          comments: [
            ...(post.comments ?? []),
            {
              user: userRole,
              // user: { role: userRole.role, userName: userRole.userName },
              comment: newComment
            }
          ]
        };
      } else {
        console.log("false condition");
        return p;
      }
    });
    setPosts(editedPost);
    setNewComment("");

    // Code to handle comment submission goes here
  };
  const handleDelete = (
    c: commentInterface,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    console.log("post.author", post.author);

    const editedPost = {
      ...post,
      comments: post.comments.filter((postC) => postC !== c)
    };
    setPosts([editedPost]);
    setNewComment("");

    // Code to handle comment submission goes here
  };

  // console.log("posts", posts);
  console.log("post", post);

  return (
    <div className="container mx-auto py-8 max-w-3xl">
      {/* postId- {post?.id} */}
      <section className="flex gap-2 items-center">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-gray-500"> - {author}</p>
      </section>
      <p className="mb-4">{ReactHtmlParser(content)}</p>
      <hr className="my-8" />
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      {comments?.map((c, index) => (
        <div key={index} className="mb-4">
          <div className="flex justify-between pr-10">
            <p className="mb-2">💬 {c.comment}</p>
            <button onClick={(e) => handleDelete(c, e)}>💣</button>
          </div>
          <p className="text-sm text-gray-500 pl-8">
            Posted by {c.user?.userName}
          </p>
        </div>
      ))}
      <form onSubmit={handleSubmit} className="mb-8">
        <label htmlFor="newComment" className="block font-bold mb-2">
          Leave a comment:
        </label>
        <textarea
          disabled={userRole.role == ""}
          id="newComment"
          name="newComment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
          rows={4}
        />
        <button
          disabled={userRole.role == ""}
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostPage;
