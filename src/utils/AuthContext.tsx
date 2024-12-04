import { createContext, createSignal, onMount } from "solid-js";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext<{
  isLoggedIn: boolean | null;
}>({
  isLoggedIn: false,
});

export const AuthProvider = (props: { children: any }) => {
  const [isLoggedIn, setIsLoggedIn] = createSignal<boolean | null>(false);
  
  onMount(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      try {
        const parsedToken = jwtDecode(accessToken) as { exp: number };
        if (parsedToken?.exp > Date.now() / 1000) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          window.location.href = "/login";
        }
      } catch (e) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login";
      }
    } else {
      setIsLoggedIn(false);
      window.location.href = "/login";
    }
  });

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn() }}>
      {isLoggedIn === null ? <>Loading...</> : props.children}
    </AuthContext.Provider>
  );
};
