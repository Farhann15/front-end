import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Background from '../../image/newbackground.png'

export default function HalamanAwal() {
    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-screen w-screen relative overflow-y-auto'>
            <Navbar />

            <div class="flex flex-row justify-center">
                <div className="ml-3 mt-3">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <p className="font-semibold text-2xl">Selamat datang di Bemaru!</p>
                    <p>Belajar matematika dengan cara yang seru</p>
                    <p>Untuk memfasilitasi siswa dalam belajar matematika</p>
                </div>

                <div className="">
                    <div className="w-[501px] h-[507px]">
                        <img src="/src/image/HA1.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-center mt-10 mb-5">
                <div className="font-semibold text-3xl">
                    Mengapa belajar di bemaru?
                </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-4">
                <div className="flex flex-row w-full items-center justify-center mt-6 px-6 py-5 ">
                    <div className="text-center">
                        <div className="w-[136px] h-[114px] mr-10">
                            <img src="/src/image/ha2.png" alt="" />
                            <p>Membantu memahami materi Matematika yang belum dimengerti</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="w-[136px] h-[114px] ml-5 mr-10">
                            <img src="/src/image/ha3.png" alt="" />
                            <p>Berisi Materi, Contoh, Latihan, dan Kuis untuk memfaslisitasi Belajar siswa</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="w-[136px] h-[114px] ml-5 mr-10">
                            <img src="/src/image/ha4.png" alt="" />
                            <p>Gratis dan tidak berbayar</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="w-[136px] h-[114px] ml-10">
                            <img src="/src/image/ha5.png" alt="" />
                            <p>Lengkap dengan panduan pemakaian, dan pusat bantuan yang selalu sedia</p>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}