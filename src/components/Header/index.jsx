import React, {useState} from 'react';
import './index.css'
import SearchForm from './components/SearchForm'
import { Link } from 'react-router-dom';
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
            <SearchForm/>
        </div>
    );
}

export default NavBar;