import React from "react";
import trivia from "../../assets/images/trivia-night.PNG";
import aipointment from "../../assets/images/AI-Pointment.PNG";
import weather from "../../assets/images/weather-dashboard.PNG";
import readmegen from "../../assets/images/readme.PNG";
import employee from "../../assets/images/employee.PNG";
import notetaker from "../../assets/images/note-taker.PNG";
import codequiz from "../../assets/images/code-quiz.PNG";
import dayplanner from "../../assets/images/day-planner.png";
import teamprofile from "../../assets/images/team-profile.PNG";
import geek from "../../assets/images/geek-blog.PNG";
import fitness from "../../assets/images/fit-tracker.PNG";
import budget from "../../assets/images/budget-tracker.PNG";

function Project() {
  return (
    <div className="container">
      <p className="title section-title" id="my-resume">
        My Projects:
      </p>

      {/* <!-- Works Section --> */}

      {/* <!-- Main Project --> */}
      <div className="tile is-ancestor">
        <div className="tile is-8 is-parent">
          <div className="tile is-child box notification has-background-info-light">
            <div className="block">
              <h4 className="title is-4">The Geek Blog</h4>
              <h5 className="subtitle is-5">Tech enthusiasts blogsite.</h5>
              <div>
                <p className="is-4">Technologies used:</p>
                <span className="tag is-info is-light">HTML</span>
                <span className="tag is-info is-light">CSS</span>
                <span className="tag is-info is-light">JavaScript</span>
                <span className="tag is-info is-light"> jQuery</span>
                <span className="tag is-info is-light">Handlebars</span>
                <span className="tag is-info is-light">Bulma</span>
                <span className="tag is-info is-light">node.js</span>
                <span className="tag is-info is-light">express.js</span>
                <span className="tag is-info is-light">mySQL</span>
              </div>
            </div>

            <div className="block box is-centered">
              <figure className="image is-256x256">
                <img src={geek} alt="the geek blog"></img>
              </figure>
            </div>

            <div className="buttons is-centered">
              <a
                href="Deployed Website"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://quiet-chamber-80937.herokuapp.com/");
                }}
                className="button is-large is-info"
              >
                Deployed Website
              </a>
              <a
                href="Github Repository"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://github.com/jcorozco81/geek-blog");
                }}
                className="button is-large is-info"
              >
                Github Repository
              </a>
            </div>
          </div>
        </div>

        <div className="tile is-vertical is-4 is-parent">
          <div className="tile is-child box notification has-background-info-light">
            <div className="block">
              <h5 className="title is-5">Weather Dashboard</h5>
              <h6 className="subtitle is-6">
                A weather search engine. Stay informed.
              </h6>
              <div>
                <p className="is-6">Technologies used:</p>
                <span className="tag is-info is-light">HTML</span>
                <span className="tag is-info is-light">CSS</span>
                <span className="tag is-info is-light">JavaScript</span>
                <span className="tag is-info is-light">jQuery</span>
                <span className="tag is-info is-light">Bulma</span>
                <span className="tag is-info is-light">Server-Side API</span>
              </div>
            </div>

            <div className="block box is-centered">
              <figure className="image is-256x256">
                <img src={weather} alt="Weather Dashboard"></img>
              </figure>
            </div>

            <div className="buttons is-centered">
              <a
                href="Github Pages"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://jcorozco81.github.io/weather-dashboard");
                }}
                className="button is-info"
              >
                Deployed Website
              </a>
              <a
                href="Github Repository"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://github.com/jcorozco81/weather-dashboard"
                  );
                }}
                className="button is-info"
              >
                Github Repository
              </a>
            </div>
          </div>

          <div className="tile is-child box notification has-background-info-light">
            <div className="block">
              <h5 className="title is-5">Fitness Tracker</h5>
              <h6 className="subtitle is-6">Track your workouts, get data</h6>

              <div>
                <p className="is-6">Technologies used:</p>
                <span className="tag is-info is-light">HTML</span>
                <span className="tag is-info is-light">CSS</span>
                <span className="tag is-info is-light">JavaScript</span>
                <span className="tag is-info is-light">node.js</span>
                <span className="tag is-info is-light">express.js</span>
                <span className="tag is-info is-light">MongoDB</span>
              </div>
            </div>

            <div className="block box is-centered">
              <figure className="image is-256x256">
                <img src={fitness} alt="Fitness Tracker"></img>
              </figure>
            </div>

            <div className="buttons is-centered">
              <a
                href="Heroku Pages"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://jco-fit-tracker.herokuapp.com/");
                }}
                className="button is-info"
              >
                Deployed Website
              </a>
              <a
                href="Github Repository"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://github.com/jcorozco81/fitness-tracker");
                }}
                className="button is-info"
              >
                Github Repository
              </a>
            </div>
          </div>
        </div>
        {/* <!-- /ancestor 1 --> */}
      </div>

      {/* <!-- Ancestor 2 --> */}

      <div className="tile is-ancestor">
        <div className="tile is-8 is-parent">
          <div className="tile is-child box notification has-background-info-light">
            <div className="block">
              <h4 className="title is-4">Trivia Night</h4>
              <h5 className="subtitle is-5">
                An app for at home drinks and fun.
              </h5>
              <div>
                <p className="is-6">Technologies used:</p>
                <span className="tag is-info is-light">HTML</span>
                <span className="tag is-info is-light">CSS</span>
                <span className="tag is-info is-light">JavaScript</span>
                <span className="tag is-info is-light">Server-side API</span>
              </div>
            </div>

            <div className="block box is-centered">
              <figure className="image is-256x256">
                <img src={trivia} alt="Trivia Night"></img>
              </figure>
            </div>

            <div className="buttons is-centered">
              <a
                href="Github Pages"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://jcorozco81.github.io/trivia-night");
                }}
                className="button is-large is-info"
              >
                Deployed Website
              </a>
              <a
                href="Github Repository"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://github.com/jcorozco81/trivia-night");
                }}
                className="button is-large is-info"
              >
                Github Repository
              </a>
            </div>
          </div>
        </div>

        <div className="tile is-vertical is-4 is-parent">
          <div className="tile is-child box notification has-background-info-light">
            <div className="block">
              <h5 className="title is-5">Budget Tracker</h5>
              <h6 className="subtitle is-6">
                An installabe Online-Offline budget tracker.
              </h6>
              <div>
                <p className="is-6">Technologies used:</p>
                <span className="tag is-info is-light">HTML</span>
                <span className="tag is-info is-light">CSS</span>
                <span className="tag is-info is-light">JavaScript</span>
                <span className="tag is-info is-light">node.js</span>
                <span className="tag is-info is-light">express.js</span>
                <span className="tag is-info is-light">MongoDB</span>
                <span className="tag is-info is-light">IndexedDB</span>
                <span className="tag is-info is-light">
                  Progressive Web App (PWA)
                </span>
              </div>
            </div>

            <div className="block box is-centered">
              <figure className="image is-256x256">
                <img src={budget} alt="Budget Tracker"></img>
              </figure>
            </div>

            <div className="buttons is-centered">
              <a
                href="Heroku Pages"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("http://lit-atoll-47584.herokuapp.com/");
                }}
                className="button is-info"
              >
                Deployed Website
              </a>
              <a
                href="Github Repository"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://github.com/jcorozco81/budget-tracker");
                }}
                className="button is-info"
              >
                Github Repository
              </a>
            </div>
          </div>

          <div className="tile is-child box notification has-background-info-light">
            <div className="block">
              <h5 className="title is-5">Code Quiz</h5>
              <h6 className="subtitle is-6">
                Test your knowledge, try to get the highest score.
              </h6>
              <div>
                <p className="is-6">Technologies used:</p>
                <span className="tag is-info is-light">HTML</span>
                <span className="tag is-info is-light">CSS</span>
                <span className="tag is-info is-light">JavaScript</span>
              </div>
            </div>

            <div className="block box is-centered">
              <figure className="image is-256x256">
                <img src={codequiz} alt="Code Quiz"></img>
              </figure>
            </div>

            <div className="buttons is-centered">
              <a
                href="Github Pages"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://jcorozco81.github.io/code-quiz/");
                }}
                className="button is-info"
              >
                Deployed Website
              </a>
              <a
                href="Github Repository"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://github.com/jcorozco81/code-quiz");
                }}
                className="button is-info"
              >
                Github Repository
              </a>
            </div>
          </div>
        </div>
        {/* <!-- /ancestor 2 --> */}
      </div>

      {/* <!-- Ancestor 3 --> */}
      <div className="tile is-ancestor">
        <div className="tile is-8 is-parent">
          <div className="tile is-child box notification has-background-info-light">
            <div className="block">
              <h4 className="title is-4">AI-Poinment</h4>
              <h5 className="subtitle is-5">
                Auto service appoinment scheduler.
              </h5>
              <div>
                <p className="is-6">Technologies used:</p>
                <span className="tag is-info is-light">HTML</span>
                <span className="tag is-info is-light">CSS</span>
                <span className="tag is-info is-light">JavaScript</span>
                <span className="tag is-info is-light">node.js</span>
                <span className="tag is-info is-light">express.js</span>
                <span className="tag is-info is-light">mySQL</span>
                <span className="tag is-info is-light">Chatbox</span>
              </div>
            </div>

            <div className="block box is-centered">
              <figure className="image is-256x256">
                <img src={aipointment} alt="AI-Pointment"></img>
              </figure>
            </div>

            <div className="buttons is-centered">
              <a
                href="Heroku Deployment"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://vast-hamlet-52484.herokuapp.com/");
                }}
                className="button is-large is-info"
              >
                Deployed Website
              </a>
              <a
                href="Github Repository"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://github.com/jcorozco81/AI-Pointment");
                }}
                className="button is-large is-info "
              >
                Github Repository
              </a>
            </div>
          </div>
        </div>

        <div className="tile is-vertical is-4 is-parent">
          <div className="tile is-child box notification has-background-info-light">
            <div className="block">
              <h5 className="title is-5">Note Taker</h5>
              <h6 className="subtitle is-6">Server side note taker.</h6>
              <div>
                <p className="is-6">Technologies used:</p>
                <span className="tag is-info is-light">HTML</span>
                <span className="tag is-info is-light">CSS</span>
                <span className="tag is-info is-light">JavaScript</span>
                <span className="tag is-info is-light">node.js</span>
                <span className="tag is-info is-light">express.js</span>
              </div>
            </div>

            <div className="block box is-centered">
              <figure className="image is-256x256">
                <img src={notetaker} alt="Note Taker"></img>
              </figure>
            </div>

            <div className="buttons is-centered">
              <a
                href="Heroku Deployment"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://jco-note-taker.herokuapp.com/");
                }}
                className="button is-info"
              >
                Deployed Website
              </a>
              <a
                href="Github Repository"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://github.com/jcorozco81/note-taker");
                }}
                className="button is-info"
              >
                Github Repository
              </a>
            </div>
          </div>

          <div className="tile is-child box notification has-background-info-light">
            <div className="block">
              <h5 className="title is-5">Team Profile Generator</h5>
              <h6 className="subtitle is-6">
                Visual webpage of your team structure.
              </h6>
              <div>
                <p className="is-6">Technologies used:</p>
                <span className="tag is-info is-light">HTML</span>
                <span className="tag is-info is-light">CSS</span>
                <span className="tag is-info is-light">JavaScript</span>
                <span className="tag is-info is-light">node.js</span>
                <span className="tag is-info is-light">Inquirer</span>
                <span className="tag is-info is-light">Test Suites</span>
              </div>
            </div>

            <div className="block box is-centered">
              <figure className="image is-256x256">
                <img src={teamprofile} alt="Team Profile Generator"></img>
              </figure>
            </div>

            <div className="buttons is-centered">
              <a
                href="Google Drive"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://drive.google.com/drive/folders/11x_L55BLAIqM_6dOeltPIBbfVCq85bug?usp=sharing"
                  );
                }}
                className="button is-info"
              >
                Demo Videos
              </a>
              <a
                href="Github Repository"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://github.com/jcorozco81/profile-generator"
                  );
                }}
                className="button is-info"
              >
                Github Repository
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Ancestor 3 --> */}
      <div className="tile is-ancestor">
        {/* <!-- Parent 1 --> */}
        <div className="tile is-parent">
          <div className="tile is-child box notification has-background-info-light">
            <div className="block">
              <h5 className="title is-5">Day Planner</h5>
              <h6 className="subtitle is-6">
                Plan your day, don't forget anything.
              </h6>
              <div>
                <p className="is-6">Technologies used:</p>
                <span className="tag is-info is-light">HTML</span>
                <span className="tag is-info is-light">CSS</span>
                <span className="tag is-info is-light">JavaScript</span>
                <span className="tag is-info is-light">Bootstrap</span>
              </div>
            </div>

            <div className="block box is-centered">
              <figure className="image is-256x256">
                <img src={dayplanner} alt="Day Planner"></img>
              </figure>
            </div>

            <div className="buttons is-centered">
              <a
                href="Github Pages"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://jcorozco81.github.io/day-scheduler/");
                }}
                className="button is-info"
              >
                Deployed Website
              </a>
              <a
                href="Github Repository"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://github.com/jcorozco81/day-scheduler");
                }}
                className="button is-info"
              >
                Github Repository
              </a>
            </div>
          </div>
        </div>
        {/* <!-- Parent 2 --> */}
        <div className="tile is-parent">
          <div className="tile is-child box notification has-background-info-light">
            <div className="block">
              <h5 className="title is-5">Employee Management System</h5>
              <h6 className="subtitle is-6">Human Resources Database.</h6>
            </div>
            <div>
              <p className="is-6">Technologies used:</p>
              <span className="tag is-info is-light">HTML</span>
              <span className="tag is-info is-light">CSS</span>
              <span className="tag is-info is-light">JavaScript</span>
              <span className="tag is-info is-light">node.js</span>
              <span className="tag is-info is-light">Inquirer</span>
              <span className="tag is-info is-light">mySQL</span>
            </div>
            <div className="block box is-centered">
              <figure className="image is-256x256">
                <img src={employee} alt="Employee Management System"></img>
              </figure>
            </div>

            <div className="buttons is-centered">
              <a
                href="Google Drive"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://drive.google.com/drive/folders/1dtQot8GOPrvie7qggSCOe3-hIDd3X9EQ?usp=sharing"
                  );
                }}
                className="button is-info"
              >
                Demo Videos
              </a>
              <a
                href="Github Repository"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://github.com/jcorozco81/employee-tracker");
                }}
                className="button is-info"
              >
                Github Repository
              </a>
            </div>
          </div>
        </div>
        {/* <!-- Parent 3 --> */}
        <div className="tile is-parent">
          <div className="tile is-child box notification has-background-info-light">
            <div className="block">
              <h5 className="title is-5">Good README Generator</h5>
              <h6 className="subtitle is-6">
                An automated README File Generator.
              </h6>
              <div>
                <p className="is-6">Technologies used:</p>
                <span className="tag is-info is-light">HTML</span>
                <span className="tag is-info is-light">CSS</span>
                <span className="tag is-info is-light">JavaScript</span>
                <span className="tag is-info is-light">node.js</span>
                <span className="tag is-info is-light">Inquirer</span>
              </div>
            </div>

            <div className="block box is-centered">
              <figure className="image is-256x256">
                <img src={readmegen} alt="ReadMe Generator"></img>
              </figure>
            </div>

            <div className="buttons is-centered">
              <a
                href="Google Drive"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://drive.google.com/drive/folders/1UIdp2heSz_x1nhrXCnXC2uofU04JAywf?usp=sharing"
                  );
                }}
                className="button is-info"
              >
                Demo Videos
              </a>
              <a
                href="Github Repository"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://github.com/jcorozco81/readme-generator");
                }}
                className="button is-info"
              >
                Github Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
