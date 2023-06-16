import React from 'react';
import { Box, Fab, IconButton, Icon } from '@mui/material';
import { FormLabel, TextField, Button } from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

export default function AddUsers() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <Box>
      <IconButton
        sx={{ border: '2px solid green', backgroundColor: 'lightgreen' }}
        onClick={handleClickOpen}
      >
        <Icon color="success">add</Icon>
      </IconButton>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add New User</DialogTitle>
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
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
          <FormLabel>Enter Name</FormLabel>
          <TextField fullWidth />
          <FormLabel>Enter Email</FormLabel>
          <TextField fullWidth />
          <FormLabel>Enter Mobile</FormLabel>
          <TextField fullWidth />
          <Button>Submit</Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
