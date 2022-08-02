import axios from "axios";
export const sendEmail = async (token) => {
  // console.log(token);

  try {
    const response = await axios.post(`/Contact`, {
      token,
      headers: { "Content-Type": "application/json" },
    });

    // console.log(response);
  } catch (err) {
    console.log(err);
  }
  return true;
};
