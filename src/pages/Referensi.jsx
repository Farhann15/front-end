import Navbar from "../component/Navbar";
import Background from '../image/newbackground.png'
import buku1 from '../image/buku1.png'

export default function Referensi() {
    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-screen w-screen relative overflow-y-auto'>
            <Navbar />

            <div>
                <img className="size-32 ml-3 mt-3" src={buku1} alt="" />
                <button className=" text-m ml-6 mt-3 p-1 pl-3 pr-3 border-solid border-2 rounded-full bg-white border-black">
                    Lihat buku
                </button>
            </div>

        </div>
    )
}