import { Box, Grid, IconButton, makeStyles, Paper } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartItemsCountSelector } from '../selectors';
import { removeAllCart } from '../cartSlice';
import Confirm from '../../../components/Confirm';
import s from './style.module.scss';

ProductTotal.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: theme.spacing(2),
    fontSize: '16px',
    fontWeight: '500',
  },

  center: {
    textAlign: 'center',
  },
}));

function ProductTotal() {
  const dispatch = useDispatch();
  const cartItemsCount = useSelector(cartItemsCountSelector);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const classes = useStyles();
  const [deleteAll, setDeleteAll] = useState(false);

  function showBox() {
    setDeleteAll(true);
  }

  function closeBox() {
    setDeleteAll(false);
  }

  function deleteAllCart() {
    setDeleteAll(false);
    dispatch(removeAllCart());
  }

  return (
    <Box>
      <Paper elevation={0}>
        <Grid container className={classes.root}>
          <Grid item lg={5}>
            {`Tất cả ${!isNaN(cartItemsCount) ? cartItemsCount : 0} sản phẩm`}
          </Grid>
          <Grid item lg={2} className={classes.center}>
            Đơn giá
          </Grid>
          <Grid item lg={2} className={classes.center}>
            Số lượng
          </Grid>
          <Grid item lg={2} className={classes.center}>
            Thành tiền
          </Grid>
          <Grid item lg={1} className={classes.center}>
            <IconButton>
              <DeleteOutlined onClick={() => showBox()} />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
      {deleteAll && (
        <div className={s.center}>
          <Confirm
            deleteAllCart={(e) => deleteAllCart(e)}
            close={(e) => closeBox(e)}
          />
        </div>
      )}
    </Box>
  );
}

export default ProductTotal;
