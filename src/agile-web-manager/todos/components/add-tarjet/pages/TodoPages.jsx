import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTableStore } from '../../../../../hooks/useTableStore';
import { useTodoStore } from '../../../../../hooks/useTodoStore';
import { NavbarLayout } from '../../../../layout/NavbarLayout';
import { AddTarjetCreate } from '../AddTarjetCreate';
import { ModalTodo } from '../components/modal-edit/ModalTodo';
import { Done, InProgress, NotStarted } from '../../../index';

import './style.css';

export const TodoPages = () => {

  const {
    tables,
    todos,
    todoActive,
    startLoadTodos,
    startSaveTodos,
    startDeleteTodo,
    startSetActiveTodo,
    startUpdateTodo,
  } = useTodoStore();

  const { startGetTables } = useTableStore();
  const location = useParams();
  const [showModalEditTodo, setShowModalEditTodo] = useState(false);
  console.log(tables);


  useEffect(() => {
    startGetTables();
    startLoadTodos();
  }, []);


  const toggleModalEdit = () => {
    setShowModalEditTodo(!showModalEditTodo);
  };
  const {id} = useParams()

  const getTable = tables.find((table) => table.id === location.id); 
  const tableTodos = getTable ? getTable.todos : []; 
  const todosInTable = todos.filter((todo) => todo.table === id ); 

  return (
    <NavbarLayout>

      <div className="todo-pages">
        <h2 className="todo-pages__title">{getTable?.name}</h2>
        <p className="todo-pages__title">{getTable?.desc}</p>
        <div className="todo-pages__container">

          <div className="todo" >
            <h2 className="todo__title">Not Started</h2>
            <ul className="todo__tarjet__container">
              {
                todosInTable.map(todo => (
                  <NotStarted
                    key={todo.id}
                    {...todo}
                    startDeleteTodo={startDeleteTodo}
                    startSetActiveTodo={startSetActiveTodo}
                    toggleModalEdit={toggleModalEdit}

                  />
                ))
              }
            </ul>
            <AddTarjetCreate
              status="start"
              startSaveTodos={startSaveTodos}
              getTable={getTable?.id}
            />
          </div>

          <div className="todo">
            <h2 className="todo__title">In Progress</h2>
            <ul className="todo__tarjet__container">

              {
                todosInTable.map(todo => (
                  <InProgress
                    key={todo.id}
                    {...todo}
                    startDeleteTodo={startDeleteTodo}
                    startSetActiveTodo={startSetActiveTodo}
                    toggleModalEdit={toggleModalEdit}
                  />

                ))
              }
            </ul>
            <AddTarjetCreate
              status="progress"
              startSaveTodos={startSaveTodos}
              getTable={getTable?.id}
            />
          </div>

          <div className="todo">
            <h2 className="todo__title">Done</h2>
            <ul className="todo__tarjet__container">
              {
                todosInTable.map(todo => (
                  <Done
                    key={todo.id}
                    {...todo}
                    startDeleteTodo={startDeleteTodo}
                    startSetActiveTodo={startSetActiveTodo}
                    toggleModalEdit={toggleModalEdit}
                  />
                ))
              }
            </ul>
            <AddTarjetCreate
              status="done"
              startSaveTodos={startSaveTodos}
              getTable={getTable?.id}
            />
          </div>

        </div>

      </div>
      {
        showModalEditTodo &&
        <ModalTodo
          todoActive={todoActive}
          toggleModalEdit={toggleModalEdit}
          startUpdateTodo={startUpdateTodo}
        />
      }

    </NavbarLayout>
  )
}
