import React from 'react';
import ProfilePic from '../../assets/images/profile-pic.jpg';


// React components are isolated parts of an application that help organize and isolate different parts of the program into smaller chunks
// We can pass data to these components and even render other components inside other components.
// The `Hello` component is a child of our `App` component and is responsible for rendering the "Hello World" header.
function About() {
  const message = `Hello, my name is Juan Carlos Orozco. I was born and raised in Puerto Rico. I recently completed a Full Stack Web Developer Coding Bootcamp at Ohio State University. My goal is to become a full time Web Developer and keep improving and learning new coding skills. In this page you will find samples of my work and additional details about my coding skills. If you see something interesting or if you just want to connect, don't hesitate to contact me. My contact information is at the bottom of this page or just use the contact form to send me a message. Thanks for visiting and enjoy!`;

  return (


    <div className="container">







      <div className="tile is-ancestor">
        <div className="tile is-parent is-4">
          <div className="tile is-child box notification is-light">
            <div className="block">
              <figure className="image">
                <img alt="Juan Orozco" src={ProfilePic}></img>
              </figure>
            </div>
          </div>
        </div>

        <div className="tile is-parent">
          <div className="tile is-child box notification">
          <p className="title" id="about-me">About Me:</p>
            <p className="is-size-5-desktop is-size-7-mobile is-size-6-tablet">{message}</p>
          </div>
        </div>
      </div>
      </div>
     
  );
}

export default About;
