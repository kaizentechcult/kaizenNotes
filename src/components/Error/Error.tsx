const Error = ({ error }: { error: string }) => {
  return (
    <div className="absolute top-4 w-full flex justify-center items-center">
      <p className="text-red-600 border-red-600 border bg-red-100  p-4 rounded-md">
        {error}
      </p>
    </div>
  );
};
export default Error;
