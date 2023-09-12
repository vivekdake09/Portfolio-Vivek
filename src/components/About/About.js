import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello, I'm <strong> Ajinkya Jadhav </strong>, a driven software engineering student eager to embark on an exciting journey in the tech industry. Currently pursuing my Computer Science Degree at Pune University, I am passionate about crafting innovative solutions through code.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            I'm excited about the prospect of gaining practical experience through an internship, where I can contribute my skills, learn from industry professionals, and work on projects that have a tangible impact. If you're looking for a motivated and adaptable software engineering intern, let's connect and explore how I can contribute to your team.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              Working collaboratively within a team towards a shared objective has been an incredibly rewarding and unique experience for me. I am eager to continue exploring exciting projects in the future, with a particular interest in web development and cross-platform mobile development.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
