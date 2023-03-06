import { SettingsLayout } from "../layout/SettingsLayout";

export const ManageAccounts = () => {
  return (
    <SettingsLayout>
      <div className="manage">
        <div className="manage__title">
          <h1 className="manage--title">Users</h1>
        </div>
        <div className="manage__container">
          <button className="button--create">Create</button>
        </div>

        <table className="table">
          <thead>
            <tr className="table__row">
              <th className="table__header">Id</th>
              <th className="table__header">Name</th>
              <th className="table__header">Email</th>
              <th className="table__header">Password</th>
              <th className="table__header">Role</th>
              <th className="table__header">Phone</th>
              <th className="table__header">Status</th>
              <th className="table__header">Accions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table__row">
              <td className="table__cell">1</td>
              <td className="table__cell">Juan Pérez</td>
              <td className="table__cell">juan.perez@example.com</td>
              <td className="table__cell">**********</td>
              <td className="table__cell">Administrador</td>
              <td className="table__cell">555-1234</td>
              <td className="table__cell">Activo</td>
              <td className="table__cell">
                <button className="button button--edit">Edit</button>
                <button className="button button--delete">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </SettingsLayout>
  );
};
