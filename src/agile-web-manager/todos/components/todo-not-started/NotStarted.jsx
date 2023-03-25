import { DeleteTodo } from "../index";

import "../style.css";

export const NotStarted = ({
  name,
  status,
  user,
  comments,
  id,
  desc,
  startDeleteTodo,
  startSetActiveTodo,
  toggleModalEdit,
  handleModal,
}) => {
  const handleGetInfoTodo = () => {
    toggleModalEdit(true);
    startSetActiveTodo({ name: name, status: status, id: id, desc: desc });
  };

  return (
    <>
      {status == "start" && (
        <li className="todo__tarjet">
          <span onClick={user !== "readOnly" && handleGetInfoTodo}>
            <h3 className="todo__tarjet__subtitle">{name}</h3>
          </span>
          <div className="todo__tarjet__icons">
            <img
              src="/public/icons/text.svg"
              className="todo__tarjet__text"
              alt="text.svg"
              onClick={handleModal}
            ></img>
            <div className="todo__tarjet__comments">
              <img
                src="/public/icons/message.svg"
                className="todo__tarjet__message"
                alt="message.svg"
              ></img>
              {comments.length}
            </div>
            <div className="todo__tarjet__space"></div>
            {user !== "readOnly" && (
              <DeleteTodo id={id} startDeleteTodo={startDeleteTodo} />
            )}
          </div>
        </li>
      )}
    </>
  );
};
