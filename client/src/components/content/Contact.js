import React, { useState, useEffect } from "react";

import { checkEmail } from "../../utils/helper";
import { sendEmail } from "../../utils/email";

// Mutations
import { useMutation } from "@apollo/client";
import { ADD_MESSAGE } from "../../utils/mutations";

// Recaptcha

function Contact() {
  // Recaptcha

  useEffect(() => {
    const loadScriptByURL = (id, url, callback) => {
      const isScriptExist = document.getElementById(id);

      if (!isScriptExist) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.id = id;
        script.onload = function () {
          if (callback) callback();
        };
        document.body.appendChild(script);
      }

      if (isScriptExist && callback) callback();
    };

    // load the script by passing the URL
    loadScriptByURL(
      "recaptcha-key",
      `https://www.google.com/recaptcha/api.js?render=${process.env.REACT_APP_SITE_KEY}`,
      function () {
        console.log("Script loaded!");
      }
    );
  }, []);

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
    fullname: "",
    email: "",
    body: "",
  });

  const handleChange = (event) => {
    const { target } = event;
    const inputID = target.id;
    const formID = target.formid;
    const inputValue = target.value;

    setformData({ ...formData, [formID]: inputValue });

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

  const handleOnClick = (e) => {
    e.preventDefault();

    if (!fullname || !checkEmail(email) || !message) {
      alert(`Error: Message not sent. Verify fields.`);
    } else {
      // setLoading(true);
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(process.env.REACT_APP_SITE_KEY, { action: "submit" })
          .then((token) => {
            // console.log(token);
            // submitToken(token);
            submitForm(token);

          });
      });
    }
      const submitForm = async (token) => {
        try {
          const { data } = await createMessage({ variables: { ...formData } });
          console.log(data);
          const res = await sendEmail(formData, token);
          console.log(res);
          alert("Message Sent");
        } catch (err) {
          console.error(err);
        }

        setfullname("");
        setEmail("");
        setmessage("");
        seterrorName("");
        seterrorEmail("");
        setErrorMessage("");
      };
 
  };

  return (
    <div className="container">
      <p className="title section-title" id="Contact-me">
        Contact Me:
      </p>
      <div className="columns">
        <div className="column is-two-thirds">
          <form id="demo-form">
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
                    className="button is-info g-recaptcha"
                    id="submit"
                    data-sitekey="6Lc0rvogAAAAAATUmWHtwcmVSZWFngzsXsOolIu4"
                    data-callback="onSubmit"
                    data-action="submit"
                    // onClick={submitForm}
                    onClick={handleOnClick}
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
