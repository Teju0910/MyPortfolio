import React from "react";

import Typewriter from "typewriter-effect";
import { ThemeContext } from "../../Context/theme";
import "./type.css";

export const Type = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [colorr, setcolor] = React.useState(
    themename === "light" ? "#000000" : "#000000"
  );

  React.useEffect(() => {
    if (themename === "dark") {
      setcolor("#000000");
    } else {
      setcolor("#23283e");
    }
  }, [themename]);

  return (
    <>
      <Typewriter
        colorr={colorr}
        options={{
          strings: ["A Full Stack Developer", "A MERN Stack Developer"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </>
  );
};
