import React from "react";
import Title from "./Title";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Software from "./Software";

export default function Resume() {
  return (
    <div className="resume">
      <Title />
      <AboutMe />
      <Experience />
      <Software /> 
    </div>
  );
}
