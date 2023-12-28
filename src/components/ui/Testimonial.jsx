import React from "react";

const Testimonial = ({ image, review, name, location }) => {
  return (
    <div className="testimonial">
      <div className="testimonial__review">{review}</div>

      <div className="testimonial__info">
        <figure className="testimonial__info__img__wrapper">
          <img src={image} alt="" className="testimonial__info__img" />
        </figure>

        <div className="testimonial__info__profile">
          <h3 className="testimonial__info__name">{name}</h3>
          <h4 className="testimonial__info__location">{location}</h4>
        </div>

        <i class="bx bxs-quote-right testimonial__info__icon"></i>
      </div>
    </div>
  );
};

export default Testimonial;
