import React from 'react'
import './footer.css'
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Jun Keon Cho
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/junkeoncho/" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/chojunkeon" target="_blank">
          <BsGithub />
        </a>
      </div>
    </footer>
  );
}

export default Footer