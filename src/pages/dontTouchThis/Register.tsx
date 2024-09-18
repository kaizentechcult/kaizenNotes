// import { createSignal } from "solid-js";
// import { Component } from "solid-js";
// import Loader from "../components/Loader/Loader";
// import Error from "../components/Error/Error";

// export const Register: Component = () => {
//   const [name, setName] = createSignal("");
//   const [userEmail, setUserEmail] = createSignal("");
//   const [userPassword, setUserPassword] = createSignal("");
//   const [isLoading, setIsLoading] = createSignal(false);
//   const [error, setError] = createSignal("");

//   const apiKey = import.meta.env.VITE_BASE_URL;

//   const handleSubmit = async (e: SubmitEvent) => {
//     e.preventDefault();

//     const data = {
//       name: name(),
//       email: userEmail(),
//       password: userPassword(),
//     };

//     setIsLoading(true);

//     // const response = await fetch(apiKey.concat("/register"), {
//     const response = await fetch("http://localhost:8080/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//     console.log(response.body);
//     const result = await response.json();
//     if (response.status == 409 || result.error) {
//       console.log("User already exists");
//       return;
//     }
//     console.log("Data sent successfully:", result.error);
// };
// setIsLoading(false);
// setIsLoading(false);
// setError("User already exists");

//   return (
//     <div class="flex h-screen items-center justify-center">
//       {error() ? <Error error={error()} /> : <></>}
//       {isLoading() ? (
//         <Loader />
//       ) : (
//         <form
//           onSubmit={handleSubmit}
//           class="flex flex-col bg-[#d1d1d1] p-4 rounded-md"
//         >
//           <label>
//             name:
//             <input
//               type="text"
//               value={name()}
//               onChange={(e) => setName(e.currentTarget.value)}
//               class="p-2 m-2 w-full"
//             />
//           </label>
//           <label>
//             Email:
//             <input
//               type="email"
//               value={userEmail()}
//               onChange={(e) => setUserEmail(e.currentTarget.value)}
//               class="p-2 m-2 w-full"
//             />
//           </label>
//           <label>
//             Password:
//             <input
//               type="password"
//               value={userPassword()}
//               onChange={(e) => setUserPassword(e.currentTarget.value)}
//               class="p-2 m-2 w-full"
//             />
//           </label>
//           <button type="submit" class="bg-blue-500 p-2 m-2 w-full">
//             Register
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default Register;
