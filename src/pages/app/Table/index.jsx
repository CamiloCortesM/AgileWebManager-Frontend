import { memo, useEffect, useState } from 'react';

import { useTableStore } from '../../../hooks/useTableStore';

import { Table } from '../../../components/Table';
import { CreateTableModal } from '../../../components/ModalCreate';
import { EditTableModal } from '../../../components/ModalEdit';

import { NavbarLayout } from '../../../layouts/Navbar';

import './style.css';

export const TablePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);

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

  const TablesMemo = memo(Table);

  useEffect(() => {
    startGetTables();
  }, []);

  return (
    <NavbarLayout>
      <div className="tables">
        <h1 className="tables__title">Tables</h1>

        <div className="create-table">
          {user.role == 'admin' && (
            <div
              onClick={toggleModal}
              className="create-table__title create-table__item"
            >
              <figure>
                <img src="public/icons/plus.svg" alt="plus.svg" />
              </figure>
              <p>Create Table</p>
            </div>
          )}

          {tables.map((table) => (
            <TablesMemo
              key={table.id}
              user={user}
              table={table}
              toggleModalEdit={toggleModalEdit}
              startDeleteTable={startDeleteTable}
              startSetActiveTable={startSetActiveTable}
            />
          ))}
        </div>

        {showModal && (
          <CreateTableModal
            toggleModal={toggleModal}
            startCreateTable={startCreateTable}
          />
        )}

        {showModalEdit && (
          <EditTableModal
            tableActive={tableActive}
            startUpdatedTable={startUpdatedTable}
            toggleModalEdit={toggleModalEdit}
          />
        )}
      </div>
    </NavbarLayout>
  );
};
