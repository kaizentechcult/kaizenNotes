"use client";

import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
const AuthContext = createContext<{
  isLoggedIn: boolean | null;
}>({
  isLoggedIn: false,
});

export const AuthProvider = (props: { children: any }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(false);
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const parsedToken = jwtDecode(token) as { exp: number };
        if (parsedToken?.exp > Date.now() / 1000) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
          localStorage.removeItem("token");
          window.location.href = "/login";
        }
      } catch (e) {
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    } else {
      setIsLoggedIn(false);
      window.location.href = "/login";
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn }}>
      {isLoggedIn === null ? <>Loading...</> : props.children}
    </AuthContext.Provider>
  );
};
