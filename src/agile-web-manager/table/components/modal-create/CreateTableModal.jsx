import { useState } from 'react';
import { useForm } from '../../../../hooks/useForm';
import PropTypes from 'prop-types';

import './style.css';

let tableForm = {
  name: "",
  desc: "",
}

export const CreateTableModal = ({ toggleModal, startCreateTable }) => {

  const { name, desc, onInputChange, onResetForm } = useForm(tableForm);
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleCloseModal = () => {
    toggleModal();
  };

  const createTableSubmit = async(e) => {
    e.preventDefault();
    if (!name || !desc) {
      setFormSubmitted(true)
      return
    }
    await startCreateTable({ name: name, desc: desc });
    onResetForm();
    handleCloseModal();
  };


  return (
    <div className = "table-modal">
      <div className = "table-modal__container">
        <div className = "table-modal__title">
        
          <span onClick = {handleCloseModal}>
            <figure>
                <img
                    className = "table-modal__title__x"
                    src = "public/icons/x.svg" alt="x.svg"
                />
            </figure>
          </span>
          <h2 className = "table-modal__title__h2">Create Table</h2>
          
        </div>

        <form
          className = "table-modal__form"
          onSubmit  = {createTableSubmit}
        >

          <h3 className = "table-modal__subtitle">Table name</h3>

          <input
            className = {`table-modal__input ${
              formSubmitted && !name &&'table-modal__input--invalid'
            }`}
            placeholder = "Table name"
            type        = "text"
            name        = "name"
            value       = {name}
            onChange    = {onInputChange}
          />

          <h3 className = "table-modal__subtitle">Description</h3>

          <textarea
            className = {`table-modal__input ${
              formSubmitted && !desc &&'table-modal__input--invalid'
            }`}
            placeholder = "Description"
            type        = "text"
            name        = "desc"
            value       = {desc}
            onChange    = {onInputChange}
          />

          <div className = "table-modal__buttons">

            <button
              className = "table-modal__button table-modal__button__close"
              onClick   = {handleCloseModal}
              type      = "button"
            >
              Cancel
            </button>

            <button 
            type      = "submit" 
            className = "table-modal__button table-modal__button__create"
            >
              Create
            </button>

          </div>
        </form>
      </div >

    </div >
  );
};

CreateTableModal.propTypes = {
  toggleModal      : PropTypes.func.isRequired,
  startCreateTable : PropTypes.func.isRequired,
};
