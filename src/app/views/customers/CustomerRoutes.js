import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const AppCustomers = Loadable(lazy(() => import('./AppCustomers')));

const CustomerRoutes = [
    {
        path: '/customers/AppCustomers',
        element: <AppCustomers />,
    }
]

export default CustomerRoutes;
