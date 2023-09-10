import React from "react";
import CV from "../../assets/nsowaCV.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a
        href="https://linkedin.com/in/natalia-sowa0205"
        target="_blank"
        className="btn btn-primary"
        rel="noreferrer"
      >
        Linkedin
      </a>
      <a
        href="https://github.com/nataliasowa"
        target="_blank"
        className="btn btn-primary"
        rel="noreferrer"
      >
        Github
      </a>
    </div>
  );
};

export default CTA;
