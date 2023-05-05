import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../Pages/Root';
import HomePage from '../Pages/Home'
import ErrorPage from './Error';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage/>,
    children: [
      { path: "/", element: <HomePage /> },
    ],
  },
]);

export default router;