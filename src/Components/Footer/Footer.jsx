import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";

export const Footer = () => {
  const [{ themename, toggeltheme }] = React.useContext(ThemeContext);
  return (
    <>
      <div className = {` ${themename} section `}>
        <a
          href="https://github.com/Teju0910"
          rel="noreferrer"
          target="_blank"
        >
          <h3  className = {` ${themename} footer`}>Made By Tejasvini Patil</h3>
        </a>
      </div>
    </>
  );
};
