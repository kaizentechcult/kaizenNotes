import { createSignal } from "solid-js";
// import { handleVerificationSubmit } from "../../hooks/common";

import { email, otp, setEmail, setIsLoading, setOtp } from "../../hooks/common";
import FormInput from "../../components/authComponents/FormInput";
import { handleVerification } from "../../../Auth/HandleVerification";

const Verify = () => {
  const handleSubmit = async (event: SubmitEvent) => {
    // export const handleVerificationSubmit = async (event: SubmitEvent) => {

    event.preventDefault();
    setIsLoading(true);
    setEmail(`${localStorage.getItem("userEmail")}`);
    const res = await handleVerification({
      data: { email: email(), OTP: otp() },
    });
    setIsLoading(false);
    if (res.token) {
      window.location.href = "/";
    }
  };
  return (
    <div class="h-screen flex justify-center items-center">
      <div class="w-1/2">
        <h1 class="text-4xl font-bold mb-4">Verify OTP</h1>
        <form onSubmit={handleSubmit}>
          <div class="mb-4">
            <FormInput
              type="number"
              signal={otp}
              setSignal={setOtp}
              id="OTP"
              placeholder="OTP"
            />
          </div>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default Verify;
