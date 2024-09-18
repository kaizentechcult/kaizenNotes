interface ErrorProps {
  error: string;
}

const Error = (props: ErrorProps) => {
  return (
    <div class="absolute top-4 w-full flex justify-center items-center">
      <p class="text-red-600 border-red-600 border bg-red-100  p-4 rounded-md">
        {props.error}
      </p>
    </div>
  );
};
export default Error;
