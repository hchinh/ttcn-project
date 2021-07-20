// import SearchForm from 'components/Header/components/SearchForm';
import React from 'react';
import styles from './NavBar.module.css'
import {Link} from 'react-router-dom'
function NavBar(props) {
    return (
        <div className={styles.navBar}>
            <Link to={"/"}className={styles.header}>PickBazar</Link>
            {/* <SearchForm/> */}
        </div>
    );
}

export default NavBar;