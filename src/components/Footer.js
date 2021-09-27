import React from "react";
import svgEmail from "../assets/svg/email.svg";
import svgLinkedIn from "../assets/svg/linkedin.svg";
import svgGit from "../assets/svg/github.svg";

function Footer() {
  // const message = 'Hello world! I am a React Component';

  return (
    <div className="container">
        <div class="column has-text-centered">
          <div class="column">
            <div class="tile is-ancestor has-text-centered">
              <div class="tile is-parent">
                <article class="tile is-child">
                  <img alt="Juan Orozco" src={svgGit}></img>
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="github"
                    onClick={() => window.open("https://github.com/jcorozco81")}
                  >
                    GitHub
                  </a>
                </article>
              </div>

              <div class="tile is-parent">
                <article class="tile is-child">
                  <img alt="Juan Orozco" src={svgLinkedIn}></img>
                  <a
                    class="nav-link"
                    href="linkedin"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/juan-carlos-orozco-b6276434/"
                      )
                    }
                  >
                    LinkedIn
                  </a>
                </article>
              </div>

              <div class="tile is-parent">
                <article class="tile is-child">
                  <img alt="Juan Orozco" src={svgEmail}></img>
                  <a
                    class="nav-link"
                    href="Email"
                    onClick={() => window.open("mailto:jcorozco@gmail.com")}
                  >
                    Email
                  </a>
                </article>
              </div>
            </div>
          </div>
          <div class="column">
            <p>© 2021 Created by Juan Orozco</p>
          </div>
        </div>



      




















    </div>
  );
}

export default Footer;
// Logos from https://iconmonstr.com/
