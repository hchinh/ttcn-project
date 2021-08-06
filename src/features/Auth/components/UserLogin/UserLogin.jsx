import { unwrapResult } from '@reduxjs/toolkit';
import { loginUser } from 'features/Auth/authSlice';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import UserLoginForm from '../UserLoginForm/UserLoginFrom';

Login.propTypes = {};

function Login(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const handleSubmit = async (values) => {
    try {
      const action = loginUser(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);

      // enqueueSnackbar('Login successfully! 😍😎', {
      //   variant: 'success',
      //   anchorOrigin: { vertical: 'top', horizontal: 'right' },
      // });

      history.push('/');
      console.log(history);
    } catch (error) {
      console.log('Failed to login: ', error);
      enqueueSnackbar(`${error.message} 😥😭`, {
        variant: 'error',
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
      });
    }
  };
  return <UserLoginForm onSubmit={handleSubmit} />;
}

export default Login;
