import React from "react";
import { MyImage } from "./MyImage";
import Education from "./Education";
import Reference from "./Reference";
import { Contacts } from "./Contacts";

export default function SideMenu() {
  return (
    <div className="side-menu">
      <MyImage />
      <Education />
      <Reference />
      <Contacts />
    </div>
  );
}
