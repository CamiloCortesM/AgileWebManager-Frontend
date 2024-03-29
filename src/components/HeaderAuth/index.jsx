import { getPhone } from '../../helpers/getPhone';
import { useAuthStore } from '../../hooks/useAuthStore';

import './styles.css';

export const HeaderAuth = () => {
  const { user } = useAuthStore();
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
        A code has been sent to the number {getPhone(user.phone)}
      </p>
    </div>
  );
};
