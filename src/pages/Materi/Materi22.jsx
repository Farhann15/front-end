import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Background from '../../image/newbackground.png'

export default function Materi22() {
    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-screen w-screen relative overflow-y-auto'>
            <Navbar />
            <div className="flex-row ml-7 mt-7">
                <Link to={"/materi222"} className="border-solid border-2 rounded-full bg-white border-black pr-3 pl-3 p-1">
                    Penyelesaian Sistem Persamaan Linear Dua Variabel dengan Menggambar Grafik
                </Link>
            </div>

            <div className="flex flex-row ml-7 mt-3">
                <Link to={"/pages/materi/materi7"} className="border-solid border-2 rounded-full bg-white border-black pr-3 pl-3 p-1">
                    Penyelesaian Sistem Persamaan Linear Dua Variabel dengan Metode Substitusi
                </Link>
            </div>

            <div className="flex flex-row ml-7 mt-3">
                <Link to={"/materi8"} className="border-solid border-2 rounded-full bg-white border-black pr-3 pl-3 p-1">
                    Penyelesaian Sistem Persamaan Linear Dua Variabel dengan Metode Eliminasi
                </Link>
            </div>

            <div className="flex flex-row ml-7 mt-3">
                <Link to={"/materi9"} className="border-solid border-2 rounded-full bg-white border-black pr-3 pl-3 p-1">
                    Penyelesaian Sistem Persamaan Linear Dua Variabel Khusus
                </Link>
            </div>
        </div>
    )
}