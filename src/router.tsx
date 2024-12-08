import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from './components/App';
import LazyAbout from './components/LazyAbout';
import LazyShop from './components/LazyShop';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/about',
        element: (
          <Suspense fallback="loading...">
            <LazyAbout />
          </Suspense>
        ),
      },
      {
        path: '/shop',
        element: (
          <Suspense fallback="loading...">
            <LazyShop />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
