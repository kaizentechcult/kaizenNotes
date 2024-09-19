'use client'

// import { Component, createSignal } from "solid-js";
// import HandleRegister from "../../Auth/Register/HandleRegister";
// import AuthImg from "../../components/AuthImg/AuthImg";
// import FormInput from "../../components/FormElement/FormInput";
// import DontHave from "../../components/FormElement/DontHave";
// import FormButton from "../../components/FormElement/FormButton";
// import Loader from "../../components/Loader/Loader";
// import Error from "../../components/Error/Error";

import RegisterImg from "@/public/Register.png";
import HandleRegister from "@/Auth/HandleRegister";
import AuthImg from "@/components/authComponents/authImg";
import FormInput from "@/components/authComponents/FormInput";
import DontHave from "@/components/authComponents/DontHave";
import FormButton from "@/components/authComponents/FormButton";
import ForgetPass from "@/components/authComponents/ForgetPass";
import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    const res = await HandleRegister({
      data: { name: name, email: userEmail, password: userPassword },
    });
    setIsLoading(false);
    setName("");
    setUserEmail("");
    setUserPassword("");
    if (res.error) {
      setError(res.error);
      return;
    }
    // if (res.token) {
    localStorage.setItem("token", res.token);
    window.location.href = "/";

    return;
  };

  return (
    <div className="flex h-screen bg-[#e7f0ff] w-full justify-center items-center">
      <>
        <div className="lg:w-1/2 flex flex-col justify-center items-center lg:px-12 w-full px-12">
          <h2 className="text-4xl font-semibold mb-8 text-center">Register</h2>
          <form className="w-full max-w-md mx-auto" onSubmit={handleSubmit}>
            <FormInput
              type="text"
              signal={name}
              setSignal={setName}
              id="name"
              placeholder="Name"
            />
            <FormInput
              type="email"
              signal={userEmail}
              setSignal={setUserEmail}
              id="email"
              placeholder="Email"
            />
            <FormInput
              type="password"
              signal={userPassword}
              setSignal={setUserPassword}
              id="password"
              placeholder="Password"
            />
            <FormButton button="Register" />
            <DontHave
              dontText="Already have an account?"
              text="Login"
              link="/login"
            />
          </form>
        </div>
        <AuthImg imgSrc={RegisterImg} />
      </>
    </div>
  );
};

export default Register;

{
  /* )} */
}

// {error ? <Error error={error} /> : <></>}

// {isLoading ? (
//   <Loader />
// ) : (
