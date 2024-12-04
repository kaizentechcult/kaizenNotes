import { Component } from "solid-js";
import Error from "../../components/Error/Error";
import RegisterImg from "../../assets/Register.png";
import Loader from "../../components/Loader/Loader";
import AuthImg from "../../components/authComponents/AuthImg";
import DontHave from "../../components/authComponents/DontHave";
import FormInput from "../../components/authComponents/FormInput";
import FormButton from "../../components/authComponents/FormButton";
import {
  name,
  email,
  error,
  setName,
  setEmail,
  password,
  isLoading,
  setPassword,
  handleRegisterSubmit,
} from "../../hooks/common";

const Register: Component = () => {
  return (
    <div class="flex min-h-screen bg-[#21204F] w-full justify-center items-center">
      {error() ? <Error error={error()} /> : <></>}

      {isLoading() ? (
        <Loader />
      ) : (
        <>
          <div class="lg:w-1/2 flex flex-col justify-center items-center px-6 md:px-12 w-full">
            <div class="w-full max-w-md bg-[#2d2c5e] p-8 rounded-2xl shadow-2xl">
              <h2 class="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Create Account</h2>
              <form
                class="w-full space-y-6"
                onsubmit={handleRegisterSubmit}
              >
                <div class="space-y-4">
                  <FormInput
                    type="text"
                    signal={name}
                    setSignal={setName}
                    id="name"
                    placeholder="Name"
                  />
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
                <FormButton button="Register" />
                <DontHave
                  dontText="Already have an account?"
                  text="Login"
                  link="/login"
                />
              </form>
            </div>
          </div>
          <AuthImg imgSrc={RegisterImg} />
        </>
      )}
    </div>
  );
};

export default Register;