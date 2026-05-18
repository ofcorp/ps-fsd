import { createBrowserRouter } from 'react-router';
import { HomePage } from '../../pages/home';
import { Layout } from '../layout/Layout';
import { ROUTES } from '../../shared/routes';

export const router = createBrowserRouter([
  {
    path: ROUTES.main,
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
    ]
  }
])