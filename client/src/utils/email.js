// Post to server

// const reqTest = {
//     fullname: "Cyndi",
//     email: "cyndisoto@gmail.com",
//     body: "This is a test message",
//   };

export const sendEmail = async (emailData) => {
console.log(emailData);

  const response = await fetch(`/contact/`, {
    method: "POST",
    body: JSON.stringify(emailData),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    console.log("Sent to route");
  } else {
    alert("Test" + response.statusText);
  }
};


