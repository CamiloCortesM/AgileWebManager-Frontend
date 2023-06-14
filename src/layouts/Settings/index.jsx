import { NavLink, useLocation } from "react-router-dom";
import { useAuthStore } from "../../hooks/useAuthStore";
import "./styles.css";
export const SettingsLayout = ({ children }) => {
  const { user, startLogout } = useAuthStore();
  const { role } = user;

  const location = useLocation();
  const { pathname } = location;

  const onLogout = () => {
    startLogout();
  };
  return (
    <div className="settings">
      <nav className="settings__sidebar">
        <div className="settings__sidebar__logo">
          <img
            className="settings__sidebar--icon"
            src="/public/icons/cat-halloween-kitty-svgrepo-com.svg"
            alt="cat"
          />
          <NavLink to="/" className="navlink">
          <img
            className="settings__sidebar--icon"
            src="/public/icons//back-svgrepo-com.svg"
            alt="back"
          />
          </NavLink>
        </div>
        <div className="settings__sidebar__nav">
          <div className="settings__sidebar__nav--up">
            <div className="settings__sidebar__header">
              <h1 className="settings__sidebar__header--tittle">
                AgileWebManager
              </h1>
            </div>
            <div className="settings__sidebar__links">
              <NavLink to="/settings/profile" className="navlink">
                <div
                  className={
                    pathname === "/settings/profile"
                      ? "settings__sidebar__links--item item__active"
                      : "settings__sidebar__links--item"
                  }
                >
                  <p className="settings__sidebar__links--tittle">Profile</p>
                </div>
              </NavLink>
              {role === "admin" && (
                <NavLink to="/settings/manage" className="navlink">
                  <div
                    className={
                      pathname === "/settings/manage"
                        ? "settings__sidebar__links--item item__active"
                        : "settings__sidebar__links--item"
                    }
                  >
                    <p className="settings__sidebar__links--tittle">
                      Manage accounts
                    </p>
                  </div>
                </NavLink>
              )}
            </div>
          </div>
          <div className="settings__sidebar__nav--down">
            <div className="settings__sidebar__nav--exit ">
              <button className="sidebar__logout" onClick={onLogout}>
                Logout <img src="/public/icons/exit.svg" alt="exit" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="settings__content">{children}</div>
    </div>
  );
};
