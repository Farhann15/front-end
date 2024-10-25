import Navbar from '../../component/Navbar';
import Background from '../../image/newbackground.png'
import { Link } from 'react-router-dom';

export default function Materi2() {
    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-screen w-screen relative overflow-y-auto'>
            <Navbar />
            <div className="flex-col ml-7 mt-7">
                <div>
                    <Link to={"/pages/materi/materi3"}>
                        <button className="border-solid border-2 rounded-full bg-white border-black pr-3 pl-3 p-1">
                            Bentuk Umum Sistem Persamaan Linear Dua Variabel
                        </button>
                    </Link>
                </div>

                <div className='mt-3'>
                    <Link to={"/materi22"}>
                        <button className="border-solid border-2 rounded-full bg-white border-black pr-3 pl-3 p-1">
                            Penyelesaian Sistem Persamaan Linear Dua Variabel
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}