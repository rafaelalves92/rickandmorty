import { useState } from "react";
import { RiCopyrightLine } from "react-icons/ri";
import { BiArrowToTop } from "react-icons/bi";
import Logo from "../../assets/rickandmorty-logo.svg";
import "./styles.scss";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="main-footer">
      <div className="footer">
        <h2>Rick And Morty</h2>
        <div>
          <span>
            <RiCopyrightLine />
          </span>
          <p>2023 - All rights reserved.</p>
        </div>
        <button>
          <BiArrowToTop
            className="button-top"
            onClick={() => handleScrollToTop()}
          />
        </button>
      </div>
    </div>
  );
};

export default Footer;
