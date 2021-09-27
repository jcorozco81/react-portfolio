import React, { useState } from "react";

import { checkEmail } from "../../utils/helper";

function Contact() {
  const [email, setEmail] = useState("");
  const [fullname, setfullname] = useState("");
  const [message, setmessage] = useState("");
  const [errorName, seterrorName] = useState("");
  const [errorEmail, seterrorEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const invalidEmailMessage = "Enter a valid email address.";
  const emptyFields = "This field is required.";

  const handleChange = (event) => {
    const { target } = event;
    const inputID = target.id;
    const inputValue = target.value;

    if (inputID === "input-email") {
      setEmail(inputValue);

    } else if (inputID === "input-name") {
      setfullname(inputValue);
    } else {
      setmessage(inputValue);
    }
  };

  const handleBlur = (e) => {
    const { target } = e;
    const inputID = target.id;

    if (inputID === "input-email") {
    seterrorEmail(email ? (checkEmail(email) ? "" : invalidEmailMessage) : emptyFields);
    
    } else if (inputID === "input-name") {
    seterrorName(fullname ? "" : emptyFields);
  } else {
    setErrorMessage(message ? "" : emptyFields);
  }
  };

  const handleFocus = (e) => {
    const { target } = e;
    const inputID = target.id;

    if (inputID === "input-email") {
    seterrorEmail("");
    
    } else if (inputID === "input-name") {
    seterrorName("");
  } else {
    setErrorMessage("");
  }
  };

  const submitForm = (event) => {
    event.preventDefault();

    if (!fullname || !checkEmail(email) || !message) {
      // if (!fullname) {
      //   seterrorName(emptyFields);
      // } else {
      //   seterrorName("");
      // }
      // if (!checkEmail(email)) {
      //   seterrorEmail(invalidEmailMessage);
      // } else {
      //   seterrorEmail("");
      // }
      // if (!message) {
      //   setErrorMessage(emptyFields);
      // } else {
      //   setErrorMessage("");
      // }
      alert(
        `Error: Message not sent. Verify fields.`
      );
    } else {
      alert(
        `Hello ${fullname}! Your message have been sent.`

        // `Hello ${fullname}! You Email is ${email} and you message: ${message}`
      );
      setfullname("");
      setEmail("");
      setmessage("");
      seterrorName("");
      seterrorEmail("");
      setErrorMessage("");
    }
  };

  return (
    <div className="container">
      <p class="title" id="Contact-me">
        Contact Me:
      </p>
      <div class="columns">
        <div class="column is-two-thirds">
          <form>
            <div class="col">
              <div class="row m-3">
                <label for="input-name" class="form-label">
                  Name: <span class="has-text-danger-dark">{errorName}</span>
                </label>
                <input
                  class="input is-info"
                  type="text"
                  placeholder="Full Name"
                  id="input-name"
                  value={fullname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                />
              </div>

              <div class="row m-3">
                <label for="input-email" class="form-label">
                  Email: <span class="has-text-danger-dark">{errorEmail}</span>
                </label>
                <input
                  class="input is-info"
                  type="email"
                  placeholder="Email"
                  id="input-email"
                  value={email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                />
              </div>
              <div class="row m-3">
                <label for="input-message" class="form-label">
                  Message:{" "}
                  <span class="has-text-danger-dark">{errorMessage}</span>
                </label>
                <textarea
                  class="textarea is-info"
                  placeholder="Enter you message"
                  id="input-message"
                  value={message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                />
              </div>
              <div class="row m-3">
                <div class="buttons">
                  <button
                    class="button is-info"
                    id="submit"
                    onClick={submitForm}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div class="row m-3"></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
