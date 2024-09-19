interface Props {
  data: {
    name: string;
    email: string;
    password: string;
  };
}

// const apiKey = import.meta.env.VITE_BASE_URL;

const HandleRegister = async (props: Props) => {
  try {
    // const response = await fetch(apiKey.concat("/register"), {
      const response = await fetch("http://localhost:8080/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props.data),
    });
    const result = await response.json();
    if (response.status == 409 || result.error) {
      return result;
    }
    return result;
  } catch (error) {
    return error;
  }
};

export default HandleRegister;
