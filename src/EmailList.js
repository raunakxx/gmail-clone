import React from "react";
import "./EmailList.css";
import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import SettingsIcon from "@mui/icons-material/Settings";
import Section from "./Section";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import EmailRow from "./EmailRow";

function EmailList() {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="#1A73EB" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </div>
      <div className="emailList__list">
        <EmailRow
          title="google"
          subject="get your 2 factor authentication now!!"
          description="this is a test"
          time="10pm"
        />
        <EmailRow
          title="Facebook"
          subject="New message from a friend"
          description="Hey, how are you doing?"
          time="12:30pm"
        />

        <EmailRow
          title="Twitter"
          subject="Your tweet was retweeted"
          description="Check out who retweeted your tweet!"
          time="11:45am"
        />

        <EmailRow
          title="Instagram"
          subject="New post from your favorite account"
          description="See the latest updates from your favorite account!"
          time="9:15am"
        />

        <EmailRow
          title="LinkedIn"
          subject="New connection request"
          description="Someone wants to connect with you on LinkedIn"
          time="8:50am"
        />

        <EmailRow
          title="Amazon"
          subject="Your order has shipped"
          description="Your package is on its way! Track it now."
          time="Yesterday"
        />
      </div>
    </div>
  );
}

export default EmailList;
