import './styles.css';

export const LoginForm = ({ onChange, email, password, onSubmit }) => {
  return (
    <form className="login__body__form" onSubmit={onSubmit}>
      <div className="login__body__email login__input">
        <input
          placeholder="Email"
          type="email"
          name="email"
          onChange={onChange}
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
          onChange={onChange}
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
        <button type="submit" className="login__footer__button button">
          Login
        </button>
      </div>
    </form>
  );
};
