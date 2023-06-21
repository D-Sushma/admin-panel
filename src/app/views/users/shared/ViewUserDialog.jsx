import React from 'react';
import { Box, Fab, Icon, Typography } from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
export default function AddUsers({ open, handleClose, user }) {
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
      {/* <div>
        <LinearProgress variant="determinate" value={progress} />
      </div> */}
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
            <Box sx={{ width: '90px' }}> User ID:</Box> <Box> {user.uid}</Box>
          </Typography>
          <Typography variant="subtitle2" gutterBottom sx={{ display: 'flex' }}>
            <Box sx={{ width: '90px' }}>User Name:</Box> <Box>{user.uname}</Box>
          </Typography>
          <Typography variant="subtitle2" gutterBottom sx={{ display: 'flex' }}>
            <Box sx={{ width: '90px' }}> Email:</Box> <Box> {user.uemail}</Box>
          </Typography>
          <Typography variant="subtitle2" gutterBottom sx={{ display: 'flex' }}>
            <Box sx={{ width: '90px' }}> Mobile:</Box> <Box> {user.umob}</Box>
          </Typography>
          <Typography variant="subtitle2" gutterBottom sx={{ display: 'flex' }}>
            <Box sx={{ width: '90px' }}>Address:</Box> <Box>{user.uaddress}</Box>
          </Typography>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
