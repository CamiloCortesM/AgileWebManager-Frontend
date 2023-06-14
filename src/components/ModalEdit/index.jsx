import { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import PropTypes from 'prop-types';

import '../modal-create/style.css';

let initialState = {
    name: "",
    desc: ""
}

export const EditTableModal = ({ tableActive, startUpdatedTable, toggleModalEdit }) => {

    const { name, desc, onInputChange, onResetForm } = useForm(initialState);

    useEffect(() => {
        initialState = {
            name: tableActive.name,
            desc: tableActive.desc,
        }
    }, []);

    const handleModalUpdate = (e) => {
        e.preventDefault();
        startUpdatedTable({ id: tableActive.id, name: name, desc: desc });
        onResetForm();
        toggleModalEdit();
    };

    return (
        <div className = "table-modal">

            <div className = "table-modal__container">

                <div className = "table-modal__title">
                    <span
                        onClick = {() => toggleModalEdit(false)}
                    >
                        <img
                            className = "table-modal__title__x"
                            src       = "public/icons/x.svg" 
                            alt       = "x.svg"
                        />
                    </span>
                    <h2 className = "table-modal__title__h2">Edit Table</h2>
                </div>

                <form
                    className = "table-modal__form"
                    onSubmit  = {handleModalUpdate}
                >
                    <h3 className = "table-modal__subtitle">Table name</h3>
                    <input
                        className   = "table-modal__input"
                        placeholder = "Table name"
                        type        = "text"
                        name        = "name"
                        value       = {name}
                        onChange    = {onInputChange}
                    />
                    <h3 className = "table-modal__subtitle">Description</h3>
                    <textarea
                        className   = "table-modal__input"
                        placeholder = "Description"
                        type        = "text"
                        name        = "desc"
                        value       = {desc}
                        onChange    = {onInputChange}
                    />

                    <div className = "table-modal__buttons">
                        <button
                            className = "table-modal__button table-modal__button__close"
                            onClick   = {() => toggleModalEdit(false)}
                            type      = "button"
                        >
                            Cancel
                        </button>
                        
                        <button 
                        type      = "submit"
                        className = "table-modal__button table-modal__button__create"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div >

        </div >

    )
}

EditTableModal.propTypes = {
    tableActive       : PropTypes.object.isRequired,
    startUpdatedTable : PropTypes.func.isRequired,      
    toggleModalEdit   : PropTypes.func.isRequired, 
}