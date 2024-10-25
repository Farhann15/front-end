import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Background from '../../image/newbackground.png'

export default function ForumDiskusi() {
    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-screen w-screen relative overflow-y-auto'>
            <Navbar />

            <div className="flex flex-row justify-center">
                <div className="ml-3">
                    <div className="">
                        <h1 className="text-2xl">Bemaru</h1>
                        <p className="font-semibold">Forum Diskusi merupakan sebuah tempat dimana kita bisa </p>
                        <p className="font-semibold">belajar bersama untuk membahas dan menyelesaikan Soal</p>
                        <p className="font-semibold">Matematika. Disini anda bisa bertanya dan menjawab</p>
                    </div>

                    <div className="rounded flex flex-row items-center justify-between border-black border bg-white h-[30px] w-[250px]">
                        <input className="border-y border-black rounded-l px-2 outline-none w-[200px] h-[30px]" type="text" placeholder="Cari soal serupa" name="search" />
                        <button className="pr-2" type="button">
                            <img className="w-6 h-6" src="src/image/forum2.png" alt="" />
                        </button>
                    </div>

                    <div className="mt-5 rounded flex flex-row items-center justify-between border-black border bg-white h-[30px] w-[250px]">
                        <input className="border-y border-black rounded-l px-2 outline-none w-[200px] h-[30px]" type="text" placeholder="Ajukan pertanyaan" name="search" />
                        <Link to={"/pages/forumdiskusi/forumdiskusi3"} className="pr-2" type="button">
                            <img className="w-6 h-6" src="src/image/forum2.png" alt="" />
                        </Link>
                    </div>

                    <div className="mt-10">
                        Pertanyaan yang telah di ajukan:
                    </div>

                    <div className='flex flex-row'>
                        <img className="w-6 h-6" src="src/image/forum3.png" alt="" />
                        <p className="ml-1">Muhammad Fahrizal</p>
                    </div>

                    <div className="w-[632px] mt-2 text-black text-justify ml-3 font-semibold p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-white border-black">
                        <div className='text-xs'>Rina membeli 3 kg apel dan 2 kg jeruk. Uang yag harus dibayarkan adalah Rp 65.000,00. Jika diubah menjadi persamaan linear dua variabel, maka pernyataan tersebut menjadi.... </div>

                        <div className="flex justify-between">
                            <div className="flex flex-row items-center">
                                <img className="w-6 h-6" src="src/image/forum4.png" alt="" />
                                <p>2</p>
                            </div>

                            <Link to={"/pages/forumdiskusi/forumdiskusi2"} className="bg-white text-base text-center w-[70px] h-auto border-2 border-black rounded-3xl">Jawab</Link>
                        </div>
                    </div>

                    <div className='flex flex-row mt-3'>
                        <img className="w-6 h-6" src="src/image/forum3.png" alt="" />
                        <p className="ml-1">Adzrani Anggita</p>
                    </div>

                    <div className=" text-black text-justify ml-3 font-semibold p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-white border-black">
                        <div className='text-xs'>Seorang pedagang menjual 3 buah pensil dan 5 buah buku seharga Rp 19.500,00. Jika diubah menjadi persamaan linear dua variabel, maka pernyataan tersebut menjadi.... </div>

                        <div className="flex justify-between">
                            <div className="flex flex-row items-center">
                                <img className="w-6 h-6" src="src/image/forum4.png" alt="" />
                                <p>2</p>
                            </div>

                            <button className="bg-white text-base text-center w-[70px] h-auto border-2 border-black rounded-3xl">Jawab</button>
                        </div>
                    </div>

                </div>

                <div className=" mr-5">
                    <div className="space-x-2 object-right h-[380px] w-[458px]">
                        <img className="object-none object-right" src="/src/image/forum1.PNG" alt="" />
                    </div>

                    <div className='flex flex-row mt-3'>
                        <div className="text-black text-justify ml-3 font-semibold p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-white border-black">
                            <p className='text-base'>Bab:</p>
                            <p className='text-base'>Sistem persamaan linear dua variabel</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-center mt-10 mb-5">
                <button className="justify-center mt-3 text-base font-semibold ml-3 p-1 pl-3 pr-3 border-solid border-2 rounded-xl bg-blue-300 border-black">
                    Cari pertanyaan lainnya
                </button>
            </div>

        </div >
    )
}