const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};

const Logout = () => {
  return (
    <div>
      hello
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default Logout;
