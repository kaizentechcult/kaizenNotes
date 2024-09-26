interface Props {
  imgSrc: any;
}

const AuthImg = (props: Props) => {
  return (
    <div class="w-0 lg:w-1/2 items-center justify-center hidden lg:flex">
      <img src={props.imgSrc} alt="Login-img" class="w-[400px]" />
    </div>
  );
};

export default AuthImg;
