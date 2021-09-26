import React from "react";

// React components are isolated parts of an application that help organize and isolate different parts of the program into smaller chunks
// We can pass data to these components and even render other components inside other components.
// The `Hello` component is a child of our `App` component and is responsible for rendering the "Hello World" header.
function Navbar({changeContent, selectedContent}) {
  // const message = 'Hello world! I am a React Component';

  return (
    <div className="container">
      {/* <h2>{message}</h2> */}
      <ul class="nav">
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
      </ul>
    </div>
  );
}

export default Navbar;
