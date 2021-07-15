import { Pagination } from '@material-ui/lab';
import productApi from 'api/productApi';
import queryString from 'query-string';
import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './Product.scss';
import ProductFilters from './ProductFilters';
import ProductList from './ProductList';

Product.propTypes = {};

function Product(props) {
  const location = useLocation();
  const history = useHistory();
  const [productList, setProductList] = useState();
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 15,
    total: 15,
  });
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 15,
    };
  }, [location.search]);

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(queryParams);
        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }
    })();
  }, [queryParams]);

  const handlePageChange = (e, page) => {
    const filters = {
      ...queryParams,
      _page: page,
    };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  return (
    <div className="product">
      <ProductFilters />
      <ProductList data={productList} />
      <div className="product__pagination">
        <Pagination
          color="primary"
          count={Math.ceil(pagination.total / pagination.limit)}
          page={pagination.page}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Product;
