import React, { useState } from "react";
import "./header.css";
import { BsTelephoneFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import headerLogo1 from "../../assets/icons/header-icons/header-logo-lg.svg";
import headerLogo2 from "../../assets/icons/header-icons/header-logo-sm.svg";
import Translator from "../translator/Translator";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="header">
      <div className="header__content__left">
        <div className="header__logo">
          <Link to={"/"}>
            <picture>
              <source srcset={headerLogo2} media="(max-width: 400px)" />
              <img className="logo" src={headerLogo1} alt="/" />
            </picture>
          </Link>
        </div>
        <div className="header__menu">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/offer"}>Offer</Link>
          <Link to={"/pricelist"}>Pricelist</Link>
          <Link to={"/contact"}>Contacts</Link>
        </div>
        <div className="header__menu__responsive">
          {openMenu ? (
            <div className="header__routing__responsive">
              <Link to={"/"}>Home</Link>
              <Link to={"/about"}>About</Link>
              <Link to={"/offer"}>Offer</Link>
              <Link to={"/pricelist"}>Pricelist</Link>
              <Link to={"/contact"}>Contacts</Link>
            </div>
          ) : null}
          <button className="header__button__responsive" onClick={toggleMenu}>
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
      <div className="header__right">
        <div className="contact__us">
          <a href="tel: +998 77 777 77 77">
            <span>
              <BsTelephoneFill />
            </span>
            call center
          </a>
        </div>
        <div className="multiply__language">{/* <Translator /> */}</div>
      </div>
    </div>
  );
}

export default Header;
