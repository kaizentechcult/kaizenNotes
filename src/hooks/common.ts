import { useState } from "react";
import { HandleLogin } from "../../Auth/HandleLogin";
// import HandleRegister from "../../Auth/HandleRegister";
import { handleVerification } from "../../Auth/HandleVerification";

export const [isOpen, setIsOpen] = useState(false);
export const [isMenuOpen, setIsMenuOpen] = useState(true);

export const [isDark, setIsDark] = useState(false);

export const [name, setName] = useState("");
export const [email, setEmail] = useState<string>("");
export const [password, setPassword] = useState<string>("");

export const [error, setError] = useState("");
export const [success, setSuccess] = useState(false);
export const [isLoading, setIsLoading] = useState(false);

export const [otp, setOtp] = useState("");

export const handleTheme = () => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    setIsDark(true);
  } else {
    setIsDark(false);
  }
};

export const handleLoginSubmit = async (
  event: React.FormEvent<HTMLFormElement>
) => {
  event.preventDefault();
  setIsLoading(true);
  const res = await HandleLogin({
    data: { email, password },
  });
  setIsLoading(false);
  setEmail("");
  setPassword("");
  if (res.error) {
    setError(res.error);
    return;
  }
  if (res.token) {
    localStorage.setItem("token", res.token);
    window.location.href = "/";
  }
};

export const handleVerificationSubmit = async (
  event: React.FormEvent<HTMLFormElement>
) => {
  event.preventDefault();
  setIsLoading(true);
  setEmail(`${localStorage.getItem("userEmail")}`);
  const res = await handleVerification({
    data: { email, OTP: otp },
  });
  setIsLoading(false);
  if (res.error) {
    setError(res.error);
    return;
  }
  if (res.token) {
    localStorage.setItem("token", res.token);
    window.location.href = "/";
  }
  console.log(res);
};

export const toggleTheme = () => {
  if (localStorage.getItem("theme") === "dark") {
    setIsDark(false);
    localStorage.setItem("theme", "light");
  } else {
    setIsDark(true);
    localStorage.setItem("theme", "dark");
  }
  // window.location.reload();
};
