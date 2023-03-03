import { useForm } from "../../hooks/useForm";
import "./styles.css";

const loginformfield = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const { onInputChange, email, password } = useForm(loginformfield);

  const loginSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

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
        <form className="login__body__form" onSubmit={loginSubmit}>
          <div className="login__body__email login__input">
            <input
              placeholder="Email"
              type="email"
              name="email"
              onChange={onInputChange}
              value={email}
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
              name="password"
              onChange={onInputChange}
              value={password}
              className="login__input__password input"
            />
            <img
              className="login_body__icon--Email login_body__icon"
              src="/public/icons/lock-off-svgrepo-com.svg"
              alt="lock-icon"
            />
          </div>
          <div className="login__footer">
            <button type="submit" className="login__footer__botton botton">
              Login
            </button>
          </div>
        </form>
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
