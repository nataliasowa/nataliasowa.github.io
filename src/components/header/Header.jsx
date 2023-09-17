import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me2.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <h2>Hey!</h2>
        <h1>I'm Natalia</h1>
        <h2 className="text-light">Frontend Software Engineer</h2>
        <br />
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
  );
};

export default Header;
