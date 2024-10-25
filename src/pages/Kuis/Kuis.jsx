import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Background from '../../image/newbackground.png'

export default function Kuis () {
    return  (
        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-screen w-screen relative overflow-y-auto'>
            <Navbar />
        <Link to={"/pages/kuis/kuis2"} className="ml-7">
            <button className="mt-7 p-1 pl-2 pr-2 border-solid border-2 rounded-full bg-white border-black">
              Sistem Persamaan Linear Dua Variabel
            </button>
        </Link>
        </div>
    )
}