import React from "react";
import githubLogo from "../images/Github-logo.png";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <p className="creator">
        Created By {""}
        <a
          href="https://github.com/DevKarenC/react-memory-card-game"
          target="blank"
        >
          DevKarenC {""}
          <img src={githubLogo} alt="Github Logo" className="github-logo" />
        </a>
      </p>
      <p className="copyright"> All images copyright owned by Viacom.</p>
    </footer>
  );
};

export default Footer;
