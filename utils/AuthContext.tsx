"use client";

import { createContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const AuthContext = createContext<{
  isAuthenticated: boolean;
}>({
  isAuthenticated: false,
});

export const AuthProvider = (props: { children: any }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!status || status === "unauthenticated") {
      setIsAuthenticated(false);
      router.push("/login");
    } else {
      setIsAuthenticated(true);
      router.push("/home");
    }
  }, [session, router]);

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {props.children}
    </AuthContext.Provider>
  );
};

