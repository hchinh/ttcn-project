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
            src="https://scontent.fpnh22-2.fna.fbcdn.net/v/t1.6435-9/122890287_1809040559248161_946272748631178403_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=Z3SiA1bWkqwAX8vFXwI&tn=SpKm-igtJhBAosnP&_nc_ht=scontent.fpnh22-2.fna&oh=a9b0ec91465d4e8b4470bb523138c435&oe=60FDCA14"
            alt=""
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
