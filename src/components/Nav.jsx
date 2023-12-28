import React from "react";
import NavLogo from "../assets/logo.png";

const Nav = () => {
  return (
    <>
      <nav>
        <div className="nav__container">
          <a href="" className="nav__img__wrapper">
            <img src={NavLogo} alt="" className="nav__img" />
          </a>

          <div className="nav__links">
            <a href="" className="nav__link">
              Home
            </a>
            <a href="" className="nav__link">
              Vehicle Models
            </a>
            <a href="" className="nav__link disabled">
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

          <button className="nav__menu">
            <i class="bx bx-menu"></i>
          </button>
        </div>
      </nav>
      <nav className="menu">
        <button className="menu__close">
          <i className="bx bx-x"></i>
        </button>

        <a href="" className="menu__link">
          Home
        </a>
        <a href="" className="menu__link">
          Vehicle Models
        </a>
        <a href="" className="menu__link">
          Testimonials
        </a>
        <a href="" className="menu__link">
          Our Team
        </a>
        <a href="" className="menu__link">
          Contact
        </a>
      </nav>
    </>
  );
};

export default Nav;
