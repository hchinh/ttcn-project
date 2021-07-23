import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { unwrapResult } from '@reduxjs/toolkit';
import { loginUser } from 'features/Auth/authSlice';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import UserLoginForm from '../UserLoginForm/UserLoginFrom'

Login.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5),
    backgroundColor: '#FFFFFF',
    margin: '140px 480px',
  },
}));

function Login(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const handleSubmit = async (values) => {
    try {
      const action = loginUser(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);

      enqueueSnackbar('Login successfully! 😍😎', {
        variant: 'success',
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
      });

      history.push('/');
      console.log(history)
    } catch (error) {
      console.log('Failed to login: ', error);
      enqueueSnackbar(`${error.message} 😥😭`, {
        variant: 'error',
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
      });
    }
  };
  return (
    <Box className={classes.root}>
      <UserLoginForm onSubmit={handleSubmit} />
    </Box>
  );
}

export default Login;