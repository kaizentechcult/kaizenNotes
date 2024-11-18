import { useNavigate } from '@solidjs/router';

export const logout = () => {
  const navigate = useNavigate();
  localStorage.removeItem("token");
  navigate("/login");
};

