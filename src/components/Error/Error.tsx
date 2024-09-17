interface ErrorProps {
  error: string;
}

const Error = (props: ErrorProps) => {
  return <p class="text-red-600 border-red-600 border bg-red-100 absolute top-4 p-4 rounded-md">{props.error}</p>;
};
export default Error;
