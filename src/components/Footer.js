import React from 'react';

function Footer() {
  // const message = 'Hello world! I am a React Component';

  return (
    <div className="container">
      {/* <h2>{message}</h2> */}
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="github" onClick = {() => window.open('https://github.com/jcorozco81')}>
            GitHub
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="linkedin" onClick = {() => window.open('https://www.linkedin.com/in/juan-carlos-orozco-b6276434/')}>
            LinkedIn
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Email" onClick = {() => window.open('mailto:jcorozco@gmail.com')}>
            Email
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
