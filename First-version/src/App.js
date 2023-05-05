import { RouterProvider } from 'react-router-dom';
import router from './Store/Router'

function App() {
  return <RouterProvider router={router} />;
}

export default App;