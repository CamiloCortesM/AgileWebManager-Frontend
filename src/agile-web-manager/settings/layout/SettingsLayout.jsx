import "./styles.css";
export const SettingsLayout = ({ children }) => {
  return (
    <div className="settings">
      <nav className="settings__sidebar">
        <div className="settings__sidebar__logo">
          <img
            className="settings__sidebar--icon"
            src="/public/icons/cat-halloween-kitty-svgrepo-com.svg"
            alt="cat"
          />
          <img
            className="settings__sidebar--icon"
            src="/public/icons//back-svgrepo-com.svg"
            alt="back"
          />
        </div>
        <div className="settings__sidebar__nav">
          <div className="settings__sidebar__nav--up">
            <div className="settings__sidebar__header">
              <h1 className="settings__sidebar__header--tittle">
                AgileWebManager
              </h1>
            </div>
            <div className="settings__sidebar__links">
              <div className="settings__sidebar__links--item item__active">
                <a href="" className="settings__sidebar__links--tittle">
                  Profile
                </a>
              </div>
              <div className="settings__sidebar__links--item ">
                <a href="" className="settings__sidebar__links--tittle">
                  Manage accounts
                </a>
              </div>
            </div>
          </div>
          <div className="settings__sidebar__nav--down">
            <div className="settings__sidebar__nav--exit ">
              <button className="sidebar__logout">
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
