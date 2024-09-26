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
  setError,
  success,
  setSuccess,
  setIsLoading,
} from "../../hooks/common";

const Login: Component = () => {
  return (
    <div class="flex w-full justify-center items-center h-screen">
      {error() ? <Error error={error()} /> : <></>}
      {isLoading() ? (
        <Loader />
      ) : (
        <div class="flex h-screen bg-[#e7f0ff] w-full">
          <AuthImg imgSrc={LoginImg} />
          <div class="lg:w-1/2 flex flex-col justify-center items-center px-12 w-full">
            <h2 class="text-4xl font-semibold mb-8 text-center">Login</h2>
            <form class="w-full max-w-md mx-auto" onSubmit={handleLoginSubmit}>
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
      )}
    </div>
  );
};

export default Login;
