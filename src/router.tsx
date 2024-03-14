import { Navigate, createBrowserRouter } from 'react-router-dom';

import Home from './view/WorkHistoryApp';
import Sertifikat from './view/Sertifikat';


interface RouteConfig {
  path: string;
  element: React.ReactNode;
  children?: RouteConfig[];
}

const routerConfig: RouteConfig[] = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/sertifikat/:id',
        element: <Sertifikat />
    },
    {
        path: '*',
        element: <Navigate to="/" replace />,
    }
];

const router = createBrowserRouter(routerConfig);

export default router;