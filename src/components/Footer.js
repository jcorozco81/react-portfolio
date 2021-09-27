import React from "react";
import svgEmail from "../assets/svg/email.svg";
import svgLinkedIn from "../assets/svg/linkedin.svg";
import svgGit from "../assets/svg/github.svg";
import svgTwitter from "../assets/svg/twitter.svg";

function Footer() {
  // const message = 'Hello world! I am a React Component';

  return (
    <div className="container">
      <nav class="navbar">
        <div class="column has-text-centered ">
          <div class="column">
            <div class="tile is-ancestor has-text-centered">
              <div class="tile is-parent">
                <article class="tile is-child">
                  <a
                    class="nav-link active"
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

              <div class="tile is-parent">
                <article class="tile is-child">
                  <a
                    class="nav-link"
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

              <div class="tile is-parent">
                <article class="tile is-child">
                  <a
                    class="nav-link"
                    href="Twitter"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open("https://twitter.com/jcorozcoleon");
                    }}
                  >
                    <img alt="Twitter" src={svgTwitter}></img>
                  </a>
                </article>
              </div>

              <div class="tile is-parent">
                <article class="tile is-child">
                  <a
                    class="nav-link"
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
          <div class="column">
            <p>© 2021 Created by Juan Orozco</p>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
// Logos from https://iconmonstr.com/
