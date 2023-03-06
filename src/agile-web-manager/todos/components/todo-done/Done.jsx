import { DeleteTodo } from '../index';
import '../style.css';

export const Done = ({ name, status, comments, id, startDeleteTodo }) => {

    return (
        <>
            {
                (status == "done") &&
                <li className="todo__tarjet">
                    <h3 className="todo__tarjet__subtitle">{name}</h3>
                    <div className="todo__tarjet__icons">
                        <img
                            src="/public/icons/text.svg"
                            className="todo__tarjet__text"
                            alt="text.svg"
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
                        <DeleteTodo
                            id={id}
                            startDeleteTodo={startDeleteTodo}
                        />
                    </div>
                </li>
            }
        </>
    )
}
