import React from 'react';
import { Box, Fab, IconButton, Icon, Typography } from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

export default function AddUsers({ getUser }) {
  console.log('getUser', getUser);
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }

  return (
    <Box>
      <IconButton onClick={handleClickOpen}>
        <Icon color="secondary">visibility</Icon>
      </IconButton>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" sx={{ width: '600px', height: 'auto' }}>
          View User Detail
        </DialogTitle>
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
          <Typography variant="subtitle2" gutterBottom>
            User ID: maahi
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            User Name: maahi
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            User Email: maahi
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            User Mobile: maahi
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            User Subject: maahi
          </Typography>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
