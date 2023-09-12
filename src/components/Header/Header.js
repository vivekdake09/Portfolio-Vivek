import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";
import Resume from "../../data/Resume.pdf"

const Header = ({ toggle }) => {
  return (
    <div className="Container" style={{padding: 0}}>
      <Nav>
        <Logo to="/">
          <img
            src="/Ajinkya Jadhav-logos_white.png"
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
          download="Resume-PDF-document"
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
