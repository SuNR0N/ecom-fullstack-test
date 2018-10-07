import { NotFoundPage } from '../views/NotFoundPage';
import { HomePageConnected } from '../views/HomePageConnected';

export const routes = [
  {
    component: HomePageConnected,
    exact: true,
    path: '/',
  },
  {
    component: NotFoundPage,
    path: '*',
  },
];