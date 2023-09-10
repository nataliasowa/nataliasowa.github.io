import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { MdSchool } from "react-icons/md";
import { BiSearch } from "react-icons/bi";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know me</h5>
      <h2>Why I became Software Engineer</h2>

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
              <h5>Job</h5>
              <small>Software Engineer at Awaze</small>
            </article>

            <article className="about__card">
              <MdSchool className="about__icon" />
              <h5>School</h5>
              <small>Full Stack Web Development at HYF Copenhagen</small>
            </article>

            <article className="about__card">
              <BiSearch className="about__icon" />
              <h5>Open for</h5>
              <small>Frontend Software Engineer Jobs </small>
            </article>
          </div>
          <p>
            My interest in software engineering was sparked during my marketing
            job when I took on a project that required me to learn basic HTML
            and CSS skills. I began coding in the evenings after work, learning
            through free online platforms which was not easy. Soon after I
            joined the full-stack web development boothcamp in Copenhagen, I
            learned everything from the ground-up, finishing with building a
            group project: a full-stack plant shop website to make shopping for
            plants easy and enjoyable for everyone. After that I continued to
            learn, meantime I participated in a one-month project-based
            internship focused on building a video player where I got to use
            JavaScript and React skills. I've also been improving my soft skills
            by observing people working together in teams, collaborating, and
            solving problems. Soon after I landed my first job as a junior
            software enginner with the main focus on the frontend part of
            application, using NextJs, React hooks, TypeScript, that also
            includes unit testing in Jest as well as end to end testing in
            Cypress. Right now, I'm in the process of learning how to use AWS
            effectively.
          </p>
          <p>
            If I could go back in time, I would make the same choices as I
            unexpectedly discovered my passion for programming, and now I enjoy
            doing it every day and I don't think about it as a job but rather a
            hobby.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
