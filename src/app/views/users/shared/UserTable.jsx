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
import AddUsers from '../eventPage/AddUsers';
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
  const [join, setJoin] = useState([]);
  const fetchJoinData = () => {
    fetch('http://localhost:5000/join')
      .then((response) => {
        console.log(' JOIN response');
        return response.json();
      })
      .then((data) => {
        console.log('inside JOIN data', data);
        setJoin(data.response.results);
      });
  };
  useEffect(() => {
    fetchJoinData();
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
        <AddUsers />
        {/* <IconButton sx={{ border: '2px solid green', backgroundColor: 'lightgreen' }}>
            <Icon color="success">add</Icon>
          </IconButton> */}
      </Box>
      <StyledTable sx={{ tableLayout: 'auto' }} bgcolor="#fafafa">
        <TableHead bgcolor="#e0f7fa">
          <TableRow>
            <TableCell align="center">SNO</TableCell>
            <TableCell align="center">USER ID</TableCell>
            <TableCell align="center">SUBJECT</TableCell>
            <TableCell align="center">SUBSCRIPTION</TableCell>
            <TableCell align="center">STATUS</TableCell>
            <TableCell align="center">ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {join
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((joinUser, index) => {
              return (
                <TableRow key={index}>
                  <TableCell align="center">{joinUser.id}</TableCell>
                  <TableCell align="center">{joinUser.name + ' ' + joinUser.lname}</TableCell>

                  {joinUser.subject === 6 ? (
                    <TableCell align="center">English</TableCell>
                  ) : joinUser.subject === 13 ? (
                    <TableCell align="center">GK</TableCell>
                  ) : (
                    <TableCell align="center">----</TableCell>
                  )}

                  {joinUser.subscription === 1 ? (
                    <TableCell align="center">Weekly</TableCell>
                  ) : (
                    <TableCell align="center">{joinUser.subscription}</TableCell>
                  )}

                  {joinUser.status === 1 ? (
                    <TableCell align="center">Active</TableCell>
                  ) : joinUser.status === 0 ? (
                    <TableCell align="center">Deactive</TableCell>
                  ) : (
                    <TableCell align="center">----</TableCell>
                  )}

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
        count={join.length}
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
