import React from "react";
import "./about.css";
import ME from '../../assets/me-about.png'
import {HiOutlineDesktopComputer} from 'react-icons/hi'
import {MdSchool} from 'react-icons/md'
import {BiSearch} from 'react-icons/bi'

const About = () => {
  return <section id='about'>
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
            <HiOutlineDesktopComputer className="about__icon"/>
            <h5>Experience</h5>
            <small>6+ Months Coding</small>
          </article>

          <article className="about__card">
            <MdSchool className="about__icon"/>
            <h5>School</h5>
            <small>Hack Your Future Denmark</small>
          </article>

          <article className="about__card">
            <BiSearch className="about__icon"/>
            <h5>Open for</h5>
            <small>Internships and Junior positions</small>
          </article>
        </div>
        <p>Being a Full Stack Web Developer is much more creative and enjoyable than I expected it to be. After 4 years working in Marketing field, I’ve decided to switch paths and persue my dreams. I’ve started my journey with HackYourFuture school where I got to learn how to create beneficial web solutions using various technologies, such as react, mysql, expressJs etc. Now I'm looking into getting hands on codding in practice.</p>
      </div>
    </div>
    </section>;
};

export default About;
