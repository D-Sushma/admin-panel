import React from 'react';
import { Breadcrumb, SimpleCard } from 'app/components';
import { styled, Box } from '@mui/material';
import UserTable from './shared/UserTable';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

export default function AppUsers() {
  return (
    <>
      <Container>
        <div className="breadcrumb">
          <Breadcrumb routeSegments={[{ name: 'Users', path: '/material' }, { name: 'Table' }]} />
        </div>

        <Box sx={{ mt: 1 }}>
          <SimpleCard title="USER-TABLES">
            <UserTable />
          </SimpleCard>
        </Box>
      </Container>
    </>
  );
}
