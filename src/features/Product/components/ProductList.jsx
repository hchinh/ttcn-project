import React, { useState,useEffect } from 'react';
import axios from 'axios'
import queryString from 'query-string';
import { formatPrice } from 'utils';


function ProductList(props) {
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
    }, [])
    return (
        <div className="grid__column-10">
            {/* <div id="slider">
                <figure>
                        <img src="https://cdn.techzones.vn/Data/Sites/1/News/2177/techzones-chien-game-nang-tren-man-hinh-2k-va-4k-dau-tu-pc-bao-nhieu-la-hop-ly-.jpg" class="slider_img" alt=""/>
                        <img src="https://hocspringmvc.net/wp-content/uploads/2020/12/pc.jpg" class="slider_img" alt=""/>
                        <img src="https://haiphongcomputer.vn/wp-content/uploads/2020/12/oman.jpg" class="slider_img" alt=""/>
                        <img src="https://i0.wp.com/comprartec.com/wp-content/uploads/2018/01/91TsChyQSBL._SL1500_-1024x576.jpg" class="slider_img" alt=""/>
                        <img src="https://cdn.techzones.vn/Data/Sites/1/News/2177/techzones-chien-game-nang-tren-man-hinh-2k-va-4k-dau-tu-pc-bao-nhieu-la-hop-ly-.jpg" class="slider_img" alt=""/>     
                </figure>
            </div> */}
            <div className="home__product">
                       
                <div className="grid__row">       
                        {products.map((item)=>(
                        <div className="grid__column-2-4">     
                            <div className="home__product-items">
                                <div className="home__product-itemsimg" style={{ backgroundImage: `url(${item.productThumbnail})` }}></div>
                                <h4 className="home__product-itemsname">{item.productName}</h4>
                                <div className="home__product-price">
                                    <span className="home__product-itemsprice">{formatPrice(item.salePrice)}</span>
                                    <button className="btn btn-cart">
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