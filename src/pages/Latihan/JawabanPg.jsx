import Navbar from "../../component/Navbar";
import Background from '../../image/newbackground.png'

export default function JawabanPg() {
    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-screen w-screen relative overflow-y-auto'>
            <Navbar />

            <div className="mt-3">
                <div className='flex flex-row space-x-3 justify-center'>
                    <div className="text-base font-semibold ml-3 p-1 pl-3 pr-3 border-solid border-2 rounded-xl bg-blue-100 border-black">
                        <div className='ml-3 mr-3'>Jawaban</div>
                    </div>
                </div>


                <div className='flex flex-row space-x-3 mt-5'>
                    <div className="text-base font-semibold ml-3 p-1 pl-3 pr-3 border-solid border-2 rounded-xl bg-slate-200 border-black">
                        <div className="text-justify">
                            <p className="">1. 3x + 2y - 4 = 0 (kedua ruas ditambahkan 4)</p>
                            <p className="ml-3">3x + 2y = 4</p>
                            <p className="ml-3 mt-3">x - 3y - 5 = 0 (kedua ruas ditambahkan 5)</p>
                            <p className="ml-3">x - 3y = 5</p>
                            <p className="ml-3 mt-3">Dengan menggunakan metode eliminasi</p>
                            <p className="ml-3">3x + 2y = 4 (x3) agar bentuk y berjumlah sama dan dapat tereliminasi</p>
                            <p className="ml-6">x - 3y = 5 (x2) agar bentuk y berjumlah sama dan dapat tereliminasi</p>
                            <p className="ml-3">----------- +</p>
                            <p className="ml-3">9x + 6y = 12</p>
                            <p className="ml-3">2x - 6y = 10</p>
                            <p className="ml-3">----------- +</p>
                            <p className="ml-3">11x = 22</p>
                            <p className="ml-3">x = 2</p>
                            <p className="ml-3 mt-3">Lanjutkan dengan menggunakan metode substitusi dengan x = 2</p>
                            <p className="ml-3">x - 3y = 5</p>
                            <p className="ml-3">(2) - 3y =5</p>
                            <p className="ml-3">-3y = 5 - 2</p>
                            <p className="ml-3">-3y = 3</p>
                            <p className="ml-3">y = -1</p>
                            <p className="ml-3 mt-3">Maka, x = 2 dan y = -1 yang dimana poin b. (2, -1)</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}