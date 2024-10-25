import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Background from '../../image/newbackground.png'

export default function Kuis2() {
    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-screen w-screen relative overflow-y-auto'>
            <Navbar />
            <div className="px-40">
                <div className="p-1 pl-2 pr-2 border-solid border-2 rounded-3xl bg-white border-black mt-3 ">
                    <div className="text-center  text-2xl mb-3">
                        PETUNJUK PENGERJAAN KUIS
                    </div>

                    <div className="h-px w-auto my-3 bg-black border-1 dark:bg-black mt-0">
                    </div>

                    <div className="text-justify">
                        <div>1. Jangan lupa berdoa sebelum memulai pengerjaan kuis ini 😊</div>
                        <div>2. Klik “Mulai Kuis” apabila sudah siap memulai kuis</div>
                        <div>3. Siapkan alat tulis kerja yang akan digunakan untuk memfasilitasi dalam pengerjaan kuis</div>
                        <div>4. Setiap soal memiliki waktu pengerjaan 6 menit yang berarti untuk 10 soal berjumlah 60 menit </div>
                        <div>5. Pilihlah jawaban yang benar sesuai dengan jawaban yang didapatkan dari hasil perhitungan kalian</div>
                        <div>6. Pilihlah soal yang mudha terlebih dahulu untuk meminimalisir waktu yang berjalan</div>
                        <div>7. Setelah selesai mengerjakan hasil dari jawaban akan keluar untuk yang benar dan juga salah dengan memilih menu “Lihat Hasil”</div>
                        <div className="mb-3">8. Semangatt 😊</div>
                    </div>
                </div>

                <div className="flex flex-row justify-center">
                    <button className="justify-center mt-3 text-base font-semibold ml-3 p-1 pl-3 pr-3 border-solid border-2 rounded-xl bg-blue-100 border-black">
                        <Link to={"/pages/kuis/kuis3"} className="">
                            Mulai Kuis
                        </Link>
                    </button>
                </div>

            </div>
        </div>
    )
}