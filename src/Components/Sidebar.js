import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Sidebar.css";

import SidebarOptions from "./SidebarOptions";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Sidebar() {
  return (
    <div className="sidebar">
      
      <div className="sidebar_child">
        <Link
          to="/homepage"
          style={{
            textDecoration: "none",
            color: "inherit",
            height: "auto",
          }}
        >
          <SidebarOptions Icon={HomeIcon} text="Home" />
        </Link>
        <Link
          to="/explore"
          style={{
            textDecoration: "none",
            color: "inherit",
            height: "auto",
          }}
        >
        <SidebarOptions Icon={SearchIcon} text="Explore" />
        </Link>
        <SidebarOptions Icon={NotificationsNoneIcon} text="Notifications" />
        <SidebarOptions Icon={MailOutlineIcon} text="Messages" />
        <SidebarOptions Icon={BookmarkBorderIcon} text="Bookmarks" />
        <SidebarOptions Icon={ListAltIcon} text="Lists" />
        <Link
          to="/profile"
          style={{
            textDecoration: "none",
            color: "inherit",
            height: "auto",
          }}
        >
          <SidebarOptions Icon={PermIdentityIcon} text="Profile" />
        </Link>
        <SidebarOptions Icon={MoreHorizIcon} text="More" />
      </div>
    </div>
  );
}

export default Sidebar;
