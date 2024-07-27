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
import LatihanSoal from './pages/LatihanSoal';
import Referensi from './pages/Referensi';
import Bantuan from './pages/Bantuan';
import ForumDiskusi from './pages/ForumDiskusi';
import Background from '../src/image/background.png';
import TujuanPembelajaran from './pages/TujuanPembelajaran';
import TujuanPembelajaran1 from './pages/TujuanPembelajaran1';
import Indikator from './pages/Indikator';
import Indikator1 from './pages/Indikator1';
import Kompetensi from './pages/Kompetensi';
import Kompetensi1 from './pages/Kompetensi1';
import Materi1 from './pages/Materi1';
import Materi2 from './pages/Materi2';
import Materi3 from './pages/Materi3';
import Materi4 from './pages/Materi4';
import Materi5 from './pages/Materi5';
import Materi6 from './pages/Materi6';
import Materi7 from './pages/Materi7';
import Materi8 from './pages/Materi8';
import Materi9 from './pages/Materi9';
import Latihansoal1 from './pages/Latihansoal1';
import Kuis2 from './pages/Kuis2';
import InputLatihan from './pages/admin/Inputlatihan';

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: "/kuis",
      element: <Kuis />,
    },
    {
      path: "/referensi",
      element: <Referensi />,
    },
    {
      path: "/bantuan",
      element: <Bantuan />,
    },
    {
      path: "/forumdiskusi",
      element: <ForumDiskusi />,
    },
    {
      path: "/latihansoal",
      element: <LatihanSoal />,
    },
    {
      path: "/materi",
      element: <Materi />,
    },
    {
      path: "/beranda",
      element: <Beranda />,
    },
    {
      path: "/tujuanpembelajaran",
      element: <TujuanPembelajaran />,
    },
    {
      path: "/tujuanpembelajaran1",
      element: <TujuanPembelajaran1 />,
    },
    {
      path: "/indikator",
      element: <Indikator />,
    },
    {
      path: "/indikator1",
      element: <Indikator1 />,
    },
    {
      path: "/kompetensi",
      element: <Kompetensi />,
    },
    {
      path: "/kompetensi1",
      element: <Kompetensi1 />,
    },
    {
      path: "/materi1",
      element: <Materi1 />,
    },
    {
      path: "/materi2",
      element: <Materi2 />,
    },
    {
      path: "/materi3",
      element: <Materi3 />,
    },
    {
      path: "/materi4",
      element: <Materi4 />,
    },
    {
      path: "/materi4",
      element: <Materi4 />,
    },
    {
      path: "/materi5",
      element: <Materi5 />,
    },
    {
      path: "/materi6",
      element: <Materi6 />,
    },
    {
      path: "/materi7",
      element: <Materi7 />,
    },
    {
      path: "/materi8",
      element: <Materi8 />,
    },
    {
      path: "/materi9",
      element: <Materi9 />,
    },
    {
      path: "/latihansoal1",
      element: <Latihansoal1 />,
    },
    {
      path: "/kuis2",
      element: <Kuis2 />,
    },
    {
      path: "/admin/input-latihan",
      element: <InputLatihan />,
    },
  ]);

  return (
    <div style={{backgroundImage:`url(${Background})`, backgroundSize:'cover', backgroundPosition:'center'}} className='h-screen w-screen relative overflow-y-auto'>
    <Navbar/>
    <RouterProvider
    router={router}
  />
  </div>
  ) 
}

export default App
