import React from "react";
import "./offer.css";
import Header from "../../components/header/Header";
import offerMenuImg1 from "../../images/offer/offer-product-1.png";
import offerMenuImg2 from "../../images/offer/offer-product-2.png";

function Offer() {
  return (
    <div className="offer__page">
      <Header />
      <div className="offer__banner wrapper">
        <div className="offer__banner__heading">
          <h1>OPPORTUNITY</h1>
        </div>
        <hr className="banner__line" />
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
    </div>
  );
}

export default Offer;
