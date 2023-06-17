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
import CreateUsers from '../eventPage/CreateUsers';
import UpdateUser from '../eventPage/UpdateUser';

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
  // ----------DB FETCH START-------------------------
  const [getUser, setGetUser] = useState([]);
  const fetchUserData = () => {
    fetch('http://localhost:2000/all')
      .then((response) => {
        console.log('response');
        return response.json();
      })
      .then((data) => {
        console.log('Get User data', data);
        setGetUser(data.response.results);
      });
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  // ----------DB FETCH END-------------------------

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
        <CreateUsers />
        {/* <IconButton sx={{ border: '2px solid green', backgroundColor: 'lightgreen' }}>
            <Icon color="success">add</Icon>
          </IconButton> */}
      </Box>
      <StyledTable sx={{ tableLayout: 'auto' }} bgcolor="#fafafa">
        <TableHead bgcolor="#e0f7fa">
          <TableRow>
            <TableCell align="center">SNO</TableCell>
            <TableCell align="center">USER NAME</TableCell>
            <TableCell align="center">EMAIL</TableCell>
            <TableCell align="center">MOBILE</TableCell>
            <TableCell align="center">SUBJECT</TableCell>
            <TableCell align="center">ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getUser
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((user, index) => {
              return (
                <TableRow key={index}>
                  <TableCell align="center">{user.sid}1</TableCell>
                  <TableCell align="center">{user.sname}aashi</TableCell>
                  <TableCell align="center">{user.semail}aashi765@gmail.com</TableCell>
                  <TableCell align="center">{user.smob}837673656</TableCell>
                  <TableCell align="center">{user.subject}C</TableCell>

                  <TableCell
                    align="center"
                    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                  >
                    <IconButton>
                      <Icon color="secondary">visibility</Icon>
                    </IconButton>
                    {/* <IconButton>
                      <Icon color="primary">edit</Icon>{' '}
                    </IconButton> */}
                    <UpdateUser />
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
