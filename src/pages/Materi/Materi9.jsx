import Navbar from "../../component/Navbar";
import Background from '../../image/newbackground.png'

export default function Materi9() {
    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-screen w-screen relative overflow-y-auto'>
            <Navbar />
            <div className="mt-3">
                <div className='flex flex-row space-x-3 justify-center'>
                    <div className="text-xl font-semibold ml-3 p-1 pl-3 pr-3 border-solid border-2 rounded-full bg-slate-300 border-black">
                        <div className='ml-3 mr-3'>Menyelesaikan Sistem Persamaan Linear Dua Variabel Khusus</div>
                    </div>
                </div>

                <div className='flex flex-row space-x-3'>
                    <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-slate-200 border-black">
                        <div>
                            <p className='font-semibold'>Pada sub bab sebelumnya kalian sudah memahami dan mencoba menyelesaikan sistem persamaan linear dua variabel yang memiliki tepat satu penyelesaian. Namun, terkadang ada situasi di mana tidak memiliki penyelesaian, hal itu dikarenakan semesta untuk variabel x dan variabel y yang terbatas. Namun, apakah semua sistem persamaan linear memiliki tepat satu penyelesaian? Apakah ada sistem persamaan yang tidak memiliki penyelesaian? Atau apakah ada sistem persamaan linear yang memiliki lebih dari satu penyelesaian?</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-3'>
                    <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-slate-200 border-black">
                        <div>
                            <p className='font-semibold'>Perhatikan ilustrasi berikut!</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-3'>
                    <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-white border-black">
                        <div className="mt-3 ml-3 mb-3">
                            <div className="flex justify-center">
                                <img src="/src/image/materi9(1)n.png" alt="" />
                            </div>

                            <div>
                                <p>Gita berusia 3 tahun lebih muda dari usia kakaknya. </p>
                                <p className="mt-3">Jika dinyatakan kedua umur mereka ke dalam sistem persamaan linear dua variabel maka akan terbentuk sebagai berikut:</p>
                                <p>y = t	(usia kakak gita)</p>
                                <p>y = t – 3	(usia gita)</p>
                            </div>

                            <div className="mt-3">
                                a. Grafik dari kedua persamaan dalam bidang koordinat yang sama diilustrasikan sebagai berikut
                            </div>

                            <div className="flex justify-center mt-3">
                                <img src="/src/image/materi9(2).png" alt="" />
                            </div>

                            <div>
                                <p>b.	Jarak vertikal kedua garis yang terbentuk adalah 3 satuan. Hal ini menunjukkan selisih usia Gita dan kakaknya yang berbeda 3 tahun.</p>
                                <p>c.	Kedua garis tidak akan pernah berpotongan, karena kedua usia Gita dan kakaknya tidak akan pernah bertemu pada umur yang sama seperti yang ditunjukkan oleh titik potong garis pada koordinat di atas.</p>
                            </div>

                            <div className="mt-3">
                                Sistem persamaan linear dua variabel dapat memiliki satu penyelesaian, tidak memiliki penyelesaian, dan memiliki tak hingga penyelesaian. Perhatikan gambar berikut
                            </div>

                            <div className="flex justify-center mt-3">
                                <img src="src/image/materi9(3).png" alt="" />
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
                            <div>
                                Selesaikan sistem persamaan berikut:
                            </div>

                            <div>
                                <img src="/src/image/materi9(4).png" alt="" />
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
                                <p>Kita bisa menggunakan dua metode untuk menyelesaikan persamaan di atas:</p>
                            </div>

                            <div className="mt-3">
                                <p className="font-semibold">Metode 1.</p>
                                <p>Menggambar grafik kedua persamaan</p>
                            </div>

                            <div className="mt-3 flex justify-center">
                                <img src="/src/image/materi9(5).png" alt="" />
                            </div>

                            <div>
                                Gambar grafik menunjukkan kemiringan (gradien) yang sama dan berbeda titik potong terhadap sumbu-Y sehingga kedua garis terbentuk sejajar. Oleh karena itu, kedua persamaan tidak memiliki titik potong sebagai penyelesaian untuk sistem persamaan linear.
                            </div>

                            <div className="mt-3">
                                <p className="font-semibold">Metode 2.</p>
                                <p>Metode substitusi</p>
                            </div>

                            <div className="mt-3">
                                <p>Substitusi y = 5x – 5 ke persamaan pertama</p>
                                <p>y = 5x + 3</p>
                                <p>5x – 5 = 5x + 3</p>
                                <p>-5 = 3		(salah)</p>
                                <p>Jadi, sistem persamaan linear tidak memiliki penyelesaian</p>
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
                    <div className="mt-2 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-slate-200 border-black">
                        <div>
                            <p className='font-semibold'>Perhatikan ilustrasi dan gambar di bawah ini!</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-3'>
                    <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-white border-black">
                        <div className="mt-3 ml-3 mb-3">
                            <div>
                                Keliling persegi panjang adalah 36 dm. Keliling segitiga adalah 72 dm. Tentukan nilai x dan y.
                            </div>

                            <div className="flex flex-row">
                                <img src="/src/image/materi9(6).png" alt="" />
                                <img className="ml-20" src="/src/image/materi9(7).png" alt="" />
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
                            <div className="mt-3">
                                <p>Keliling persegi panjang</p>
                                <p>2(2x) + 2(4y) = 36</p>
                                <p>4x + 8y = 36</p>
                            </div>

                            <div className="mt-3">
                                <p>Keliling segitiga</p>
                                <p c>4x + 4x + 16y = 72</p>
                                <p>8x + 16y = 72</p>
                            </div>

                            <div className="mt-3">
                                <p>Sistem persamaan linear yang terbentuk adalah</p>
                                <p>4x + 8y = 36</p>
                                <p>8x + 16y = 72</p>
                                <p className="mt-3">Kita bisa menggunakan dua metode untuk menyelesaikan persamaan di atas:</p>
                            </div>

                            <div className="mt-3">
                                <p className="font-semibold">Metode 1.</p>
                                <p>Menggambar grafik kedua persamaan</p>
                            </div>

                            <div className="mt-3 flex justify-center">
                                <img src="/src/image/materi9(8).png" alt="" />
                            </div>

                            <div>
                                <p>Gambar grafik menunjukkan kemiringan (gradien) dan titik potong terhadap sumbu-Y yang sama. Sehingga kedua garis adalah memiliki posisi yang sama atau berhimpit.</p>
                                <p>Sehingga semua titik yang melalui garis pada kuadran pertama merupakan penyelesaian dari sistem persamaannya. Maka, sistem persamaan linear ini memiliki penyelesaian yang tak terhingga.</p>
                            </div>

                            <div className="mt-3">
                                <p className="font-semibold">Metode 2.</p>
                                <p>Metode eliminasi</p>
                            </div>

                            <div className="mt-3">
                                <img src="/src/image/materi9(9).png" alt="" />
                            </div>

                            <div className="mt-3">
                                Persamaan 0 = 0 bernilai benar. karena x dan y positif. Maka penyelesaiannya merupakan semua titik pada garis 4x + 8y = 36 di kuadran pertama. Sehingga, sistem persamaan linear ini memiliki penyelesaian yang tak terhingga.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}