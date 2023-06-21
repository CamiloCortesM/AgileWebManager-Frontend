import PhoneInput from 'react-phone-number-input';
import en from 'react-phone-number-input/locale/en';

import 'react-phone-number-input/style.css';
import './styles.css';

export const index = ({ value, setValue }) => {
  return (
    <PhoneInput
      defaultCountry="CO"
      labels={en}
      className="react-input"
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}
    />
  );
};
