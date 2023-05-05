import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../Pages/Root';
import HomePage from '../Pages/Home'
import ErrorPage from '../Pages/Error';
import ContactPage from '../Pages/Contact'


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage/>,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/contacts/:contactId", element: <ContactPage/> },
    ],
  },
]);

export default router;