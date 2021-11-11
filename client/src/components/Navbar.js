import React from "react";
import { Link } from "react-router-dom";
import NameHeader from "../../src/assets/images/name-header.png";
import "../assets/css/style.css";

function Navbar({ changeContent, selectedContent }) {
  return (
    <div className="container">
      <div className="column">
        <nav
          className="navbar is-fixed-top notification"
          role="navigation"
          aria-label="main navigation"
        >
          <div class="navbar-brand">
            <figure className="nav-image">
              <img
                alt="Juan Orozco"
                src={NameHeader}
                className="header-img"
              ></img>{" "}
            </figure>
          </div>


          <div class="navbar-end">

          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <article class="tile is-child has-text-centered">
                <Link
                  to="/"
                  onClick={() => changeContent("About")}
                  className={
                    selectedContent === "About"
                      ? "button is-outline is-ghost is-medium mx-4"
                      : "button is-medium is-ghost mx-4"
                  }
                >
                  About Me
                </Link>
              </article>
            </div>

            <div class="tile is-parent">
              <article class="tile is-child has-text-centered">
                <Link
                  to="/Projects"
                  onClick={() => changeContent("Projects")}
                  className={
                    selectedContent === "Projects"
                      ? "button is-outline is-ghost is-medium mx-4"
                      : "button is-medium is-ghost mx-4"
                  }
                >
                  Projects
                </Link>
              </article>
            </div>

            <div class="tile is-parent">
              <article class="tile is-child has-text-centered">
                <Link
                  to="/Resume"
                  onClick={() => changeContent("Resume")}
                  className={
                    selectedContent === "Resume"
                      ? "button is-outline is-ghost is-medium mx-4"
                      : "button is-medium is-ghost mx-4"
                  }
                >
                  Resume
                </Link>
              </article>
            </div>

            <div class="tile is-parent">
              <article class="tile is-child has-text-centered">
                <Link
                  to="/Contact"
                  onClick={() => changeContent("Contact")}
                  className={
                    selectedContent === "Contact"
                      ? "button is-outline is-ghost is-medium mx-4"
                      : "button is-medium is-ghost mx-4"
                  }
                >
                  Contact
                </Link>
              </article>
            </div>
          </div>
          </div>

          {/* <div className="navbar-brand"> */}

          {/* <p className="title is-3 has-text-info-dark">Juan Carlos Orozco León</p>
      <p className="subtitle is-5 has-text-info-dark">Full Stack Web Developer</p> */}
          {/* </div> */}
          {/* </div> */}
        </nav>
      </div>

      {/* <ul className="nav">
        <li className="nav-item">
          <a
            className="nav-link"
            aria-current="page"
            href="#About"
            onClick={() => changeContent('About')}
            className={selectedContent === 'About' ? 'nav-link disabled' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="#Projects"
            onClick={() => changeContent('Projects')}
            className={selectedContent === 'Projects' ? 'nav-link disabled' : 'nav-link'}
          >
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="#Resume"
            onClick={() => changeContent('Resume')}
            className={selectedContent === 'Resume' ? 'nav-link disabled' : 'nav-link'}
          >
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link disabled"
            href="#Contact"
            onClick={() => changeContent('Contact')}
            className={selectedContent === 'Contact' ? 'nav-link disabled' : 'nav-link'}
          >
            Contact
          </a>
        </li>
      </ul> */}
    </div>
  );
}

export default Navbar;
