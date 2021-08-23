import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { actionCreators as headerActionCreator } from "../header/store";

import SideMenuOptions from "./SideMenuOptions";

import "./SideMenu.css";

import {
  LocationOn as LocationOnIcon,
  HelpOutline as HelpOutlineIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Home as HomeIcon,
  Label as LabelIcon,
  NotificationsNone as NotificationsNoneIcon,
  Build as BuildIcon,
  CardGiftcard as CardGiftCardIcon,
} from "@material-ui/icons";

function SideMenu({ menuOpen, toggleMenuOpen, toggleMenuClose }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  if (windowWidth > 850) toggleMenuClose();

  return (
    <div className="sideMenu">
      <div className="sideMenu__upperWrapper">
        <SideMenuOptions Icon={HomeIcon} title={"Products"} />
        <SideMenuOptions Icon={LabelIcon} title={"Brands"} />
        <SideMenuOptions Icon={NotificationsNoneIcon} title={"Deals & Sales"} />
        <SideMenuOptions Icon={BuildIcon} title={"Services"} />
        <SideMenuOptions Icon={CardGiftCardIcon} title={"Gift Cards"} />
      </div>
      <div className="sideMenu__lowerWrapper">
        <Link
          //   to={loggedIn ? "/wishList" : "/login"}
          className="sideMenu__link"
          onClick={menuOpen ? toggleMenuClose : toggleMenuOpen}
        >
          <SideMenuOptions
            Icon={FavoriteBorderIcon}
            title={"Wish List"}
            upperWrapper={false}
            style={{ color: "#666", fontSize: "1.25rem" }}
          />
        </Link>
        <SideMenuOptions
          Icon={LocationOnIcon}
          title={"Store Finder"}
          upperWrapper={false}
          style={{ color: "#666", fontSize: "1.25rem" }}
        />
        <SideMenuOptions
          Icon={HelpOutlineIcon}
          title={"Help & Support"}
          upperWrapper={false}
          style={{ color: "#666", fontSize: "1.25rem" }}
        />
      </div>
    </div>
  );
}

const mapState = (state) => ({
  menuOpen: state.header.menuOpen,
});

const mapDispatch = (dispatch) => ({
  toggleMenuClose() {
    dispatch(headerActionCreator.toggleMenuClose());
  },
  toggleMenuOpen() {
    dispatch(headerActionCreator.toggleMenuOpen());
  },
});

export default connect(mapState, mapDispatch)(SideMenu);
