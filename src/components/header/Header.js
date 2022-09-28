import React from "react";
import "./header.css";
import headerLogo from "../../assets/images/header-logo.svg";
function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img className="logo" src={headerLogo} alt="/" />
      </div>
      <div className="header__menu">menu2</div>
      <div className="header__contact">contact</div>
    </div>
  );
}

export default Header;
