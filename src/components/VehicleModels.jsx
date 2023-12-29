import React, { useEffect, useState } from "react";
import Model from "./ui/Model";
import ModelSkeleton from "./ui/ModelSkeleton";

const VehicleModels = ({
  models,
  setModels,
  setBookingModalOpen,
  setSelectedModel,
}) => {
  const [sortValue, setSortValue] = useState("HIGH_TO_LOW");

  const sortModels = (sortValue) => {
    console.log(sortValue);
    if (sortValue === "HIGH_TO_LOW") {
      setModels(
        models.slice().sort((a, b) => b.per_day_price - a.per_day_price)
      );
    } else if (sortValue === "LOW_TO_HIGH") {
      setModels(
        models.slice().sort((a, b) => a.per_day_price - b.per_day_price)
      );
    } else if (sortValue === "RATING") {
      setModels(models.slice().sort((a, b) => b.rating - a.rating));
    }
  };

  useEffect(() => {
    sortModels(sortValue);
  }, [sortValue]);

  return (
    <section id="models">
      <div className="container">
        <div className="row models__row">
          <div className="models__header">
            <h2 className="models__header__title">Vehicle Models</h2>
            <select
              value={sortValue}
              name=""
              id=""
              className="models__header__sort"
              onChange={(e) => setSortValue(e.target.value)}
            >
              <option disabled className="models__header__sort__option">
                Sort
              </option>
              <option
                value="HIGH_TO_LOW"
                className="models__header__sort__option"
              >
                Price (High to low)
              </option>
              <option
                value="LOW_TO_HIGH"
                className="models__header__sort__option"
              >
                Price (Low to high)
              </option>
              <option value="RATING" className="models__header__sort__option">
                Rating
              </option>
            </select>
          </div>

          <div className="models__list">
            {models.length > 0
              ? models.map((model) => (
                  <Model
                    model={model}
                    key={model.id}
                    setBookingModalOpen={setBookingModalOpen}
                    setSelectedModel={setSelectedModel}
                  />
                ))
              : new Array(20)
                  .fill(0)
                  .map((_, index) => <ModelSkeleton key={index} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleModels;
