import styles from '../../ProductDetail.module.css'
function ProductInfor(props) {
    return (
        <div>    
            <h4 className={styles.ProductName}>Laptop APPLE MacBook Pro 2020 MYD92SA/A ( 13.3\" Apple M1/8GB/512GB SSD/macOS/1.4kg)</h4>
            <h5 className={styles.ProductBand}> 
            <i class="fab fa-apple"></i>
            Apple
            </h5>
            <p className={styles.ProductDescription}>LaptopMacBook Pro 2020 13.3" Z11B000CT (M1/16GB/SSD256GB) (Xám) là sản phẩm nổi bật của MacBook. Sở hữu những điểm nổi bật độc đáo của riêng dòng MacBook Pro và hiệu năng đỉnh cao với chip Apple M1, chiếc Laptop này mang đến cho bạn khả năng xử lý các tác vụ nặng nhanh chóng, mượt mà.</p>
            <div className={styles.ProductTable}>
                <div className={styles.ProductTableRow}>
                    <span className={styles.ProductItem}>Brand</span>
                    <span className={styles.ProductItem}>Apple</span>
                </div>
                <div className={styles.ProductTableRow}>
                    <span className={styles.ProductItem}>Loại</span>
                    <span className={styles.ProductItem}>Laptop</span>
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
            <div className={styles.ProductCartWapper}>
                <div className={styles.ProductPriceWapper}>25.000đ</div>
                <button className={styles.btn_cart}>
                <i class="fas fa-shopping-cart"></i>
                Cart</button>
            </div>
        </div>
    );
}

export default ProductInfor;