import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SideMenu from "../sideMenu/SideMenu";

import { actionCreators } from "./store";

import "./common.css";

import HeaderOptions from "./HeaderOptions";

import {
  LocationOn as LocationOnIcon,
  HelpOutline as HelpOutlineIcon,
  Search as SearchIcon,
  FavoriteBorder as FavoriteBorderIcon,
  AccountCircle as AccountCircleIcon,
  ShoppingCart as ShoppingCartIcon,
  Home as HomeIcon,
  Label as LabelIcon,
  NotificationsNone as NotificationsNoneIcon,
  Build as BuildIcon,
  CardGiftcard as CardGiftCardIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
} from "@material-ui/icons";

import logo from "../../../static/logo.jpg";

function Header({
  menuOpen,
  itemsAmountInCart,
  toggleMenuOpen,
  toggleMenuClose,
}) {
  return (
    <div className="header">
      <nav style={{ backgroundColor: "#ffec0f" }}>
        <div className="header__wrapperLine__1">
          <div
            className="header__mobileWrapper"
            onClick={menuOpen ? toggleMenuClose : toggleMenuOpen}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
            <p className="header__mobileText">Menu</p>
          </div>

          <div className="header__wrapper">
            <LocationOnIcon className="header__icon" />
            <p className="header__storeFinder">Store Finder</p>
            <Link to="/" onClick={menuOpen && toggleMenuClose}>
              <img src={logo} alt="" className="header__phoneImg" />
            </Link>
          </div>

          <div className="header__wrapper">
            <HelpOutlineIcon className="header__icon" />
            <p className="header__storeFinder">Help & Support</p>
            <Link
              to="/login"
              className="header__link"
              onClick={menuOpen && toggleMenuClose}
            >
              <div className="header__mobileWrapper">
                <AccountCircleIcon />
                {/* {loggedIn && <p>{userName}</p>} */}
                <p className="header__mobileText">Account</p>
              </div>
            </Link>
            <Link
              to="/cart"
              className="header__link"
              onClick={menuOpen && toggleMenuClose}
            >
              <div className="header__mobileWrapper">
                <ShoppingCartIcon />
                {itemsAmountInCart > 0 && (
                  <p className="header__mobileQuantity">{itemsAmountInCart}</p>
                )}
                <p className="header__mobileText">Cart</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="header__wrapperLine__2">
          <Link to="/">
            <img src={logo} alt="" className="pcImg" />
          </Link>
          <div className="header__navSearchWrapper">
            <SearchIcon className="header__searchIcon" />
            <input type="text" placeholder="Search products" />
          </div>
          <div className="header__iconsWrapper">
            <Link
              // to={loggedIn ? "/wishList" : "/login"}
              to="/wishList"
              className="header__link"
            >
              <div className="header__subIconWrapper">
                <FavoriteBorderIcon />
                <p style={{ cursor: "pointer" }}>Wish List</p>
              </div>
            </Link>
            <Link to="/login" className="header__link">
              <div className="header__subIconWrapper">
                <AccountCircleIcon />
                {/* {loggedIn && <p>{userName}</p>} */}
                <p style={{ cursor: "pointer" }}>My Account</p>
              </div>
            </Link>
            <Link to="/cart" className="header__link">
              <div className="header__subIconWrapper">
                <ShoppingCartIcon />
                {itemsAmountInCart > 0 && (
                  <p className="header__PcQuantity">{itemsAmountInCart}</p>
                )}
                <p style={{ cursor: "pointer" }}>My Cart</p>
              </div>
            </Link>
          </div>
        </div>
      </nav>

      <nav style={{ backgroundColor: "#000" }}>
        <div className="header__wrapperLine__3">
          <HeaderOptions Icon={HomeIcon} title={"Products"} />
          <HeaderOptions Icon={LabelIcon} title={"Brands"} />
          <HeaderOptions Icon={NotificationsNoneIcon} title={"Deals & Sales"} />
          <HeaderOptions Icon={BuildIcon} title={"Services"} />
          <HeaderOptions Icon={CardGiftCardIcon} title={"Gift Cards"} />
        </div>
      </nav>

      {menuOpen && <SideMenu />}
    </div>
  );
}

const mapState = (state) => ({
  menuOpen: state.header.menuOpen,
  itemsAmountInCart: state.cart.totalAmount,
});

const mapDispatch = (dispatch) => ({
  toggleMenuOpen() {
    dispatch(actionCreators.toggleMenuOpen());
  },
  toggleMenuClose() {
    dispatch(actionCreators.toggleMenuClose());
  },
});

export default connect(mapState, mapDispatch)(Header);
