import { useCommentStore } from '../../hooks/useCommentStore';
import { DeleteTodo } from '../DeleteTodo';

import PropTypes from 'prop-types';

import '../shares-styles/todos.css';

export const Done = ({
  handleModal,
  name,
  status,
  user,
  comments,
  id,
  desc,
  startDeleteTodo,
  startSetActiveTodo,
  toggleModalEdit,
}) => {

  const { startLoadComments } = useCommentStore();
  const handleGetInfoTodo = () => {
    toggleModalEdit(true);
    startSetActiveTodo({ name, status, id, desc });
  };

  const openModal = () => {
    startSetActiveTodo({ name, status, id, desc });
    startLoadComments(comments);
    handleModal();
  };

  return (
    <>
      { (status == "done") && (
        <li className="todo__tarjet">
          <span onClick={ (user !== "readOnly") && handleGetInfoTodo}>
            <h3 className="todo__tarjet__subtitle">{name}</h3>
          </span>
          <div className="todo__tarjet__icons">
            <img
              src="/public/icons/text.svg"
              className="todo__tarjet__text"
              alt="text.svg"
              onClick={openModal}
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
            { (user !== "readOnly") && (
              <DeleteTodo id={id} startDeleteTodo={startDeleteTodo} />
            )}
          </div>
        </li>
      )}
    </>
  );
};

Done.propTypes = {
  name               : PropTypes.string.isRequired,
  status             : PropTypes.string.isRequired,
  user               : PropTypes.string.isRequired,
  id                 : PropTypes.string.isRequired,
  desc               : PropTypes.string,
  startDeleteTodo    : PropTypes.func.isRequired, 
  startSetActiveTodo : PropTypes.func.isRequired, 
  toggleModalEdit    : PropTypes.func.isRequired,
};
