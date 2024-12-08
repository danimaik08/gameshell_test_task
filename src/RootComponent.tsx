import { RouterProvider } from 'react-router-dom';

import router from './router';

const RootComponent = () => {
  return <RouterProvider router={router} />;
};

export default RootComponent;
