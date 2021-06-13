import React from "react";
import Navigation from "./component/Navigation";

import heroImage from "./asset/Group 228.png";
import organicFood from "./asset/Group 207.png";
import organicFoodActive from "./asset/Group 205.png";

import "./sass/main.scss";

function App() {
  return (
    <div className="homePage">
      <header className="header">
        <Navigation />
        <div className="header__main">
          <div className="header__heroSection">
            <h2 className="heading-secondary">Healthy life with</h2>
            <h1 className="heading-primary">Nature Organic</h1>
            <p className="paragraph">
              Vegetables are the edible parts of a plant that is used in cooking
              or can be eaten now.
            </p>
            <button className="btn btn--main">Explore Now</button>
          </div>
          <div className="header__heroImage">
            <img
              src={heroImage}
              alt="Hero Image"
              className="header__heroImage--img"
            />
          </div>
        </div>
      </header>

      <section className="welcomeSection">
        <div className="welcomeSection__brief">
          <h2 className="welcomeSection__brief--title heading-secondary">
            Welcome to Nature
          </h2>
          <p className="welcomeSection__brief--text paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="welcomeSection__cards">
          <div className="welcomeSection__cards--card">
            <img
              src={organicFood}
              alt="Organic Food Card"
              className="welcomeSection__cards--card--img"
            />
          </div>
          <div className="welcomeSection__cards--card">
            <img
              src={organicFoodActive}
              alt="Organic Food Card"
              className="welcomeSection__cards--card--img"
            />
          </div>
          <div className="welcomeSection__cards--card">
            <img
              src={organicFood}
              alt="Organic Food Card"
              className="welcomeSection__cards--card--img"
            />
          </div>
          <div className="welcomeSection__cards--card">
            <img
              src={organicFood}
              alt="Organic Food Card"
              className="welcomeSection__cards--card--img"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
