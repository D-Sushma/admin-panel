import React, { useState } from 'react';
import { Box, Fab, Icon } from '@mui/material';
import { FormLabel, TextField, Button } from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

export default function AddUsers({ open, handleClose, sendUser }) {
  console.log('sendUser.uname', sendUser.uname);

  // const [open, setOpen] = React.useState(false);
  // function handleClickOpen() {
  //   setOpen(true);
  // }
  // function handleClose() {
  //   setOpen(false);
  // }

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
          <TextField sx={{ mb: 3 }} fullWidth value={sendUser.uname} />
          <FormLabel>Enter Email</FormLabel>
          <TextField sx={{ mb: 3 }} fullWidth value={sendUser.uemail} />
          <FormLabel>Enter Mobile</FormLabel>
          <TextField sx={{ mb: 3 }} fullWidth value={sendUser.umob} />
          <FormLabel>Enter Address</FormLabel>
          <TextField sx={{ mb: 3 }} fullWidth value={sendUser.uaddress} />

          <Button variant="contained" sx={{ mt: 2 }} fullWidth>
            Submit
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
