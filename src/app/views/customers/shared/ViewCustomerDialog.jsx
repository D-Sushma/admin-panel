import React from 'react';
import { Box, Fab, Icon, Typography } from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
export default function ViewCustomerDialog({ open, handleClose, customer }) {
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
          View Customer Detail
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
            <Box sx={{ width: '90px' }}> User ID:</Box> <Box> {customer.cid}</Box>
          </Typography>
          <Typography variant="subtitle2" gutterBottom sx={{ display: 'flex' }}>
            <Box sx={{ width: '90px' }}>User Name:</Box> <Box>{customer.cname}</Box>
          </Typography>
          <Typography variant="subtitle2" gutterBottom sx={{ display: 'flex' }}>
            <Box sx={{ width: '90px' }}> Email:</Box> <Box> {customer.cemail}</Box>
          </Typography>
          <Typography variant="subtitle2" gutterBottom sx={{ display: 'flex' }}>
            <Box sx={{ width: '90px' }}> Mobile:</Box> <Box> {customer.cmob}</Box>
          </Typography>
          <Typography variant="subtitle2" gutterBottom sx={{ display: 'flex' }}>
            <Box sx={{ width: '90px' }}>Address:</Box> <Box>{customer.caddress}</Box>
          </Typography>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
