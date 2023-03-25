import Swal from "sweetalert2";
import { getLetter } from "../../../helpers/getLetter";
import { getDate } from "../../../helpers/getDate";
import { useAuthStore } from "../../../hooks/useAuthStore";
import { useCommentStore } from "../../../hooks/useCommentStore";
import { useForm } from "../../../hooks/useForm";
import { useTodoStore } from "../../../hooks/useTodoStore";
import "./styles.css";

const createFields = {
  comment: "",
};

export const CommentView = ({ show, handleModal }) => {
  const { onInputChange, comment } = useForm(createFields);

  const { todoActive } = useTodoStore();
  const { comments, startSaveComment, startLogoutComment, startDeleteComment } =
    useCommentStore();
  const { user } = useAuthStore();

  const closeModal = () => {
    handleModal();
    startLogoutComment();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    startSaveComment({ comment, todoId: todoActive.id });
    Swal.fire("Good job!", "Comment Created", "success");
  };

  const DeleteComment = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        startDeleteComment({ id });
      }
    });
  };

  return (
    <div className={`modal ${show ? "show" : ""}`} onClick={closeModal}>
      <div className="modal-todo" onClick={(e) => e.stopPropagation()}>
        <button className="todo--button" onClick={closeModal}>
          X
        </button>
        <div className="todo__header">
          <div className="todo__header__tittle">
            <img
              src="/public/icons/board-presentation-education-svgrepo-com.svg"
              className="todo__header--icon"
              alt="icon-todo"
            ></img>
            <h2 className="todo__header--tittle">{todoActive?.name}</h2>
            <p className="todo__header--status">
              <span> {todoActive?.status} </span>
            </p>
          </div>
          <p className="todo__header--desc">{todoActive?.desc}</p>
        </div>
        <div className="todo__activity">
          <div className="todo__activity__header">
            <img
              src="/public/icons/bullets-svgrepo-com.svg"
              className="activity--icon"
              alt="icon-todo"
            ></img>
            <h3 className="todo__activity--title">Activity</h3>
          </div>

          <div className="todo__comment">
            <form className="form__todo" onSubmit={onSubmit}>
              <div className="form__modal__image">
                <p className="form__modal__image--icon">
                  {getLetter(user.name)}
                </p>
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
                {comment != "" && (
                  <button type="submit" className="button--send">
                    <img
                      type="submit"
                      className="icon--send"
                      src="/public/icons/send-2-svgrepo-com.svg"
                      alt="send"
                    />
                  </button>
                )}
              </div>
            </form>
          </div>
          <div className="todo__activity__content">
            {comments.map((comment) => (
              <div key={comment._id} className="todo__activity__comment">
                <div className="comment__icon">
                  <p className="comment__icon--icon">
                    {getLetter(comment.creator.name)}
                  </p>
                </div>
                <div className="comment__content">
                  <div className="comment__content__header">
                    <h4 className="comment--autor">{comment.creator.name}</h4>
                    <p className="comment--date">{getDate(comment.date)}</p>
                  </div>
                  <div className="comment__content__body">
                    <p className="comment--text">{comment.comment}</p>
                  </div>
                  {user.uid === comment.creator._id && (
                    <div className="comment__actions">
                      <ul className="comment_list">
                        <li className="comment__list__item">
                          <p
                            className="list__item--action"
                            onClick={() => DeleteComment(comment._id)}
                          >
                            Eliminar
                          </p>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
