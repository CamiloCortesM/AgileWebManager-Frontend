import './style.css';

export const DeleteTableModal = ({ toggleModalDelete, idDelete, startDeleteTable }) => {

    const handleDelete = () => {
        toggleModalDelete();
    }

    const deleteTable = async(idDelete) => {
        await startDeleteTable({ id: idDelete });
        toggleModalDelete();
    }

    return (
        <div className="delete-table-modal">
            <div className="delete-table-modal__container">
                <h3 className="delete-table-modal__title">Delete Table</h3>
                <span onClick={handleDelete}>
                    <img
                        className="delete-table-modal__delete"
                        src="public/icons/x.svg"
                    ></img>
                </span>
                <p className="delete-table-modal__p">Are you sure you want to delete your table?</p>
                <div className="delete-table-modal__buttons">
                    <button
                        type="button"
                        onClick={handleDelete}
                        className="delete-table-modal__button delete-table-modal__button__cancel"
                    >Cancel</button>
                    <button
                        type="button"
                        onClick={() => deleteTable(idDelete)}
                        className="delete-table-modal__button delete-table-modal__button__delete"
                    >Delete</button>
                </div>
            </div>
        </div>
    )
}
