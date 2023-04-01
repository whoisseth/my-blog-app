/** @format */

import create from "zustand";
import { persist } from "zustand/middleware";

export interface UserInterface {
  userName: string;
  role: string;
}

interface UserRoleState {
  userRole: UserInterface;
  setUserRole: (userRole: any) => void;
}

export const users: UserInterface[] = [
  {
    userName: "Rajesh Singh",
    role: "admin"
  },
  {
    userName: "Preeti Patel",
    role: "admin"
  },
  {
    userName: "Arjun Gupta",
    role: "author"
  },
  {
    userName: "Kavya Sharma",
    role: "author"
  },
  {
    userName: "Rohit Kumar",
    role: "reader"
  },
  {
    userName: "Nisha Verma",
    role: "reader"
  }
];

export const userRoleStore = create<UserRoleState>()(
  persist(
    (set) => ({
      userRole: { userName: "", role: "" },
      setUserRole: (userRole) => set({ userRole })
    }),
    {
      name: "user-role"
    }
  )
);
