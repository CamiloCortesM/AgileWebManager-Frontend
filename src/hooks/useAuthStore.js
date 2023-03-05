import { useDispatch, useSelector } from "react-redux";
import agileWebApi from "../api/agileWebApi";
import {
  onChecking,
  onCreate,
  onLogin,
  onLogout,
  onUpdate,
  onVerify,
} from "../store";

export const useAuthStore = () => {
  const { state, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());
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
        onUpdate({
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
        const { data } = await agileWebApi.post("auth/token", {
          id: user.uid,
          name: user.name,
          status: user.status,
          role: user.role,
          phone: user.phone,
        });
        localStorage.setItem("token", data.token);
        dispatch(onVerify());
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) return dispatch(onLogout());

    try {
      const { data } = await agileWebApi.get("auth/renew");
      localStorage.setItem("token", data.token);
      dispatch(
        onLogin({
          name: data.name,
          uid: data.uid,
          status: data.status,
          role: data.role,
          phone: data.phone,
        })
      );
      dispatch(onVerify());
    } catch (error) {
      localStorage.clear();
      dispatch(onLogout());
    }
  };

  const ChangeThePassword = async ({ password }) => {
    try {
      if (!user?.uid) {
        throw new Error("User not authenticated");
      }
      await agileWebApi.put(`auth/${user?.uid}`, {
        password,
      });
      dispatch(
        onUpdate({
          status: "member",
        })
      );
      const { data } = await agileWebApi.post("auth/token", {
        id: user.uid,
        name: user.name,
        status: user.status,
        role: user.role,
        phone: user.phone,
      });
      localStorage.setItem("token", data.token);
      dispatch(onVerify());
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
    checkAuthToken,
    ChangeThePassword,
  };
};