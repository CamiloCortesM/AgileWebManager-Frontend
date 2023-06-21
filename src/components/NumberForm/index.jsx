import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import { useAuthStore } from '../../hooks/useAuthStore';
import './styles.css';
import { PhoneNumberInput } from '../PhoneNumberInput';

export const NumberForm = () => {
  const [phone, setPhone] = useState('');

  const { startSendNumber, errorMessage } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await startSendNumber({ phone });
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire('Error in the phone number', errorMessage, 'error');
    }
  }, [errorMessage]);

  return (
    <form className="number__body__form" onSubmit={handleSubmit}>
      <div className="number__body__phone">
        <PhoneNumberInput value={phone} setValue={setPhone} />
      </div>
      <div className="number__footer">
        <Link to="/auth/code">
          <button className="number__footer__button back__button" type="button">
            Back
          </button>
        </Link>
        <button className="number__footer__button send__button" type="submit">
          Send
        </button>
      </div>
    </form>
  );
};
