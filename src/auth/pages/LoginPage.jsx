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
      <div className="login__errors">
        <p></p>
      </div>
      <div className="login__body">
        <form className="login__body__form">
          <div className="login__body__email login__input">
            <input
              placeholder="Email"
              type="email"
              className="login__input__email input"
            />
            <img
              className="login_body__icon--Email login_body__icon"
              src="/public/icons/user-svgrepo-com.svg"
              alt="user-icon"
            />
          </div>
          <div className="login__body__password login__input">
            <input
              type="password"
              placeholder="Password"
              className="login__input__password input"
            />
            <img
              className="login_body__icon--Email login_body__icon"
              src="/public/icons/lock-off-svgrepo-com.svg"
              alt="lock-icon"
            />
          </div>
        </form>
      </div>
      <div className="login__footer">
        <button className="login__footer__botton botton">Login</button>
      </div>
      <figure className="background__icons">
        <img
          className="icon__team"
          src="/public/icons/undraw_work_chat_re_qes4.svg"
          alt="work"
        />
        <img
          className="icon__cat"
          src="/public/icons/undraw_cat_q46h.svg"
          alt="cat"
        />
      </figure>
    </div>
  );
};
