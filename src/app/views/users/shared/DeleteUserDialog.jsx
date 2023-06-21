import React from 'react';
import Button from '@mui/material/Button';
import {
  Dialog,
  DialogActions,
  DialogContent,
  // DialogContentText,
  DialogTitle,
} from '@mui/material';

export default function DeleteUser({ open, handleClose, user }) {
  const fetchSubmitData = async () => {
    window.location.reload(false);
    handleClose();
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    // console.log('user', user);
    var raw = JSON.stringify({
      uid: user.uid,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    await fetch('http://localhost:2000/delete/items', requestOptions)
      // .then((response) => response.json())
      .then((response) => {
        if (response.ok) {
          return response.json(); // Parse response data as JSON
        } else {
          throw new Error('Failed to delete item'); // Throw an error to be caught in the catch block
        }
      })
      .then((data) => {
        console.log('Item deleted', data);
        // Perform additional actions if needed
        if (data.success) {
          // Delete was successful, update the UI or perform other operations
          alert('successfully deleted!');
        } else {
          // Delete was not successful, handle the error or show an error message
          alert('failed');
        }
      })
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
          <Button onClick={fetchSubmitData} color="error" variant="outlined" sx={{ p: 0 }}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
