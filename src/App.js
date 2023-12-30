import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Component/Home';
import AddNewVendor from './Component/AddNewVendor';

function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/addnewvendor',
        element: <AddNewVendor></AddNewVendor>
      },
    

    ],
  },
  
])
  return (
    <div className='	mx-auto'>
     <RouterProvider router={router}></RouterProvider>
    
  </div>
  );
}

export default App;
