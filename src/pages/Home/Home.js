import React from "react";
import "./index.css";
import Header from "..//../components/header/Header";
import Footer from "..//..//components/footer/Footer";
import Chart from "..//..//assets/icons/home-icons/Chart.svg";
import Activity from "..//..//assets/icons/home-icons/Activity.svg";
import Graph from "..//..//assets/icons/home-icons/Graph.svg";
import Document from "..//..//assets/icons/home-icons/Document.svg";
import Shield from "..//..//assets/icons/home-icons/Shield.svg";
import Password from "..//..//assets/icons/home-icons/Password.svg";

function Home() {
  return (
    <>
      <Header />
      <div className="home__banner">
        <div className="home__banner__title">
          <div class="patterns">
            <svg width="100%" height="100%">
              <text x="50%" y="60%" text-anchor="middle" fill="black">
                Welcome to Afed group!
              </text>
            </svg>
            <h2>We are glad see to see you on our website.</h2>
          </div>
        </div>
      </div>
      <div className="advantages__section">
        <div className="advantages__title">Our advantages</div>
        <div className="advantages__intro">
          <div class="advantages__card">
            <img src={Shield} alt="/" />
            <h1>Daring to do our best work</h1>
          </div>
          <div class="advantages__card">
            <img src={Password} alt="/" />
            <h1>We work for quality</h1>
          </div>
          <div class="advantages__card">
            <img src={Document} alt="/" />
            <h1>The uniqueness of finishing works</h1>
          </div>
        </div>
      </div>
      <div className="goals__section">
        <div className="goals__title">Mission, vision and goals.</div>
        <div className="goals__content">
          <div className="goals__card">
            <div className="card__left">
              <div className="first__card">
                <div className="goals__img">
                  {" "}
                  <img src={Chart} alt="/" />{" "}
                </div>

                <p>
                  The mission of the Center is to develop a competent strategy
                  for a long time. Our core values ​​are purposefulness, unity,
                  innovation, precision and development.
                </p>
              </div>
              <div className="second__card">
                <img src={Activity} alt="/" />
                <p>
                  The Center's strategy is digital technologies - the future of
                  mankind. They contribute to the development of all spheres of
                  human life and the state. Digitalization of data will increase
                  the country's development indicators.
                </p>
              </div>
            </div>
            <div className="card__right">
              <div className="thrid__card">
                <img src={Graph} alt="/" />
                <p>
                  The vision of the Center is not to stop there and constantly
                  work on self-improvement. The results of successful work
                  inspire us to new ideas and methods for their implementation.
                </p>
              </div>
              <div className="fourth__card">
                <img src={Document} alt="/" />
                <p>
                  The Center's strategy is digital technologies - the future of
                  mankind. They contribute to the development of all spheres of
                  human life and the state. Digitalization of data will increase
                  the country's development indicators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Home;
