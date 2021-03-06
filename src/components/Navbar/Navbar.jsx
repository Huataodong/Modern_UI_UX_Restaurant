import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.scss'

const Navbar = () => {

  const items = ['home', 'about', 'menu', 'awards', 'contact']
  const [toggleMenu, setToggleMenu] = React.useState(false)

  const [navSize, setnavSize] = useState("7rem"); //nav height
  const [navColor, setnavColor] = useState("transparent");

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#14363C") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("7rem");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <nav className="app__navbar"
      style={{
        backgroundColor: navColor,
        height: navSize,
        transition: "all 1s"
      }}
    >

      <div className="app__navbar-logo">
        <img src={images.Niubi_Plus} alt="applogo" />
      </div>

      <ul className="app__navbar-links">
        {items.map((item) => (
          <li className="p__opensans" key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-login">
        <a gref="#login" className="p__opensans">Login / Register</a>
        <a href='/' className="p__opensans">Book Table</a>
      </div>
      <div>

        <GiHamburgerMenu className="burger__menu" color="#fff" size={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex_center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              {['home', 'about', 'menu', 'awards', 'contact'].map((item) => (
                <li className="p__opensans" key={item} >
                  {/* close menu and change to item once click*/}
                  <a href={`#${item}`} onClick={() => setToggleMenu(false)} >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </nav>
  )
};

export default Navbar;
