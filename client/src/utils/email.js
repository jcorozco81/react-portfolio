import axios from "axios";
export const sendEmail = async (data, token) => {

  let emailID;

data.token = token;
console.log(token);
console.log(data);
try {
const response = await axios ({
    method: "POST",
    url: `/contact`,
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }});

    console.log("Completed with result:", response.data.messageId);
emailID = response.data.messageId;
}catch (err) {
  console.log(err)
}
  return ("RESPONSE OK: ", emailID);
};


