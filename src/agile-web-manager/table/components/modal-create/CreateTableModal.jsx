import { useState } from 'react';
import { useForm } from '../../../../hooks/useForm';

import './style.css';

const tableForm = {
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
    <div className="create-table-modal">

      <div className="create-table-modal__container">

        <div className="create-table-modal__title">
          <span onClick={handleCloseModal}>
            <img
              className="create-table-modal__title__x"
              src="public/icons/x.svg" alt="x.svg"
            />
          </span>
          <h2 className="create-table-modal__title__h2">Create Table</h2>
        </div>

        <form
          className="create-table-modal__form"
          onSubmit={createTableSubmit}
        >
          <h3 className="create-table-modal__subtitle">Table name</h3>
          <input
            className={`create-table-modal__input ${
              formSubmitted && !name &&'create-table-modal__input--invalid'
            }`}
            placeholder="Table name"
            type="text"
            name="name"
            value={name}
            onChange={onInputChange}
          />
          <h3 className="create-table-modal__subtitle">Description</h3>
          <textarea
            className={`create-table-modal__input ${
              formSubmitted && !desc &&'create-table-modal__input--invalid'
            }`}
            placeholder="Description"
            type="text"
            name="desc"
            value={desc}
            onChange={onInputChange}
          />

          <div className="create-table-modal__buttons">
            <button
              className="create-table-modal__button create-table-modal__button__close"
              onClick={handleCloseModal}
              type="button"
            >
              Cancel</button>
            <button type="submit" className="create-table-modal__button create-table-modal__button__create">
              Create</button>
          </div>
        </form>
      </div >

    </div >
  )
}
