import { useNavigate } from '@solidjs/router';

export const logout = () => {
  const navigate = useNavigate();
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  navigate("/login");
};

