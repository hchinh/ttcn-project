import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { unwrapResult } from '@reduxjs/toolkit';
import { login } from 'features/Auth/authSlice';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';

Login.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '30%',
    height: '50%',
    padding: theme.spacing(5),
    backgroundColor: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

function Login(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const handleSubmit = async (values) => {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);

      enqueueSnackbar('Login successfully! 😍😎', {
        variant: 'success',
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
      });

      history.push('/admin');
    } catch (error) {
      console.log('Failed to login: ', error);
      enqueueSnackbar(`${error.message} 😥😭`, {
        variant: 'error',
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
      });
    }
  };

  return (
      <LoginForm onSubmit={handleSubmit} />
  );
}

export default Login;
