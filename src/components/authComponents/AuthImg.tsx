import Image from "next/image";

interface Props {
  imgSrc: string;
}

const AuthImg = (props: Props) => {
  return (
    <div className="w-0 lg:w-1/2 items-center justify-center hidden lg:flex">
      <Image src={props.imgSrc} alt="Login-img" width={400} height={400} />
    </div>
  );
};

export default AuthImg;
