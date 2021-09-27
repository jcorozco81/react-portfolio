import React from "react";
import resume from "../../assets/documents/Resume_Juan_Orozco-June-2021.pdf";

function Resume() {
  return (
    <div className="container">
      <p class="title" id="my-resume">
        Skills and Resume:
      </p>
      <div class="columns">

        <div class="column is-three-fifths">
        <div class="columns">
          <div class="column is-half">
            <h5 class="title is-5">Front End</h5>
            <ul>
              <li>HTML</li>
              <li>JavaScript, jQuery</li>
              <li>CSS, CSS Frameworks: Bootstrap, Bulma</li>
              <li>React</li>

            </ul>
          </div>
          <div class="column is-half">
            <h5 class="title is-5">Back End</h5>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Handlebars</li>
              <li>mySQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
        </div>
        <div class="column">
          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <div class="tile is-child box notification is-light has-background-white-ter">
                <h4 class="title is-4 has-text-grey-dark">Download my latest resume:</h4>
                <div class="buttons is-centered">
                  <a
                    href={resume}
                    target="_blank"
                    rel="noreferrer"
                    class="button is-info"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Resume;
