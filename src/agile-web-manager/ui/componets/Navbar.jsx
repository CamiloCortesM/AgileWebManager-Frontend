import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getLetter } from '../../../helpers/getLetter';
import { useAuthStore } from '../../../hooks/useAuthStore';
import './style.css';

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const { user, startLogout } = useAuthStore();

  const toggleButton = () => {
    setIsActive(!isActive);
  };

  const onLogout = () => {
    startLogout();
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <img 
        className="navbar--cat"
        src="/public/icons/cat-halloween-kitty-svgrepo-com-navbar.svg" 
        alt="gato.svg"
        />
        <NavLink  className="navlink-title" to="/">
        <h2 className="navbar__title">Agile Web Manager</h2>
        <h2 className="navbar__tables">Tables</h2>
        </NavLink>

        <div className="navbar__space"></div>
        <button className="navbar__account" onClick={toggleButton}>
          {getLetter(user.name)}
        </button>

        <div
          className={`navbar__menu ${isActive ? "navbar__menu--on" : "navbar__menu--off"}`}
        >
          <p className="navbar__menu__p">Account</p>
          <div className="navbar__menu__list info">
            <p className="navbar__menu__list--name">{getLetter(user.name)}</p>
            <div className="navbar__menu__list--container">
              <p className="navbar__menu__list--name-full">
                {user.name.toUpperCase()}
              </p>
              <p className="navbar__menu__list--email">{user.email}</p>
            </div>
          </div>
          <NavLink className="navbar__menu__list navbar__menu__confi" to="/settings/profile" >
            <button className="navbar--botton">
              Settings
            </button>
          </NavLink>
          <button
            className="navbar__menu__list navbar__menu__close"
            onClick={onLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};
