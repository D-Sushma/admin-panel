import React from 'react';
import { Breadcrumb, SimpleCard } from 'app/components';
import { styled, Box } from '@mui/material';
import CustomerTable from './shared/CustomerTable';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

export default function AppCustomers() {
  return (
    <>
      <Container>
        <div className="breadcrumb">
          <Breadcrumb
            routeSegments={[
              { name: 'Customers', path: './shared/CustomerTable' },
              { name: 'Table' },
            ]}
          />
        </div>

        <Box sx={{ mt: 1 }}>
          <SimpleCard title="CUSTOMER-TABLES">
            <CustomerTable />
          </SimpleCard>
        </Box>
      </Container>
    </>
  );
}
