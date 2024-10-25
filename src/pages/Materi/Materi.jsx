import { Link } from 'react-router-dom';
import Navbar from '../../component/Navbar';
import Background from '../../image/newbackground.png'

export default function Materi () {
    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-screen w-screen relative overflow-y-auto'>
            <Navbar />
            <div className='mt-7'>
        <Link to={"/pages/materi/materi11"} className="ml-7 mt-7">
            <button className=" p-1 pl-3  pr-3 border-solid border-2 rounded-full bg-white border-black">
              SMP/MTs
            </button>
        </Link>
        </div>
        </div>
    )
}