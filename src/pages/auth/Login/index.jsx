import { useEffect } from 'react';
import Swal from 'sweetalert2';

import { useAuthStore } from '../../../hooks/useAuthStore';
import { useForm } from '../../../hooks/useForm';
import { LoginForm } from '../../../components/LoginForm';

import './styles.css';
import '../shares-styles/auth-form.css';

const loginformfield = {
  email: '',
  password: '',
};

export const LoginPage = () => {
  const { onInputChange, email, password } = useForm(loginformfield);
  const { startLogin, errorMessage } = useAuthStore();

  const loginSubmit = (e) => {
    e.preventDefault();
    startLogin({ email, password });
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire('Error logging in', errorMessage, 'error');
    }
  }, [errorMessage]);

  return (
    <div className="Login">
      <div className="login__header">
        <h2 className="login__header__title">Login to Your Account</h2>
        <p className="login__header__description">
          login using email and password
        </p>
      </div>
      <div className="login__body">
        <LoginForm
          email={email}
          password={password}
          onChange={onInputChange}
          onSubmit={loginSubmit}
        />
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
