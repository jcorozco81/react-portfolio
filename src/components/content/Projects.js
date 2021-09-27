import React from "react";
import trivia from '../../assets/images/trivia-night.PNG';
import aipointment from '../../assets/images/AI-Pointment.PNG';
import weather from '../../assets/images/weather-dashboard.PNG';
import readmegen from '../../assets/images/readme.PNG';
import employee from '../../assets/images/employee.PNG';
import notetaker from '../../assets/images/note-taker.PNG';
import codequiz from '../../assets/images/code-quiz.PNG';
import dayplanner from '../../assets/images/day-planner.PNG';
import teamprofile from '../../assets/images/team-profile.PNG';





function Project() {

  return (
    <div className="container">
      <p class="title" id="my-resume">
        My Projects:
      </p>

      {/* <!-- Works Section --> */}

      {/* <!-- Main Project --> */}
      <div class="tile is-ancestor">
        <div class="tile is-8 is-parent">
          <div class="tile is-child box notification has-background-info-light">
            <div class="block">
              <h4 class="title is-4">Trivia Night</h4>
              <h5 class="subtitle is-5">An app for at home drinks and fun.</h5>
            </div>

            <div class="block box is-centered">
              <figure class="image is-256x256">
                <img src={trivia} alt="Trivia Night"></img>
              </figure>
            </div>

            <div class="buttons is-centered">
              <a
                href="Github Pages"
                onClick={() => window.open("https://jcorozco81.github.io/trivia-night")}
                class="button is-large is-info"
              >
                Deployed Website
              </a>
              <a
              href="Github Repository"
              onClick={() => window.open("https://github.com/jcorozco81/trivia-night")}
                class="button is-large is-info"
              >
                Github Repository
              </a>
            </div>
          </div>
        </div>

        <div class="tile is-vertical is-4 is-parent">
          <div class="tile is-child box notification has-background-info-light">
            <div class="block">
              <h5 class="title is-5">Weather Dashboard</h5>
              <h6 class="subtitle is-6">
                A weather search engine. Stay informed.
              </h6>
            </div>

            <div class="block box is-centered">
              <figure class="image is-256x256">
                <img src={weather} alt="Weather Dashboard"></img>
              </figure>
            </div>

            <div class="buttons is-centered">
              <a
                href="Github Pages"
                onClick={() => window.open("https://jcorozco81.github.io/weather-dashboard")}
                class="button is-info"
              >
                Deployed Website
              </a>
              <a
                href="Github Repository"
                onClick={() => window.open("https://github.com/jcorozco81/weather-dashboard")}
                class="button is-info"
              >
                Github Repository
              </a>
            </div>
          </div>

          <div class="tile is-child box notification has-background-info-light">
            <div class="block">
              <h5 class="title is-5">Code Quiz</h5>
              <h6 class="subtitle is-6">
                Test your knowledge, try to get the highest score.
              </h6>
            </div>

            <div class="block box is-centered">
              <figure class="image is-256x256">
                <img src={codequiz} alt="Code Quiz"></img>
              </figure>
            </div>

            <div class="buttons is-centered">
              <a
                href="Github Pages"
                onClick={() => window.open("https://jcorozco81.github.io/code-quiz/")}
                class="button is-info"
              >
                Deployed Website
              </a>
              <a
                href="Github Repository"
                onClick={() => window.open("https://github.com/jcorozco81/code-quiz")}
                class="button is-info"
              >
                Github Repository
              </a>
            </div>
          </div>
        </div>
        {/* <!-- /ancestor 1 --> */}
      </div>

      {/* <!-- Ancestor 2 --> */}
      <div class="tile is-ancestor">
        <div class="tile is-8 is-parent">
          <div class="tile is-child box notification has-background-info-light">
            <div class="block">
              <h4 class="title is-4">AI-Poinment</h4>
              <h5 class="subtitle is-5">Auto service appoinment scheduler.</h5>
            </div>

            <div class="block box is-centered">
              <figure class="image is-256x256">
                <img src={aipointment} alt="AI-Pointment"></img>
              </figure>
            </div>

            <div class="buttons is-centered">
              <a
                href="Heroku Deployment"
                onClick={() => window.open("https://vast-hamlet-52484.herokuapp.com/")}
                class="button is-large is-info"
              >
                Deployed Website
              </a>
              <a
                href="Github Repository"
                onClick={() => window.open("https://github.com/jcorozco81/AI-Pointment")}
                class="button is-large is-info "
              >
                Github Repository
              </a>
            </div>
          </div>
        </div>

        <div class="tile is-vertical is-4 is-parent">
          <div class="tile is-child box notification has-background-info-light">
            <div class="block">
              <h5 class="title is-5">Note Taker</h5>
              <h6 class="subtitle is-6">Server side note taker.</h6>
            </div>

            <div class="block box is-centered">
              <figure class="image is-256x256">
                <img src={notetaker} alt="Note Taker"></img>
              </figure>
            </div>

            <div class="buttons is-centered">
              <a
                href="Heroku Deployment"
                onClick={() => window.open("https://jco-note-taker.herokuapp.com/")}
                class="button is-info"
              >
                Deployed Website
              </a>
              <a
                href="Github Repository"
                onClick={() => window.open("https://github.com/jcorozco81/note-taker")}
                class="button is-info"
              >
                Github Repository
              </a>
            </div>
          </div>

          <div class="tile is-child box notification has-background-info-light">
            <div class="block">
              <h5 class="title is-5">Team Profile Generator</h5>
              <h6 class="subtitle is-6">
                Visual webpage of your team structure.
              </h6>
            </div>

            <div class="block box is-centered">
              <figure class="image is-256x256">
                <img src={teamprofile} alt="Team Profile Generator"></img>
              </figure>
            </div>

            <div class="buttons is-centered">
              <a
                href="Google Drive"
                onClick={() => window.open("https://drive.google.com/drive/folders/11x_L55BLAIqM_6dOeltPIBbfVCq85bug?usp=sharing")}
                class="button is-info"
              >
                Demo Videos
              </a>
              <a
                href="Github Repository"
                onClick={() => window.open("https://github.com/jcorozco81/profile-generator")}
                class="button is-info"
              >
                Github Repository
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Ancestor 3 --> */}
      <div class="tile is-ancestor">
        {/* <!-- Parent 1 --> */}
        <div class="tile is-parent">
          <div class="tile is-child box notification has-background-info-light">
            <div class="block">
              <h5 class="title is-5">Day Planner</h5>
              <h6 class="subtitle is-6">
                Plan your day, don't forget anything.
              </h6>
            </div>

            <div class="block box is-centered">
              <figure class="image is-256x256">
                <img src={dayplanner} alt="Day Planner"></img>
              </figure>
            </div>

            <div class="buttons is-centered">
              <a
                href="Github Pages"
                onClick={() => window.open("https://jcorozco81.github.io/day-scheduler/")}
                class="button is-info"
              >
                Deployed Website
              </a>
              <a
                href="Github Repository"
                onClick={() => window.open("https://github.com/jcorozco81/day-scheduler")}
                class="button is-info"
              >
                Github Repository
              </a>
            </div>
          </div>
        </div>
        {/* <!-- Parent 2 --> */}
        <div class="tile is-parent">
          <div class="tile is-child box notification has-background-info-light">
            <div class="block">
              <h5 class="title is-5">Employee Management System</h5>
              <h6 class="subtitle is-6">Human Resources Database.</h6>
            </div>

            <div class="block box is-centered">
              <figure class="image is-256x256">
                <img src={employee} alt="Employee Management System"></img>
              </figure>
            </div>

            <div class="buttons is-centered">
              <a
                href="Google Drive"
                onClick={() => window.open("https://drive.google.com/drive/folders/1dtQot8GOPrvie7qggSCOe3-hIDd3X9EQ?usp=sharing")}
                class="button is-info"
              >
                Demo Videos
              </a>
              <a
                href="Github Repository"
                onClick={() => window.open("https://github.com/jcorozco81/employee-tracker")}
                class="button is-info"
              >
                Github Repository
              </a>
            </div>
          </div>
        </div>
        {/* <!-- Parent 3 --> */}
        <div class="tile is-parent">
          <div class="tile is-child box notification has-background-info-light">
            <div class="block">
              <h5 class="title is-5">Good README Generator</h5>
              <h6 class="subtitle is-6">An automated README File Generator.</h6>
            </div>

            <div class="block box is-centered">
              <figure class="image is-256x256">
                <img src={readmegen} alt="ReadMe Generator"></img>
              </figure>
            </div>

            <div class="buttons is-centered">
              <a
                href="Google Drive"
                onClick={() => window.open("https://drive.google.com/drive/folders/1UIdp2heSz_x1nhrXCnXC2uofU04JAywf?usp=sharing")}
                class="button is-info"
              >
                Demo Videos
              </a>
              <a
                href="Github Repository"
                onClick={() => window.open("https://github.com/jcorozco81/readme-generator")}
                class="button is-info"
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
