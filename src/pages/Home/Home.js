import React from "react";
import Header from "../../components/header/Header";
import "./index.css";
function Home() {
  return (
    <>
      <Header />
      <div className="home__banner">
        <div className="banner__title">
          <h1>Fashion passes, style remains.</h1>
          <p>
            To enter into good society, one must wear a tailcoat, uniform or
            livery.
          </p>
        </div>
      </div>
    </>
  );
}
export default Home;
