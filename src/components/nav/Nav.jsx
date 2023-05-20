import React from "react";
import { useState } from "react";
import "./nav.css";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { TbBook2 } from "react-icons/tb";
import { MdOutlineDesignServices } from "react-icons/md";
import { AiOutlineContacts } from "react-icons/ai";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <BiHomeAlt />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <AiOutlineContacts />
      </a>
    </nav>
  );
};

export default Nav;
