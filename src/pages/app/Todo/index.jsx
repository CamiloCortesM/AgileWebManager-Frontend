import { memo, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { useTableStore } from '../../../hooks/useTableStore';
import { useTodoStore } from '../../../hooks/useTodoStore';

import { NotStarted } from '../../../components/TodoNotStarted';
import { InProgress } from '../../../components/TodoInProgress';
import { Done } from '../../../components/TodoDone';
import { AddTarjetCreate } from '../../../components/AddTarjet';
import { ModalTodo } from '../../../components/ModalTodo';
import { CommentView } from '../../../views/Comments';

import { NavbarLayout } from '../../../layouts/Navbar';

import './style.css';
export const TodoPages = () => {
  const {
    tables,
    todos,
    todoActive,
    user,
    startLoadTodos,
    startSaveTodos,
    startDeleteTodo,
    startSetActiveTodo,
    startUpdateTodo,
  } = useTodoStore();

  const { startGetTables } = useTableStore();
  const location = useParams();
  const [showModalEditTodo, setShowModalEditTodo] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // React.memo for the components
  const NotStartedMemo = memo(NotStarted);
  const InProgressMemo = memo(InProgress);
  const DoneMemo = memo(Done);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    startGetTables();
    startLoadTodos();
  }, []);

  const toggleModalEdit = () => {
    setShowModalEditTodo(!showModalEditTodo);
  };
  const { id } = useParams();

  // Get todos from table id
  const getTable = tables.find((table) => table.id === location.id);
  const todosInTable = todos.filter((todo) => todo.table === id);

  return (
    <NavbarLayout>
      <div className="todo-pages">
        <h2 className="todo-pages__title">{getTable?.name}</h2>
        <p className="todo-pages__title">{getTable?.desc}</p>
        <div className="todo-pages__container">
          <div className="todo">
            <h2 className="todo__title">Not Started</h2>
            <ul className="todo__tarjet__container">
              {todosInTable.map((todo) => (
                <NotStarted
                  key={todo.id}
                  {...todo}
                  startDeleteTodo={startDeleteTodo}
                  startSetActiveTodo={startSetActiveTodo}
                  toggleModalEdit={toggleModalEdit}
                  handleModal={handleModal}
                  user={user.role}
                />
              ))}
            </ul>
            {user.role !== 'readOnly' && (
              <AddTarjetCreate
                status="start"
                getTable={getTable?.id}
                startSaveTodos={startSaveTodos}
              />
            )}
          </div>

          <div className="todo">
            <h2 className="todo__title">In Progress</h2>
            <ul className="todo__tarjet__container">
              {todosInTable.map((todo) => (
                <InProgress
                  key={todo.id}
                  {...todo}
                  startDeleteTodo={startDeleteTodo}
                  startSetActiveTodo={startSetActiveTodo}
                  toggleModalEdit={toggleModalEdit}
                  handleModal={handleModal}
                  user={user.role}
                />
              ))}
            </ul>
            {user.role !== 'readOnly' && (
              <AddTarjetCreate
                status="progress"
                getTable={getTable?.id}
                startSaveTodos={startSaveTodos}
              />
            )}
          </div>

          <div className="todo">
            <h2 className="todo__title">Done</h2>
            <ul className="todo__tarjet__container">
              {todosInTable.map((todo) => (
                <Done
                  key={todo.id}
                  {...todo}
                  startDeleteTodo={startDeleteTodo}
                  startSetActiveTodo={startSetActiveTodo}
                  toggleModalEdit={toggleModalEdit}
                  handleModal={handleModal}
                  user={user.role}
                />
              ))}
            </ul>
            {user.role !== 'readOnly' && (
              <AddTarjetCreate
                status="done"
                getTable={getTable?.id}
                startSaveTodos={startSaveTodos}
              />
            )}
          </div>
        </div>
      </div>

      {showModalEditTodo && (
        <ModalTodo
          todoActive={todoActive}
          toggleModalEdit={toggleModalEdit}
          startUpdateTodo={startUpdateTodo}
        />
      )}
      <CommentView show={showModal} handleModal={handleModal} />
    </NavbarLayout>
  );
};
