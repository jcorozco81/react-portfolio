import React from "react";

import { checkEmail } from '../../utils/helper';


function Contact() {
  const message = "Contact";
  const invalidEmailMessage = "Enter a valid email address";
  const validEmailMessage = "Fill all fields";


  return (
    <div className="container">
      <h2>{message}</h2>
      <form>
      <div class="col">
        <div class="row m-3">
          <label for="inputName" class="form-label">
            Name:
          </label>
          <input
            type="text"
            class="form-control"
            aria-label="Name"
          ></input>
        </div>

        <div class="row m-3">
          <label for="inputEmail" class="form-label">
            Email:
          </label>
          <input
            type="email"
            class="form-control"
            id="inputEmail"
          ></input>
        </div>
        <div class="row m-3">
          <label for="w3review" class="form-label">Message:</label>
          <textarea id="message-area" class="form-control" name="message-area" rows="4" cols="50">
          </textarea>
        </div>
      </div>
      </form>
      <h2></h2>
    </div>
  );
}

export default Contact;
