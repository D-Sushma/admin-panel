import React, { useState, useEffect } from 'react';
import { Box, Fab, IconButton, Icon } from '@mui/material';
import { FormLabel, TextField, Button } from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

export default function AddUserDialog() {
  const [open, setOpen] = React.useState(false);
  // const [userDetail, setUserDetail] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMobile, setUserMobile] = useState('');
  const [userAddress, setUserAddress] = useState('');

  const handleAddUserData = async () => {
    // window.location.reload(false);
    // handleClose();
    if (validateEmail(userEmail)) {
      if (userMobile.length === 10) {
        console.log('userMobile.length', userMobile.length);
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        console.log(userName, userEmail, userMobile, userAddress);
        var raw = JSON.stringify({
          // uname: 'suhana',
          // uemail: 'suhana@gmail.com',
          // umob: 67347764874,
          // uaddress: 'JAVA Script',
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

        await fetch('http://localhost:2000/insert/items', requestOptions)
          .then((response) => response.json())
          .then((data) => {
            console.log('data', data);
            window.location.reload(false);
            handleClose();
          })
          .catch((error) => console.log('error', error));
      } else {
        alert('Enter a valid mobile number !');
      }
    } else {
      alert('Enter a valid email.id !');
    }
  };
  useEffect(() => {
    // fetchSubmitData();
  }, []);

  function handleClickOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }

  let getUserDetail = (e) => {
    // setUserDetail(e);
  };

  // let handleSubmit = () => {
  //   console.log(userName);
  //   console.log(userEmail);
  //   console.log(userMobile);
  //   console.log(userAddress);
  // };
  let handleUserName = (event) => {
    setUserName(event);
  };
  let handleUserEmail = (event) => {
    setUserEmail(event);
  };
  let handleUserMobile = (event) => {
    setUserMobile(event);
  };
  let handleUserAddress = (event) => {
    setUserAddress(event);
  };

  const validateEmail = () => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // console.log('validRegex', validRegex);
    if (userEmail.match(validRegex)) {
      // alert("Valid email address!");
      return true;
    } else {
      // alert('Invalid email address!');
      return false;
    }
  };

  return (
    <Box>
      {/* <IconButton
        sx={{ border: '2px solid green', backgroundColor: 'lightgreen' }}
        onClick={handleClickOpen}
      >
        <Icon color="success">add</Icon>
      </IconButton> */}
      <Button variant="outlined" color="success" onClick={handleClickOpen}>
        + Add User
      </Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add New User</DialogTitle>
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
            fullWidth
            margin="dense"
            type="text"
            // onChange={(event) => setAddName(event.target.value)}
            onChange={(event) => handleUserName(event.target.value)}
          />
          <FormLabel>Enter Email</FormLabel>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            margin="dense"
            type="email"
            onChange={(e) => handleUserEmail(e.target.value)}
          />
          <FormLabel>Enter Mobile</FormLabel>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            margin="dense"
            type="number"
            onChange={(e) => handleUserMobile(e.target.value)}
          />
          <FormLabel>Enter Address</FormLabel>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            margin="dense"
            type="text"
            onChange={(e) => handleUserAddress(e.target.value)}
          />
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            fullWidth
            color="success"
            onClick={handleAddUserData}
            disabled={
              userName.length < 1 ||
              userEmail.length < 1 ||
              userMobile.length < 1 ||
              userAddress.length < 1
            }
          >
            Add User
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
