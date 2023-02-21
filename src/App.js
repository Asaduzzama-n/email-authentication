import logo from './logo.svg';
import './App.css';
import UserRegister from './Component/userRegister/UserRegister';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import UserLogin from './Component/UserLogin';

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<UserRegister></UserRegister>
        },
        {
          path:'/register',
          element:<UserRegister></UserRegister>
        },
        {
          path:'/login',
          element:<UserLogin></UserLogin>
        },
      ]
    },
  ])

  return (
    <div>
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
