import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="nav__container">
          <Link to={"/"} className="nav__logo__wrapper">
            <i className="bx bxs-car color-primary"></i>
            <span>Rentify</span>
          </Link>

          <div className="nav__links">
            <Link to={"/"} className="nav__link">
              Home
            </Link>
            <Link to={"/models"} className="nav__link">
              Vehicle Models
            </Link>
            <Link to={"/"} className="nav__link disabled">
              Testimonials
            </Link>
            <Link to={"/"} className="nav__link disabled">
              Our Team
            </Link>
            <Link to={"/"} className="nav__link disabled">
              Contact
            </Link>
          </div>

          <div className="nav__btns">
            <Link to={"/"} className="nav__link disabled">
              Sign In
            </Link>
            <button className="nav__btns__register disabled">Register</button>
          </div>

          <button className="nav__menu" onClick={() => setIsMenuOpen(true)}>
            <i class="bx bx-menu"></i>
          </button>
        </div>
      </nav>
      <nav className={`menu ${isMenuOpen && "menu-open"}`}>
        <button className="menu__close" onClick={() => setIsMenuOpen(false)}>
          <i className="bx bx-x"></i>
        </button>

        <div className="menu__links">
          <Link
            to={"/"}
            className="menu__link"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to={"/"}
            className="menu__link"
            onClick={() => setIsMenuOpen(false)}
          >
            Vehicle Models
          </Link>
          <Link
            to={"/"}
            className="menu__link"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </Link>
          <Link
            to={"/"}
            className="menu__link"
            onClick={() => setIsMenuOpen(false)}
          >
            Our Team
          </Link>
          <Link
            to={"/"}
            className="menu__link"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
