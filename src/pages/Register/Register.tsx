import { Component, createSignal } from "solid-js";
import RegisterImg from "../../assets/Register.png";
import HandleRegister from "../../Auth/HandleRegister";
import AuthImg from "../../components/authComponents/AuthImg";
import FormInput from "../../components/authComponents/FormInput";
import DontHave from "../../components/authComponents/DontHave";
import FormButton from "../../components/authComponents/FormButton";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

const Register: Component = () => {
  const [name, setName] = createSignal("");
  const [userEmail, setUserEmail] = createSignal("");
  const [userPassword, setUserPassword] = createSignal("");

  const [isLoading, setIsLoading] = createSignal(false);
  const [error, setError] = createSignal("");

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();
    setIsLoading(true);
    const res = await HandleRegister({
      data: { name: name(), email: userEmail(), password: userPassword() },
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
  };

  return (
    <div class="flex h-screen bg-[#e7f0ff] w-full justify-center items-center">
      {error() ? <Error error={error()} /> : <></>}

      {isLoading() ? (
        <Loader />
      ) : (
        <>
          <div class="lg:w-1/2 flex flex-col justify-center items-center lg:px-12 w-full px-12">
            <h2 class="text-4xl font-semibold mb-8 text-center">Register</h2>
            <form class="w-full max-w-md mx-auto" onsubmit={handleSubmit}>
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
      )}
    </div>
  );
};

export default Register;
