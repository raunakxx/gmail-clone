import React from "react";
import "./Section.css";
import "./EmailList.css";

function Section({ Icon, title, color, selected }) {
  return (
    <div
      className={`section ${selected ? "section--selected" : ""}`}
      style={{
        borderBottom: `3px solid ${selected ? color : "transparent"}`,
        color: `${selected ? color : "inherit"}`,
      }}
    >
      <Icon />
      <h4>{title}</h4>
    </div>
  );
}

export default Section;
