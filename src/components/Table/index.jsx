import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

import './styles.css';

export const Table = ({
  startDeleteTable,
  startSetActiveTable,
  table,
  toggleModalEdit,
  user,
}) => {
  const { name, id } = table;

  const onDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        startDeleteTable({ id });
      }
    });
  };

  const handleActiveTable = (table) => {
    startSetActiveTable(table);
    toggleModalEdit();
  };

  return (
    <>
      <div className="create-table__item create-table__color">
        {user.role == 'admin' && (
          <>
            <span onClick={() => onDelete(id)}>
              <img
                className="create-table__delete"
                src="public/icons/x.svg"
              ></img>
            </span>

            <span onClick={() => handleActiveTable(table)}>
              <img
                className="create-table__edit"
                src="public/icons/edit.svg"
              ></img>
            </span>
          </>
        )}
        <Link to={`/table/${id}`} className="links">
          <p className="create-table__item__p">{name}</p>
        </Link>
      </div>
    </>
  );
};

Table.propTypes = {
  startDeleteTable: PropTypes.func.isRequired,
  startSetActiveTable: PropTypes.func.isRequired,
  table: PropTypes.object.isRequired,
  toggleModalEdit: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};
