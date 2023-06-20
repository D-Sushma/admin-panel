import React, { useState } from 'react';
import Button from '@mui/material/Button';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

export default function DeleteUser({ open, handleClose, onDelete }) {
  //   const [open, setOpen] = useState(false);
  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };
  //   const handleClose = () => {
  //     setOpen(false);
  //   };

  const handleDelete = () => {
    // onDelete(); // Call the delete function provided by the parent component
    handleClose();
  };

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
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
