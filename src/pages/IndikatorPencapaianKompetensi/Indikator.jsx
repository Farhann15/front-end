import { Link } from 'react-router-dom';
import Navbar from '../../component/Navbar';
import Background from '../../image/newbackground.png'

export default function Indikator () {

    return(
        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-screen w-screen relative overflow-y-auto'>
            <Navbar />
        <div className="mt-3">
            <div className="text-2xl font-bold ml-3">
            <p>INDIKATOR PENCAPAIAN KOMPETENSI</p>
            </div>

            <Link to={"/pages/indikatorpencapaiankompetensi/ipk2"} className="flex flex-row border-y-2 border-black w-full items-center bg-white mt-3 ">
                <button className="ml-3">1. Sistem Persamaan Linear Dua Variabel</button>
            </Link>
        </div>
        </div>
    )
}