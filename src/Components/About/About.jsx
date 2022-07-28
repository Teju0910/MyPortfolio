import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import DescriptionIcon from "@material-ui/icons/Description";
import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";

export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right">
          Hi, I am <span className="about__name">Tejasvini Patil</span>
        </h1>
        <div className="color">
          <Type />
        </div>

        <p className="about__desc" data-aos="fade-right">
          An aspiring full stack web developer with passion for building
          interactive experiences and bringing deep understanding of MERN stack
          and DSA which will help to grow company as well as my knowledge.
        </p>
        <div className="about__contact center">
          <a
            style={{ color: "#150f17" }}
            href="https://github.com/Teju0910"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            style={{ color: "#150f17" }}
            href="mailto:v.tejasvinipatil@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          {/* <a
            href="tel:+919260240885"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <PhoneIcon />
          </a> */}
          <a
            style={{ color: "#150f17" }}
            href="https://www.linkedin.com/in/tejasvini-patil/"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            style={{ color: "#150f17" }}
            href="https://drive.google.com/file/d/1V1PlWNTT9f01JnkcSpRe3MWNymmE07Bj/view?usp=sharing"
            aria-label="resume"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <DescriptionIcon />
          </a>
          {/* <a
            href=""
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a> */}
          <a
            style={{ color: "#150f17" }}
            href="https://goo.gl/maps/hKRUfLA6BbWYhUtEA"
            aria-label="location"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <PublicIcon />
          </a>
        </div>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
