import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FeedPage from './pages/Feed';
import AboutPage from './pages/About';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import UserPage from './pages/User';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      { path: '/feed', element: <FeedPage/>},
      { path: '/about', element: <AboutPage/>},
      { path: '/user', element: <UserPage/>},
    ]
  },
])

function App() {
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
