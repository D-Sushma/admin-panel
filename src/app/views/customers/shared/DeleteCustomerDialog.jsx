import React from 'react';
import Button from '@mui/material/Button';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

export default function DeleteCustomerDialog({ open, handleClose, customer }) {
  const handleDeleteData = async () => {
    window.location.reload(false);
    handleClose();
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    console.log('customer', customer.cid);
    var raw = JSON.stringify({
      cid: customer.cid,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    await fetch('http://localhost:2000/delete-customer', requestOptions)
      .then((response) => response.json())
      .then((data) => console.log('Item deleted', data))
      .catch((error) => console.error('Failed to delete item', error));
  };

  //   const [open, setOpen] = useState(false);
  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };
  //   const handleClose = () => {
  //     setOpen(false);
  //   };

  // const handleDelete = () => {
  //  handleClose();
  // };

  return (
    <div>
      {/* <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Delete
      </Button> */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>Are you sure you want to delete this item?</DialogContentText> */}
          Are you sure you want to delete this item?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" sx={{ p: 0 }}>
            Cancel
          </Button>
          <Button color="error" variant="outlined" sx={{ p: 0 }} onClick={handleDeleteData}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
