import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/index'

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
      { path: '/', element: <FeedPage/>},
      // { path: '/about', element: <AboutPage/>},
      { path: '/user/:userId', element: <UserPage/>},
    ],
  },
])

function App() {
  
  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
    
  );
}

export default App;
