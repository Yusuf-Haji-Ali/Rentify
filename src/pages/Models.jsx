import React, { useEffect, useState } from "react";
import ModelHero from "../components/ModelHero";
import VehicleModels from "../components/VehicleModels";
import BookingModal from "../components/BookingModal";
import axios from "axios";
import SuccessPopup from "../components/ui/SuccessPopup";

const Models = () => {
  const [models, setModels] = useState([]);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState("");
  const [successOpen, setSuccessOpen] = useState(false);

  const fetchModels = async () => {
    const { data } = await axios.get(
      "https://car-rental-api.up.railway.app/car"
    );
    setModels(data.data);
  };

  useEffect(() => {
    fetchModels();
  }, []);

  return (
    <>
      <SuccessPopup successOpen={successOpen} setSuccessOpen={setSuccessOpen} />
      <BookingModal
        models={models}
        bookingModalOpen={bookingModalOpen}
        setBookingModalOpen={setBookingModalOpen}
        selectedModel={selectedModel}
        setSelectedModel={setSelectedModel}
        setSuccessOpen={setSuccessOpen}
      />
      <ModelHero />
      <VehicleModels
        models={models}
        setModels={setModels}
        setBookingModalOpen={setBookingModalOpen}
        setSelectedModel={setSelectedModel}
      />
    </>
  );
};

export default Models;
