"use client";

import { useState } from "react";
import AuthImg from "../../components/authComponents/AuthImg";
import DontHave from "../../components/authComponents/DontHave";
import FormInput from "../../components/authComponents/FormInput";
import FormButton from "../../components/authComponents/FormButton";
// import HandleRegister from "../../../Auth/HandleRegister";

const Register = () => {
  const [formValues, setFormValues] = useState<{
    name: string;
    email: string;
    password: string;
  }>({
    name: "",
    email: "",
    password: "",
  });
  // const [isLoading, setIsLoading] = useState(false);

  // const handleRegisterSubmit = async (event: SubmitEvent) => {
  //   event.preventDefault();
  //   // setIsLoading(true);
  //   const res = await HandleRegister({
  //     data: formValues,
  //   });

  //   console.log(res);
  //   // setIsLoading(false);
  //   setFormValues({
  //     name: "",
  //     email: "",
  //     password: "",
  //   });
  //   if (res.error) {
  //     return;
  //   }
  //   localStorage.setItem("userEmail", res.userEmail);
  //   window.location.href = "/verify";

  //   if (res.status == 201) {
  //   }
  // };
  return (
    <div className="flex h-screen bg-[#e7f0ff] w-full justify-center items-center">
      <>
        <div className="lg:w-1/2 flex flex-col justify-center items-center lg:px-12 w-full px-12">
          <h2 className="text-4xl font-semibold mb-8 text-center">Register</h2>
          <form
            className="w-full max-w-md mx-auto"
            // onSubmit={handleRegisterSubmit}
          >
            {Object.entries(formValues).map(([key, value]) => (
              <FormInput
                key={key}
                type={key === "password" ? "password" : "text"}
                value={value}
                setValue={(val: string) =>
                  setFormValues((prev) => ({ ...prev, [key]: val }))
                }
                id={key}
                placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
              />
            ))}
            <FormButton button="Register" />
            <DontHave
              dontText="Already have an account?"
              text="Login"
              link="/login"
            />
          </form>
        </div>
        <AuthImg imgSrc="/Register.png" />
      </>
    </div>
  );
};

export default Register;
