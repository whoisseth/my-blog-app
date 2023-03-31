/** @format */

import create from "zustand";
import { persist } from "zustand/middleware";

export const userRoleStore = create(
  persist(
    (set) => ({
      userRole: "",
      setUserRole: (userRole) => set({ userRole })
    }),
    {
      name: "user-role",
    }
  )
);


