import { NumberHeader } from '../../../components/NumberHeader';
import { NumberForm } from '../../../components/NumberForm';

import './styles.css';

export const SendNumberPage = () => {
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
          <NumberForm />
        </div>
      </div>
    </div>
  );
};
