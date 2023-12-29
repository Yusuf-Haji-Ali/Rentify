import React from "react";
import HeaderBg from "../assets/header-bg.png";
import HeaderCar from "../assets/header-car.png";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <header>
      <div className="container">
        <img src={HeaderBg} alt="" className="header-bg" />
        <div className="row header__row">
          <div className="header__text">
            <h2 className="header__text__subtitle">Plan your trip now</h2>
            <h1 className="header__text__title">
              Save <span className="color-primary">big</span> with our car
              rental
            </h1>
            <p className="header__text__para">
              Rent the car of your dreams. Unbeatable price, unlimited miles,
              flexible pick-up options and mcuh more.
            </p>

            <div className="header__text__btns">
              <Link to="/models">
                <button className="header__text__btn header__text__book">
                  <span className="header__text__btn__span">Book Ride</span>
                  <i class="bx bxs-check-circle"></i>
                </button>
              </Link>
              <Link to="/models">
                <button className="header__text__btn header__text__learn">
                  <span className="header__text__btn__span">Learn More</span>
                  <i class="bx bx-chevron-right"></i>
                </button>
              </Link>
            </div>
          </div>

          <figure className="header__img__wrapper">
            <img src={HeaderCar} alt="" className="header__img" />
          </figure>
        </div>
      </div>
    </header>
  );
};

export default Landing;
