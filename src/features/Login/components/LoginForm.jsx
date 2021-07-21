import React, { useState } from 'react';
import styles from './LoginForm.module.css';
function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ email: '', password: '' });
  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };
  return (
    <div className={styles.loginForm}>
      <form onSubmit={submitHandler} className={styles.filter_products}>
        <div className={styles.form_inner}>
          <h2 className={styles.title}>Login</h2>
          {error != '' ? <div className={styles.error}>{error}</div> : ''}
          <div className={styles.formdiv}>
            <input
              className={styles.filterproducts__input}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={(e) => {
                setDetails({ ...details, email: e.target.value });
              }}
              value={details.email}
            />
            <label className={styles.form_label} htmlFor="email">Email</label>
          </div>
          <div className={styles.formdiv}>
            <input
              className={styles.filterproducts__input}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={(e) => {
                setDetails({ ...details, password: e.target.value });
              }}
              value={details.password}
            />
             <label className={styles.form_label} htmlFor="password">Password</label>
          </div>
            <input className={styles.btn_submit} type="submit"></input>
        <div className={styles.text_center}>
              <span>Or Sign Up Using</span>
        </div>
        <div className={styles.icon}>
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-google"></i>
        </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
