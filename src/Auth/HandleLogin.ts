interface Props {
  data: {
    email: string;
    password: string;
  };
}

interface LoginResponse {
  status: string;
  data?: {
    accessToken: string;
    refreshToken: string;
  };
  message?: string;
}

export const HandleLogin = async (props: Props) => {
  const apiKey = import.meta.env.VITE_BASE_URL;
  try {
    console.log('Login attempt:', props);
    const response = await fetch(`${apiKey}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props.data),
    });

    const result: LoginResponse = await response.json();
    console.log('Login response:', result);

    if (!response.ok) {
      return {
        success: false,
        message: result.message || 'Login failed'
      };
    }

    if (result.data?.accessToken && result.data?.refreshToken) {
      localStorage.setItem("accessToken", result.data.accessToken);
      localStorage.setItem("refreshToken", result.data.refreshToken);
      return {
        success: true,
        message: 'Login successful'
      };
    }

    return {
      success: false,
      message: 'Invalid response from server'
    };
  } catch (error) {
    console.error("Error during login:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Login failed'
    };
  }
};
