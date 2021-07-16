import React, { useState, useEffect } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import { formatPrice } from 'utils';
import styles from '../product.module.css';

function ProductList(props) {
  const [products, setproducts] = useState([]);
  const [filters, setFilters] = useState({
    _limit: 12,
    _start: 10,
  });
  useEffect(() => {
    const paramsString = queryString.stringify(filters);
    const getApi = `https://api-mts.herokuapp.com/products?${paramsString}`;
    axios.get(getApi).then((response) => {
      setproducts(response.data);
    });
  }, []);
  return (
    <div className={styles.grid__column10}>
            <div className={styles.home__product}> 
                <div className={styles.grid__row}>       
                        {products.map((item)=>(
                        <div className={styles.grid__column24}>     
                            <div className={styles.home__productitems}>
                                <div className={styles.home__productitemsimg} style={{ backgroundImage: `url(${item.productThumbnail})` }}></div>
                                <h4 className={styles.home__productitemsname}>{item.productName}</h4>
                                <div className={styles.home__productprice}>
                                    <span className={styles.home__productitemsprice}>{formatPrice(item.salePrice)}</span>
                                    <button className={styles.btn_cart}>
                                    <i class="fas fa-shopping-cart"></i>    
                                    Cart</button>
                                </div>
                            </div>
                        </div>    
                        ))} 
                   
                </div>
              </div>
            </div>
  );
}
export default ProductList;
