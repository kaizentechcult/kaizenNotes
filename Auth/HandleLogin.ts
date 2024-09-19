interface Props {
  data: {
    email: string;
    password: string;
  };
}

// const apiKey = import.meta.env.VITE_BASE_URL;

const HandleLogin = async (props: Props) => {
  try {
    // const response = await fetch(apiKey.concat("/login"), {
      const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props.data),
    });
    const result = await response.json();
    if (result.token == null) {
      // console.error("Error sending data:", result);
      return result;
    }
    // console.log("Data sent successfully:", result.error);
    localStorage.setItem("token", result.token);
    return result;
    // window.location.href = "/";
  } catch (error) {
    console.error("Error sending data:", error);
  }
};

export default HandleLogin;
