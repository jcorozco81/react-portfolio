import React from "react";
import svgEmail from "../assets/svg/email.svg";
import svgLinkedIn from "../assets/svg/linkedin.svg";
import svgGit from "../assets/svg/github.svg";

function Footer() {

  return (
    <div className="container">
      <nav className="navbar">
        <div className="column has-text-centered ">
          <div className="column">
            <div className="tile is-ancestor has-text-centered">
              <div className="tile is-parent">
                <article className="tile is-child">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="github"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open("https://github.com/jcorozco81");
                    }}
                  >
                    <img alt="GitHub" src={svgGit}></img>
                  </a>
                </article>
              </div>

              <div className="tile is-parent">
                <article className="tile is-child">
                  <a
                    className="nav-link"
                    href="linkedin"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        "https://www.linkedin.com/in/juan-carlos-orozco-b6276434/"
                      );
                    }}
                  >
                    <img alt="LinkeIn" src={svgLinkedIn}></img>
                  </a>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child">
                  <a
                    className="nav-link"
                    href="Email"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open("mailto:jcorozco@gmail.com");
                    }}
                  >
                    <img alt="Email" src={svgEmail}></img>
                  </a>
                </article>
              </div>
            </div>
          </div>
          <div className="column">
            <p>© 2021 Created by Juan Orozco</p>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
// Logos from https://iconmonstr.com/
