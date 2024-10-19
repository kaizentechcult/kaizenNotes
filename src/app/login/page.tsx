"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";
import { HandleLogin } from "../../../Auth/HandleLogin";
import AuthImg from "../../components/authComponents/AuthImg";
import DontHave from "../../components/authComponents/DontHave";
import FormInput from "../../components/authComponents/FormInput";
import ForgetPass from "../../components/authComponents/ForgetPass";
import FormButton from "../../components/authComponents/FormButton";

interface FormValues {
  email: string;
  password: string;
}

const initialState: FormValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [formValuesState, setFormValuesState] =
    useState<FormValues>(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const Router = useRouter();
  const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const res = await HandleLogin({
        data: formValuesState,
      });

      if (res.error) {
        setError(res.error);
      } else {
        localStorage.setItem("token", res.token);
        Router.push("/");
      }
    } finally {
      setIsLoading(false);
      setFormValuesState(initialState);
    }
  };

  return (
    <>
      <div className="flex w-full justify-center items-center h-screen">
        {error ? <Error error={error} /> : <></>}
        {isLoading ? (
          <Loader />
        ) : (
          <div className="flex h-screen bg-[#e7f0ff] w-full">
            <AuthImg imgSrc={"/Login.svg"} />
            <div className="lg:w-1/2 flex flex-col justify-center items-center px-12 w-full">
              <h2 className="text-4xl font-semibold mb-8 text-center">Login</h2>
              <form
                className="w-full max-w-md mx-auto"
                onSubmit={handleLoginSubmit}
              >
                {Object.entries(formValuesState).map(([key, value]) => (
                  <FormInput
                    key={key}
                    type={key === "password" ? "password" : "text"}
                    value={value}
                    setValue={(e: string) =>
                      setFormValuesState((prev) => ({
                        ...prev,
                        [key]: e,
                      }))
                    }
                    id={key}
                    placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                  />
                ))}
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
    </>
  );
};

export default Login;
