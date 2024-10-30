import Navbar from "../../component/Navbar";
import Background from '../../image/newbackground.png'
import materi7ke1 from '../../image/materi7ke1.png'
import materi7ke2 from '../../image/materi7ke2.png'
import materi7ke3 from '../../image/materi7ke3.png'
import materi7ke4 from '../../image/materi7ke4.png'
import materi7ke5 from '../../image/materi7ke5.png'
import materi7ke6 from '../../image/materi7ke6.png'

export default function Materi7() {
    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-screen w-screen relative overflow-y-auto'>
            <Navbar />
            <div className="mt-3">
                <div className='flex flex-row space-x-3 justify-center'>
                    <div className="text-xl font-semibold ml-3 p-1 pl-3 pr-3 border-solid border-2 rounded-full bg-slate-300 border-black">
                        <div className='ml-3 mr-3'>Menyelesaikan Sistem Persamaan Linear Dua Variabel Dengan Metode Substitusi</div>
                    </div>
                </div>

                <div className='flex flex-row space-x-3'>
                    <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-slate-200 border-black">
                        <div>
                            <p className='font-semibold'>Perhatikan bagaimana menentukan penyelesaian dari sistem persamaan linear dua variabel berikut.</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-3'>
                    <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-white border-black">
                        <div className="mt-3 ml-3 mb-3">
                            <div>
                                Diberikan 2 persamaan sebagai berikut:
                            </div>

                            <div>
                                <img src={materi7ke1} alt="" />
                            </div>

                            <div>Dari persamaan 2x + y = 4, dapat ditentukan  nilai x dengan mengganti (menyubstitusi) bentuk persamaan y seperti berikut.
                            </div>

                            <div className="mt-3">
                                Ubah persamaan 2x + y = 4 menjadi y = 4 − 2x.
                            </div>

                            <div>
                                <p>Substitusikan 4 − 2x untuk y ke persamaan 5x − 2y = 1, sehingga</p>
                                <p>5x - 2y = 1</p>
                                <p>5x - 2(4 - 2x) = 1</p>
                                <p>5x - 8 + 4x = 1</p>
                                <p>9x - 8 = 1</p>
                                <p>9x - 8 + 8 = 1 + 8</p>
                                <p>9x = 9</p>
                                <p>x  = 1</p>
                            </div>

                            <div>
                                <p className="mt-3">Setelah itu, substitusikan nilai x = 1  ke persamaan y = 4 − 2x, sehingga</p>
                                <p>y = 4 - 2(1)</p>
                                <p>y = 4 - 2</p>
                                <p>y = 2</p>
                            </div>

                            <div>
                                <p className="mt-3">Untuk memeriksa apakah x = 1 dan y = 2 merupakan penyelesaian dari sistem persamaan linear dua variabel, maka</p>
                                <p>Jika x = 1 dan y = 2, maka 2x + y = 4</p>
                                <p>2(1) + (2) = 4</p>
                                <p>4 = 4 (benar)</p>
                            </div>

                            <div>
                                <p className="mt-3">Jika x = 1 dan y = 2, maka 5x - 2y = 1</p>
                                <p>5(1) - 2(2) = 1</p>
                                <p>1 = 1 (benar)</p>
                            </div>

                            <div className="mt-3">
                                Jadi, selesaian dari sistem persamaan linear dua variabel adalah (1, 2).
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-3'>
                    <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-slate-200 border-black">
                        <div>
                            <p className='font-semibold'>Contoh 1</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-3'>
                    <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-white border-black">
                        <div className="mt-3 ml-3 mb-3">
                            <div>Tentukan penyelesaian dari sistem persamaan linear dua variabel berikut.
                            </div>

                            <div>
                                <img src={materi7ke2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-3'>
                    <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-slate-200 border-black">
                        <div>
                            <p className='font-semibold'>Penyelesaian</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-3'>
                    <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-white border-black">
                        <div className="mt-3 ml-3 mb-3">
                            <div className="">
                                <p>Karena persamaan pertama sudah diketahui dalam persamaan y = 2x – 4, maka langsung disubstitusi ke persamaan 2.</p>
                            </div>

                            <div>
                                <p>5x - y = 3</p>
                                <p>5x - (2x - 4) = 3</p>
                                <p>5x - 2x + 4 = 3</p>
                                <p>3x + 4 = 3</p>
                                <p>3x = 3 - 4</p>
                                <p>3x = -1</p>
                                <img src={materi7ke3} alt="" />
                            </div>

                            <div className="mt-3">
                                <p>Nilai x= -1/3 disubstitusikan ke persamaan 1</p>
                                <img src={materi7ke4} alt="" />
                            </div>

                            <div>
                                Maka, penyelesaian dari Sistem persamaan linear dua variabel di atas adalah (-1/3,-1).
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-3'>
                    <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-slate-200 border-black">
                        <div>
                            <p className='font-semibold'>Contoh 2</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-3'>
                    <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-white border-black">
                        <div className="mt-3 ml-3 mb-3">
                            <div>
                                Perhatikan gambar di bawah.
                            </div>

                            <div className="">
                                <img src={materi7ke5} alt="" />
                            </div>

                            <div>
                                Buatlah sistem persamaan linear dua variabel dari ilustrasi gambar yang diberikan, kemudian tentukan harganya.
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-3'>
                    <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-slate-200 border-black">
                        <div>
                            <p className='font-semibold'>Penyelesaian</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-3'>
                    <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-white border-black">
                        <div className="mt-3 ml-3 mb-3">
                            <div>
                                Misalkan harga satu topi adalah x dan harga satu baju adalah y.
                            </div>

                            <div className="mt-3">
                                Harga satu topi dan dua baju adalah Rp300.000,00, persamaan yang terbentuk adalah x + 2y = 300.000 ..........(persamaan 1)
                            </div>

                            <div className="">
                                Harga tiga topi dan satu baju adalah Rp300.000,00, persamaan yang terbentuk adalah 3x + y = 300.000 ..........(persamaan 2)
                            </div>

                            <div className="mt-3">
                                Sistem persamaan linear dua variabel yang terbentuk sebagai berikut:
                            </div>

                            <div>
                                <img src={materi7ke6} alt="" />
                            </div>

                            <div className="mt-3">
                                Dengan menggunakan metode substitusi, kita ubah persamaan 1 menjadi x = 300.000  − 2y
                            </div>

                            <div>
                                Kemudian substitusi 300.000  − 2y ke dalam persamaan 2, sehingga
                            </div>

                            <div>
                                <p>3x + y = 300.000</p>
                                <p>3(300.000 - 2y) + y = 300.000</p>
                                <p>900.000 - 6y + y = 300.000</p>
                                <p>900.000 - 5y = 300.000</p>
                                <p>600.000 = 5y</p>
                                <p>120.000 = y</p>
                            </div>

                            <div className="mt-3">
                                <p>Kemudian kita ganti (substitusi) 120.000 ke persamaan x = 300.000  − 2y.</p>
                                <p>x = 300.000 - 2(120.000)</p>
                                <p>x = 300.000 - 240.000</p>
                                <p>x = 60.000</p>
                            </div>

                            <div className="mt-3">
                                <p>Jadi, penyelesaian dari sistem persamaan linear adalah (120.000, 60.000).</p>
                                <p>Atau dapat dimaknai dengan harga topi dan satu baju masing-masing adalah Rp120.000,00 dan Rp60.000,00.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}