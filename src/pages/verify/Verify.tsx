// import { useState } from "react";
// import { useEffect } from "react";
// // import { email, setEmail } from "../../hooks/common";
// import useCommon from "@/hooks/common";
// import FormInput from "../../components/authComponents/FormInput";
// import { handleVerification } from "../../../Auth/HandleVerification";

// const Verify = () => {
//   const { email, setEmail } = useCommon();
//   const [otp, setOtp] = useState("");

//   useEffect(() => {
//     setEmail(`${localStorage.getItem("userEmail")}`);
//   });

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const res = await handleVerification({
//       data: { email, OTP: otp },
//     });
//     if (res.token) {
//       window.location.href = "/";
//     }
//   };

//   return (
//     <div className="h-screen flex justify-center items-center">
//       <div className="w-1/2">
//         <h1 className="text-4xl font-bold mb-4">Verify OTP</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <FormInput
//               type="number"
//               value={otp}
//               setValue={setOtp}
//               id="OTP"
//               placeholder="OTP"
//             />
//           </div>
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             Verify
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Verify;
