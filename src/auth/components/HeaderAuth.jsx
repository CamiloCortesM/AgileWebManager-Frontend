export const HeaderAuth = () => {
  return (
    <div className="auth__header">
      <figure className="auth__image">
        <img
          className="auth__image__lock"
          src="/public/icons/padlock-lock-svgrepo-com.svg"
          alt="lock"
        />
      </figure>
      <h2 className="auth__header__title">Two-step authentication</h2>
      <p className="auth__header__description">
        A code has been sent to the number *********2413
      </p>
    </div>
  );
};
