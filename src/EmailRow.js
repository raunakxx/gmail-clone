import React from "react";
import "./EmailRow.css";

import { IconButton } from "@material-ui/core";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Checkbox from "@material-ui/core/Checkbox";
import { useNavigate } from "react-router-dom";

function EmailRow({ title, id, subject, description, time }) {
  const navigate = useNavigate(); // Change this line
  return (
    <div onClick={() => navigate("/mail")} className="emailRow">
      {" "}
      {/* Adjust the route path */}
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>
      <div className="emailRow__message">
        <div className="emailRow__info">
          <h3 className="emailRow__title">{title}</h3>
          <h4>{subject}</h4>
          <span className="emailRow__description">{description}</span>
        </div>
        <div className="emailRow__time">{time}</div>
      </div>
    </div>
  );
}

export default EmailRow;
