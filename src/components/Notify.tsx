// import { createSignal } from "solid-js";

// const Notify = (props: { message?: string }) => {
//   const [show, setShow] = createSignal(false);

//   const showNotification = (message: string) => {
//     setShow(true);
//     setTimeout(() => setShow(false), 3000);
//   };

//   return (
//     <div
//       class={
//         show()
        //   ? "absolute bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded top-0 mt-5"
//           : "hidden"
//       }
//       role="alert"
//     >
//       {props.message && <p>{props.message}</p>}
//     </div>
//   );
// };

// // export const showNotification = Notify.showNotification;


// export default Notify;