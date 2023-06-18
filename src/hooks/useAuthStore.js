import { useDispatch, useSelector } from 'react-redux';

import agileWebApi from '../api/agileWebApi';
import { onLogoutUsers } from '../store/users/usersSlice';
import {
  clearErrorMessage,
  onChecking,
  onError,
  onLogin,
  onLogout,
  onVerify,
} from '../store';

export const useAuthStore = () => {
  const { state, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await agileWebApi.post('/auth', { email, password });
      const { user } = data;
      dispatch(
        onLogin({
          name: user.name,
          uid: user.uid,
          status: user.status,
          role: user.role,
          phone: user.phone,
          email,
        })
      );
    } catch (error) {
      const { data } = error.response;
      dispatch(onLogout(data.msg));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const startAuthenticationNumber = async ({ code }) => {
    dispatch(onChecking());
    try {
      const { data } = await agileWebApi.post('auth/verify', {
        phone: user.phone,
        code,
      });
      if (data.ok) {
        localStorage.setItem('token', data.token);
        dispatch(onVerify());
      }
    } catch (error) {
      const { data } = error.response;
      dispatch(onError(data?.msg || 'Invalid verification code'));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem('token');
    if (!token) return dispatch(onLogout());

    try {
      const { data } = await agileWebApi.get('auth/renew');
      const { user, token } = data;
      localStorage.setItem('token', token);
      dispatch(
        onLogin({
          name: user.name,
          uid: user.uid,
          status: user.status,
          role: user.role,
          phone: user.phone,
          email: user.email,
        })
      );
      dispatch(onVerify());
    } catch (error) {
      localStorage.clear();
      dispatch(onLogout());
    }
  };

  const startSendNumber = async ({ phone }) => {
    dispatch(onChecking());
    try {
      if (!user?.uid) {
        throw new Error('User not authenticated');
      }
      await agileWebApi.post('/auth/number', { phone, uid: user.uid });
      dispatch(
        onUpdate({
          phone,
        })
      );
    } catch (error) {
      const { data } = error.response;
      dispatch(onError(data?.msg || 'Invalid number'));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
    dispatch(onLogoutUsers());
  };

  return {
    //* Properties
    errorMessage,
    state,
    user,

    //* Methods
    checkAuthToken,
    startAuthenticationNumber,
    startLogin,
    startLogout,
    startSendNumber,
  };
};
