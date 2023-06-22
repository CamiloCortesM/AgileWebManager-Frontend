import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import agileWebApi from '../api/config';

import { onLogoutUsers } from '../store/users/usersSlice';
import {
  clearErrorMessage,
  onChecking,
  onError,
  onLogin,
  onLogout,
  onUpdate,
  onVerify,
} from '../store';

export const useAuthStore = () => {
  const { state, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();

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
      dispatch(onLogout(data.msg || data.errors[0].msg || 'Error logging in'));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const startAuthenticationNumber = async ({ code }) => {
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
      dispatch(
        onError(data?.msg || data.errors[0].msg || 'Invalid verification code')
      );
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
    try {
      if (!user?.uid) {
        throw new Error('User not authenticated');
      }
      await agileWebApi.post('/auth/number', { phone, uid: user.uid });
      navigate('/auth/code', {
        replace: true,
      });
      dispatch(
        onUpdate({
          phone,
        })
      );
    } catch (error) {
      const { data } = error.response;
      dispatch(onError(data?.msg || data.errors[0].msg || 'Invalid number'));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const startSendCode = async () => {
    try {
      await agileWebApi.post('/auth/sendcode', { phone: user.phone });
    } catch (error) {
      const { data } = error.response;
      dispatch(
        onError(data?.msg || data.errors[0].msg || 'Error sending code')
      );
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
    startSendCode,
    startSendNumber,
  };
};
