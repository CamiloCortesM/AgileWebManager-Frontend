import { Done, InProgress, NotStarted } from '../index';

import './style.css';

export const TodoPages = () => {
  return (
    <>
      <div className="todo-pages">
        <h2 className="todo-pages__title">Hola mundo!</h2>
        <div className="todo-pages__container">
          <NotStarted />
          <InProgress/>
          <Done/>
        </div>
      </div>
    </>
  )
}
