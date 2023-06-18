import { useForm } from '../../hooks/useForm';
import { useUserStore } from '../../hooks/useUserStore';

import '../shares-styles/modal.css';

const createFields = {
  name: '',
  email: '',
  password: '',
  role: '',
};

export const Modal = ({ show, handleModal }) => {
  const { onInputChange, name, email, password, role, onResetForm } =
    useForm(createFields);
  const { startCreateUser } = useUserStore();

  const onSubmit = (e) => {
    e.preventDefault();
    startCreateUser({ name, email, password, role });
    handleModal();
    onResetForm();
  };
  return (
    <div className={`modal ${show ? 'show' : ''}`} onClick={handleModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={handleModal}>
          X
        </button>
        <div className="modal__header">
          <h2 className="modal__header--title">Create User</h2>
          <p className="modal__header--desc">
            Fill in all the fields to create the user
          </p>
        </div>
        <form className="form__modal" onSubmit={onSubmit}>
          <div className="form__modal__name">
            <label htmlFor="name" id="nameLabel" className="form--item">
              Name
            </label>
            <input
              type="text"
              className="modal--input"
              name="name"
              value={name}
              onChange={onInputChange}
              id="name"
              required
            />
          </div>
          <div className="form__modal__email">
            <label htmlFor="email" id="emailLabel" className="form--item">
              Email
            </label>
            <input
              type="email"
              className="modal--input"
              name="email"
              value={email}
              onChange={onInputChange}
              id="email"
              required
            />
          </div>
          <div className="form__modal__password">
            <label htmlFor="password" id="passwordLabel" className="form--item">
              Password
            </label>
            <input
              type="password"
              className="modal--input"
              name="password"
              id="password"
              value={password}
              onChange={onInputChange}
              minLength="8"
              required
            />
          </div>
          <div className="form__modal__role">
            <label htmlFor="role" id="roleLabel" className="form--item">
              Role
            </label>
            <select
              name="role"
              className="modal--select"
              id="role"
              value={role}
              onChange={onInputChange}
              required
            >
              <option value="">Select role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="readOnly">Read only</option>
            </select>
          </div>
          <button type="submit" className="modal--button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
