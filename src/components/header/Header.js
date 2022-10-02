import React, { useState } from "react";
import "./header.css";
import { BsTelephone } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import headerLogo1 from "../../assets/icons/header-icons/header-logo-lg.svg";
import headerLogo2 from "../../assets/icons/header-icons/header-logo-sm.svg";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__logo">
          <Link to={"/"}>
            <picture>
              <source srcset={headerLogo2} media="(max-width: 400px)" />
              <img className="logo" src={headerLogo1} alt="/" />
            </picture>
          </Link>

          <div className="header__menu__responsive">
            {openMenu ? (
              <div className="header__routing__responsive">
                <Link className="header__menu" to={"/"}>Home</Link>
                <Link className="header__menu" to={"/about"}>About</Link>
                <Link className="header__menu" to={"/offer"}>Offer</Link>
                <Link className="header__menu" to={"/pricelist"}>Pricelist</Link>
                <Link className="header__menu" to={"/contact"}>Contacts</Link>
              </div>
            ) : null}
            <button className="header__button__responsive" onClick={toggleMenu}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>

        <div className="header__menu">
          <Link className="header__menu" to={"/"}>Home</Link>
          <Link className="header__menu" to={"/about"}>About</Link>
          <Link className="header__menu" to={"/offer"}>Offer</Link>
          <Link className="header__menu" to={"/pricelist"}>Pricelist</Link>
          <Link className="header__menu" to={"/contact"}>Contacts</Link>
        </div>
      </div>
      <div className="header__contact">
        <span>
          <BsTelephone />
        </span>
        <p>+7 (843) 202-37-37</p>
        <div className="multiply__language">Eng</div>
      </div>
    </div>
  );
}

export default Header;
