import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Background from '../../image/newbackground.png'

export default function LatihanSoal() {
    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-screen w-screen relative overflow-y-auto'>
            <Navbar />
            <div className="ml-7 mt-7">
                <Link to={"/latihansoal1"}>
                <button className="p-1 pl-2 pr-2 border-solid border-2 rounded-full bg-white border-black">
                    Sistem Persamaan Linear Dua Variabel
                </button>
                </Link>
        </div>
        </div>
    )
}