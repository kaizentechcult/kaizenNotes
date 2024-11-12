interface Props {
  data: {
    email: string;
    password: string;
  };
}

export const HandleLogin = async (props: Props) => {
  const apiKey = import.meta.env.VITE_BASE_URL;
  try {
    console.log(props);
    const response = await fetch(`${apiKey}/login`, {
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
    return result;
  } catch (error) {
    console.error("Error sending data:", error);
  }
};
