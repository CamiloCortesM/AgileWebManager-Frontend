import { useCommentStore } from '../../../../hooks/useCommentStore';
import { DeleteTodo } from '../index';
import PropTypes from 'prop-types';

import '../style.css';

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
      { (status == "start") && (
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

NotStarted.propTypes = {
  desc               : PropTypes.string,
  id                 : PropTypes.string.isRequired,
  name               : PropTypes.string.isRequired,
  startDeleteTodo    : PropTypes.func.isRequired,
  startSetActiveTodo : PropTypes.func.isRequired,
  status             : PropTypes.string.isRequired,
  toggleModalEdit    : PropTypes.func.isRequired,
  user               : PropTypes.string.isRequired,
}
