import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import "./header.css"

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/junkeoncho/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/chojunkeon" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
}

export default HeaderSocials