import React from "react";

function Navbar({changeContent, selectedContent}) {

  return (
    
    <div className="container">
      <div class="column mb-6 ">
  <nav class="navbar is-fixed-top notification has-background-info-light" role="navigation"
    aria-label="main navigation">
      <div class="navbar-brand">
      <h3 class="title is-3 has-text-info-dark">My Portfolio: Juan Orozco</h3>
      </div>

    <div id="nav-menu" class="navbar-menu">
      <div class="navbar-end buttons mr-2">

        <a class="button is-medium is-ghost mx-4"  href="#About"
            onClick={() => changeContent('About')}
            className={selectedContent === 'About' ? 'button is-warning is-light is-medium mx-4' : 'button is-medium is-ghost mx-4'}
          >
            About Me
          </a>

        <a class="button is-medium is-ghost mx-4" href="#Projects"
            onClick={() => changeContent('Projects')}
            className={selectedContent === 'Projects' ? 'button is-warning is-light is-medium mx-4' : 'button is-medium is-ghost mx-4'}
          >
            Projects
          </a>

        <a class="button is-medium is-ghost mx-4"  href="#Resume"
            onClick={() => changeContent('Resume')}
            className={selectedContent === 'Resume' ? 'button is-warning is-light is-medium mx-4' : 'button is-medium is-ghost mx-4'}
          >
            Resume
          </a>

          <a class="button is-medium is-ghost mx-4"  href="#Contact"
            onClick={() => changeContent('Contact')}
            className={selectedContent === 'Contact' ? 'button is-warning is-light is-medium mx-4' : 'button is-medium is-ghost mx-4'}
          >
            Contact
          </a>
      </div>
    </div>

  </nav>
  </div>












      {/* <ul class="nav">
        <li class="nav-item">
          <a
            class="nav-link"
            aria-current="page"
            href="#About"
            onClick={() => changeContent('About')}
            className={selectedContent === 'About' ? 'nav-link disabled' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="#Projects"
            onClick={() => changeContent('Projects')}
            className={selectedContent === 'Projects' ? 'nav-link disabled' : 'nav-link'}
          >
            Projects
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="#Resume"
            onClick={() => changeContent('Resume')}
            className={selectedContent === 'Resume' ? 'nav-link disabled' : 'nav-link'}
          >
            Resume
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link disabled"
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
