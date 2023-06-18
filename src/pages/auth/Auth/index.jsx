import { useEffect, useRef } from 'react';
import Swal from 'sweetalert2';

import { useAuthStore } from '../../../hooks/useAuthStore';

import { HeaderAuth } from '../../../components/HeaderAuth';
import { FormAuth } from '../../../components/FormAuth';

import './styles.css'

export const AuthPage = () => {
  const inputs = useRef([]);

  const { startAuthenticationNumber, errorMessage } = useAuthStore();

  const onNumberAuthentication = (e) => {
    e.preventDefault();
    const code = inputs.current.map((input) => input.value).join('');
    startAuthenticationNumber({ code });
  };

  const handleInput = (event, index) => {
    const inputValue = event.target.value;
    if (inputValue.length === 1 && index < inputs.current.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Backspace' && event.target.value === '' && index > 0) {
      inputs.current[index - 1].focus();
      inputs.current[index - 1].value = '';
    }
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire('authentication failed', errorMessage, 'error');
    }
  }, [errorMessage]);

  return (
    <div className="container__auth">
      <img
        className="auth__wave"
        src="/public/icons/wave-auth.svg"
        alt="wave"
      />
      <div className="auth">
        <HeaderAuth />
        <div className="auth__body">
          <FormAuth
            handleInput={handleInput}
            handleKeyDown={handleKeyDown}
            inputs={inputs}
            onNumberAuthentication={onNumberAuthentication}
          />
        </div>
      </div>
    </div>
  );
};
