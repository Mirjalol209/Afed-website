import React from "react";
import Footer from "..//..//components/footer/Footer";
import Header from "..//..//components/header/Header"
import aboutImg from "..//..//assets/images/about-images/about-us-img.png"
import professionalism from "..//..//assets/icons/about-icons/professionalism.svg"
import experience from "..//..//assets/icons/about-icons/experience.svg"
import efficiency from "..//..//assets/icons/about-icons/efficiency.svg"
import quality from "..//..//assets/icons/about-icons/quality.svg"
import location from "..//..//assets/icons/about-icons/location.svg"
import managementZafar from "..//..//assets/images/about-images/management-zafar.jpg"
import metro from "..//..//assets/icons/about-icons/metro.svg"
import loupe from "..//..//assets/icons/about-icons/loupe.svg"
import locationImg from "..//..//assets/images/about-images/future-location.jpg"

import "./index.css";
function About() {
  return (
    <>
    <Header/>
      <div className="about__section wrapper">
      <div className="about__title"><h1>About us</h1></div> 
       <hr className="line wrapper about__line__first"  />
        <div className="about__us__content">
           <div className="about__img">
            <img src={aboutImg} alt="/" height={"400px"} className="aboutImg__responsive" />
           </div>
             <div className="about__text">
               <div className="activities">Our activities</div> 
               The Center is an organization that creates effective and transparent mechanisms for the development and implementation of projects in the field of information and communication technologies within the framework of the Electronic Government system, as well as provides a high-quality examination of projects, design and technical documentation in this area.
         </div>
        </div>
        <hr className="line wrapper about__line" />
        <div className="areas__section wrapper">
          <div className="areas__title">
            Arias of activity of the Center
          </div>
    <div className="areas__text">The Center implements the main directions of reforms in the digital economy and improvement of the "Electronic Government" system as part of the development of the "Electronic Government" system and the "Digital Uzbekistan-2030" program (hereinafter referred to as the programs), in particular:
</div>
      <div className="areas__card">
        <div className="areas__card__first">
          <div className="card__icon"><img src={professionalism} alt="/" /></div>
          <div className="card__info">Loren ipsum</div>
        </div>
        <div className="areas__card__second">
        <div className="card__icon">
         <img src={experience} alt="/" /> 
        </div>
          <div className="card__info">An experience</div>
        </div>
        <div className="areas__card__third">
        <div className="card__icon">
          <img src={efficiency} alt="/" />
        </div>
          <div className="card__info">Efficiency</div>
        </div>
        <div className="areas__card__fourth">
        <div className="card__icon"><img className="about__icon" src={quality} alt="/" /></div>
          <div className="card__info">Quality</div>
        </div>
      </div>
        </div>
         <div className="management__title wrapper"><h1>Management</h1></div>
        <div className="management wrapper">
          <div className="management__card__first">
            <div className="card__img"><img src={managementZafar} alt="/" height={"130px"}/></div>
            <div className="management__info__first">
              <div className="card__management__names">
                 <h1>Kurbanov Zafar Akbarovich</h1>
              <p>job title</p>
              </div>
                  <div className="management__contact">
                    <span>E-mail</span>
                      <span>Phone</span>
                      <span>Reciptions</span>
                  </div> 
            </div>

          </div>
          <div className="management__card__second">
            <div className="card__img">
            <img src={managementZafar} alt="/" height={"130px"}/>
              </div>        
            <div className="management__info__second">
              <div className="card__management__names">
              <h1>Kurbanov Zafar Akbarovich</h1>
              <p>job title</p>    
              </div>
              <div className="management__contact">
                    <span>E-mail</span>
                      <span>Phone</span>
                      <span>Reciptions</span>
                  </div> 

            </div>
          </div>
        </div>
        <div className="future__location wrapper">
        <div className="future__location__title"><h1>Our future locations</h1></div>
           <div className="future__location__card wrapper">
            <div className="future__location__first wrapper">
              <div className="future__location__info">
                 <div className="location__subtitle">
                 <h1>Slauson Avenue</h1>
                 </div>
                 <div className="location__content">
                   <span><img src={location} alt="/"/><h1>Street</h1></span>
                 <span><img src={metro} alt="/"/><h1>Metro</h1></span>
                 <span><img src={loupe} alt="/"/><h1>Reference point</h1></span>
                 </div>
                
                   
              </div>
              <div className="future__main__img">
                <img src={locationImg} alt="/"  />
              </div>
            </div>
            <div className="future__location__second wrapper">
              <div className="future__location__info">
                 <div className="location__subtitle">
                 <h1>Slauson Avenue</h1>
                 </div>
                 <div className="location__content">
                   <span><img src={location} alt="/"/><h1>Street</h1></span>
                 <span><img src={metro} alt="/"/><h1>Metro</h1></span>
                 <span><img src={loupe} alt="/"/><h1>Reference point</h1></span>
                 </div>
                
                   
              </div>
              <div className="future__main__img">
                <img src={locationImg} alt="/"  />
              </div>
            </div>
            <div className="future__location__third wrapper">
              <div className="future__location__info">
                 <div className="location__subtitle">
                 <h1>Slauson Avenue</h1>
                 </div>
                 <div className="location__content">
                   <span><img src={location} alt="/"/><h1>Street</h1></span>
                 <span><img src={metro} alt="/"/><h1>Metro</h1></span>
                 <span><img src={loupe} alt="/"/><h1>Reference point</h1></span>
                 </div>
                
                   
              </div>
              <div className="future__main__img">
                <img src={locationImg} alt="/"  />
              </div>
            </div>

           </div>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default About;
