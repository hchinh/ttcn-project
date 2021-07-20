import React, {useState} from 'react';
import './index.css'
// import SearchForm from './components/SearchForm'
import { Link } from 'react-router-dom';
import styles from './Cart.module.css';
function NavBar(props) {
    const [navBar, setnavBar] = useState(false)
    const changeBackgroundColor =() =>{
        if(window.scrollY>=400){
            setnavBar(true);
        }else{
            setnavBar(false);
        }
    }
    window.addEventListener('scroll',changeBackgroundColor)
    return (
        <div className={navBar ? "navBar active ":"navBar "}>
            <Link to={"/"}className="header">PickBazar</Link>
            {/* <SearchForm/> */}
            <Link to="/cart">
                <div className={styles.navbar__cart}>
                <h3 className={styles.cart__title}>Cart</h3>
                <img
                className={styles.cart__image}
                src="https://image.flaticon.com/icons/svg/102/102276.svg"
                alt="shopping cart"
                />
                <div className={styles.cart__counter}>1</div>
                </div>
            </Link>
        </div>
    );
}

export default NavBar;