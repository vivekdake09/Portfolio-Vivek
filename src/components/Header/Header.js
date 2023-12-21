import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";
import Resume from "../../data/Resume_Ajinkya_Jadhav_intern_FullStackDev.pdf"
import logos_white from "../../assets/Images/Ajinkya Jadhav-logos_white.png"

const Header = ({ toggle }) => {
  return (
    <div className="Container" style={{padding: 0}}>
      <Nav>
        <Logo to="/">
          <img
            src={logos_white}
            alt="logo"
          />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects">
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about">
            About
          </NavLink>
          <NavLink className="menu-item" to="contact">
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
        <a
          className="btn PrimaryBtn"
          href={Resume}
          download="Resume-Ajinkya-Jadhav-FullStack-Dev-PDF-document"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
