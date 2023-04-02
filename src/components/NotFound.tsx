/** @format */

import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">
        {` Oops! The page you're looking for does not exist.`}
      </p>
      <Link
        href="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
