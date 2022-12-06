import React from "react";
import { MyImage } from "./MyImage";
import Education from "./Education";
import Reference from "./Reference";
import Gmail from "./Gmail";

export default function SideMenu() {
  return (
    <div className="side-menu">
      <MyImage />
      <br />
      <Education />
      <br />
      <Reference />
      <br />
      <Gmail />
    </div>
  );
}
