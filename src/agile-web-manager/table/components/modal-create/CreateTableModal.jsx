import './style.css';


export const CreateTableModal = ({ toggleModal }) => {

  const handleCloseModal = () => {
    toggleModal();
  }


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
          autoComplete="off"
          className="create-table-modal__form"
        >
          <h3 className="create-table-modal__subtitle">Table name</h3>
          <input
            className="create-table-modal__input"
            placeholder="Table name"
            type="text"
          />
          <h3 className="create-table-modal__subtitle">Description</h3>
          <textarea
            className="create-table-modal__input create-table-modal__input__textarea"
            placeholder="Description"
            type="text"
          />

          <div className="create-table-modal__buttons">
            <button
              className="create-table-modal__button create-table-modal__button__close"
              onClick={handleCloseModal}
            >
              Cancel</button>
            <button className="create-table-modal__button create-table-modal__button__create">Create</button>
          </div>
        </form>
      </div>


    </div>
  )
}
