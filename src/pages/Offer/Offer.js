import React from "react";
import "./offer.css";
import Header from "../../components/header/Header";
import Footer from "..//../components/footer/Footer";
import offerMenuImg1 from "../../assets/images/offer-images/offer-product-1.png";
import offerMenuImg2 from "../../assets/images/offer-images/offer-product-2.png";

function Offer() {
  return (
    <div className="offer__page">
      <Header />
      <div className="offer__banner wrapper">
        <div className="offer__banner__heading">
          <h1>OPPORTUNITY</h1>
        </div>
        <hr className="line" />
      </div>
      <div className="offer__banner__menu wrapper">
        <img src={offerMenuImg1} alt="/" />
        <img src={offerMenuImg2} alt="/" />
        <img src={offerMenuImg1} alt="/" />
        <img src={offerMenuImg2} alt="/" />
        <img src={offerMenuImg1} alt="/" />
        <img src={offerMenuImg2} alt="/" />
        <img src={offerMenuImg1} alt="/" />
        <img src={offerMenuImg2} alt="/" />
        <img src={offerMenuImg1} alt="/" />
        <img src={offerMenuImg2} alt="/" />
        <img src={offerMenuImg1} alt="/" />
        <img src={offerMenuImg2} alt="/" />
      </div>
      <Footer />
    </div>
  );
}

export default Offer;
