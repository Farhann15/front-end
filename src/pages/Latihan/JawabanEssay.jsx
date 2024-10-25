import Navbar from "../../component/Navbar";
import Background from '../../image/newbackground.png'

export default function JawabanEssay() {
    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-screen w-screen relative overflow-y-auto'>
            <Navbar />

            <div className="mt-3">
                <div className='flex flex-row space-x-3 justify-center'>
                    <div className="text-base font-semibold ml-3 p-1 pl-3 pr-3 border-solid border-2 rounded-xl bg-blue-100 border-black">
                        <div className='ml-3 mr-3'>Jawaban</div>
                    </div>
                </div>
            </div>

            <div className='flex flex-row space-x-3 mt-5'>
                <div className="text-base font-semibold ml-3 p-1 pl-3 pr-3 border-solid border-2 rounded-xl bg-slate-200 border-black">
                    <div className="text-justify">
                        <p className="">1. Dengan menggunakan metode eliminasi</p>
                        <p className="ml-3">3x - y = 10</p>
                        <p className="ml-3">x - 2y = 0 (x3) agar bentuk x berjumlah sama dan dapat tereliminasi</p>
                        <p className="ml-3">----------- -</p>
                        <p className="ml-3">3x - y = 10</p>
                        <p className="ml-3">3x - 6y = 0</p>
                        <p className="ml-3">----------- -</p>
                        <p className="ml-3">5y = 10</p>
                        <p className="ml-3">y = 2</p>
                        <p className="ml-3 mt-3">Lanjutkan dengan menggunakan metode substitusi, dengan y = 2</p>
                        <p className="ml-3">x - 2(y) = 0</p>
                        <p className="ml-3">x - 2(2) = 0</p>
                        <p className="ml-3">x - 4 = 0</p>
                        <p className="ml-3">x = 4</p>
                        <p className="ml-3 mt-3">Maka, jawabannya (4, 2)</p>
                    </div>
                </div>
            </div>

        </div>
    )
}