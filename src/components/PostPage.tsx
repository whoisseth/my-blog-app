/** @format */

import { useState } from "react";
import axios from "axios";

type Post = {
  _id: string;
  title: string;
  content: string;
  image: string;
  comments: Comment[];
};

type Comment = {
  _id: string;
  content: string;
  createdAt: string;
};

type Props = {
  post: Post;
};

const PostPage = ({ post }: Props) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/api/posts/${post._id}/comments`, {
        content: newComment
      });
      setComments([...comments, res.data]);
      setNewComment("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto my-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
      <img src={post.image} alt={post.title} className="my-8" />
      <div
        dangerouslySetInnerHTML={{ __html: post.content }}
        className="prose max-w-none"
      />
      <hr className="my-8" />
      <h2 className="text-xl font-bold text-gray-900">Comments</h2>
      {comments.map((comment) => (
        <div key={comment._id} className="my-4">
          <p className="text-gray-500 text-sm">
            {new Date(comment.createdAt).toLocaleString()}
          </p>
          <p className="whitespace-pre-wrap">{comment.content}</p>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment" className="block text-gray-700 font-bold my-4">
          Leave a comment
        </label>
        <textarea
          id="comment"
          className="w-full h-24 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostPage;
