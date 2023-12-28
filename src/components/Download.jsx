import React from "react";
import GooglePlay from "../assets/google-play.svg";
import Appstore from "../assets/app-store.svg";

const Download = () => {
  return (
    <section id="download">
      <div className="container">
        <div className="row download__row">
          <div className="download__text">
            <h2 className="download__text__title">
              Download our app to get the most out of it
            </h2>
            <p className="download__text__para">
              Available on Android and Apple Devices
            </p>

            <div className="download__text__links">
              <a href="" className="download__text__link">
                <img
                  src={GooglePlay}
                  alt=""
                  className="download__text__link__img"
                />
              </a>
              <a href="" className="download__text__link">
                <img
                  src={Appstore}
                  alt=""
                  className="download__text__link__img"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
