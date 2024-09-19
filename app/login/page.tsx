'use client'

// import { Component, createSignal, For } from "solid-js";
import LoginImg from "../../public/Login.svg";
import HandleLogin from "../../Auth/HandleLogin";
// import FormInput from "../../components/FormElement/FormInput";
// import ForgetPass from "../../components/FormElement/ForgetPass";
// import FormButton from "../../components/FormElement/FormButton";
// import DontHave from "../../components/FormElement/DontHave";
// import Error from "../../components/Error/Error";
// import Loader from "../../components/Loader/Loader";


import { useState } from "react";
import AuthImg from "@/components/authComponents/authImg";
import DontHave from "@/components/authComponents/DontHave";
import FormButton from "@/components/authComponents/FormButton";
import FormInput from "@/components/authComponents/FormInput";
import ForgetPass from "@/components/authComponents/ForgetPass";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    const res = await HandleLogin({
      data: { email: email, password: password },
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
    return;
  };

  return (
    <div className="flex w-full justify-center items-center h-screen">
      <div className="flex h-screen bg-[#e7f0ff] w-full">
        <AuthImg imgSrc={LoginImg} />
        <div className="lg:w-1/2 flex flex-col justify-center items-center px-12 w-full">
          <h2 className="text-4xl font-semibold mb-8 text-center">Login</h2>
          <form className="w-full max-w-md mx-auto" onSubmit={handleSubmit}>
            <FormInput
              type="email"
              signal={email}
              setSignal={setEmail}
              id="email"
              placeholder="Email"
            />
            <FormInput
              type="password"
              signal={password}
              setSignal={setPassword}
              id="password"
              placeholder="Password"
            />
            <ForgetPass />
            <FormButton button="Login" />
            <DontHave
              dontText="Don't have an account?"
              text="Register"
              link="/register"
            />
          </form>
        </div>
      </div>
      {/* </> */}
    </div>
  );
};

export default Login;

// )}\
// {error() ? <Error error={error()} /> : <></>}
// {/* <> */}
// {isLoading() ? (
//   <Loader />
// ) : (
