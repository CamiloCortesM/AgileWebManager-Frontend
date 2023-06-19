import './styles.css';

export const NumberHeader = () => {
  return (
    <div className="number__header">
      <figure className="number__header__image">
        <img
          className="number__image__phone"
          src="/public/icons/smartphone-telephone-svgrepo-com.svg"
          alt="smartphone"
        />
      </figure>
      <h2 className="number__header__title">Confirm Your Phone Number</h2>
      <p className="number__header__description">
        Please enter the new Phone Number for verification
      </p>
    </div>
  );
};
