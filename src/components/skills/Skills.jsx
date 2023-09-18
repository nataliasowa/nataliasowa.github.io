import React from "react";
import "./skills.css";
import { FaCheckDouble, FaAws, FaFigma, FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

const Skills = () => {
  return (
    <section id="skills">
      <h5>Technology I use</h5>
      <h2>Here are some of my skills</h2>
      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <FaHtml5 className="skills__details-html" />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="skills__details">
              <FaCss3 className="skills__details-css" />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="skills__details">
              <FaJs className="skills__details-js" />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="skills__details">
              <FaCheckDouble className="skills__details-icon" />
              <div>
                <h4>TypeScript</h4>
              </div>
            </article>
            <article className="skills__details">
              <FaReact className="skills__details-react" />
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className="skills__details">
              <FaCheckDouble className="skills__details-icon" />
              <div>
                <h4>Redux</h4>
              </div>
            </article>
            <article className="skills__details">
              <FaCheckDouble className="skills__details-icon" />
              <div>
                <h4>Storybook</h4>
              </div>
            </article>
            <article className="skills__details">
              <FaCheckDouble className="skills__details-icon" />
              <div>
                <h4>Styled components</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="skills__backend">
          <h3>Backend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <FaNodeJs className="skills__details-nodejs" />
              <div>
                <h4>Node JS</h4>
              </div>
            </article>
            <article className="skills__details">
              <FaCheckDouble className="skills__details-icon" />
              <div>
                <h4>MySQL</h4>
              </div>
            </article>
            <article className="skills__details">
              <FaCheckDouble className="skills__details-icon" />
              <div>
                <h4>Express JS</h4>
              </div>
            </article>
            <article className="skills__details">
              <FaCheckDouble className="skills__details-icon" />
              <div>
                <h4>Postman</h4>
              </div>
            </article>
            <article className="skills__details">
              <FaCheckDouble className="skills__details-icon" />
              <div>
                <h4>Firebase</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="skills__frontend">
          <h3>Additional</h3>
          <div className="skills__content">
            <article className="skills__details">
              <FaAws className="skills__details-aws" />
              <div>
                <h4>AWS (basics - learning)</h4>
              </div>
            </article>
            <article className="skills__details">
              <FaCheckDouble className="skills__details-icon" />
              <div>
                <h4>New Relic (basics - learning)</h4>
              </div>
            </article>
            <article className="skills__details">
              <FaFigma className="skills__details-figma" />
              <div>
                <h4>Figma (basics)</h4>
              </div>
            </article>
            <article className="skills__details">
              <FaCheckDouble className="skills__details-icon" />
              <div>
                <h4>Jest</h4>
              </div>
            </article>
            <article className="skills__details">
              <FaCheckDouble className="skills__details-icon" />
              <div>
                <h4>Cypress</h4>
              </div>
            </article>
            <article className="skills__details">
              <FaCheckDouble className="skills__details-icon" />
              <div>
                <h4>Contentful</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
