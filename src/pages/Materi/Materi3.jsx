import { Link } from 'react-router-dom';
import Navbar from '../../component/Navbar';
import Background from '../../image/newbackground.png'

export default function Materi3() {
    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-screen w-screen relative overflow-y-auto'>
            <Navbar />
        <div className="flex-col ml-7 mt-7">
            <Link to={"/pages/materi/materi4"}>
                <button className="border-solid border-2 rounded-full bg-white border-black mt-3 p-1 pr-3 pl-3">
                    Konsep Persamaan Linear Dua Variabel
                </button>
            </Link>
        </div>
        </div>
    )
}