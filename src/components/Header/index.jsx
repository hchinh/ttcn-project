import React, { useState } from 'react';
import './index.css';
import { Link, useHistory } from 'react-router-dom';
import styles from './Cart.module.css';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'features/Auth/authSlice'
import { useSelector } from 'react-redux';
import { cartItemsCountSelector } from 'features/Cart/selectors';
function NavBar(props) {
  const dispatch = useDispatch();
  const [navBar, setnavBar] = useState(false);
  const history = useHistory();
  const cartItemsCount = useSelector(cartItemsCountSelector);
  const changeBackgroundColor = () => {
    if (window.scrollY >= 400) {
      setnavBar(true);
    } else {
      setnavBar(false);
    }
  };
  const handeLogout = () => {
    const action = logoutUser();
    dispatch(action);
    history.push('/login1');
  };
  window.addEventListener('scroll', changeBackgroundColor);
  return (
    <div className={navBar ? 'navBar active ' : 'navBar '}>
      <Link to={'/'} className="header">
        PickBazar
      </Link>
      <div className={styles.navbar_right}>
        <Link to="/cart">
          <div className={styles.navbar__cart}>
            <i className={styles.cart__image} class="fas fa-shopping-cart"></i>
            <div className={styles.cart__counter}>{!isNaN(cartItemsCount) ? cartItemsCount : 0}</div>
          </div>
        </Link>
        <li className={styles.nav__itemsaccount}>
          <img
             src="https://upload.wikimedia.org/wikipedia/vi/thumb/5/5c/Chelsea_crest.svg/1200px-Chelsea_crest.svg.png"
            alt="Ảnh đại diện"
            className={styles.img}
          />
          <ul className={styles.nav__itemsmenu}>
            <li className={styles.nav__menuitems}>
              <div href="">Tài khoản của tôi</div>
            </li>
            <li className={styles.nav__menuitems}>
              <div href="">Đơn mua</div>
            </li>
            <li className={styles.nav__menuitems}>
              <div onClick={handeLogout} href="">
                Đăng xuẩt
              </div>
            </li>
          </ul>
        </li>
      </div>
    </div>
  );
}

export default NavBar;
