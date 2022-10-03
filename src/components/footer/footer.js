import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import footerLogo1 from "..//..//assets/icons/footer-icons/footer-logo-lg.svg";
// import footerLogo2 from "..//..//assets/icons/footer-icons/footer-logo-sm.svg"
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer__section">
        <div className="footer__logo">
          {" "}
          <Link to={"/"}>
            {" "}
            <img className="logo" src={footerLogo1} alt="/" />
          </Link>
        </div>
        <div className="footer__socialNetwork">
 <span><AiOutlineInstagram color={"#c5bf9f"} />Instagram</span>
        <span><FaTelegramPlane  color={"#c5bf9f"} />Telegram</span>  
         <span> <AiOutlineFacebook color={"#c5bf9f"} />Facebook</span>
         <span><AiOutlineTwitter  color={"#c5bf9f"} />Twitter </span> 
        </div>
        <div className="footer__info">
          <p>all rights reserved.</p>
          <p>site made for AFED Group.</p>
        </div>
        <div className="footer__menu">
          <Link className="footer__page" to={"/"}>Home</Link>
          <Link className="footer__page" to={"/about"}>About</Link>
          <Link className="footer__page" to={"/offer"}>Offer</Link>
          <Link className="footer__page" to={"/pricelist"}>Pricelist</Link>
          <Link className="footer__page" to={"/contact"}>Contacts</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
