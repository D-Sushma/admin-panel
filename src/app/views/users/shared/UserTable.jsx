import React from 'react';
import {
  Box,
  IconButton,
  Icon,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import { useEffect, useState } from 'react';
import AddUser from './AddUser';
import UpdateUser from './UpdateUser';
import ViewUser from './ViewUser';

const StyledTable = styled(Table)(() => ({
  whiteSpace: 'pre',
  '& thead': {
    '& tr': { '& th': { paddingLeft: 0, paddingRight: 0 } },
  },
  '& tbody': {
    '& tr': { '& td': { paddingLeft: 0, textTransform: 'capitalize' } },
  },
}));

const PaginationTable = () => {
  const [open, setOpen] = React.useState(false);
  const [sendUser, setSendUser] = useState([]);
  // ----------DB FETCH START-------------------------
  const [getUser, setGetUser] = useState([]);
  const fetchUserData = () => {
    fetch('http://localhost:2000/users')
      .then((response) => {
        console.log('response');
        return response.json();
      })
      .then((data) => {
        console.log('Get User data', data);
        setGetUser(data);
      });
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  // ----------DB FETCH END-------------------------

  // ** open & close dialogue
  const handleClickOpen = (user) => {
    console.log('user', user);
    setOpen(true);
    setSendUser(user);
  };
  function handleClose() {
    setOpen(false);
  }
  // ** pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box width="100%" overflow="auto">
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mr: 5, mb: 1 }}>
        <AddUser />
      </Box>
      {/* <ViewUser open={open} handleClose={handleClose} /> */}
      <UpdateUser open={open} handleClose={handleClose} sendUser={sendUser} />
      <StyledTable sx={{ tableLayout: 'auto' }} bgcolor="#fafafa">
        <TableHead bgcolor="#e0f7fa">
          <TableRow>
            <TableCell align="center">SNO</TableCell>
            <TableCell align="center">USER NAME</TableCell>
            <TableCell align="center">EMAIL</TableCell>
            <TableCell align="center">MOBILE</TableCell>
            <TableCell align="center">ADDRESS</TableCell>
            <TableCell align="center">ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getUser
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((user, index) => {
              return (
                <TableRow key={index}>
                  <TableCell align="center">{user.uid}</TableCell>
                  <TableCell align="center">{user.uname}</TableCell>
                  <TableCell align="center">{user.uemail}</TableCell>
                  <TableCell align="center">{user.umob}</TableCell>
                  <TableCell align="center">{user.uaddress}</TableCell>

                  <TableCell
                    align="center"
                    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                  >
                    <IconButton onClick={handleClickOpen}>
                      <Icon color="secondary">visibility</Icon>
                    </IconButton>
                    <IconButton onClick={() => handleClickOpen(user)}>
                      <Icon color="primary">edit</Icon>{' '}
                    </IconButton>
                    <IconButton>
                      <Icon color="error">delete</Icon>
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </StyledTable>

      <TablePagination
        page={page}
        component="div"
        rowsPerPage={rowsPerPage}
        count={getUser.length}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[5, 10, 25]}
        onRowsPerPageChange={handleChangeRowsPerPage}
        nextIconButtonProps={{ 'aria-label': 'Next Page' }}
        backIconButtonProps={{ 'aria-label': 'Previous Page' }}
      />
    </Box>
  );
};

export default PaginationTable;
