import React from 'react';
import'./product.css'
import SliderBar from './components/Nav'
import ProductList from './components/ProductList';
import PromtionSlider from './components/PromtionSlider'
// import PaginationForm from '../../components/Pagination/PaginationForm';
function Product(props) {
    return (
       <div className="container">
           <div className="grid">
               <div className="grid__row app__content">
                   <SliderBar />
                   <ProductList />
                   {/* <PaginationForm /> */}
               </div>
              
           </div>
       </div>
        
    );
}

export default Product;