import { useEffect, useState } from 'react';

import { useTableStore } from '../../../hooks/useTableStore';
import { NavbarLayout } from '../../layout/NavbarLayout';
import { CreateTableModal } from '../components/modal-create/CreateTableModal';
import { DeleteTableModal } from '../components/modal-delete/DeleteTableModal';
import { EditTableModal } from '../components/modal-edit/EditTableModal';
import { Tables } from '../components/tables/Tables';

import './style.css';

export const TablePage = () => {

  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false)


  const {
    startCreateTable,
    startDeleteTable,
    startGetTables,
    startSetActiveTable,
    startUpdatedTable,
    tables,
    user,
    tableActive,
  } = useTableStore();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleModalEdit = () => {
    setShowModalEdit(!showModalEdit);
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
                user={user}
                table={table}
                toggleModalEdit={toggleModalEdit}
                startDeleteTable={startDeleteTable}
                startSetActiveTable={startSetActiveTable}
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
          showModalEdit && (
            <EditTableModal
              tableActive={tableActive}
              startUpdatedTable={startUpdatedTable}
              toggleModalEdit={toggleModalEdit}
            />
          )
        }
      </div>
    </NavbarLayout>
  );
};
