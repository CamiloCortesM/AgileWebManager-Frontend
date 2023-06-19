import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

import { useAuthStore } from '../../hooks/useAuthStore';
import './styles.css';

export const AuthFooter = () => {
  const { user, startSendCode, errorMessage } = useAuthStore();
  const [resendDisabled, setResendDisabled] = useState(false);
  const [counter, setCounter] = useState(30);

  const ResendCode = async (env) => {
    setResendDisabled(true);
    await startSendCode();
    setCounter(30);
  };

  useEffect(() => {
    let interval;
    if (resendDisabled) {
      interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [resendDisabled]);

  useEffect(() => {
    if (counter === 0) {
      setResendDisabled(false);
    }
  }, [counter]);

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire('Resend code failed', errorMessage, 'error');
    }
  }, [errorMessage]);

  return (
    <div className="auth__footer">
      <div className="auth__footer__links">
        <NavLink to="/auth/number">
          <button
            className={
              user.status === 'new'
                ? 'auth__footer__button'
                : 'auth__footer__button hide'
            }
          >
            Not My Phone Number
          </button>
        </NavLink>
        {resendDisabled ? (
          <div className="auth__footer__counter">{counter}</div>
        ) : (
          <button onClick={ResendCode} className="auth__footer__button">
            Resend Code
          </button>
        )}
      </div>
    </div>
  );
};
