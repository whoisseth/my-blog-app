/** @format */

import { posts, PostInterface } from "@/data/post";
import create from "zustand";
import { persist } from "zustand/middleware";


interface PostInterfaceStore {
  posts: PostInterface[];
  setPosts: (posts: any) => void;
}

export const postStore = create<PostInterfaceStore>()(
  persist(
    (set) => ({
      posts: posts,
      setPosts: (posts) => set({ posts })
    }),
    {
      name: "user-role"
    }
  )
);
