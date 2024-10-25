import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Background from '../../image/newbackground.png'
import logobemaru from '../../image/BEMARU2.png'

export default function HalamanAwal() {
    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-screen w-screen relative overflow-y-auto'>

            <div className="flex flex-shrink-0 items-center mt-3">
                <div className='flex flex-row gap-2 pb-1 items-center text-sm border-b-2 border-black'>
                    <img
                        className="h-12 w-auto pl-2"
                        src={logobemaru}
                        alt="Belajar Matematika Seru"
                    />
                    <div className='flex flex-col items-start'>
                        <p className='font-bold'>BeMaRu</p>
                        <p>Belajar Matematika Seru!</p>
                    </div>
                </div>

            </div>

            <div className="flex flex-row justify-center">
                <div className="mr-16 mt-3">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <p className="font-semibold text-2xl">Selamat datang di Bemaru!</p>
                    <p>Belajar matematika dengan cara yang seru</p>
                    <p>Untuk memfasilitasi siswa dalam belajar matematika</p>
                </div>

                <div className="ml-16">
                    <div className="w-[501px] h-[507px]">
                        <img src="/src/image/HA1.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-center mt-10 mb-5">
                <div className="font-semibold text-4xl">
                    Mengapa belajar di bemaru?
                </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-4">
                <div className="flex flex-row w-full items-center justify-center mt-6 px-6 py-5 ">
                    <div className="text-center">
                        <div className="w-[136px] h-[114px] mr-16">
                            <img src="/src/image/ha2.png" alt="" />
                            <p>Membantu memahami materi Matematika yang belum dimengerti</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="w-[136px] h-[114px] ml-5 mr-16">
                            <img src="/src/image/ha3.png" alt="" />
                            <p>Berisi Materi, Contoh, Latihan, dan Kuis untuk memfaslisitasi Belajar siswa</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="w-[136px] h-[114px] ml-5 mr-16">
                            <img src="/src/image/ha4.png" alt="" />
                            <p>Gratis dan tidak berbayar</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="w-[136px] h-[114px] ml-16">
                            <img src="/src/image/ha5.png" alt="" />
                            <p>Lengkap dengan panduan pemakaian, dan pusat bantuan yang selalu sedia</p>
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
            <div className="flex flex-row justify-center">
                <button className="justify-center mt-3 text-base font-bold ml-3 p-1 pl-3 pr-3 border-solid border-2 rounded-xl bg-blue-300 border-black">
                    Masuk
                </button>
            </div>
            
            <div className="flex flex-row justify-center mb-5 mt-1">
            <p>Belum punya akun?   </p>
            <p></p>
            <p className="text-blue-400 underline ml-1"> Daftar disini</p>
            </div>

        </div >
    )
}