import React, { useState, useEffect } from 'react';
import { Box, Fab, IconButton, Icon } from '@mui/material';
import { FormLabel, TextField, Button } from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

export default function AddUsers() {
  const [open, setOpen] = React.useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMobile, setUserMobile] = useState('');
  const [subject, setSubject] = useState('');

  function handleClickOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }

  let handleSubmit = () => {
    console.log(userName);
    console.log(userEmail);
    console.log(userMobile);
    console.log(subject);
  };
  let handleUserName = (event) => {
    setUserName(event);
  };
  let handleUserEmail = (event) => {
    setUserEmail(event);
  };
  let handleUserMobile = (event) => {
    setUserMobile(event);
  };
  let handleSubject = (event) => {
    setSubject(event);
  };
  return (
    <Box>
      <IconButton onClick={handleClickOpen}>
        <Icon color="primary">edit</Icon>{' '}
      </IconButton>

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
            fullWidth
            // onChange={(event) => setAddName(event.target.value)}
            onChange={(event) => handleUserName(event.target.value)}
          />
          <FormLabel>Enter Email</FormLabel>
          <TextField sx={{ mb: 3 }} fullWidth onChange={(e) => handleUserEmail(e.target.value)} />
          <FormLabel>Enter Mobile</FormLabel>
          <TextField sx={{ mb: 3 }} fullWidth onChange={(e) => handleUserMobile(e.target.value)} />
          <FormLabel>Enter Subject</FormLabel>
          <TextField sx={{ mb: 3 }} fullWidth onChange={(e) => handleSubject(e.target.value)} />
          <Button variant="contained" sx={{ mt: 2 }} fullWidth onClick={handleSubmit}>
            Submit
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
