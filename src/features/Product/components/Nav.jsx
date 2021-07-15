import React, { useState,useEffect } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
function SliderBar(props) {
    const [navCategory, setnavCategory] = useState([])
    useEffect(() => {
       const getApi = "https://api-mts.herokuapp.com/categories"
       axios.get(getApi).then((response) =>{
           setnavCategory(response.data)
       })
    }, [])
    return (
            <div className="grid__column-2 ">
                       <nav className = "category">
                         <h3 className="category__heading">
                            <i className="fas fa-list category__heading-icon"></i>
                            Danh mục
                         </h3>
                         <ul className="category__list">
                          <li className="category__items category__items-active">
                              <Link to="#" className="category__items-link">
                                 <i className="fas fa-chevron-down"></i> 
                                  Sản phẩm</Link>
                          </li>
                          {navCategory.map((item)=>(
                               <li className="category__items">
                               <Link to="#" className="category__items-link">
                               <i className = {item.categoryThumbnail}></i>
                               {item.categoryName}
                               </Link>
                           </li>
                          ))}
                          
                      </ul>
                       </nav>
                   </div>
    );
}

export default SliderBar;