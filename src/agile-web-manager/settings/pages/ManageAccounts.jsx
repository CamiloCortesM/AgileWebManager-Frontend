import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useUserStore } from "../../../hooks/useUserStore";
import { Modal, ModalUpdate } from "../components";

import { SettingsLayout } from "../layout/SettingsLayout";

export const ManageAccounts = () => {
  const {
    users,
    startGetUsers,
    startDeleteUser,
    setActive,
    deleteActive,
    activeUser,
  } = useUserStore();

  const [showModal, setShowModal] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleModalUpdate = (user) => {
    setShowModalUpdate(!showModalUpdate);
    if (!showModalUpdate) {
      setActive(user);
      return;
    }
    deleteActive();
  };

  useEffect(() => {
    startGetUsers();
  }, []);

  const onDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        startDeleteUser({ id });
      }
    });
  };
  return (
    <SettingsLayout>
      <div className="manage">
        <div className="manage__title">
          <h1 className="manage--title">Users</h1>
        </div>
        <div className="manage__container">
          <button className="button--create" onClick={handleModal}>
            Create
          </button>
        </div>

        <table className="table">
          <thead>
            <tr className="table__row">
              <th className="table__header">Name</th>
              <th className="table__header">Email</th>
              <th className="table__header">Role</th>
              <th className="table__header">Phone</th>
              <th className="table__header">Status</th>
              <th className="table__header">Accions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr className="table__row" key={user.id}>
                <td className="table__cell">{user.name}</td>
                <td className="table__cell">{user.email}</td>
                <td className="table__cell">{user.role}</td>
                <td className="table__cell">{user.phone}</td>
                <td className="table__cell">{user.status}</td>
                <td className="table__cell table-cell-buttons">
                  <button
                    className="button button--edit"
                    onClick={() => handleModalUpdate(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="button button--delete"
                    onClick={() => onDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Modal show={showModal} handleModal={handleModal} />
        {activeUser && (
          <ModalUpdate show={showModalUpdate} handleModal={handleModalUpdate} />
        )}
      </div>
    </SettingsLayout>
  );
};
