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
    <div class="flex h-screen bg-[#e7f0ff] w-full justify-center items-center">
      {error() ? <Error error={error()} /> : <></>}

      {isLoading() ? (
        <Loader />
      ) : (
        <>
          <div class="lg:w-1/2 flex flex-col justify-center items-center lg:px-12 w-full px-12">
            <h2 class="text-4xl font-semibold mb-8 text-center">Register</h2>
            <form
              class="w-full max-w-md mx-auto"
              onsubmit={handleRegisterSubmit}
            >
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
      )}
    </div>
  );
};

export default Register;
