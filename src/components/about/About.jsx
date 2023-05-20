import React from "react";
import "./about.css";
import {BsPatchCheckFill} from "react-icons/bs"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_cards">
          <article className="about_card">
            <BsPatchCheckFill className="about_icons" />
            <h4>FrontEnd</h4>
            <h5>Javascript</h5>
            <h5>React.Js</h5>
            <h5>BootStrap</h5>
            <h5>HTML5</h5>
            <h5>CSS3</h5>
            <h5>AJAX / Axios</h5>
          </article>
          <article className="about_card">
            <BsPatchCheckFill className="about_icons" />
            <h4>Backend</h4>
            <h5>C#</h5>
            <h5>.Net Core</h5>
            <h5>RESTful API</h5>
            <h5>SQL</h5>
            <h5>MS SQL Server</h5>
          </article>
        </div>

        <div className="about_content">
          <p>
            I am a passionate full stack software developer based in Los
            Angeles, CA enjoy solving real-world problems using technology. I am
            currently experienced with React.js, C#/.Net, and SQL, but I am
            always eager to learn other tools and languages to further develop
            my skillset and contribute to the team in the best way possible.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Chat
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
