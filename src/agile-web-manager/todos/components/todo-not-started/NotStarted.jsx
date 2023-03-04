import { useState } from 'react';
import { AddTarjet, ChangeTodo, DeleteTodo } from '../index';

import '../style.css';

export const NotStarted = () => {

    const [addTarjet, setAddTarjet] = useState(false);

    return (
        <div className="todo">
            <h2 className="todo__title">Not Started</h2>

            <ul className="todo__tarjet__container">
                <li className="todo__tarjet">
                    <h3 className="todo__tarjet__subtitle">Jugar</h3>
                    <div className="todo__tarjet__icons">
                        <img
                            src="public/icons/text.svg"
                            className="todo__tarjet__text"
                            alt="text.svg"
                        ></img>
                        <div className="todo__tarjet__comments">
                            <img
                                src="public/icons/message.svg"
                                className="todo__tarjet__message"
                                alt="message.svg"
                            ></img>
                            2
                        </div>
                        <div className="todo__tarjet__space"></div>
                        <ChangeTodo />
                        <DeleteTodo />
                    </div>
                </li>
                <li className="todo__tarjet">
                    <h3 className="todo__tarjet__subtitle">Anime</h3>
                    <div className="todo__tarjet__icons">
                        <img
                            src="public/icons/text.svg"
                            className="todo__tarjet__text"
                            alt="text.svg"
                        ></img>
                        <div className="todo__tarjet__comments">
                            <img
                                src="public/icons/message.svg"
                                className="todo__tarjet__message"
                                alt="message.svg"
                            ></img>
                            3
                        </div>
                        <div className="todo__tarjet__space"></div>
                        <ChangeTodo />
                        <DeleteTodo />
                    </div>
                </li>
                <li className="todo__tarjet">
                    <h3 className="todo__tarjet__subtitle">Correr</h3>
                    <div className="todo__tarjet__icons">
                        <img
                            src="public/icons/text.svg"
                            className="todo__tarjet__text"
                            alt="text.svg"
                        ></img>
                        <div className="todo__tarjet__space"></div>
                        <ChangeTodo />
                        <DeleteTodo />
                    </div>
                </li>
                <li className="todo__tarjet">
                    <h3 className="todo__tarjet__subtitle">Volar</h3>
                    <div className="todo__tarjet__icons">
                        <img
                            src="public/icons/text.svg"
                            className="todo__tarjet__text"
                            alt="text.svg"
                        ></img>
                        <div className="todo__tarjet__comments">
                            <img
                                src="public/icons/message.svg"
                                className="todo__tarjet__message"
                                alt="message.svg"
                            ></img>
                            10
                        </div>
                        <div className="todo__tarjet__space"></div>
                        <ChangeTodo />
                        <DeleteTodo />
                    </div>
                </li>
                <li className="todo__tarjet">
                    <h3 className="todo__tarjet__subtitle">Dormir</h3>
                    <div className="todo__tarjet__icons">
                        <img
                            src="public/icons/text.svg"
                            className="todo__tarjet__text"
                            alt="text.svg"
                        ></img>
                        <div className="todo__tarjet__comments">
                            <img
                                src="public/icons/message.svg"
                                className="todo__tarjet__message"
                                alt="message.svg"
                            ></img>
                            10
                        </div>
                        <div className="todo__tarjet__space"></div>
                        <ChangeTodo />
                        <DeleteTodo />
                    </div>
                </li>
                <li className="todo__tarjet">
                    <h3 className="todo__tarjet__subtitle">Correr</h3>
                    <div className="todo__tarjet__icons">
                        <img
                            src="public/icons/text.svg"
                            className="todo__tarjet__text"
                            alt="text.svg"
                        ></img>
                        <div className="todo__tarjet__comments">
                            <img
                                src="public/icons/message.svg"
                                className="todo__tarjet__message"
                                alt="message.svg"
                            ></img>
                            10
                        </div>
                        <div className="todo__tarjet__space"></div>
                        <ChangeTodo />
                        <DeleteTodo />
                    </div>
                </li>
                <li className="todo__tarjet">
                    <h3 className="todo__tarjet__subtitle">Comer</h3>
                    <div className="todo__tarjet__icons">
                        <img
                            src="public/icons/text.svg"
                            className="todo__tarjet__text"
                            alt="text.svg"
                        ></img>
                        <div className="todo__tarjet__comments">
                            <img
                                src="public/icons/message.svg"
                                className="todo__tarjet__message"
                                alt="message.svg"
                            ></img>
                            10
                        </div>
                        <div className="todo__tarjet__space"></div>
                        <ChangeTodo />
                        <DeleteTodo />
                    </div>
                </li>

            </ul>
            {
                addTarjet
                    ?
                    <>
                        <AddTarjet />
                        <div className="todo__add-tarjet__create">
                            <span
                                onClick={() => { }}
                            >
                                <img
                                    className="todo__add-tarjet__confirm"
                                    src="public/icons/check.svg" alt="check.svg"
                                />
                            </span>
                            <span
                                onClick={() => setAddTarjet(false)}
                            >
                                <img
                                    className="todo__add-tarjet__cancel"
                                    src="public/icons/x.svg" alt="x.svg"
                                />
                            </span>
                        </div>
                    </>
                    : <span
                        onClick={() => setAddTarjet(true)}
                        className="todo__add-tarjet"
                    >
                        <img 
                        className="todo__add-tarjet__add"
                        src="public/icons/plus.svg" 
                        alt="plus.svg"
                        />
                        Add card</span>
            }
        </div>
    )
}
