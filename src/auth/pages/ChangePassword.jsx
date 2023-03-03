export const ChangePassword = () => {
  return (
    <div className="change_password">
      <div className="change_password__header">
        <h2 className="change_password__header__title">Change Password</h2>
        <p className="change_password__header__description">
          change password to a password with the required security parameters
        </p>
      </div>
      <div className="change_password__errors">
        <p></p>
      </div>
      <div className="change_password__body">
        <form className="change_password__body__form">
          <div className="change_password__body__password change_password__input">
            <input
              placeholder="Password"
              type="password"
              className="change_password__input__password input"
            />
            <img
              className="change_password_body__icon--eye"
              src="/public/icons/eye-off-svgrepo-com.svg"
              alt="eye-icon"
            />
          </div>
          <div className="change_password__body__password change_password__input">
            <input
              type="password"
              placeholder="Repeat Password"
              className="change_password__input__password input"
            />
            <img
              className="change_password_body__icon--eye"
              src="/public/icons/eye-svgrepo-com.svg"
              alt="eye-icon"
            />
          </div>
        </form>
      </div>
      <div className="change_password__footer">
        <button className="change_password__footer__botton botton">
          Submit
        </button>
      </div>
    </div>
  );
};
