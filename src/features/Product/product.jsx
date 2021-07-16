import React from 'react';
import styles from './product.module.css'
import SliderBar from './components/Nav'
import ProductList from './components/ProductList';
import NavBar from 'components/Header';
import Slider from './components/Slider/Slider';
import Coupon from './components/Coupon/Coupon';
import Footer from './components/Footer/Footer';


// import PaginationForm from '../../components/Pagination/PaginationForm';
function Product(props) {
    return (
        <React.Fragment>
        <NavBar/>
        <Slider />
        <Coupon/>
       <div className={styles.container}>
           <div className={styles.grid}>
               <div className={styles.grid__row}>
                   <SliderBar />
                   <ProductList />
                   {/* <PaginationForm /> */}
               </div>
              
           </div>
       </div>
       <Footer/>
        </React.Fragment>
    );
}

export default Product;