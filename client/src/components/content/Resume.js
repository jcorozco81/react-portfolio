import React from "react";
import resume from "../../assets/documents/resume-jcol.pdf";
import certificate from "../../assets/documents/fswd-coding-bootcamp-cert-jco.pdf";

function Resume() {
  return (
    <div className="container">
      <p className="title section-title" id="my-resume">
        Skills and Resume:
      </p>
      <div className="columns">

        <div className="column is-three-fifths">
        <div className="columns">
          <div className="column is-half">
            <h5 className="title is-5">Front End</h5>
            <ul>
              <li>HTML</li>
              <li>JavaScript, jQuery</li>
              <li>CSS, CSS Frameworks: Bootstrap, Bulma</li>
              <li>React</li>

            </ul>
          </div>
          <div className="column is-half">
            <h5 className="title is-5">Back End</h5>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Handlebars</li>
              <li>mySQL</li>
              <li>MongoDB</li>
              <li>graphQL</li>
            </ul>
          </div>
        </div>
        </div>
        <div className="column">
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <div className="tile is-child box notification is-light has-background-white-ter">
                <h4 className="title is-4 has-text-grey-dark">Latest Resume:</h4>
                <div className="buttons is-centered">
                  <a
                    href={resume}
                    target="_blank"
                    rel="noreferrer"
                    className="button is-info"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <div className="tile is-child box notification is-light has-background-white-ter">
                <h4 className="title is-4 has-text-grey-dark">Full Stack Web Developer Certificate:</h4>
                <div className="buttons is-centered">
                  <a
                    href={certificate}
                    target="_blank"
                    rel="noreferrer"
                    className="button is-info"
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
