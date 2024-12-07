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
    <div class="min-h-screen bg-gradient-to-br from-primary to-secondary">
      <div class="flex w-full justify-center items-center min-h-screen px-4">
        {error() ? <Error error={error()} /> : null}
        {isLoading() ? (
          <Loader />
        ) : (
          <div class="flex w-full max-w-6xl mx-auto bg-secondary/50 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm">
            <AuthImg imgSrc={LoginImg} />
            
            <div class="w-full lg:w-1/2 p-8 md:p-12">
              <div class="max-w-md mx-auto">
                <div class="text-center mb-8">
                  <h2 class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                    Welcome Back
                  </h2>
                  <p class="mt-2 text-gray-400">
                    Sign in to continue to your account
                  </p>
                </div>

                <form class="space-y-6" onSubmit={handleLoginSubmit}>
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
                  
                  <div class="pt-2">
                    <FormButton button="Sign In" />
                  </div>

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
    </div>
  );
};

export default Login;