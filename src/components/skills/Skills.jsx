import React from "react";
import "./skills.css";
import { FaCheckDouble, FaAws, FaFigma, FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {TbBrandTypescript, TbBrandStorybook} from "react-icons/tb"
import {SiRedux, SiStyledcomponents, SiMysql, SiPostman,SiNewrelic, SiJest, SiCypress, SiContentful, SiExpress} from "react-icons/si"
import {DiFirebase} from "react-icons/di"

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
              <TbBrandTypescript className="skills__details-ts" />
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
              <SiRedux className="skills__details-redux" />
              <div>
                <h4>Redux</h4>
              </div>
            </article>
            <article className="skills__details">
              <TbBrandStorybook className="skills__details-storybook" />
              <div>
                <h4>Storybook</h4>
              </div>
            </article>
            <article className="skills__details">
              <SiStyledcomponents className="skills__details-styled" />
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
              <SiMysql className="skills__details-sql" />
              <div>
                <h4>MySQL</h4>
              </div>
            </article>
            <article className="skills__details">
              <SiExpress className="skills__details-express" />
              <div>
                <h4>Express JS</h4>
              </div>
            </article>
            <article className="skills__details">
              <SiPostman className="skills__details-postman" />
              <div>
                <h4>Postman</h4>
              </div>
            </article>
            <article className="skills__details">
              <DiFirebase className="skills__details-firebase" />
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
              <SiNewrelic className="skills__details-nrelic" />
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
              <SiJest className="skills__details-jest" />
              <div>
                <h4>Jest</h4>
              </div>
            </article>
            <article className="skills__details">
              <SiCypress className="skills__details-cypress" />
              <div>
                <h4>Cypress</h4>
              </div>
            </article>
            <article className="skills__details">
              <SiContentful className="skills__details-c" />
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
