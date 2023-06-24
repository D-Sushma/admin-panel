import React from 'react';
import {
  Box,
  Button,
  IconButton,
  Icon,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
} from '@mui/material';
import { useEffect, useState } from 'react';
import AddCustomerDialog from './AddCustomerDialog';
import ViewCustomerDialog from './ViewCustomerDialog';
import DeleteCustomerDialog from './DeleteCustomerDialog';
import UpdateCustomerDialog from './UpdateCustomerDialog';

const StyledTable = styled(Table)(() => ({
  whiteSpace: 'pre',
  '& thead': {
    '& tr': { '& th': { paddingLeft: 0, paddingRight: 0 } },
  },
  '& tbody': {
    '& tr': { '& td': { paddingLeft: 0, textTransform: 'capitalize' } },
  },
}));

const CustomerTable = () => {
  const [addOpen, setAddOpen] = React.useState(false);
  const [viewOpen, setViewOpen] = React.useState(false);
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const [updateOpen, setUpdateOpen] = React.useState(false);
  const [viewCustomer, setViewCustomer] = useState('');
  const [deleteCustomer, setDeleteCustomer] = useState('');
  const [updateCustomer, setUpdateCustomer] = useState('');
  // ----------DB FETCH START-------------------------
  const [getCustomer, setGetCustomer] = useState([]);
  const fetchCustomerData = () => {
    fetch('http://localhost:2000/customers')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('Get Customer data', data);
        setGetCustomer(data.results);
      });
  };
  useEffect(() => {
    fetchCustomerData();
  }, []);
  // ----------DB FETCH END-------------------------

  // ** open & close dialogue
  let handleClickAdd = () => {
    setAddOpen(true);
  };
  let handleClickView = (customer) => {
    // console.log('customer', customer);
    setViewOpen(true);
    setViewCustomer(customer);
  };
  let handleClickDelete = (customer) => {
    setDeleteOpen(true);
    setDeleteCustomer(customer);
  };
  let handleClickUpdate = (customer) => {
    setUpdateOpen(true);
    setUpdateCustomer(customer);
  };

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
      <AddCustomerDialog open={addOpen} handleClose={() => setAddOpen(false)} />
      <ViewCustomerDialog
        open={viewOpen}
        handleClose={() => setViewOpen(false)}
        customer={viewCustomer}
      />
      <DeleteCustomerDialog
        open={deleteOpen}
        handleClose={() => setDeleteOpen(false)}
        customer={deleteCustomer}
      />
      <UpdateCustomerDialog
        open={updateOpen}
        handleClose={() => setUpdateOpen(false)}
        // customer={updateCustomer}
        initialValues={{
          cid: updateCustomer.cid,
          cname: updateCustomer.cname,
          cemail: updateCustomer.cemail,
          cmobile: updateCustomer.cmob,
          caddress: updateCustomer.caddress,
        }}
      />

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mr: 5, mb: 1 }}>
        <Button variant="outlined" color="success" onClick={handleClickAdd}>
          + Add Customer
        </Button>
      </Box>

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
          {getCustomer
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((customer, index) => {
              return (
                <TableRow key={index}>
                  <TableCell align="center">{customer.cid}</TableCell>
                  <TableCell align="center">{customer.cname}</TableCell>
                  <TableCell align="center">{customer.cemail}</TableCell>
                  <TableCell align="center">{customer.cmob}</TableCell>
                  <TableCell align="center">{customer.caddress}</TableCell>

                  <TableCell
                    align="center"
                    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                  >
                    <Tooltip title="View" placement="top">
                      <IconButton onClick={() => handleClickView(customer)}>
                        <Icon color="secondary">visibility</Icon>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="edit" placement="top">
                      <IconButton onClick={() => handleClickUpdate(customer)}>
                        <Icon color="primary">edit</Icon>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="delete" placement="top">
                      <IconButton onClick={() => handleClickDelete(customer)}>
                        <Icon color="error">delete</Icon>
                      </IconButton>
                    </Tooltip>
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
        count={getCustomer.length}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[5, 10, 25]}
        onRowsPerPageChange={handleChangeRowsPerPage}
        nextIconButtonProps={{ 'aria-label': 'Next Page' }}
        backIconButtonProps={{ 'aria-label': 'Previous Page' }}
      />
    </Box>
  );
};

export default CustomerTable;
