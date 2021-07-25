import styles from '../../ProductDetail.module.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { formatPrice } from 'utils';
import { useParams } from 'react-router-dom';
function ProductInfor(props) {
  const [product, setproduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const getApi = `https://api-mts.herokuapp.com/products/${id}`;
      axios.get(getApi).then((response) => {
        setproduct(response.data);
      });
    }
  }, [id]);
  return (
    <div>
      {console.log(product)}
      <h4 className={styles.ProductName}>{product?.productName}</h4>
      <h5 className={styles.ProductBand}>
        {/* <i class="fab fa-apple"></i> */}
        {product?.brand}
      </h5>
      <p className={styles.ProductDescription}>{product?.productDescription}</p>
      <div className={styles.ProductTable}>
        <div className={styles.ProductTableRow}>
          <span className={styles.ProductItem}>Brand</span>
          <span className={styles.ProductItem}>{product?.brand}</span>
        </div>
        <div className={styles.ProductTableRow}>
          <span className={styles.ProductItem}>Loại</span>
          <span className={styles.ProductItem}>
            {product?.category.categoryName}
          </span>
        </div>
        <div className={styles.ProductTableRow}>
          <span className={styles.ProductItem}>Nước</span>
          <span className={styles.ProductItem}>USA</span>
        </div>
        <div className={styles.ProductTableRow}>
          <span className={styles.ProductItem}>Số lượng mua</span>
          <span className={styles.ProductItem}>23.000</span>
        </div>
      </div>
      <div className={styles.productQuantity}>
        <div className={styles.quantityTitle}>Số lượng</div>
        <form className={styles.quantityBox}>
          <i class="fas fa-minus"></i>
          <input type="text"  type="text"
            className={styles.numberQuantity}
            name="product_Quantity"
            placeholder=""/>
          <i class="fas fa-plus"></i>
        </form>
      </div>
      <div className={styles.ProductCartWapper}>
        <div className={styles.ProductPriceWapper}>
          {formatPrice(product?.salePrice)}
        </div>
        <button className={styles.btn_cart}>
          <i class="fas fa-shopping-cart"></i>
          Cart
        </button>
      </div>
    </div>
  );
}

export default ProductInfor;
