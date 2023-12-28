import React from "react";
import Testimonial from "./ui/Testimonial";
import TestimonialImg1 from "../assets/testimonial-1.jpg";
import TestimonialImg2 from "../assets/testimonial-2.jpg";
import TestimonialImg3 from "../assets/testimonial-3.jpg";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="row testimonials__row">
          <h3 className="testimonials__subtitle">Reviewed by people</h3>
          <h2 className="testimonials__title">Client's Testimonials</h2>
          <p className="testimonials__para">
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
          </p>

          <div className="testimonials__list">
            <Testimonial
              image={TestimonialImg1}
              review={`"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "`}
              name={"Yusuf Haji Ali"}
              location={"Manchester"}
            />
            <Testimonial
              image={TestimonialImg2}
              review={`"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "`}
              name={"Jessica Williams"}
              location={"Liverpool"}
            />
            <Testimonial
              image={TestimonialImg3}
              review={`"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "`}
              name={"John Smith"}
              location={"London"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
