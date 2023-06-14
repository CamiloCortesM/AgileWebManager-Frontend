import { useEffect, useState } from 'react';
import './style.css';


export const ModalTodo = ({ todoActive, toggleModalEdit, startUpdateTodo }) => {

  const [formValue, setFormValue] = useState({
    name: '',
    desc: '',
    status: '',
    id: '',
  });


  useEffect(() => {
    if (todoActive !== null) {
      setFormValue({ ...todoActive });
    }
  }, [todoActive]);


  const onInputChange = ({ target }) => {
    setFormValue({
      ...formValue,
      [target.name]: target.value,
    })
  }

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    await startUpdateTodo({ name: formValue.name, desc: formValue.desc, status: formValue.status, id: formValue.id });
    toggleModalEdit(false)
  };


  return (
    <div className="edit-todo-modal">

      <div className="edit-todo-modal__container">

        <div className="edit-todo-modal__title">
          <span
            onClick={() => toggleModalEdit(false)}
          >
            <img
              className="edit-todo-modal__title__x"
              src="/public/icons/x.svg" alt="x.svg"
            />
          </span>
          <h2 className="edit-todo-modal__title__h2">Edit Todo</h2>
        </div>

        <form
          className="edit-todo-modal__form"
          onSubmit={handleSubmitUpdate}
        >
          <h3 className="edit-todo-modal__subtitle">Name</h3>
          <input
            className="edit-todo-modal__input"
            placeholder="Name"
            type="text"
            name="name"
            value={formValue.name}
            onChange={onInputChange}
          />
          <h3 className="edit-todo-modal__subtitle">Description</h3>
          <textarea
            className="edit-todo-modal__input "
            placeholder="Description"
            type="text"
            name="desc"
            value={formValue.desc}
            onChange={onInputChange}
          />
          <div className="edit-todo-modal__select">
            <h3 className="edit-todo-modal__subtitle">Status</h3>
            <select
              onChange={onInputChange}
              value={formValue.status}
              name="status"
              className="edit-todo-modal__combobox"
            >
              <option className="edit-todo-modal__combobox__options" disabled >Select...</option>
              <option className="edit-todo-modal__combobox__options" value="start">Start</option>
              <option className="edit-todo-modal__combobox__options" value="progress">In Progress</option>
              <option className="edit-todo-modal__combobox__options" value="done">Done</option>
            </select>
          </div>

          <div className="edit-todo-modal__buttons">
            <button
              className="edit-todo-modal__button edit-todo-modal__button__close"
              type="button"
              onClick={() => toggleModalEdit(false)}
            >
              Cancel</button>
            <button type="submit" className="edit-todo-modal__button edit-todo-modal__button__create">
              Update</button>
          </div>
        </form>
      </div >

    </div >
  )
}
