const SuccessPopup = ({ successOpen }) => {
  return (
    <div className={`success ${successOpen && "success-open"}`}>
      <i className="bx bxs-check-circle"></i>
      <span>Ride successfully booked!</span>
    </div>
  );
};

export default SuccessPopup;
