import { NavLink } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';
import en from 'react-phone-number-input/locale/en';

import 'react-phone-number-input/style.css';
import './styles.css';

export const NumberForm = ({ onSubmit, phone, setPhone }) => {
  return (
    <form className="number__body__form" onSubmit={onSubmit}>
      <div className="number__body__phone">
        <PhoneInput
          defaultCountry="CO"
          labels={en}
          className="react-input"
          placeholder="Enter phone number"
          value={phone}
          onChange={setPhone}
        />
      </div>
      <div className="number__footer">
        <NavLink to="/auth/code">
          <button className="number__footer__button back__button">Back</button>
        </NavLink>
        <button className="number__footer__button send__button" type="submit">
          Send
        </button>
      </div>
    </form>
  );
};
