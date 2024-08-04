import { useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Kuis from './pages/Kuis';
import Navbar from './component/Navbar';
import LatihanSoal from './pages/LatihanSoal';
import Referensi from './pages/Referensi';
import Bantuan from './pages/Bantuan';
import ForumDiskusi from './pages/ForumDiskusi';
import Background from '../src/image/background.png';
import Indikator from './pages/IndikatorPencapaianKompetensi/Indikator';
import Indikator1 from './pages/IndikatorPencapaianKompetensi/Indikator1';
import Kompetensi1 from './pages/KompetensiDasar/Kompetensi1';
import Materi5 from './pages/Materi5';
import Materi6 from './pages/Materi6';
import Materi7 from './pages/Materi7';
import Materi8 from './pages/Materi8';
import Materi9 from './pages/Materi9';
import Latihansoal1 from './pages/Latihansoal1';
import Kuis2 from './pages/Kuis2';
import InputEssay from './pages/InputEssay/InputEssay';
import InputPG from './pages/InputPG/InputPG';
import InputKuis from './pages/InputKuis/InputKuis';
import InputMateri from './pages/InputMateri/InputMateri';
import Beranda from './pages/Main/Beranda';
import Kompetensi from './pages/KompetensiDasar/Kompetensi';
import KompetensiInti from './pages/KompetensiInti/KompetensiInti';
import KompetensiInti1 from './pages/KompetensiInti/KompetensiInti1';
import Kompetensi11 from './pages/KompetensiDasar/Kompetensi1,5';
import Indikator11 from './pages/IndikatorPencapaianKompetensi/Indikator1,5';
import KompetensiInti11 from './pages/KompetensiInti/KompetensiInti1,5';
import Materi from './pages/Materi/Materi';
import Materi11 from './pages/Materi/Materi1,5';
import Materi1 from './pages/Materi/Materi1';
import Materi2 from './pages/Materi/Materi2';
import Materi3 from './pages/Materi/Materi3';
import Materi4 from './pages/Materi/Materi4';

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
      path: "/pages/materi/materi",
      element: <Materi />,
    },
    {
      path: "/pages/materi/materi11",
      element: <Materi11 />,
    },
    {
      path: "/materi",
      element: <Materi1 />,
    },
    {
      path: "/pages/materi/materi2",
      element: <Materi2 />,
    },
    {
      path: "/pages/materi/materi3",
      element: <Materi3 />,
    },
    {
      path: "/pages/materi/materi4",
      element: <Materi4 />,
    },
    {
      path: "/beranda",
      element: <Beranda />,
    },
    {
      path: "/pages/kompetensiinti/ki1",
      element: <KompetensiInti />,
    },
    {
      path: "/pages/kompetensiinti/ki1,5",
      element: <KompetensiInti11 />,
    },
    {
      path: "/pages/kompetensiinti/ki2",
      element: <KompetensiInti1 />,
    },
    {
      path: "/pages/indikatorpencapaiankompetensi/ipk1",
      element: <Indikator />,
    },
    {
      path: "/pages/indikatorpencapaiankompetensi/ipk1,5",
      element: <Indikator11 />,
    },
    {
      path: "/pages/indikatorpencapaiankompetensi/ipk2",
      element: <Indikator1 />,
    },
    {
      path: "/pages/kompetensidasar/kd1",
      element: <Kompetensi />,
    },
    {
      path: "/pages/kompetensidasar/kd1,5",
      element: <Kompetensi11 />,
    },
    {
      path: "/pages/kompetensidasar/kd2",
      element: <Kompetensi1 />,
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
      path: "/pages/inputEssay/input-essay",
      element: <InputEssay />,
    },
    {
      path: "/pages/inputPg/input-pg",
      element: <InputPG />,
    },
    {
      path: "/pages/inputKuis/input-kuis",
      element: <InputKuis />,
    },
    {
      path: "/pages/inputMateri/input-materi",
      element: <InputMateri />,
    },
  ]);

  return (
    <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-screen w-screen relative overflow-y-auto'>
      <Navbar />
      <RouterProvider
        router={router}
      />
    </div>
  )
}

export default App
