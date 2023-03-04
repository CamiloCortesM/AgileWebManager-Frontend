
import './styles.css';

export const Tables = ({ toggleModal, toggleModalDelete }) => {

    const handleCreateTable = () => {
        toggleModal();
    }

    const handleDelete = () => {
        toggleModalDelete();
    }

    return (
        <div className="create-table">
            <div
                onClick={handleCreateTable}
                className="create-table__title create-table__item"
            >
                <figure>
                    <img src="public/icons/plus.svg" alt="plus.svg" />
                </figure>
                Create Table
            </div>

            <div className="create-table__item create-table__color">
                <span onClick={handleDelete}>
                    <img
                        className="create-table__delete"
                        src="public/icons/x.svg"
                    ></img>
                </span>
                Hola Mundo!
            </div>

            <div className="create-table__item create-table__color ">
                <span onClick={handleDelete}>
                    <img
                        className="create-table__delete"
                        src="public/icons/x.svg"
                    ></img>
                </span>
                Sistemas Operativos
            </div>

            <div className="create-table__item create-table__color">
                <span onClick={handleDelete}>
                    <img
                        className="create-table__delete"
                        src="public/icons/x.svg"
                    ></img>
                </span>
                Software I
            </div>
        </div>
    );
};
