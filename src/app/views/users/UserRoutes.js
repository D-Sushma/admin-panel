import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const AppUsers = Loadable(lazy(() => import('./AppUsers')));

const UserRoutes = [
    {
        path: '/users/AppUsers',
        element: <AppUsers />,
    }
];

export default UserRoutes;
