import React, { useEffect, useState } from "react";
import CarModel from "../assets/model-img.png";
import axios from "axios";
import Model from "./ui/Model";
import ModelSkeleton from "./ui/ModelSkeleton";

const VehicleModels = () => {
  const [models, setModels] = useState([]);
  const fetchModels = async () => {
    const { data } = await axios.get(
      "https://car-rental-api.up.railway.app/car"
    );
    setModels(data.data);
    console.log(data.data);
  };

  useEffect(() => {
    fetchModels();
  }, []);

  return (
    <section id="models">
      <div className="container">
        <div className="row models__row">
          <div className="models__header">
            <h2 className="models__header__title">Vehicle Models</h2>
            <select
              defaultValue="Sort"
              name=""
              id=""
              className="models__header__sort"
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
              ? models.map((model) => <Model model={model} key={model.id} />)
              : new Array(20).fill(0).map(() => <ModelSkeleton />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleModels;
