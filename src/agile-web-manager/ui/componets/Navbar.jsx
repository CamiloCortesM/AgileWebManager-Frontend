import { useState } from 'react';
import './style.css';


export const Navbar = () => {

  const [isActive, setIsActive] = useState(false);

  const toggleButton = () => {
    setIsActive(!isActive)
  }

  return (
    <nav className="navbar">

      <div className="navbar__container">
        <h2 className="navbar__title">Agile Web Manager</h2>
        <h2 className="navbar__tables">Tables</h2>

        <div className="navbar__space"></div>
        <button className="navbar__account" onClick={toggleButton}>D</button>

        <div className={`navbar__menu ${isActive ? "navbar__menu--on" : "navbar__menu--off"}`}>
          <p className="navbar__menu__p">Account</p>
          <div className="navbar__menu__list info">
            <p className="navbar__menu__list--name">D</p>
            <div className="navbar__menu__list--container">
              <p className="navbar__menu__list--name-full">DANIEL SANTIAGO SILVA FONSECA</p>
              <p className="navbar__menu__list--email">daniel@google.com</p>
            </div>
          </div>
          <button className="navbar__menu__list navbar__menu__confi">Manage Account</button>
          <button className="navbar__menu__list navbar__menu__close">Logout</button>
        </div>

      </div>

    </nav>
  );
};
