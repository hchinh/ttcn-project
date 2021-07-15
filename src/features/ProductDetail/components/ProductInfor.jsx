import axios from 'axios';
import React, { useEffect, useState } from 'react';
function ProductInfor(props) {
  const [InforProduct, setInforProduct] = useState([]);
  useEffect(() => {
    const getApi = 'https://api-mts.herokuapp.com/products';
    axios.get(getApi).then((response) => {
      setInforProduct(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <div>
      <h4 className="ProductName">
        Laptop APPLE MacBook Pro 2020 MYD92SA/A ( 13.3\" Apple M1/8GB/512GB
        SSD/macOS/1.4kg)
      </h4>
      <h5 className="ProductBand">
        <i class="fab fa-apple"></i>
        Apple
      </h5>
      <p className="ProductDescription">
        LaptopMacBook Pro 2020 13.3" Z11B000CT (M1/16GB/SSD256GB) (Xám) là sản
        phẩm nổi bật của MacBook. Sở hữu những điểm nổi bật độc đáo của riêng
        dòng MacBook Pro và hiệu năng đỉnh cao với chip Apple M1, chiếc Laptop
        này mang đến cho bạn khả năng xử lý các tác vụ nặng nhanh chóng, mượt
        mà.
      </p>
      <div className="ProductTable">
        <div className="ProductTableRow">
          <span className="ProductItem">Brand</span>
          <span className="ProductItem">Apple</span>
        </div>
        <div className="ProductTableRow">
          <span className="ProductItem">Loại</span>
          <span className="ProductItem">Laptop</span>
        </div>
        <div className="ProductTableRow">
          <span className="ProductItem">Nước</span>
          <span className="ProductItem">USA</span>
        </div>
        <div className="ProductTableRow">
          <span className="ProductItem">Số lượng mua</span>
          <span className="ProductItem">23.000</span>
        </div>
      </div>
      <div className="ProductCartWapper">
        <div className="ProductPriceWapper">25.000đ</div>
        <button className=" btn-cart ProductCartBtn">
          <i class="fas fa-shopping-cart"></i>
          Cart
        </button>
      </div>
    </div>
  );
}

export default ProductInfor;
