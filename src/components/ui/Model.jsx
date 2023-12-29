import React from "react";

const Model = ({ model }) => {
  return (
    <div className="model">
      <img
        src={`https://car-rental-api.up.railway.app/${model.image}`}
        alt=""
        className="model__img"
      />

      <div className="model__details model__details-1">
        <h3 className="model__details__name">{model.model}</h3>
        <h4 className="model__details__price">
          £{Math.floor(model.per_day_price)}{" "}
          <span className="model__details__price__span">per day</span>
        </h4>
      </div>

      <div className="model__details model__details-2">
        <div className="model__detail">
          <i className="bx bxs-star model__detail__icon"></i>
          <span className="model__detail__text">{model.rating}</span>
        </div>
        <div className="model__detail model__detail-right">
          <i className="bx bxs-gas-pump model__detail__icon"></i>
          <span className="model__detail__text">{model.fuel}</span>
        </div>
        <div className="model__detail">
          <i className="bx bxs-car model__detail__icon"></i>
          <span className="model__detail__text">{model.make}</span>
        </div>
        <div className="model__detail model__detail-right">
          <i className="bx bxs-cog model__detail__icon"></i>
          <span className="model__detail__text">{model.transmission}</span>
        </div>
      </div>

      <button className="model__btn">
        <span className="model__btn__span">Book Ride</span>
        <i className="bx bxs-check-circle .model__btn__icon"></i>
      </button>
    </div>
  );
};

export default Model;
