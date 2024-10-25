import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Background from '../../image/newbackground.png'

export default function ForumDiskusi2() {
    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-screen w-screen relative overflow-y-auto'>
            <Navbar />

            <div className="flex flex-row justify-center">
                <div className="ml-3 mt-3">
                    <div className='flex flex-row'>
                        <img className="w-6 h-6" src="src/image/forum3.png" alt="" />
                        <p className="ml-1">Muhammad Fahrizal</p>
                    </div>

                    <div className="w-[632px] mt-2 text-black text-justify ml-3 font-semibold p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-white border-black">
                        <div className='text-sm'>Rina membeli 3 kg apel dan 2 kg jeruk. Uang yag harus dibayarkan adalah Rp 65.000,00. Jika diubah menjadi persamaan linear dua variabel, maka pernyataan tersebut menjadi.... </div>

                        <div className="flex justify-between">
                            <div className="flex flex-row items-center">
                                <img className="w-6 h-6" src="src/image/forum4.png" alt="" />
                                <p className="text-sm">2</p>
                            </div>

                            <Link to={""} className="text-sm bg-white text-center w-[70px] h-auto border-2 border-black rounded-3xl">Jawab</Link>
                        </div>
                    </div>

                    <div className="flex flex-row h-[35px] w-[223px] mt-3">
                        <div className="text-black text-justify ml-3 font-semibold p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-white border-black">
                            <p className='text-sm'>+ Tambahkan jawaban</p>
                        </div>
                    </div>

                    <div className='flex flex-row mt-3'>
                        <img className="w-6 h-6" src="src/image/forum3.png" alt="" />
                        <p className="ml-1">Mohammad Farhan Sofyan</p>
                    </div>

                    <div className="mt-2 text-black text-justify ml-3 font-semibold p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-white border-black">
                        <div className='text-sm'>
                            <p>Misal:</p>
                            <p>x = apel</p>
                            <p>y = jeruk</p>
                            <p>Harga 3 kg apel dan 2 kg jeruk adalah Rp65.000,00</p>
                            <p>Jika dijadikan persamaan linear dua variabel adalah 3x + 2y = 65.000</p>
                        </div>

                        <div className="flex justify-between">
                            <div className="flex flex-row items-center">
                                <img className="w-6 h-6" src="src/image/forum4.png" alt="" />
                                <p className="text-sm">2</p>
                            </div>

                            <button className="bg-white text-sm text-center w-[70px] h-auto border-2 border-black rounded-3xl">Jawab</button>
                        </div>
                    </div>

                    <div className="flex flex-row">
                        <img className="bg-red-400" src="src/image/forum5.png" alt="" />
                        <p>Terima kasih</p>
                    </div>

                    <div className="flex flex-row h-[35px] w-[223px] mt-3">
                        <div className="text-black text-justify ml-3 font-semibold p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-white border-black">
                            <p className='text-sm'>Balas komentar</p>
                        </div>
                    </div>
                </div>

                <div className="mt-3">
                    <div className='flex flex-row space-x-2 object-right h-[60px] w-[411px]'>
                        <div className="text-black text-justify ml-3 font-semibold p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-white border-black">
                            <p className='text-base'>Bab:</p>
                            <p className='text-base'>Sistem persamaan linear dua variabel</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}