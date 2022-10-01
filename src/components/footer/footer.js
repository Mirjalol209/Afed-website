import React from "react";
import "./footer.css"
import { Link } from "react-router-dom";
import footerLogo1 from "..//..//assets/icons/footer-icons/footer-logo-lg.svg"
// import footerLogo2 from "..//..//assets/icons/footer-icons/footer-logo-sm.svg"
import {AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter} from "react-icons/ai";
import {FaTelegramPlane} from "react-icons/fa";


function Footer (){
 return(
    <footer>
    <div className="footer__section">  
   
     <div className="footer__logo"> <Link to={"/"}> <img className="logo" src={footerLogo1} alt="/" /></Link>  
</div>
      <div className="footer__socialNetwork"><AiOutlineInstagram size={'30px'} color={'#c5bf9f'}/> <FaTelegramPlane size={'30px'} color={'#c5bf9f'}/> <AiOutlineFacebook size={'30px'} color={'#c5bf9f'}/> <AiOutlineTwitter size={'30px'} color={'#c5bf9f'}/></div>
        <div className="footer__info"><p>all rights reserved.</p>
        <p>site made for AFED Group.</p>
        </div>
           <div className="footer__menu"> 
           <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/offer"}>Offer</Link>
          <Link to={"/pricelist"}>Pricelist</Link>
          <Link to={"/contact"}>Contacts</Link></div>
           </div>
</footer>
 )
  
};

export default Footer;
