import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";


const data = [
  {
    id: 1,
    image: IMG1,
    title: "HYF Final Project",
    description: "React, Storybook, NodeJS, ExpressJS",
    github: "https://github.com/HackYourFuture-CPH/fp-class19",
    demo: "https://staging-webshop-class19-fp.herokuapp.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Meal Sharing App",
    description: "React, NodeJS, ExpressJS, MySQL",
    github: "https://github.com/nataliasowa/meal-sharing",
    demo: "https://meal-sharing-2021.herokuapp.com/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Monsters Search Application",
    description: "React, HTML, CSS",
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    image: IMG4,
    title: "Crwn Clothing Webshop",
    description: "React, Firebase",
    github: "https://github.com/nataliasowa/crwn-clothing-v2",
    demo: "https://stellar-beignet-7fc4be.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="projects">
      <h5>My recent work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, description, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <small>{description}</small>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
