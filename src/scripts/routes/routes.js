import Home from '../views/pages/home-page';
import Detail from '../views/pages/detail-page';
import Favorite from '../views/pages/favorite-page';

const routes = {
  '/': Home,
  '/home': Home,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
