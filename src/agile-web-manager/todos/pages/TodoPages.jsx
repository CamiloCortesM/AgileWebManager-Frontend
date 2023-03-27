import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useTableStore } from '../../../hooks/useTableStore';
import { useTodoStore } from '../../../hooks/useTodoStore';
import { CommentView } from '../../comments/view/CommentView';
import { NavbarLayout } from '../../layout/NavbarLayout';
import { Done, InProgress, NotStarted, AddTarjetCreate, ModalTodo } from '../index';

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

  const handleModal = () => {
    setShowModal(!showModal);
  };
  // React.Memo for the components
  const NotStartedMemo = React.memo(NotStarted);
  const InProgressMemo = React.memo(InProgress);
  const DoneMemo       = React.memo(Done);


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
            { (user.role !== "readOnly") && (
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
            { (user.role !== "readOnly") && (
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
            { (user.role !== "readOnly") && (
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
