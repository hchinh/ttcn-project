import React from 'react';
import ProductInfor from './components/ProductInfor/ProductInfor';
import {Link} from "react-router-dom"
import ProductRelated from './components/ProductRelated/ProductRelated'
import styles from './ProductDetail.module.css'
import NavBar from './components/Navbar/NavBar';
import Footer from 'features/Product/components/Footer/Footer';
function ProductDetail(props) {
    return (
        <React.Fragment>
        <NavBar/>
        <div className={styles.container_productDetails}>
                <div className={styles.grid__row}>
                    <div className={styles.grid__column5  }>
                        <div className={styles.back_btn}>
                            <Link to={"/"} className= {styles.btn_back}>
                            <i class="fas fa-arrow-left"></i>
                            Back</Link>
                        </div>
                        <img src="https://lh3.googleusercontent.com/RovQGEtNc5NHaWqaY4d3T4J8j0ePXkJcv9I95UDmit-o6Y4yz8R_ORCJgeBWwnhmGenYyqlm4dgUnGbCi2J4GIDxfFo6fyvx=w500-rw" alt="" className="product_img" />
                    </div>
                    <div className={styles.grid__column5} ><ProductInfor/></div>
                    <div className= {styles.RelatedWapper}><ProductRelated/></div>
                </div>
         </div>
         <Footer/>
        </React.Fragment>
    );
}

export default ProductDetail;
