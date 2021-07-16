import React, { useState,useEffect } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import styles from '../product.module.css'
// import styles from './slideBar.module.css'
function SliderBar(props) {
    const [navCategory, setnavCategory] = useState([])
    useEffect(() => {
       const getApi = "https://api-mts.herokuapp.com/categories"
       axios.get(getApi).then((response) =>{
           setnavCategory(response.data)
       })
    }, [])
    return (
            <div className={styles.grid__column2}>
                       <nav className = {styles.category}>
                         <h3 className={styles.category__heading}>
                            <i className="fas fa-list category__heading-icon"></i>
                            Danh mục
                         </h3>
                         <ul className={styles.category__list}>
                          <li className={styles.category__items}>
                              <Link to="#" className={styles.category__itemslink}>
                                 <i className="fas fa-chevron-down"></i> 
                                  Sản phẩm</Link>
                          </li>
                          {navCategory.map((item)=>(
                               <li className={styles.category__items}>
                               <Link to="#" className={styles.category__itemslink}>
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