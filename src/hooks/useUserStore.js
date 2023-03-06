import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

import agileWebApi from "../api/agileWebApi";
import {
  addNewUser,
  onDeleteActiveUser,
  onDeleteUser,
  onLoadUsers,
  onSetActiveUser,
  onUpdateUser,
} from "../store/users/usersSlice";

export const useUserStore = () => {
  const { users, activeUser } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const startGetUsers = async () => {
    try {
      const { data } = await agileWebApi.get("auth");
      dispatch(onLoadUsers(data));
    } catch (error) {
      console.log(error);
    }
  };

  const startCreateUser = async ({ name, email, password, role }) => {
    try {
      const { data } = await agileWebApi.post("auth/new", {
        name,
        email,
        password,
        role,
        status: "new",
      });
      Swal.fire("Creation", "User successfully created", "success");
      dispatch(
        addNewUser({
          id: data.uid,
          name,
          email,
          password,
          role,
          status: "new",
          phone: null,
        })
      );
    } catch (error) {
      const { data } = error.response;
      Swal.fire(
        "Creation",
        data?.msg || "unexpected error on creation",
        "error"
      );
    }
  };

  const startDeleteUser = async ({ id }) => {
    try {
      await agileWebApi.delete(`auth/${id}`);
      dispatch(onDeleteUser(id));
      Swal.fire("elimination", "User successfully deleted", "success");
    } catch (error) {
      const { data } = error.response;
      Swal.fire("elimination", data?.msg || "Error deleting user", "error");
    }
  };

  const startUpdateUser = async (User) => {
    try {
      const { data } = await agileWebApi.put(`/auth/${User.id}`, {
        ...User,
      });
      dispatch(onUpdateUser(data.user));
      Swal.fire("update", "User has been successfully edited", "success");
    } catch (error) {
      Swal.fire(
        "update",
        error.response.data?.msg || "error updating user",
        "error"
      );
    }
  };

  const setActive = (user) => {
    dispatch(onSetActiveUser({ user }));
  };

  const deleteActive = () => {
    dispatch(onDeleteActiveUser());
  };

  return {
    //* Properties
    users,
    activeUser,

    //* Methods
    startGetUsers,
    startCreateUser,
    startDeleteUser,
    startUpdateUser,
    setActive,
    deleteActive,
  };
};
