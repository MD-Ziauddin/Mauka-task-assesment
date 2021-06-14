import React, { useState, useEffect } from "react";

import StarBorderIcon from "@material-ui/icons/StarBorder";

import Navigation from "./component/Navigation";
import Footer from "./component/Footer";

import heroImage from "./asset/Group 228.png";
import organicFood from "./asset/Group 207.png";
import organicFoodActive from "./asset/Group 205.png";
import greenaryImage1 from "./asset/Group 39.png";
import greenaryImage2 from "./asset/Group 64.png";
import greenaryImage3 from "./asset/Group 55.png";
import userImage from "./asset/user.png";
import product1 from "./asset/product1.png";
import product2 from "./asset/product2.png";
import product3 from "./asset/product3.png";

import "./sass/main.scss";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

function App() {
  const { height, width } = useWindowDimensions();
  console.log(width);

  return (
    <>
      {width >= 1200 ? (
        <div className="homePage">
          <header className="header">
            <Navigation />
            <div className="header__main">
              <div className="header__heroSection">
                <h2 className="heading-secondary">Healthy life with</h2>
                <h1 className="heading-primary">Nature Organic</h1>
                <p className="paragraph">
                  Vegetables are the edible parts of a plant that is used in
                  cooking or can be eaten now.
                </p>
                <button className="btn btn--main">Explore Now</button>
              </div>
              <div className="header__heroImage">
                <img
                  src={heroImage}
                  alt="HeroImage"
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

          <section className="presentationSection">
            <div className="presentationSection__brief">
              <h2 className="presentationSection__brief--title heading-secondary">
                Proudly presented by
              </h2>
              <p className="presentationSection__brief--text paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="presentationSection__cards">
              <div className="presentationSection__cards--card">
                <img
                  src={greenaryImage1}
                  alt="GrenaryImage"
                  className="presentationSection__cards--card--img"
                />
              </div>

              <div className="presentationSection__cards--card">
                <img
                  src={greenaryImage2}
                  alt="GrenaryImage"
                  className="presentationSection__cards--card--img"
                />
              </div>

              <div className="presentationSection__cards--card">
                <img
                  src={greenaryImage3}
                  alt="GrenaryImage"
                  className="presentationSection__cards--card--img"
                />
              </div>

              <div className="presentationSection__cards--card">
                <img
                  src={greenaryImage2}
                  alt="GrenaryImage"
                  className="presentationSection__cards--card--img"
                />
              </div>

              <div className="presentationSection__cards--card">
                <img
                  src={greenaryImage1}
                  alt="GrenaryImage"
                  className="presentationSection__cards--card--img"
                />
              </div>
            </div>
            <div className="presentationSection__selection">
              <span className="presentationSection__selection--dot"></span>
              <span className="presentationSection__selection--dot"></span>
              <span className="presentationSection__selection--dot"></span>
              <span className="presentationSection__selection--dot"></span>
            </div>
          </section>

          <section className="bigSection">
            <section className="review">
              <div className="review__user">
                <img
                  src={userImage}
                  alt="UserImage"
                  className="review__user--img"
                />
                <p className="review__user--name paragraph">Jane Doe</p>
              </div>
              <div className="review__star">
                <StarBorderIcon style={{ color: "#00dbd0" }} fontSize="large" />
                <StarBorderIcon style={{ color: "#00dbd0" }} fontSize="large" />
                <StarBorderIcon style={{ color: "#00dbd0" }} fontSize="large" />
                <StarBorderIcon style={{ color: "#00dbd0" }} fontSize="large" />
                <StarBorderIcon style={{ color: "#00dbd0" }} fontSize="large" />
              </div>
              <div className="review__brief">
                <p className="review__brief--text paragraph">
                  Thank you for all the amazing produce and products you deliver
                  each week… you make my life so easy an bring goodness into our
                  family eating. I’ve been roasting a lot of brussel sprouts and
                </p>
              </div>
              <div className="review__selection">
                <div className="review__selection--dot"></div>
                <div className="review__selection--dot"></div>
                <div className="review__selection--dot"></div>
                <div className="review__selection--dot"></div>
              </div>
            </section>

            <section className="newsLetter">
              <div className="newsLetter__brief">
                <div className="newsLetter__brief--title heading-secondary">
                  Subscribe to Our Newsletter
                </div>
                <div className="newsLetter__brief--text paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
              <form className="newsLetter__form">
                <input
                  type="text"
                  className="newsLetter__form--input"
                  placeholder="Enter your email address"
                />
                <button className="btn btn--subscribe">Subscribe</button>
              </form>
            </section>
          </section>

          <section className="blog">
            <div className="blog__brief">
              <h2 className="blog__brief--title heading-secondary">
                Read Our Blog
              </h2>
              <p className="blog__brief--text paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="blog__cards">
              <div className="blog__card">
                <img src={product1} alt="Product" className="blog__card--img" />
                <h3 className="blog__card--title heading-tertiary">
                  Blog post one
                </h3>
                <p className="blog__card--text paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
                <a href="#" className="blog__card--link paragraph">
                  Read More
                </a>
              </div>

              <div className="blog__card">
                <img src={product2} alt="Product" className="blog__card--img" />
                <h3 className="blog__card--title heading-tertiary">
                  Blog post one
                </h3>
                <p className="blog__card--text paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
                <a href="#" className="blog__card--link paragraph">
                  Read More
                </a>
              </div>

              <div className="blog__card">
                <img src={product3} alt="Product" className="blog__card--img" />
                <h3 className="blog__card--title heading-tertiary">
                  Blog post one
                </h3>
                <p className="blog__card--text paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
                <a href="#" className="blog__card--link paragraph">
                  Read More
                </a>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      ) : (
        <div className="mobile">
          <div className="mobile__brief">
            <h2 className="mobile__brief--title heading-secondary">
              The Desing is only for Desktop
            </h2>
            <p className="mobile__brief--text paragraph">
              The provided design is for desktop. The suitable viewport to view
              this page is 1200px or above.
              <br />
              Supported devices are Macbook Air, Macbook Pro (Any Version), or
              any screen with resolution 720p or above.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
