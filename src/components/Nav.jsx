import React from "react";
import { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="nav__container">
          <a href="" className="nav__logo__wrapper">
            <i className="bx bxs-car color-primary"></i>
            <span>Rentify</span>
          </a>

          <div className="nav__links">
            <a href="" className="nav__link">
              Home
            </a>
            <a href="" className="nav__link">
              Vehicle Models
            </a>
            <a href="#testimonials" className="nav__link">
              Testimonials
            </a>
            <a href="" className="nav__link disabled">
              Our Team
            </a>
            <a href="" className="nav__link disabled">
              Contact
            </a>
          </div>

          <div className="nav__btns">
            <a href="" className="nav__link disabled">
              Sign In
            </a>
            <button href="" className="nav__btns__register disabled">
              Register
            </button>
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
          <a
            href=""
            className="menu__link"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href=""
            className="menu__link"
            onClick={() => setIsMenuOpen(false)}
          >
            Vehicle Models
          </a>
          <a
            href="#testimonials"
            className="menu__link"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </a>
          <a
            href=""
            className="menu__link"
            onClick={() => setIsMenuOpen(false)}
          >
            Our Team
          </a>
          <a
            href=""
            className="menu__link"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
