import { useEffect } from "react";
import { useForm } from "../../../hooks/useForm";
import { useUserStore } from "../../../hooks/useUserStore";
import "./styles.css";

let createFields = {
  name: "",
  email: "",
  password: "",
  role: "",
  status: "",
  phone: "",
};
export const ModalUpdate = ({ show, handleModal }) => {
  const { startUpdateUser, activeUser } = useUserStore();
  const { user } = activeUser;

  useEffect(() => {
    createFields = {
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
    };
  }, []);

  const { onInputChange, name, email, role, status } = useForm(createFields);

  const onSubmit = (e) => {
    e.preventDefault();
    startUpdateUser({
      id: user.id,
      name,
      email,
      role,
      status,
    });
    handleModal();
  };
  return (
    <div className={`modal ${show ? "show" : ""}`} onClick={handleModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={handleModal}>
          X
        </button>
        <div className="modal__header">
          <h2 className="modal__header--title">Update User</h2>
          <p className="modal__header--desc">
            Fill in all the fields to create the user
          </p>
        </div>
        <form className="form__modal" onSubmit={onSubmit}>
          <div className="form__modal__name">
            <label htmlFor="name2" id="nameLabel2" className="form--item">
              Name
            </label>
            <input
              type="text"
              className="modal--input"
              name="name"
              value={name}
              onChange={onInputChange}
              id="name2"
              required
            />
          </div>
          <div className="form__modal__email">
            <label htmlFor="email2" id="emailLabel2" className="form--item">
              Email
            </label>
            <input
              type="email"
              className="modal--input"
              name="email"
              value={email}
              onChange={onInputChange}
              id="email2"
              required
            />
          </div>
          <div className="form__modal__password">
            <label
              htmlFor="password2"
              id="passwordLabel2"
              className="form--item"
            >
              Password
            </label>
            <input
              type="text"
              className="modal--input"
              name="password"
              id="password2"
              value={user.password}
              onChange={onInputChange}
              minLength="8"
              disabled={true}
            />
          </div>
          <div className="form__modal__role">
            <label htmlFor="role2" id="roleLabel2" className="form--item">
              Role
            </label>
            <select
              name="role"
              className="modal--select"
              id="role2"
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
          <div className="form__modal__phone">
            <label htmlFor="phone" id="phoneLabel" className="form--item">
              Phone
            </label>
            <input
              type="text"
              className="modal--input"
              name="phone"
              id="phone"
              value={user.phone}
              disabled={true}
            />
          </div>
          <div className="form__modal__status">
            <label htmlFor="status" id="statusLabe" className="form--item">
              Status
            </label>
            <select
              name="status"
              className="modal--select"
              id="status"
              value={status}
              onChange={onInputChange}
              required
            >
              <option value="">Select status</option>
              <option value="new">new</option>
              <option value="member">member</option>
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
