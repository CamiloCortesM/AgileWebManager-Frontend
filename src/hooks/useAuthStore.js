import { useDispatch, useSelector } from "react-redux";
import agileWebApi from "../api/agileWebApi";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store";

export const useAuthStore = () => {
  const { state, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    // dispatch(onChecking());
    try {
      const { data } = await agileWebApi.post("/auth", { email, password });
      dispatch(
        onLogin({
          name: data.name,
          uid: data.uid,
          status: data.status,
          role: data.role,
          phone: data.phone,
        })
      );
    } catch (error) {
      const { data } = error.response;
      dispatch(onLogout(data.msg));
    }
  };

  return {
    //* Properties
    state,
    user,
    errorMessage,

    //* Methods
    startLogin,
  };
};
