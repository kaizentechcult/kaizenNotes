// import { useState } from "react";
// import { HandleLogin } from "../../Auth/HandleLogin";
// import { handleVerification } from "../../Auth/HandleVerification";

// const useCommon = () => {
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);
//   const [isDark, setIsDark] = useState<boolean>(false);
//   const [name, setName] = useState<string>("");
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [error, setError] = useState<string>("");
//   const [success, setSuccess] = useState<boolean>(false);
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [otp, setOtp] = useState<string>("");

//   const handleTheme = () => {
//     const theme = localStorage.getItem("theme");
//     if (theme === "dark") {
//       setIsDark(true);
//     } else {
//       setIsDark(false);
//     }
//   };

//   const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setIsLoading(true);
//     try {
//       const res = await HandleLogin({
//         data: { email, password },
//       });
//       setIsLoading(false);
//       setEmail("");
//       setPassword("");
//       if (res.error) {
//         setError(res.error);
//         return;
//       }
//       if (res.token) {
//         localStorage.setItem("token", res.token);
//         window.location.href = "/";
//       }
//     } catch (error) {
//       setIsLoading(false);
//       setError("An error occurred during login.");
//       console.log(error);
//     }
//   };

//   const handleVerificationSubmit = async (
//     event: React.FormEvent<HTMLFormElement>
//   ) => {
//     event.preventDefault();
//     setIsLoading(true);
//     setEmail(`${localStorage.getItem("userEmail")}`);
//     try {
//       const res = await handleVerification({
//         data: { email, OTP: otp },
//       });
//       setIsLoading(false);
//       if (res.error) {
//         setError(res.error);
//         return;
//       }
//       if (res.token) {
//         localStorage.setItem("token", res.token);
//         window.location.href = "/";
//       }
//       console.log(res);
//     } catch (error) {
//       console.log(error);
//       setIsLoading(false);
//       setError("An error occurred during verification.");
//     }
//   };

//   const toggleTheme = () => {
//     if (localStorage.getItem("theme") === "dark") {
//       setIsDark(false);
//       localStorage.setItem("theme", "light");
//     } else {
//       setIsDark(true);
//       localStorage.setItem("theme", "dark");
//     }
//     // window.location.reload();
//   };

//   return {
//     isOpen,
//     setIsOpen,
//     isMenuOpen,
//     setIsMenuOpen,
//     isDark,
//     setIsDark,
//     name,
//     setName,
//     email,
//     setEmail,
//     password,
//     setPassword,
//     error,
//     setError,
//     success,
//     setSuccess,
//     isLoading,
//     setIsLoading,
//     otp,
//     setOtp,
//     handleTheme,
//     handleLoginSubmit,
//     handleVerificationSubmit,
//     toggleTheme,
//   };
// };

// export default useCommon;
