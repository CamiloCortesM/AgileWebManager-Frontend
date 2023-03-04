import { useDispatch, useSelector } from "react-redux";
import agileWebApi from "../api/agileWebApi";
import {
  clearErrorMessage,
  onChecking,
  onCreate,
  onLogin,
  onLogout,
  onPhone,
  onVerify,
} from "../store";

export const useAuthStore = () => {
  const { state, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    // dispatch(onChecking());
    try {
      const { data } = await agileWebApi.post("/auth", { email, password });
      if (data.phone) {
        await agileWebApi.post("/auth/send", {
          phone: data.phone,
        });
      }
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

  const startSendNumber = async ({ phone }) => {
    try {
      if (!user?.uid) {
        throw new Error("User not authenticated");
      }
        await agileWebApi.post("/auth/send", { phone });
      await agileWebApi.put(`auth/${user?.uid}`, {
        phone,
      });
      dispatch(
        onPhone({
          phone,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const startAuthenticationNumber = async ({ code }) => {
    try {
      const { data } = await agileWebApi.post("auth/verify", {
        phone: user.phone,
        code,
      });
      if (data.ok && user.status === "new") {
        dispatch(onCreate());
      } else if (data.ok) {
        dispatch(onVerify());
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    //* Properties
    state,
    user,
    errorMessage,

    //* Methods
    startLogin,
    startSendNumber,
    startAuthenticationNumber,
  };
};
