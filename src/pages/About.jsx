import React from "react";
import { Link } from "react-router-dom";
import chima from "../assets/chima3.jpg";
import "../styles/About.css";
import SideLinks from "../components/SideLinks";
import LangItem from "../components/LangItem";
import { FrontList, FrameList, TechList } from "../helpers/LangList";

function About() {
  return (
    <div className="content">
      <h1
        className="firstHead"
        data-aos="fade-down"
        data-aos-duration="3000"
        data-aos-once="true"
      >
        About <span className="firstSpan">Me</span>
      </h1>
      <p className="subHead" data-aos="fade-down" data-aos-duration="1000">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms <br /> of programming and technology
      </p>
      <div
        className="containerAb"
        data-aos="fade-up"
        data-aos-duration="3000"
        data-aos-once="true"
      >
        <div className="social">
          <SideLinks />
        </div>
        <div className="about">
          <div className="aboutContent">
            <h1>
              Hi, My Name is <span className="hSpan">Chima Mbanefo</span>
            </h1>

            <p>
              A software developer with a passion for learning and creating.
            </p>
            <p>
              I specialize in Frontend Web Development,
               building the <br />Front-end of Web Applications
              that
              leads to the <br /> success of the overall product.
              <br /> Check out some of my work in the{" "}
              <a href="/projects">Projects</a> section.
              <br /> <br />
              Developing things for the web since 2021.
              <br />
              I'm currently based in Nigeria.
            </p>
            <Link to="/contact">
              <button>Contact Me</button>
            </Link>
          </div>
        </div>

        <div className="imageFrame">
          <img src={chima} alt="Logo" />
        </div>
      </div>
      
      <div
        className="skillContain"
        data-aos="fade-up"
        data-aos-duration="3000"
        data-aos-once="true"
      >
        <div className="skills">
          <h1 className="skillH">Skills</h1>
          <br />

          <p>Good Communications skills. </p>
          <p>Teamwork and collaborations.</p>
          <p>Computer programming and coding.</p>
          <p>Ability to learn fast and multi-task.</p>

          <br />
          <h1>Interest & hobbies</h1>
          <p>I love editing pictures and videos. </p>
          <p>I love photography and videographyr.</p>
          <p>I love playing basketball.</p>
          <p>I love coding.</p>
        </div>
        <div className="lang">
          <h1 className="langH">Languages & Technologies</h1>
          <br />
          <h2>Languages</h2>
          <div className="propsContainer">
            {FrontList.map((langItem, key) => {
              return (
                <LangItem
                  key={key}
                  icon={langItem.icon}
                  content={langItem.content}
                />
              );
            })}
          </div>
          <br />

          <h2>Frameworks</h2>
          <div className="propsContainer">
            {FrameList.map((langItem, key) => {
              return (
                <LangItem
                  key={key}
                  icon={langItem.icon}
                  content={langItem.content}
                />
              );
            })}
          </div>
          <br />

          <br />

          <h2>Technologies and others</h2>
          <div className="propsContainer">
            {TechList.map((langItem, key) => {
              return (
                <LangItem
                  key={key}
                  icon={langItem.icon}
                  content={langItem.content}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
