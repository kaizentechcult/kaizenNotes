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
    <div class="min-h-screen bg-gradient-to-br from-primary to-secondary">
      <div class="flex w-full justify-center items-center min-h-screen px-4">
        {error() ? <Error error={error()} /> : null}
        {isLoading() ? (
          <Loader />
        ) : (
          <div class="flex w-full max-w-6xl mx-auto bg-secondary/50 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm">
            <div class="w-full lg:w-1/2 p-8 md:p-12">
              <div class="max-w-md mx-auto">
                <div class="text-center mb-8">
                  <h2 class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                    Create Account
                  </h2>
                  <p class="mt-2 text-gray-400">
                    Sign up to get started with KaizenNotes
                  </p>
                </div>

                <form class="space-y-6" onSubmit={handleRegisterSubmit}>
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

                  <div class="pt-2">
                    <FormButton button="Create Account" />
                  </div>

                  <DontHave
                    dontText="Already have an account?"
                    text="Sign In"
                    link="/login"
                  />
                </form>
              </div>
            </div>
            <AuthImg imgSrc={RegisterImg} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;