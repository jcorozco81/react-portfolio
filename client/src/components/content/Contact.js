import React, { useState } from "react";

import { checkEmail } from "../../utils/helper";
import { sendEmail } from "../../utils/email";
// Mutations
import { useMutation } from "@apollo/client";
import { ADD_MESSAGE } from "../../utils/mutations";

function Contact() {
  const [email, setEmail] = useState("");
  const [fullname, setfullname] = useState("");
  const [message, setmessage] = useState("");
  const [errorName, seterrorName] = useState("");
  const [errorEmail, seterrorEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const invalidEmailMessage = "Enter a valid email address.";
  const emptyFields = "This field is required.";

  const [createMessage, { error }] = useMutation(ADD_MESSAGE);
  const [formData, setformData] = useState({
    fullname: '',
    email: '',
    body: '',
  });

  const handleChange = (event) => {
    const { target } = event;
    const inputID = target.id;
    const formID = target.formid;
    const inputValue = target.value;
    
    setformData({ ...formData, [formID]: inputValue });
    // console.log(target);
    // console.log(inputValue);
    // console.log(formData);

    if (inputID === "input-email") {
      setEmail(inputValue);
      setformData({ ...formData, email: inputValue });
    } else if (inputID === "input-name") {
      setfullname(inputValue);
      setformData({ ...formData, fullname: inputValue });

    } else {
      setmessage(inputValue);
      setformData({ ...formData, body: inputValue });

    }
  };

  const handleBlur = (e) => {
    const { target } = e;
    const inputID = target.id;

    if (inputID === "input-email") {
      seterrorEmail(
        email ? (checkEmail(email) ? "" : invalidEmailMessage) : emptyFields
      );
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

  const submitForm = async (event) => {
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
      alert(`Error: Message not sent. Verify fields.`);
    } else {
      try {
        // console.log({formData});
        const { data } = await createMessage({ variables: { ...formData } });
        sendEmail(formData);
        alert("Message Sent");
        // console.log(data);
      } catch (err) {
        console.error(err);
      }
  
      // `Hello ${fullname}! You Email is ${email} and you message: ${message}`

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
      <p className="title" id="Contact-me">
        Contact Me:
      </p>
      <div className="columns">
        <div className="column is-two-thirds">
          <form>
            <div className="col">
              <div className="row m-3">
                <label className="form-label">
                  Name:{" "}
                  <span className="has-text-danger-dark">{errorName}</span>
                </label>
                <input
                  formid="fullname"
                  className="input is-info"
                  type="text"
                  placeholder="Full Name"
                  id="input-name"
                  value={fullname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                />
              </div>

              <div className="row m-3">
                <label className="form-label">
                  Email:{" "}
                  <span className="has-text-danger-dark">{errorEmail}</span>
                </label>
                <input
                  formid="email"
                  className="input is-info"
                  type="email"
                  placeholder="Email"
                  id="input-email"
                  value={email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                />
              </div>
              <div className="row m-3">
                <label className="form-label">
                  Message:{" "}
                  <span className="has-text-danger-dark">{errorMessage}</span>
                </label>
                <textarea
                  formid="body"
                  className="textarea is-info"
                  placeholder="Enter you message"
                  id="input-message"
                  value={message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                />
              </div>
              <div className="row m-3">
                <div className="buttons">
                  <button
                    className="button is-info"
                    id="submit"
                    onClick={submitForm}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div className="row m-3"></div>
        </div>
      </div>
      {error && <div>Something went wrong...</div>}
    </div>
  );
}

export default Contact;
