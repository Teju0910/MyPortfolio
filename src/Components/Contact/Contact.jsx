import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsTwitter, BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { ThemeContext } from "../../Context/theme";

export const Contact = () => {
  const [{ themename, toggeltheme }] = React.useContext(ThemeContext);
  return (
    <>
      <div className={`${themename} section`}>
        <h2 className="section__title" data-aos="fade-right">
          Get in <span className="different">Touch</span>
        </h2>
        <div className="contactcontainer" data-aos="fade-right">
          <a
            href="https://www.linkedin.com/in/tejasvini-patil/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="linkedin" />
          </a>
          <a
            href="https://github.com/Teju0910"
            target="_blank"
            rel="noreferrer"
          >
            <VscGithub className="github" />
          </a>
          <a
            href="https://twitter.com/tejupatil330"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter className="twitter" />
          </a>
          {/* <a href="tel:+91" target="_blank" rel="noreferrer">
            <BsFillTelephoneFill className="phone" />
            
          </a> */}
        </div>
        <div>
          <div id={`  ${themename} `} className="mine">
            <p>Email:v.tejasvinipatil@gmail.com</p>
          </div>
          {/* <div id={`${themename} `} className = "mine1"><p>Phone:+919260240885</p></div> */}
        </div>
      </div>
    </>
  );
};
