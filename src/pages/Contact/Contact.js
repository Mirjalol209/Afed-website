import React from "react";
import "./index.css";
import Footer from "..//..//components/footer/Footer";
import Header from "..//..//components/header/Header";
import Map from "..//..//components/map/Map";
import { Link } from "react-router-dom";
import profileImg from "..//..//assets/images/contact-images/contact-profile.jpg";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import ContactMap from "..//..//components/map/Map";
function Contact() {
  return (
    <div className="contact__page">
      <Header />
      <div className="contact__heading wrapper">
        <h1>contact us</h1>
      </div>
      <hr className="contact__line line wrapper" />
      <div className="contact__page__content wrapper">
        <div className="contact__first info">
          <div className="card__border">
            <h3>Our Address</h3>
            <p>
              <span>street</span>Afed
            </p>
            <h3>Our Gmail</h3>
            <p>afedgroup@gmail.com</p>
            <h3>Our Contact</h3>
            <p>+7 (843) 202-37-37</p>
            <hr className="line card__line" />
            <div className="card__icons">
              <Link to="*">
                <AiOutlineInstagram />
              </Link>
              <Link to="*">
                <FaTelegramPlane />
              </Link>
              <Link to="*">
                <AiOutlineFacebook />
              </Link>
            </div>
          </div>
        </div>
        <div className="contact__second info">
          <div className="card__border">
            <h3>Operating mode</h3>
            <p>
              <span>from ~</span> Monday
            </p>
            <p>
              <span>to ~</span> Saturday
            </p>
            <h3>Working hours</h3>
            <p>
              <span>from ~</span> 8.00
            </p>
            <p>
              <span>to ~</span> 18.00
            </p>
            <h3>Rest</h3>
            <p>
              <span>from ~</span> 12.00
            </p>
            <p>
              <span>to ~</span> 13.00
            </p>
          </div>
        </div>
        <div className="contact__img">
          <img src={profileImg} alt="/" />
        </div>
        <div className="contact__map">
          <ContactMap />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
