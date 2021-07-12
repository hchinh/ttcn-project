import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { unwrapResult } from '@reduxjs/toolkit';
import { login } from 'features/Auth/authSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from '../LoginForm/LoginForm';

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
  const handleSubmit = async (values) => {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);
    } catch (error) {
      console.log('Failed to login: ', error);
    }
  };

  return (
    <Box className={classes.root}>
      <LoginForm onSubmit={handleSubmit} />
    </Box>
  );
}

export default Login;
