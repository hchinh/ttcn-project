import productApi from 'api/productApi';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './Product.scss';
import ProductFilters from './ProductFilters';
import ProductList from './ProductList';

Product.propTypes = {};

function Product(props) {
  const [productList, setProductList] = useState();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await productApi.getAll({ _page: 1, _limit: 50 });
        setProductList(data);
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }
    })();
  }, []);
  return (
    <div className="product">
      <ProductFilters />
      <ProductList data={productList} />
    </div>
  );
}

export default Product;
