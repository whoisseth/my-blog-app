/** @format */

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { userRoleStore } from "@/store/userStore";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const { userRole } = userRoleStore();
  const router = useRouter();
  useEffect(() => {
    if (!userRole) {
      // Redirect to user roles page if role is not set
      router.push("/user-roles");
    }
  }, []);

  return <Component {...pageProps} />;
}
