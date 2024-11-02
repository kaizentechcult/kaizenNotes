"use client";

import { createContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

/**
 * AuthContext is a context that holds the state of whether the user is authenticated or not.
 * The value of the context is an object with a single property: isAuthenticated.
 * isAuthenticated is a boolean that indicates whether the user is authenticated or not.
 */
const AuthContext = createContext<{
  isAuthenticated: boolean;
}>({
  isAuthenticated: false,
});

/**
 * AuthProvider is a component that wraps the children components and provides the AuthContext to them.
 * It uses the useSession hook from next-auth to get the session data and set the isAuthenticated state accordingly.
 * It also uses the useRouter hook to redirect the user to the login page if they are not authenticated.
 * The children components can then use the useContext hook to get the isAuthenticated state and use it in their logic.
 */
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

/**
 * To use the isAuthenticated state in a child component, you can use the useContext hook like this:
 * const { isAuthenticated } = useContext(AuthContext);
 */


