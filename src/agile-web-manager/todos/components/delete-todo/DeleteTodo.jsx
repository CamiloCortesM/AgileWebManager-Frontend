import { useDeferredValue, useState } from 'react';
import './style.css';

export const DeleteTodo = ({ id, startDeleteTodo }) => {
    const [onDeleteTodo, setOnDeleteTodo] = useState(false);

    const toggleDelete = () => {
        setOnDeleteTodo(!onDeleteTodo);
    };

    const deleteTOdo = async () => {
        await startDeleteTodo({ id: id });
    }
    return (
        <div className="delete-todo">
            {
                !onDeleteTodo ?
                    <>
                        <span
                            onClick={toggleDelete}
                            className="delete-todo__button">
                            <>
                                <img
                                    src="/public/icons/trash.svg"
                                    alt="trash.svg"
                                    className="delete-todo__button__trash"
                                />
                            </>
                        </span>
                    </>
                    :
                    <>
                        <span
                            onClick={toggleDelete}
                        >
                            <img
                                className="delete-todo__cancel"
                                src="/public/icons/x.svg"
                                alt="x.svg"
                            />
                        </span>
                        <span
                            onClick={deleteTOdo}
                        >
                            <img
                                className="delete-todo__check"
                                src="/public/icons/check.svg"
                                alt="check.svg"
                            />
                        </span>
                    </>
            }

        </div>
    );
};
