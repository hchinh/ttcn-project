import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from 'utils';
import './ProductItem.scss';

ProductItem.propTypes = {
  product: PropTypes.object,
};

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <div>
        <img
          className="product-item__thumbnail"
          src={product.productThumbnail}
          alt={product.productName}
          width="100%"
        />
      </div>

      <div className="product-item__name">
        <span>{product.productName}</span>
      </div>
      <div className="product-item__price">
        <span>{formatPrice(product.salePrice)}</span>
      </div>
    </div>
  );
}

export default ProductItem;
