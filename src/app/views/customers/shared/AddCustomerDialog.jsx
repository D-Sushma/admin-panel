import React, { useState } from 'react';
import { Box, Fab, Icon } from '@mui/material';
import { FormLabel, TextField, Button } from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

export default function AddCustomerDialog({ open, handleClose }) {
  // const [open, setOpen] = React.useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerMobile, setCustomerMobile] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');

  const handleAddCustomerData = async () => {
    window.location.reload(false);
    handleClose();
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    console.log(customerName, customerEmail, customerMobile, customerAddress);
    let raw = JSON.stringify({
      // cname: 'suhana',
      // cemail: 'suhana@gmail.com',
      // cmob: 67347764874,
      // caddress: 'JAVA Script',
      cname: customerName,
      cemail: customerEmail,
      cmob: customerMobile,
      caddress: customerAddress,
    });
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    await fetch('http://localhost:2000/add-customer', requestOptions)
      .then((response) => response.json())
      .then((data) => console.log('customer data', data))
      .catch((error) => console.log('error', error));
  };

  // let handleClickOpen = () => {
  //   setOpen(true);
  // };
  // let handleClose = () => {
  //   setOpen(false);
  // };

  let handleCustomerName = (e) => {
    console.log(e);
    setCustomerName(e);
  };
  let handleCustomerEmail = (e) => {
    setCustomerEmail(e);
  };
  let handleCustomerMobile = (e) => {
    setCustomerMobile(e);
  };
  let handleCustomerAddress = (e) => {
    setCustomerAddress(e);
  };

  return (
    <Box>
      {/* <Button variant="outlined" color="success" onClick={handleClickOpen}>
        + Add Customer
      </Button> */}

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add New Customer</DialogTitle>
        <DialogActions>
          <Fab
            size="small"
            sx={{ mt: '-90px', mr: 2, backgroundColor: 'white' }}
            onClick={handleClose}
          >
            <Icon color="error">close</Icon>
          </Fab>
        </DialogActions>
        <DialogContent>
          <FormLabel>Enter Name</FormLabel>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            margin="dense"
            type="text"
            onChange={(e) => handleCustomerName(e.target.value)}
          />
          <FormLabel>Enter Email</FormLabel>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            margin="dense"
            type="email"
            onChange={(e) => handleCustomerEmail(e.target.value)}
          />
          <FormLabel>Enter Mobile</FormLabel>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            margin="dense"
            type="number"
            onChange={(e) => handleCustomerMobile(e.target.value)}
          />
          <FormLabel>Enter Address</FormLabel>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            margin="dense"
            type="text"
            onChange={(e) => handleCustomerAddress(e.target.value)}
          />
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            fullWidth
            color="success"
            onClick={handleAddCustomerData}
            disabled={
              customerName.length < 1 ||
              customerEmail.length < 1 ||
              customerMobile.length < 1 ||
              customerAddress.length < 1
            }
          >
            Add User
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
