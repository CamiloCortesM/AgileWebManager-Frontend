import { useForm } from "../../../hooks/useForm";
import "./styles.css";

const createFields = {
  comment: "",
};

export const CommentView = ({ show, handleModal }) => {
  const { onInputChange, comment, onResetForm } = useForm(createFields);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Hola");
  };
  return (
    <div className={`modal ${show ? "show" : ""}`} onClick={handleModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={handleModal}>
          X
        </button>
        <div className="todo__header_">
          <h2 className="todo__header_--title">TODO</h2>
          <p className="todo__header_--desc">desc todo</p>
        </div>
        <div className="todo__activity">
          <h3 className="todo__activity--title">Activity</h3>
          <div className="todo__comment">
            <form onSubmit={onSubmit}>
              <div className="form__modal__image">
                <p className="form__modal__image--icon">C</p>
              </div>
              <div className="form__modal__comment">
                <input
                  type="text"
                  placeholder="Write a comment..."
                  className="form__modal--input"
                  name="comment"
                  value={comment}
                  onChange={onInputChange}
                  id="comment"
                  required
                />
                <button type="submit" className="modal--button">
                  Save
                </button>
              </div>
            </form>
          </div>
          <div className="todo__activity__content">
            <div className="comment__icon"></div>
            <div className="comment__content">
              <div className="comment__content__header">
                <h3 className="comment--autor">Nombre Apellido</h3>
                <p className="comment--date">fecha</p>
              </div>
              <div className="comment__content__body">
                <p className="comment--text">Hola</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
