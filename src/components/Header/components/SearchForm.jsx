import React, { useState,useRef } from 'react';
import PropTypes from 'prop-types';

SearchForm.propTypes = {
    onSubmit: PropTypes.func
};
SearchForm.defaultProps ={
    onSubmit: null
}
function SearchForm(props) {
    const{onSubmit}=props;
    const [searchTerm,setSearchTerm]=useState('');
    const typingTimeoutRef = useRef(null);
    function handleSearchTermChange(e){
        const value = e.target.value
        console.log(value)
        setSearchTerm(value)
        if(!onSubmit)return;
        if(typingTimeoutRef.current){
            clearTimeout(typingTimeoutRef.current )
        }
        typingTimeoutRef.current=setTimeout(()=>{
            const formValues={
                searchTerm:value,
            };
            onSubmit(formValues);
        },3000);
    } 
    return (
             <form className="searchBox" onSubmit={onSubmit}>
                <input type="" 
                placeholder="Type for search" 
                className="inputSearch"
                value={searchTerm}
                onChange={(e) => handleSearchTermChange(e)}>
                </input>
                <button type="submit" className="btn btn-find">
                    <i class="fas fa-search"></i>
                </button>   
            </form>
    );
}

export default SearchForm;