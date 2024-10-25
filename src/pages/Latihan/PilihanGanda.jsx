import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Background from '../../image/newbackground.png'

export default function PilihanGanda() {
    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-screen w-screen relative overflow-y-auto'>
            <Navbar />
            <div className="mt-3">
                <div className='flex flex-row space-x-3 justify-center'>
                    <div className="text-base font-semibold ml-3 p-1 pl-3 pr-3 border-solid border-2 rounded-xl bg-blue-100 border-black">
                        <div className='ml-3 mr-3'>Latihan! Pilihlah jawaban yang benar!</div>
                    </div>
                </div>

                <div className='flex flex-row space-x-3 mt-5'>
                    <div className="text-base font-semibold ml-3 p-1 pl-3 pr-3 border-solid border-2 rounded-xl bg-slate-200 border-black">
                        <div className="">
                            1. Penyelesaian dari sistem persamaan 3x + 2y - 4 = 0 dan x - 3y - 5 = 0 adalah ...
                        </div>
                        <div>
                            <div className="ml-4">
                                <input type="radio" id="a" name="pilih" value="(-2, 1)" />
                                <label className="ml-2" for="(-2, 1)">(-2, 1)</label>
                                <input className="ml-64" type="radio" id="c" name="pilih" value="(2, 1)" />
                                <label className="ml-2" for="(2, 1)">(2, 1)</label>
                            </div>

                            <div className="ml-4">
                                <input type="radio" id="b" name="pilih" value="(2, -1)" />
                                <label className="ml-2" for="(2, -1)">(2, -1)</label>
                                <input className="ml-64" type="radio" id="d" name="pilih" value="(-2, -1)" />
                                <label className="ml-2" for="(-2, -1)">(-2, -1)</label>
                            </div>
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
                <br />
                <Link to={"/pages/latihan/jawabanpg"} className="flex flex-row space-x-3 justify-center">
                    <button className=" mt-3 text-base font-semibold ml-3 p-1 pl-3 pr-3 border-solid border-2 rounded-xl bg-blue-300 border-black">
                        <div className="">
                            Lihat Jawaban
                        </div>
                    </button>
                </Link>

            </div>
        </div>

    )
}