
import { Link } from 'react-router-dom';
import './styles.css';

export const Tables = ({ toggleModalDelete, user, name, id }) => {

    const handleDelete = () => {
        toggleModalDelete(id);
    }

    return (
        <>
            <div className="create-table__item create-table__color">
                {
                    user.role == "admin" &&
                    <span onClick={handleDelete}>
                        <img
                            className="create-table__delete"
                            src="public/icons/x.svg"
                        ></img>
                    </span>
                }
                <Link to={`/table/${id}`} className="links">
                    <p className='create-table__item__p'>
                        {name}
                    </p>
                </Link>
            </div>
        </>
    );
};
