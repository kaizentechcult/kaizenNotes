import { logout } from "../hooks/auth";

const Logout = () => {
  return (
    <div>
      hello
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default Logout;
