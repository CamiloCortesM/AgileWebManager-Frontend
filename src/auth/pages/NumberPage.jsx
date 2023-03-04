import { useState } from "react";

export const NumberPage = () => {
  const [number, setNumber] = useState("");

  const onInputChange = ({ target }) => {
    const value = target.value;
    if (value.length > 10) return;
    const isValid = /^\d*$/.test(value);
    if (!isValid) return;
    setNumber(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const numberPhone = "+57" + number;
    console.log(numberPhone);
  };

  return (
    <div className="container__number">
      <img
        className="number__wave"
        src="/public/icons/wave-number.svg"
        alt="wave"
      />
      <div className="number">
        <div className="number__header">
          <figure className="number__header__image">
            <img
              className="number__image__phone"
              src="/public/icons/smartphone-telephone-svgrepo-com.svg"
              alt="smartphone"
            />
          </figure>
          <h2 className="number__header__title">Verify Your Number</h2>
          <p className="number__header__description">
            Please enter your Phone Number
          </p>
        </div>
        <div className="number__body">
          <form className="number__body__form" onSubmit={onSubmit}>
            <div className="number__body__phone">
              <div className="number__body__phone--code">
                <img
                  className="number__body__image--flag"
                  src="/public/icons/flag-for-flag-colombia-svgrepo-com.svg"
                  alt="flag"
                />
                <p className="number__body__image--code">+57</p>
              </div>
              <input
                placeholder="- - - - - - - - - - -"
                type="text"
                name="number"
                value={number}
                onChange={onInputChange}
                className="number__input__phone input"
              />
            </div>
            <div className="number__footer">
              <button className="number__footer__botton botton" type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
