import React, { useState, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <img src={menu_open} onClick={toggleMenu} alt="Open Menu" className="nav-mob-open" />
      <ul ref={menuRef} className={`nav-menu ${isMenuOpen ? 'open' : 'closed'}`}>
        <img src={menu_close} onClick={toggleMenu} alt="Close Menu" className="nav-mob-close" />
        {['home', 'about', 'services', 'work', 'contact'].map((item) => (
          <li key={item}>
            <AnchorLink className="anchor-link" offset={50} href={`#${item}`}>
              <p onClick={() => setMenu(item)}>{item.charAt(0).toUpperCase() + item.slice(1)}</p>
            </AnchorLink>
            {menu === item && <img src={underline} alt="Underline" />}
          </li>
        ))}
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
