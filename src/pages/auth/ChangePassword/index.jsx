import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import { useAuthStore } from '../../../hooks/useAuthStore';
import { useForm } from '../../../hooks/useForm';

import './styles.css';
import '../shares-styles/auth-form.css';
import '../shares-styles/login-password.css';

const passwordFields = {
  password1: '',
  password2: '',
};
export const ChangePasswordPage = () => {
  const { ChangeThePassword, errorMessage } = useAuthStore();
  const [viewPassword, setViewPassword] = useState(false);
  const [viewSecondPassword, setViewSecondPassword] = useState(false);

  const [error, setError] = useState('');
  const { password1, password2, onInputChange } = useForm(passwordFields);

  const onTogglePasswordVisibility = (index) => {
    if (index == 0) {
      setViewPassword(!viewPassword);
      return;
    }
    setViewSecondPassword(!viewSecondPassword);
  };

  const onChangePassword = (e) => {
    e.preventDefault();
    if (password1 === password2) {
      const regexLength = /^.{8,}$/;
      const regexUpper = /[A-Z]/;
      const regexLower = /[a-z]/;
      const regexNumber = /\d/;
      const regexSpecial = /[$-/:-?{-~!"^_`@\[\]]/;
      if (
        regexLength.test(password1) &&
        regexUpper.test(password1) &&
        regexLower.test(password1) &&
        regexNumber.test(password1) &&
        regexSpecial.test(password1)
      ) {
        setError('');
        ChangeThePassword({ password: password1 });
      } else {
        Swal.fire('erorr in password', 'the password is not secure', 'error');
      }
    } else {
      Swal.fire('erorr in password', 'Passwords are not the same', 'error');
    }
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire('authentication failed', errorMessage, 'error');
    }
  }, [errorMessage]);
  return (
    <div className="change_password">
      <div className="change_password__header">
        <h2 className="change_password__header__title">Change Password</h2>
        <p className="change_password__header__description">
          The password must have at least the following parameters: Password
          minimum 8 characters, uppercase, lowercase, number, special character.
        </p>
      </div>
      <div className="change_password__body">
        <form
          className="change_password__body__form"
          onSubmit={onChangePassword}
        >
          <div
            className={
              !error
                ? 'change_password__body__password change_password__input'
                : 'change_password__body__password change_password__input input-error'
            }
          >
            <input
              placeholder="Password"
              type={viewPassword ? 'text' : 'password'}
              name="password1"
              value={password1}
              onChange={onInputChange}
              className="change_password__input__password input"
            />
            <img
              onClick={() => onTogglePasswordVisibility(0)}
              className="change_password_body__icon--eye"
              src={
                viewPassword
                  ? '/public/icons/eye-svgrepo-com.svg'
                  : '/public/icons/eye-off-svgrepo-com.svg'
              }
              alt="eye-icon"
            />
          </div>
          <div
            className={
              !error
                ? 'change_password__body__password change_password__input'
                : 'change_password__body__password change_password__input input-error'
            }
          >
            <input
              type={viewSecondPassword ? 'text' : 'password'}
              placeholder="Repeat Password"
              name="password2"
              value={password2}
              onChange={onInputChange}
              className="change_password__input__password input"
            />
            <img
              onClick={() => onTogglePasswordVisibility(1)}
              className="change_password_body__icon--eye"
              src={
                viewSecondPassword
                  ? '/public/icons/eye-svgrepo-com.svg'
                  : '/public/icons/eye-off-svgrepo-com.svg'
              }
              alt="eye-icon"
            />
          </div>
          <div className="change_password__footer">
            <button
              className="change_password__footer__button button"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
