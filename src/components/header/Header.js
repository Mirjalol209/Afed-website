import React from "react";
import "./header.css";
import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";
import headerLogo from "../../assets/images/header-logo.svg";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__logo">
          <img className="logo" src={headerLogo} alt="/" />
        </div>
        <div className="header__menu">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/offer"}>Offer</Link>
          <Link to={"/primelist"}>Primelist</Link>
          <Link to={"/contact"}>Contacts</Link>
        </div>
      </div>
      <div className="header__contact">
        <span>
          <BsTelephone />
        </span>
        <p>+7 (843) 202-37-37</p>
        <div className="multiply__language">Eng,Rus,Est</div>
      </div>
    </div>
  );
}

export default Header;
