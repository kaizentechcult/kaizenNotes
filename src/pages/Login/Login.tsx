import { Component } from "solid-js";
import LoginImg from "../../assets/Login.svg";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";
import AuthImg from "../../components/authComponents/AuthImg";
import DontHave from "../../components/authComponents/DontHave";
import FormInput from "../../components/authComponents/FormInput";
import ForgetPass from "../../components/authComponents/ForgetPass";
import FormButton from "../../components/authComponents/FormButton";
import {
  handleLoginSubmit,
  email,
  setEmail,
  password,
  setPassword,
  isLoading,
  error,
} from "../../hooks/common";

const Login: Component = () => {
  return (
    <>
      <div class="flex w-full justify-center items-center min-h-screen">
        {error() ? <Error error={error()} /> : <></>}
        {isLoading() ? (
          <Loader />
        ) : (
          <div class="flex min-h-screen bg-[#21204F] w-full">
            <AuthImg imgSrc={LoginImg} />
            <div class="lg:w-1/2 flex flex-col justify-center items-center px-6 md:px-12 w-full">
              <div class="w-full max-w-md bg-[#2d2c5e] p-8 rounded-2xl shadow-2xl">
                <h2 class="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Welcome Back</h2>
                <form
                  class="w-full space-y-6"
                  onSubmit={handleLoginSubmit}
                >
                  <div class="space-y-4">
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
                  </div>
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
          </div>
        )}
      </div>
    </>
  );
};

export default Login;