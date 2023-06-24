import React, { useState, useEffect } from 'react';
import { Box, Fab, Icon } from '@mui/material';
import { FormLabel, TextField, Button } from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

export default function UpdateCustomerDialog({ open, handleClose, initialValues }) {
  const [customerId, setCustomerId] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerMobile, setCustomerMobile] = useState();
  const [customerAddress, setCustomerAddress] = useState('');

  const handleUpdateData = async () => {
    if (validateEmail(customerEmail)) {
      if (customerMobile.length === 10) {
        console.log('valid', customerMobile.length);
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        console.log(customerName, customerEmail, customerMobile, customerAddress);
        var raw = JSON.stringify({
          cid: customerId,
          cname: customerName,
          cemail: customerEmail,
          cmob: customerMobile,
          caddress: customerAddress,
        });
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow',
        };
        await fetch('http://localhost:2000/update-customer', requestOptions)
          .then((response) => response.json())
          .then((data) => {
            console.log('data', data);
            handleClose();
            window.location.reload(false);
          })
          .catch((error) => console.log('error', error));
      } else {
        alert('Enter a valid mobile number');
      }
    } else {
      alert('Enter a valid email Id');
    }
  };

  useEffect(() => {
    if (open && initialValues) {
      setCustomerId(initialValues.cid || '');
      setCustomerName(initialValues.cname || '');
      setCustomerEmail(initialValues.cemail || '');
      setCustomerMobile(initialValues.cmobile || '');
      setCustomerAddress(initialValues.caddress || '');
    }
  }, [open, initialValues]);

  const handleNameChange = (event) => {
    setCustomerName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setCustomerEmail(event.target.value);
  };

  const handleMobileChange = (event) => {
    setCustomerMobile(event.target.value);
  };

  const handleAddressChange = (event) => {
    setCustomerAddress(event.target.value);
  };

  const validateEmail = () => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // console.log('validRegex', validRegex);
    if (customerEmail.match(validRegex)) {
      // alert("Valid email address!");
      return true;
    } else {
      // alert('Invalid email address!');
      return false;
    }
  };

  const mobileValidation = () => {
    var phoneNumber = customerMobile;
    var filter =
      /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;

    if (filter.test(phoneNumber)) {
      if (phoneNumber.length == 10) {
        var validate = true;
      } else {
        // alert('Please put 10  digit mobile number');
        var validate = false;
      }
    } else {
      alert('Not a valid number');
      var validate = false;
    }
  };

  return (
    <Box>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Customer Detail</DialogTitle>
        <DialogActions>
          <Fab
            size="small"
            sx={{ mt: '-80px', mr: 2, backgroundColor: 'white' }}
            onClick={handleClose}
          >
            <Icon color="error">close</Icon>
          </Fab>
        </DialogActions>
        <DialogContent>
          <FormLabel>Enter Name</FormLabel>
          <TextField
            sx={{ mb: 3 }}
            margin="dense"
            fullWidth
            type="text"
            value={customerName}
            onChange={handleNameChange}
          />
          <FormLabel>Enter Email</FormLabel>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            margin="dense"
            type="email"
            value={customerEmail}
            onChange={handleEmailChange}
          />
          <FormLabel>Enter Mobile</FormLabel>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            margin="dense"
            type="number"
            value={customerMobile}
            onChange={handleMobileChange}
          />
          <FormLabel>Enter Address</FormLabel>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            margin="dense"
            type="text"
            value={customerAddress}
            onChange={handleAddressChange}
          />
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            fullWidth
            // onClick={validateEmail}
            onClick={handleUpdateData}
          >
            Update
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
