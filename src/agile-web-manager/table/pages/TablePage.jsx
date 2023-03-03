import { useState } from 'react';
import { CreateTableModal } from '../components/modal-create/CreateTableModal';
import { DeleteTableModal } from '../components/modal-delete/DeleteTableModal';
import { Tables } from '../components/tables/Tables';

import './style.css';

export const TablePage = () => {

  const [showModal, setShowModal] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleModalDelete = () => {
    setShowModalDelete(!showModalDelete);
  };

  return (
    <div className="tables">
      <h1 className="tables__title">Tables</h1>
      <Tables
        toggleModal={toggleModal}
        toggleModalDelete={toggleModalDelete}
      />

      {
        showModal &&
        <>
          <CreateTableModal
            toggleModal={toggleModal}
          />
        </>
      }

      {
        showModalDelete &&
        <>
          <DeleteTableModal
            toggleModalDelete={toggleModalDelete}
          />
        </>
      }
    </div>
  );
};
