import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row footer__row">
          <div className="footer__info footer__content">
            <h4 className="footer__info__title">Rentify</h4>
            <p className="footer__info__para">
              We offer a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </p>

            <div className="footer__info__links">
              <a href="#" className="footer__info__link disabled">
                <i className="bx bxs-phone"></i>
                <span>0161 507 619</span>
              </a>
              <a href="#" className="footer__info__link disabled">
                <i className="bx bxs-envelope"></i>
                <span>rentify@gmail.com</span>
              </a>
              <a href="#" className="footer__info__link disabled">
                Design by XpeedStudio
              </a>
            </div>
          </div>

          <div className="footer__company footer__content">
            <h4 className="footer__company__title">Company</h4>
            <div className="footer__company__links">
              <a href="#" className="footer__company__link disabled">
                Manchester
              </a>
              <a href="#" className="footer__company__link disabled">
                Careers
              </a>
              <a href="#" className="footer__company__link disabled">
                Mobile
              </a>
              <a href="#" className="footer__company__link disabled">
                Blog
              </a>
              <a href="#" className="footer__company__link disabled">
                How we work
              </a>
            </div>
          </div>

          <div className="footer__hours footer__content">
            <h4 className="footer__hours__title">Working Hours</h4>
            <div className="footer__hours__list">
              <span>Mon - Fri: 9:00AM - 9:00PM</span>
              <span>Sat: 9:00AM - 19:00PM</span>
              <span>Sun: Closed</span>
            </div>
          </div>

          <div className="footer__subscription footer__content">
            <h4 className="footer__subscription__title">Subscription</h4>
            <p className="footer__subscription__para">
              Subscribe with your email for the latest news & updates
            </p>

            <form action="" className="footer__subscription__form">
              <input
                type="text"
                placeholder="Enter Email Address"
                className="footer__subscription__form__input"
              />
              <input
                type="submit"
                value="Subscribe"
                className="footer__subscription__form__submit disabled"
              />
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
