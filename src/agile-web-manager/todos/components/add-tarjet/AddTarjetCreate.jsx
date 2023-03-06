import React, { useState } from 'react'
import { useForm } from '../../../../hooks/useForm';

import './style.css'

const initialState = {
    name: ""
}

export const AddTarjetCreate = ({ startSaveTodos, status, getTable }) => {

    const [addTarjet, setAddTarjet] = useState(false);
    const { onResetForm, onInputChange, name } = useForm(initialState);

    const handleSendCard = (e) => {
        e.preventDefault();
        if (!name) return;
        
        startSaveTodos({ name: name, tableId: getTable, status: status, desc: '' });
        onResetForm();
        setAddTarjet(false);
    };

    return (
        <>
            {
                addTarjet ?
                    <>
                        <div className="add-tarjet">
                            <form onSubmit={handleSendCard} >
                                <input
                                    className="add-tarjet__area"
                                    placeholder="Enter a title for your card"
                                    required
                                    value={name}
                                    name="name"
                                    onChange={onInputChange}
                                />
                            </form>
                        </div>
                        <div className="todo__add-tarjet__create">
                            <button
                                onClick={handleSendCard}
                                type="submit"
                                className="todo__add-tarjet__create__button"
                            >
                                <img
                                    className="todo__add-tarjet__confirm"
                                    src="/public/icons/check.svg" alt="check.svg"
                                />
                            </button>
                            <span
                                onClick={() => setAddTarjet(false)}
                            >
                                <img
                                    className="todo__add-tarjet__cancel"
                                    src="/public/icons/x.svg" alt="x.svg"
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
                            src="/public/icons/plus.svg"
                            alt="plus.svg"
                        />
                        Add tarjet</span>

            }
        </>
    )
}
