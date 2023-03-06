import { useEffect, useState } from 'react';

import { useTableStore } from '../../../hooks/useTableStore';
import { NavbarLayout } from '../../layout/NavbarLayout';
import { CreateTableModal } from '../components/modal-create/CreateTableModal';
import { DeleteTableModal } from '../components/modal-delete/DeleteTableModal';
import { Tables } from '../components/tables/Tables';

import './style.css';

export const TablePage = () => {

  const [showModal, setShowModal] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [idDelete, setIdDelete] = useState(null);

  const { startGetTables, user, tables, startCreateTable, startDeleteTable } = useTableStore();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleModalDelete = (tableId) => {
    setIdDelete(tableId);
    setShowModalDelete(!showModalDelete);
  };


  useEffect(() => {
    startGetTables();
  }, []);


  return (
    <NavbarLayout>
      <div className="tables">
        <h1 className="tables__title">Tables</h1>

        <div className="create-table">
          {
            user.role == "admin" &&
            <div
              onClick={toggleModal}
              className="create-table__title create-table__item"
            >
              <figure>
                <img src="public/icons/plus.svg" alt="plus.svg" />
              </figure>
              Create Table
            </div>
          }

          {
            tables.map(table => (
              <Tables
                key={table.id}
                toggleModalDelete={toggleModalDelete}
                user={user}
                {...table}
              />
            ))
          }

        </div>

        {
          showModal && (
            <CreateTableModal
              toggleModal={toggleModal}
              startCreateTable={startCreateTable}
            />
          )
        }

        {
          showModalDelete && (
            <DeleteTableModal
              toggleModalDelete={toggleModalDelete}
              idDelete={idDelete}
              startDeleteTable={startDeleteTable}
            />
          )
        }
      </div>
    </NavbarLayout>
  );
};
