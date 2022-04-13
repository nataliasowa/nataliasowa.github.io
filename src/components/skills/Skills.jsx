import React from "react";
import "./skills.css";
import { FaCheckDouble } from "react-icons/fa";

const Skills = () => {
  return (
    <section id="skills">
      <h5>What I have learnt?</h5>
      <h2>Here are some of my skills</h2>
      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <FaCheckDouble className="skills__details-icon" />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="skills__details">
              <FaCheckDouble className="skills__details-icon"/>
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="skills__details">
              <FaCheckDouble className="skills__details-icon" />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="skills__details">
              <FaCheckDouble className="skills__details-icon"/>
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className="skills__details">
              <FaCheckDouble className="skills__details-icon"/>
              <div>
                <h4>Storybook</h4>
              </div>
            </article>
            <article className="skills__details">
              <FaCheckDouble className="skills__details-icon"/>
              <div>
                <h4>Figma (more of design)</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="skills__backend">
          <h3>Backend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <FaCheckDouble className="skills__details-icon"/>
              <div>
                <h4>Node JS</h4>
              </div>
            </article>
            <article className="skills__details">
              <FaCheckDouble className="skills__details-icon"/>
              <div>
                <h4>MySQL</h4>
              </div>
            </article>
            <article className="skills__details">
              <FaCheckDouble className="skills__details-icon"/>
              <div>
                <h4>Express JS</h4>
              </div>
            </article>
            <article className="skills__details">
              <FaCheckDouble className="skills__details-icon"/>
              <div>
                <h4>Knex JS</h4>
              </div>
            </article>
            <article className="skills__details">
              <FaCheckDouble className="skills__details-icon"/>
              <div>
                <h4>Firebase</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
