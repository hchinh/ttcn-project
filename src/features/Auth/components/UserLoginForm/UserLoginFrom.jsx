import { yupResolver } from '@hookform/resolvers/yup';
import { Button, makeStyles } from '@material-ui/core';
import InputField from 'components/form-controls/InputField';
import PasswordField from 'components/form-controls/PasswordField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import styles from './UserLoginForm.module.css';
UserLoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  },

  submit: {
    marginTop: theme.spacing(2),
    backgroundColor: '#00C58D',
    '&:hover': {
      backgroundColor: '#161F6A',
    },
  },

  title: {
    color: '#161F6A',
    marginTop: theme.spacing(2),
  },
}));

function UserLoginForm({ onSubmit = null }) {
  const classes = useStyles();
  const schema = yup.object().shape({
    identifier: yup
      .string()
      .required('Please enter your email.')
      .email('Please enter a valid email address.'),
    password: yup.string().required('Please enter your password.'),
  });

  const form = useForm({
    defaultValues: {
      identifier: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  const { isSubmitting } = form.formState;
  return (
    <div className={styles.loginForm}>
      <form
        className={styles.filter_products}
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <div className={styles.form_inner}>
          <h2 className={styles.title}>Login</h2>
          <InputField name="identifier" label="Email" form={form} />
          <PasswordField name="password" label="Password" form={form} />
          <Button
            className={classes.submit}
            disabled={isSubmitting}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
          >
            Sign In
          </Button>
        </div>
        <div className={styles.text_center}>
          <span>Or Sign Up Using</span>
        </div>
        <div className={styles.icon}>
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-google"></i>
        </div>
      </form>
    </div>
  );
}

export default UserLoginForm;
