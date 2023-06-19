import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import { useAuthStore } from '../../../hooks/useAuthStore';
import { NumberHeader } from '../../../components/NumberHeader';
import { NumberForm } from '../../../components/NumberForm';

import './styles.css';

export const SendNumberPage = () => {
  const [phone, setPhone] = useState('');

  const { startSendNumber, errorMessage } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    startSendNumber({ phone });
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire('Error in the phone number', errorMessage, 'error');
    }
  }, [errorMessage]);

  return (
    <div className="container__number">
      <img
        className="number__wave"
        src="/public/icons/wave-number.svg"
        alt="wave"
      />
      <div className="number">
        <NumberHeader />
        <div className="number__body">
          <NumberForm
            onSubmit={handleSubmit}
            phone={phone}
            setPhone={setPhone}
          />
        </div>
      </div>
    </div>
  );
};
