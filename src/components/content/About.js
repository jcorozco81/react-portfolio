import React from 'react';
import ProfilePic from '../../assets/images/profile-pic.jpg';


// React components are isolated parts of an application that help organize and isolate different parts of the program into smaller chunks
// We can pass data to these components and even render other components inside other components.
// The `Hello` component is a child of our `App` component and is responsible for rendering the "Hello World" header.
function About() {
  const message = "Hello, my name is Juan Carlos Orozco. I was born in Puerto Rico. I have a Bachelor Degree in Electrical Engineering and a Master in Business Administration. I'm currently enrolled in a Coding Bootcamp working to learn the skills to become a Web Developer. In this page you will find samples of my work. If you see something interesting don't hesitate to contact me. My contact information is at the bottom of this page. Enjoy!";

  return (


    <div class="column is-four-fifths">






      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <div class="tile is-child box notification is-warning">
            <p class="title" id="about-me">About Me:</p>
          </div>
        </div>
      </div>


      <div class="tile is-ancestor">
        <div class="tile is-parent is-4">
          <div class="tile is-child box notification is-light has-background-primary-dark">
            <div class="block">
              <figure class="image">
                <img alt="Juan Orozco" src={ProfilePic}></img>
              </figure>
            </div>
          </div>
        </div>

        <div class="tile is-parent">
          <div class="tile is-child box notification is-primary has-background-primary-dark">
            <p class="is-size-3-desktop is-size-6-mobile is-size-5-tablet">Hello, my name is Juan Carlos Orozco. I was
              born in Puerto Rico. I have a Bachelor Degree in Electrical Engineering and a Master in Business
              Administration. I'm currently enrolled in a Coding Bootcamp working to learn the skills to become a Web
              Developer. In this page you will find samples of my work. If you see something interesting don't hesitate
              to contact me. My contact information is at the bottom of this page. Enjoy!</p>
            <div class="buttons is-centered mt-5">
              <a href="/assets/documents/Resume_Juan_Orozco-June-2021.pdf" class="button is-large is-danger">My
                Resume</a>
            </div>
          </div>
        </div>
      </div>
      </div>
     
  );
}

export default About;
