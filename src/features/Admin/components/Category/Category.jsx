import { Dialog, Grid, IconButton } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';
import { Close } from '@material-ui/icons';
import categoryApi from 'api/categoryApi';
import Table from 'components/Table/Table';
import AddCategory from 'features/CRUD/components/AddCategory/AddCategory';
import UpdateCategory from 'features/CRUD/components/UpdateCategory/UpdateCategory';
import React, { useEffect, useState } from 'react';
import './Category.scss';

const MODE = {
  CREATE: 'create',
  UPDATE: 'update',
};

function Category() {
  const categoryHead = ['ID', 'Name', 'Thumbnail', 'Actions'];

  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.thumbnail}</td>
      <td className="category__actions">
        <button className="category__edit-button" onClick={handleUpdateOpen}>
          Edit
        </button>
        <i className="far fa-trash-alt category__delete-icon"></i>
      </td>
    </tr>
  );
  const [categoryList, setCategoryList] = useState();
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.CREATE);

  const handleAddOpen = () => {
    setMode(MODE.CREATE);
    setOpen(true);
  };

  const handleUpdateOpen = () => {
    setMode(MODE.UPDATE);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    (async () => {
      try {
        const list = await categoryApi.getAll();
        setCategoryList(
          list.map((x) => ({
            id: x.id,
            name: x.categoryName,
            thumbnail: x.categoryThumbnail,
          }))
        );
      } catch (error) {
        console.log('Failed to fetch category list', error);
      }
    })();
  }, []);

  return (
    <div className="category">
      <h3 className="category__header">Categories</h3>
      <Grid container>
        <Grid item lg={12}>
          <div className="category__card">
            <div className="category__card__body">
              <Table
                headData={categoryHead}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={categoryList}
                renderBody={(item, index) => renderBody(item, index)}
              />
              <div className="category__add">
                <button
                  className="category__add-button"
                  onClick={handleAddOpen}
                >
                  <i className="fas fa-plus category__add-icon"></i>
                  <span className="category__add-button__title">
                    Add New Category
                  </span>
                </button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <Dialog
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <IconButton className="dialog__close-button" onClick={handleClose}>
          <Close />
        </IconButton>
        <DialogContent>
          {mode === MODE.CREATE && <AddCategory closeDialog={handleClose} />}

          {mode === MODE.UPDATE && <UpdateCategory closeDialog={handleClose} />}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Category;
