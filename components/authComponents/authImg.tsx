import Image from "next/image";

interface Props {
  imgSrc: any;
}

const AuthImg = ({ imgSrc }: Props) => {
  return (
    <div className="w-0 lg:w-1/2 items-center justify-center hidden lg:flex">
      <Image src={imgSrc} alt="Login-img" width={400} />
    </div>
  );
};

export default AuthImg;
