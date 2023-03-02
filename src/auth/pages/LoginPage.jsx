import "../styles.css";

export const LoginPage = () => {
  return (
    <div className="Login">
      <div className="login__header">
        <h2 className="login__header__title">Login to Your Account</h2>
        <p className="login__header__description">
          login using email and password
        </p>
      </div>
      <div className="login__body">
        <div className="login__body__email">
          <input placeholder="email" className="login__input__email input" />
        </div>
        <div className="login__body__password">
          <input
            placeholder="password"
            className="login__input__password input"
          />
        </div>
      </div>
      <div className="login__footer">
        <button className="login__footer__bottom">Login</button>
      </div>
    </div>
  );
};
