import React, { useState, useEffect } from 'react';
import { Box, Fab, Icon } from '@mui/material';
import { FormLabel, TextField, Button } from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

export default function UpdateUserDialog({ open, handleClose, initialValues }) {
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMobile, setUserMobile] = useState('');
  const [userAddress, setUserAddress] = useState('');

  const handleUpdateData = async () => {
    window.location.reload(false);
    handleClose();
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    console.log(userName, userEmail, userMobile, userAddress);
    var raw = JSON.stringify({
      uid: userId,
      uname: userName,
      uemail: userEmail,
      umob: userMobile,
      uaddress: userAddress,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    await fetch('http://localhost:2000/update/items', requestOptions)
      .then((response) => response.json())
      .then((data) => console.log('data', data))
      .catch((error) => console.log('error', error));
  };

  useEffect(() => {
    if (open && initialValues) {
      setUserId(initialValues.uid || '');
      setUserName(initialValues.uname || '');
      setUserEmail(initialValues.uemail || '');
      setUserMobile(initialValues.umobile || '');
      setUserAddress(initialValues.uaddress || '');
    }
  }, [open, initialValues]);

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setUserEmail(event.target.value);
  };

  const handleMobileChange = (event) => {
    setUserMobile(event.target.value);
  };

  const handleAddressChange = (event) => {
    setUserAddress(event.target.value);
  };
  return (
    <Box>
      {/* <IconButton onClick={handleClickOpen}>
        <Icon color="primary">edit</Icon>{' '}
      </IconButton> */}

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit User Detail</DialogTitle>
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
          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          /> */}

          <FormLabel>Enter Name</FormLabel>
          <TextField
            sx={{ mb: 3 }}
            margin="dense"
            fullWidth
            value={userName}
            onChange={handleNameChange}
          />
          <FormLabel>Enter Email</FormLabel>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            margin="dense"
            type="email"
            value={userEmail}
            onChange={handleEmailChange}
          />
          <FormLabel>Enter Mobile</FormLabel>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            margin="dense"
            value={userMobile}
            onChange={handleMobileChange}
          />
          <FormLabel>Enter Address</FormLabel>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            margin="dense"
            value={userAddress}
            onChange={handleAddressChange}
          />
          <Button variant="contained" sx={{ mt: 2 }} fullWidth onClick={handleUpdateData}>
            Update
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
