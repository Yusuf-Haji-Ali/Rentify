import { useState } from "react";

const BookingModal = ({
  models,
  bookingModalOpen,
  setBookingModalOpen,
  selectedModel,
  setSelectedModel,
  setSuccessOpen,
}) => {
  const [bookingLoading, setBookingLoading] = useState(false);

  const handleSumbit = (event) => {
    event.preventDefault();
    setBookingLoading(true);
    setTimeout(() => {
      setBookingLoading(false);
      setBookingModalOpen(false);
      setSuccessOpen(true);
    }, [3000]);
    setTimeout(() => {
      setSuccessOpen(false);
    }, 6000);
    console.log(selectedModel);
  };

  return (
    <div className={`booking ${bookingModalOpen && "booking-open"}`}>
      <div className="booking__container">
        <button
          className="booking__close"
          onClick={() => setBookingModalOpen(false)}
        >
          <i className="bx bx-x"></i>
        </button>

        <h3 className="booking__title">Book a Car</h3>

        <form
          action=""
          className="booking__form"
          onSubmit={(e) => handleSumbit(e)}
        >
          <div className="form__item">
            <label className="form__item__label">
              <i className="bx bxs-car"></i>
              <span>
                Select Your Model <span className="required">*</span>
              </span>
            </label>

            <select
              className="form__item__select"
              value={selectedModel}
              onChange={(e) => {
                setSelectedModel(e.target.value);
              }}
            >
              <option value="" disabled>
                Select
              </option>

              {models.map((model) => (
                <option key={model.id} value={`${model.make} ${model.model}`}>
                  {model.make} {model.model}
                </option>
              ))}
            </select>
          </div>

          <div className="form__item">
            <label className="form__item__label">
              <i className="bx bxs-map"></i>
              <span>
                Pick-up <span className="required">*</span>
              </span>
            </label>
            <select className="form__item__select">
              <option value="" disabled>
                Select
              </option>
              <option value="Manchester">Manchester</option>
              <option value="Liverpool">Liverpool</option>
              <option value="London">London</option>
              <option value="Birmingham">Birmingham</option>
              <option value="Oxford">Oxford</option>
              <option value="Nottingham">Nottingham</option>
            </select>
          </div>

          <div className="form__item">
            <label className="form__item__label">
              <i className="bx bxs-map"></i>
              <span>
                Drop-off <span className="required">*</span>
              </span>
            </label>
            <select className="form__item__select">
              <option value="" disabled>
                Select
              </option>
              <option value="Manchester">Manchester</option>
              <option value="Liverpool">Liverpool</option>
              <option value="London">London</option>
              <option value="Birmingham">Birmingham</option>
              <option value="Oxford">Oxford</option>
              <option value="Nottingham">Nottingham</option>
            </select>
          </div>

          <div className="form__item">
            <label className="form__item__label">
              <i className="bx bxs-calendar"></i>
              <span>
                Pick-up <span className="required">*</span>
              </span>
            </label>
            <input type="date" className="form__item__input" />
          </div>

          <div className="form__item">
            <label className="form__item__label">
              <i className="bx bxs-calendar"></i>
              <span>
                Drop-off <span className="required">*</span>
              </span>
            </label>
            <input type="date" className="form__item__input" />
          </div>

          <div className="form__item">
            <button className="form__item__submit">
              {bookingLoading ? (
                <i class="bx bx-loader-circle form__item__submit__loading"></i>
              ) : (
                "Book Ride"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
