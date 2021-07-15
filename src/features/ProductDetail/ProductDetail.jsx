import React from 'react';
import ProductInfor from './components/ProductInfor';
import {Link} from "react-router-dom"
import ProductRelated from './components/ProductRelated'
import NavBar from 'components/Header';
function ProductDetail(props) {
    return (
        <React.Fragment>
        <NavBar/>
        <div className="container container_productDetails">
                <div className="grid__row">
                    <div className="grid__column5 grid_border">
                        <div className="back-btn">
                            <Link to={"/"} className="btn btn-back">
                            <i class="fas fa-arrow-left"></i>
                            Back</Link>
                        </div>
                        <img src="https://lh3.googleusercontent.com/RovQGEtNc5NHaWqaY4d3T4J8j0ePXkJcv9I95UDmit-o6Y4yz8R_ORCJgeBWwnhmGenYyqlm4dgUnGbCi2J4GIDxfFo6fyvx=w500-rw" className="product_img" />
                    </div>
                    <div className="grid__column5 grid_infor"><ProductInfor/></div>
                    <div className= "RelatedWapper"><ProductRelated/></div>
                </div>
         </div>
        </React.Fragment>
    );
}

export default ProductDetail;