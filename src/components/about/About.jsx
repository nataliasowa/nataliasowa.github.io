import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { MdSchool } from "react-icons/md";
import { BiSearch } from "react-icons/bi";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <HiOutlineDesktopComputer className="about__icon" />
              <h5>Experience</h5>
              <small>Internship at Veo Technologies</small>
            
            </article>

            <article className="about__card">
              <MdSchool className="about__icon" />
              <h5>School</h5>
              <small>Full Stack Web Development at HYF Copenhagen</small>
            </article>

            <article className="about__card">
              <BiSearch className="about__icon" />
              <h5>Open for</h5>
              <small>Internships and Junior positions</small>
            </article>
          </div>
          <p>
            After 4 years working in Marketing field, I’ve decided to switch
            paths and pursue my programing dreams. I’ve started that journey
            with HackYourFuture school in Copenhagen where I got to learn how to
            create beneficial web solutions using various technologies, such as
            ReactJS, mysql, ExpressJS, NodeJS etc. I've recently finished my
            first internship within frontend development working with ReactJS
            and TypeScript.
          </p>
          <p>
            I don't like to define myself by the work I've done. I define myself
            by the hunger of learning new skills I have. Skills can be taught
            but only a discipline and self-motivation is the key to success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
