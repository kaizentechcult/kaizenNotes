import { createContext, createSignal } from "solid-js";
export const AuthContext = createContext({
  isLoggedIn: false,
});

export const AuthProvider = (props: { children: any }) => {
  const [isLoggedIn, setIsLoggedIn] = createSignal(
    !!localStorage.getItem("token")
  );

  if (!isLoggedIn()) {
    window.location.href = "/login";
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn() }}>
      {props.children}
    </AuthContext.Provider>
  );
};
