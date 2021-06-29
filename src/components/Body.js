import React from "react";

export default function Body() {
  return (
    <main>
      <section>
        <h2>About</h2>
        <p>
          Full-stack web developer. Experienced entertainer, audio-engineer,
          musician, and composer. I prefer to work in a position that encourages
          creativity and problem-solving. I thrive in team environments and am
          always trying to learn new technologies. I am passionate about music
          and am a self-taught music producer. I love the great outdoors and
          grew up going to Rocky Mountain National Park in Colorado. I've worked
          in the wedding industry for most of my career before pursuing
          programming.
        </p>
      </section>

      <section>
        <h2>Personal Projects</h2>
        <div className="personal-project">
          <p>
            Tech Blog - Full-stack web application with user authentication and
            CRUD operations.
          </p>
          <a href="https://boiling-bastion-61605.herokuapp.com/">
            link to deployed application
          </a>
          <img
            style={{ height: "50%", width: "50%", display: "block" }}
            src="https://raw.githubusercontent.com/zachraab/tech-blog/main/assets/images/screenshot.png"
          ></img>
        </div>
        <div className="personal-project">
          <p>
            The Daily Dive - Front-end web application utilizing REST API
            integration.
          </p>
          <a href="https://chequelito.github.io/theDailyDive/">
            link to deployed application
          </a>
          <img
            style={{ height: "50%", width: "50%", display: "block" }}
            src="https://raw.githubusercontent.com/Chequelito/theDailyDive/main/assets/images/Screenshot.png"
          ></img>
        </div>
        <div className="personal-project">
          <p>
            Employee Generator - This is a back-end, command-line application
            that allows a manager to dynamically generate a styled webpage that
            contains the names and information of their employees.
          </p>
          <a href="https://zachraab.github.io/employee-generator/my-team.html">
            link to deployed application
          </a>
          <img
            style={{ height: "50%", width: "50%", display: "block" }}
            src="https://raw.githubusercontent.com/zachraab/employee-generator/main/images/Screenshot.png"
          ></img>
        </div>
      </section>
    </main>
  );
}
