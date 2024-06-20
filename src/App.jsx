import { useState } from 'react'
import './App.css'
import Beranda from './pages/Beranda'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Kuis from './pages/Kuis';
import Navbar from './component/Navbar';
import Materi from './pages/Materi';

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: "/kuis",
      element: <Kuis />,
    },
    {
      path: "/materi",
      element: <Materi />,
    },
    {
      path: "/beranda",
      element: <Beranda />,
    },
  ]);

  return (
    <div className='w-screen'>
    <Navbar/>
    <RouterProvider
    router={router}
  />
  </div>
  ) 
}

export default App
