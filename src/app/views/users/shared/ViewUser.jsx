import React from 'react';
import { Box, Fab, Icon, Typography } from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

export default function AddUsers({ open, handleClose, sendUser }) {
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
        <Icon color="secondary">visibility</Icon>
      </IconButton> */}

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
          <Typography variant="subtitle2" gutterBottom sx={{ display: 'flex' }}>
            <Box sx={{ width: '90px' }}> User ID:</Box> <Box> {sendUser.uid}</Box>
          </Typography>
          <Typography variant="subtitle2" gutterBottom sx={{ display: 'flex' }}>
            <Box sx={{ width: '90px' }}>User Name:</Box> <Box>{sendUser.uname}</Box>
          </Typography>
          <Typography variant="subtitle2" gutterBottom sx={{ display: 'flex' }}>
            <Box sx={{ width: '90px' }}> Email:</Box> <Box> {sendUser.uemail}</Box>
          </Typography>
          <Typography variant="subtitle2" gutterBottom sx={{ display: 'flex' }}>
            <Box sx={{ width: '90px' }}> Mobile:</Box> <Box> {sendUser.umob}</Box>
          </Typography>
          <Typography variant="subtitle2" gutterBottom sx={{ display: 'flex' }}>
            <Box sx={{ width: '90px' }}>Address:</Box> <Box>{sendUser.uaddress}</Box>
          </Typography>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
