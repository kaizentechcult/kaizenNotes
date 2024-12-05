interface Props {
  data: {
    email: string;
    OTP: string;
  };
}

export const handleVerification = async (props: Props) => {
  const apiKey = import.meta.env.VITE_BASE_URL;
  try {
    console.log(props);
    const response = await fetch(`${apiKey}/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props.data),
    });
    const result = await response.json();
    console.log(result);

    if (
      result.status !== "success" ||
      !result.data?.accessToken ||
      !result.data?.refreshToken
    ) {
      return {
        success: false,
        message: "Verification failed",
      };
    }

    localStorage.setItem("accessToken", result.data.accessToken);
    localStorage.setItem("refreshToken", result.data.refreshToken);
    localStorage.removeItem("userEmail");

    return {
      success: true,
      message: "Verification successful",
    };
  } catch (error) {
    console.error("Error during verification:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Verification failed",
    };
  }
};
