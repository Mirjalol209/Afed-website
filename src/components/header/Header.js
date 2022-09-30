import React, { useState } from "react";
import "./header.css";
import { BsTelephone } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import headerLogo1 from "../../assets/images/header-images/header-logo-lg.svg";
import headerLogo2 from "../../assets/images/header-images/header-logo-lg.svg";



function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__logo">

          <picture>
            <source srcset={headerLogo2} media="(max-width: 400px)" />
            <img className="logo" src={headerLogo1} alt="/" />
          </picture>

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

        <div className="header__menu">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/offer"}>Offer</Link>
          <Link to={"/pricelist"}>Pricelist</Link>
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