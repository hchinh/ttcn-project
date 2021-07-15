import React from 'react';

function ProductRelated(props) {
    return (
        <React.Fragment>
            <div className="RelatedTitle">
                Sản phẩm liên quan
            </div>
            <div className="ProductListRelated">
                <div className="ProductItemRelated">
                    <div className="ProductItemWrapper">
                        <img src="https://s3.amazonaws.com/redqteam.com/pickbazar/books/the_princeton_thumb.png" className="ProductItemImg"/> 
                        <div className="ProductItemName">Xin chào</div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ProductRelated;