import React, { useState,useEffect } from 'react';
import './index.css'
import SearchForm from './components/SearchForm'
import axios from 'axios'
import queryString from 'query-string';
import { Link } from 'react-router-dom';
function NavBar(props) {
    const [products, setproducts] = useState([])
    const [filters,setFilters]=useState({
        _limit:12,
        _start:10,
    })
    useEffect(() => {
        const paramsString = queryString.stringify(filters);  
        const getApi = `https://api-mts.herokuapp.com/products?${paramsString}`
        axios.get(getApi).then((response) =>{
            setproducts(response.data)
        })
    }, [filters])
    function handleFilterChange(newFilters){
        console.log('newFilters', newFilters)
        setFilters({
            ...filters,
            productName_contains:newFilters
        })
    }
    console.log(filters);
    return (
        <div className="navBar">
                <Link to={"/"}className="header">PickBazar</Link>
            <SearchForm onSubmit={handleFilterChange} />
        </div>
    );
}

export default NavBar;