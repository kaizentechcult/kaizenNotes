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
    const response = await fetch(apiKey.concat("/verify"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props.data),
    });
    const result = await response.json();
    if (result.token == null) {
      return result;
    }
    localStorage.setItem("token", result.token);
    localStorage.removeItem("userEmail");
    return result;
  } catch (error) {
    console.log(apiKey.concat("/login"));
    // console.error("Error sending data:", error);
  }
};
