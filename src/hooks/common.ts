import { createSignal } from "solid-js";
import { HandleLogin } from "../Auth/HandleLogin";
import HandleRegister from "../Auth/HandleRegister";
import { handleVerification } from "../Auth/HandleVerification";

export const [isOpen, setIsOpen] = createSignal(false);
export const [isMenuOpen, setIsMenuOpen] = createSignal(true);

export const [isDark, setIsDark] = createSignal(false);

export const [name, setName] = createSignal("");
export const [email, setEmail] = createSignal<string>("");
export const [password, setPassword] = createSignal<string>("");

export const [error, setError] = createSignal("");
export const [success, setSuccess] = createSignal(false);
export const [isLoading, setIsLoading] = createSignal(false);

export const [otp, setOtp] = createSignal("");

export const handleTheme = () => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    setIsDark(true);
  } else {
    setIsDark(false);
  }
};

export const handleLoginSubmit = async (event: SubmitEvent) => {
  event.preventDefault();
  setIsLoading(true);
  const res = await HandleLogin({
    data: { email: email(), password: password() },
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

export const handleRegisterSubmit = async (event: SubmitEvent) => {
  event.preventDefault();
  setIsLoading(true);
  const res = await HandleRegister({
    data: { name: name(), email: email(), password: password() },
  });

  console.log(res);
  setIsLoading(false);
  setName("");
  setEmail("");
  setPassword("");
  if (res.error) {
    setError(res.error);
    return;
  }
  localStorage.setItem("userEmail", res.userEmail);
  window.location.href = "/verify";

  if (res.status == 201) {
  }
};

export const handleVerificationSubmit = async (event: SubmitEvent) => {
  event.preventDefault();
  setIsLoading(true);
  setEmail(`${localStorage.getItem("userEmail")}`);
  const res = await handleVerification({
    data: { email: email(), OTP: otp() },
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
