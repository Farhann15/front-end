import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Background from '../../image/newbackground.png'

export default function Essay() {
    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-screen w-screen relative overflow-y-auto'>
            <Navbar />

            <div className="mt-3">
                <div className='flex flex-row space-x-3 justify-center'>
                    <div className="text-base font-semibold ml-3 p-1 pl-3 pr-3 border-solid border-2 rounded-xl bg-blue-100 border-black">
                        <div className='ml-3 mr-3'>Isilah uraian berikut dengan jawaban yang tepat</div>
                    </div>
                </div>
            </div>

            <div className='flex flex-row space-x-3 mt-5'>
                <div className="text-base font-semibold ml-3 p-1 pl-3 pr-3 border-solid border-2 rounded-xl bg-slate-200 border-black">
                    <div className="">
                        <p>1. Diberikan sistem persamaan linear dua variabel</p>
                        <p className="ml-3">3x - y = 10</p>
                        <p className="ml-3">x - 2y = 0</p>
                        <p className="ml-3">Tentukan penyelesaian dari sistem persamaan linear dua variabel di atas!</p>
                    </div>
                </div>
            </div>

            <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Link to={"/pages/latihan/jawabanessay"} className="flex flex-row space-x-3 justify-center text-bottom">
                    <button className=" mt-3 text-base font-semibold ml-3 p-1 pl-3 pr-3 border-solid border-2 rounded-xl bg-blue-300 border-black">
                        <div className="">
                            Lihat Jawaban
                        </div>
                    </button>
                </Link>

        </div>
    )
}