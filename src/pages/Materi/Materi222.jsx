import Navbar from "../../component/Navbar";
import Background from '../../image/newbackground.png'

export default function Materi222() {
    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-screen w-screen relative overflow-y-auto'>
            <Navbar />
            <div className="mt-3">
                <div className='flex flex-row space-x-3 justify-center'>
                    <div className="text-xl font-semibold ml-3 p-1 pl-3 pr-3 border-solid border-2 rounded-full bg-slate-300 border-black">
                        <div className='ml-3 mr-3'>Menyelesaikan Sistem Persamaan Linear Dua Variabel Dengan Menggambar Grafik</div>
                    </div>
                </div>

                <div className='flex flex-row space-x-3'>
                    <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-slate-200 border-black">
                        <div>
                            <p className='font-semibold'>Bacalah ilustrasi berikut</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-3'>
                    <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-white border-black">
                        <div className="mt-3 ml-3 mb-3">
                            <div>Dede dan Angga membeli peralatan olahraga. Mereka membelinya di toko yang sama dan dengan merek yang sama dengan menggunakan uang Dede terlebih dahulu. Namun, mereka lupa meminta nota pembelian sehingga bingung untuk menentukan berapa yang harus dibayar oleh masing-masing orang.
                            </div>

                            <div className="flex flex-row space-x-3 justify-center">
                                <img src="src/image/image1(materi222)n.jpg" alt="" />
                            </div>

                            <div>Ayo kita bantu Dede dan Angga untuk mengetahui berapa harga yang harus dibayar oleh masing-masing dari mereka dengan mengikuti materi ini dengan baik.
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-3'>
                    <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-slate-200 border-black">
                        <div>
                            <p className='font-semibold'>Perhatikanlah contoh berikut.</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-3'>
                    <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-white border-black">
                        <div className="mt-3 ml-3 mb-3">
                            <div>Pak Cahya mempunyai bisnis sewa mobil. Selain menyewakan mobil, beliau juga menyediakan tourguide bagi setiap pengunjung yang berminat. Oleh karena itu, Pak Cahya mempersiapkan seluruh mobil yang ingin disewa dengan sebaik mungkin dengan biaya yang dikeluarkannya sebesar Rp7.000.000,00 untuk semua perbaikan yang dilakukan, dan biaya untuk tourguide Rp200.000,00 per hari. Pak Cahya juga menyediakan paket sewa mobil dan tourguide dengan harga Rp700.000,00 per hari.
                            </div>

                            <div className="mt-3">
                                <div>a. Tulis persamaan yang menunjukkan biaya yang dikeluarkan</div>
                            </div>

                            <div className="flex flex-row space-x-3 justify-center">
                                <img src="/src/image/image2(materi222)n.png" alt="" />
                            </div>

                            <div className="mt-3">
                                <div>b. Tulis persamaan yang menunjukkan pendapatan</div>
                            </div>

                            <div className="flex flex-row space-x-3 justify-center">
                                <img src="/src/image/image3(materi222)n.png" alt="" />
                            </div>

                            <div>
                                Pada situasi ini Pak Cahya mempunyai dua persamaan. Kumpulan dua (atau lebih) persamaan linear dua variabel dinamakan Sistem Persamaan Linear Dua Variabel (SPLDV). Sehingga, dua persamaan yang dimaksud sebagai berikut:
                            </div>

                            <div>
                                C = 200.000x + 7.000.000 (untuk pengeluaran)
                            </div>

                            <div>
                                P = 700.000x (untuk pendapatan yang diperoleh)
                            </div>

                            <div className="mt-3">
                                <div>c.	Dengan kedua persamaan tersebut dapat ditentukan berapa hari Pak Cahya menyewakan mobil untuk menutupi biaya pengeluaran yang telah ia keluarkan. Istilah ini dinamakan break-event point yaitu suatu keadaan di mana dalam suatu operasi perusahaan tidak mendapat untung maupun rugi/impas (pendapatan = total biaya pengeluaran).</div>
                            </div>

                            <div className="mt-3">
                                Sehingga didapatkan tabel berikut:
                            </div>

                            <div className="flex flex-row space-x-3 justify-center">
                                <img src="/src/image/image4(materi222)n.png" alt="" />
                            </div>

                            <div className="mt-3">
                                <div>d.	Sehingga dibutuhkan waktu 14 hari untuk Pak Cahya menemukan suatu keadaan di mana tidak mendapatkan untung dan juga rugi atau balik modal (impas).</div>
                            </div>

                            <div className="mt-3">
                                <div>e. Grafiknya sebagai berikut:</div>
                            </div>

                            <div className="flex flex-row space-x-3 justify-center">
                                <img src="/src/image/image5(materi222)n.png" alt="" />
                            </div>

                            <div className="">
                                <div>
                                    Jadi, didapatkan titik pertemuan antara Pengeluaran (C) dan Pemasukan (P) pada hari ke 14 di Rp9.800.000.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-3'>
                    <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-slate-200 border-black">
                        <div>
                            <p className='font-semibold'>Perhatikanlah materi berikut.</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-3'>
                    <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-white border-black">
                        <div className="mt-3 ml-3 mb-3">
                            <div className="">
                                <p>Berikut diberikan sebuah persamaan.</p>
                                <img src="/src/image/image6(materi222).png" alt="" />
                            </div>

                            <div>
                                Penyelesaian dari persamaan linear dua variabel seperti pasangan yang berurutan adalah salah satu penyelesaian untuk setiap persamaan. Penyelesaian dari sistem persamaan linear dua variabel tergambar atau terbentuk dalam suatu titik potong grafik dari kedua persamaan.
                            </div>

                            <div className="mt-3">
                                Untuk menyelesaikan sistem persamaan linear dua variabel menggunakan grafik, perhatikan langkah-langkah sebagai berikut.
                            </div>

                            <div>
                                <p className="text-blue-400">Langkah 1.</p>
                                <p>Gambar grafik kedua persamaan dalam satu bidang koordinat.</p>
                            </div>

                            <div>
                                <p className="text-blue-400">Langkah 2.</p>
                                <p>Perkirakan titik perpotongan kedua grafik.</p>
                            </div>

                            <div>
                                <p className="text-blue-400">Langkah 3.</p>
                                <p>Periksa titik potong kedua grafik dengan menyubstitusikan nilai x dan y ke dalam setiap persamaan.</p>
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
                                Tentukan penyelesaian dari sistem persamaan linear dua variabel berikut.
                            </div>

                            <div className="">
                                <img src="/src/image/image7(materi222).png" alt="" />
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
                                Mari kita tentukan titik x dan y dari kedua persamaan terlebih dahulu
                            </div>

                            <div>
                                <p>Persamaan ke 1:</p>
                                <p>• y = -x + 4, untuk y, x = 0</p>
                                <p className="ml-2">y = 0 + 4</p>
                                <p className="ml-2">y = 4</p>

                                <p className="mt-3">•	y = -x + 4, untuk x, y = 0</p>
                                <p className="ml-2">0 = -x + 4</p>
                                <p className="ml-2">x = 4</p>
                            </div>

                            <div className="mt-3">
                                <p>Persamaan ke 2:</p>
                                <p>•	3y = -x + 6, untuk y, x = 0</p>
                                <p className="ml-2">3y = 0 + 6</p>
                                <p className="ml-2">3y = 6</p>
                                <p className="ml-2">y = 2</p>

                                <p className="mt-3">•	3y = -x + 6, untuk x, y = 0</p>
                                <p className="ml-2">3(0) = -x + 6</p>
                                <p className="ml-2">0 = -x + 6</p>
                                <p className="ml-2">x = 6</p>
                            </div>

                            <div>
                                <p className="text-blue-400">Langkah 1.</p>
                                <p>Gambar grafik kedua persamaan dalam satu bidang koordinat.</p>
                            </div>

                            <div>
                                <img src="/src/image/image8(materi222)n.png" alt="" />
                            </div>

                            <div>
                                <p className="text-blue-400">Langkah 2.</p>
                                <p>Didapatkan titik potong berada di (3,1)</p>
                            </div>

                            <div>
                                <p className="text-blue-400">Langkah 3.</p>
                                <p>Periksa titik potong kedua grafik dengan menyubstitusikan nilai x dan y ke dalam setiap persamaan.</p>
                            </div>

                            <div>
                                <p>Persamaan 1: </p>
                                <p>y = -x + 4</p>
                                <p>1 = -3 + 4</p>
                                <p>1 = 1</p>
                            </div>

                            <div className="mt-3">
                                <p>Persamaan 2: </p>
                                <p>3y   = -x + 6</p>
                                <p>3(1) = -3 + 6</p>
                                <p>3 = 3</p>
                            </div>

                            <div>
                                Jadi, penyelesaian dari sistem persamaan linear dua variabel di atas adalah (3, 1)
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
                                Tentukan penyelesaian dari sistem persamaan linear dua variabel berikut dengan menggunakan metode grafik
                            </div>

                            <div>
                                <p>2y = -x + 6</p>
                                <p className="ml-2">y = 2x - 2</p>
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
                                Mari kita tentukan titik x dan y dari kedua persamaan terlebih dahulu
                            </div>

                            <div>
                                <p>Persamaan ke 1:</p>
                                <p>•	2y = -x + 6, untuk y, x = 0</p>
                                <p className="ml-2">2y = 0 + 6</p>
                                <p className="ml-2">2y = 6</p>
                                <p className="ml-2">y = 3</p>

                                <p className="mt-3">•	2y = -x + 6, untuk x, y = 0</p>
                                <p className="ml-2">2(0) = -x + 6</p>
                                <p className="ml-2">0 = -x + 6</p>
                                <p className="ml-2">x = 6</p>
                            </div>

                            <div className="mt-3">
                                <p>Persamaan ke 2:</p>
                                <p>•	y = 2x - 2, untuk y, x = 0</p>
                                <p className="ml-2">y = 2(0) - 2</p>
                                <p className="ml-2">y = -2</p>

                                <p className="mt-3">•	y = 2x - 2, untuk x, y = 0</p>
                                <p className="ml-2">0 = 2x - 2</p>
                                <p className="ml-2">2 = 2x </p>
                                <p className="ml-2">x = 1</p>
                            </div>

                            <div>
                                <p className="text-blue-400">Langkah 1.</p>
                                <p>Gambar grafik kedua persamaan dalam satu bidang koordinat.</p>
                            </div>

                            <div>
                                <img src="/src/image/image8,5(materi222)n.png" alt="" />
                            </div>

                            <div>
                                <p className="text-blue-400">Langkah 2.</p>
                                <p>Didapatkan titik potong berada di (2,2)</p>
                            </div>

                            <div>
                                <p className="text-blue-400">Langkah 3.</p>
                                <p>Periksa titik potong kedua grafik dengan menyubstitusikan nilai x dan y ke dalam setiap persamaan.</p>
                            </div>

                            <div>
                                <p>Persamaan 1: </p>
                                <p>2x   = -y + 6</p>
                                <p>  2(2) = -2 + 6</p>
                                <p> 4 = 4</p>
                            </div>

                            <div className="mt-3">
                                <p>Persamaan 2: </p>
                                <p>y = 2x - 2</p>
                                <p>  2 = 2(2) - 2</p>
                                <p>  2 = 2</p>
                            </div>

                            <div>
                                Jadi, penyelesaian dari sistem persamaan linear dua variabel di atas adalah (2, 2)
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-3'>
                    <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-slate-200 border-black">
                        <div>
                            <p className='font-semibold'>Contoh 3</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-3'>
                    <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-white border-black">
                        <div className="mt-3 ml-3 mb-3">
                            <div>
                                Keliling lantai sebuah kamar yang berbentuk persegi panjang adalah 8 m. Selisih panjang dan lebar kamar tersebut adalah 2 m. Tentukan panjang dan lebar kamar dengan cara menggambarkan grafiknya.
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
                                Sebelum kita menyelesaikan masalah di atas, kita harus mengubah kalimat tersebut menjadi kalimat matematika.
                                <p>Sehingga didapatkan.</p>
                            </div>

                            <div>
                                Misalkan panjang dan lebar persegi panjang berturut-turut adalah x dan y.
                            </div>

                            <div>
                                Keliling kamar berbentuk persegi panjang adalah 4 m, maka
                            </div>

                            <div>
                                <p>2(x + y) = 8</p>
                                <p>x + y = 4....... (persamaan 1)</p>
                            </div>

                            <div className="mt-3">
                                <p>Selisih panjang dan lebar kamar adalah 2 m, maka</p>
                                <p>x - y = 2........ (persamaan 2)</p>
                            </div>

                            <div className="mt-3">
                                Selanjutnya, mari kita tentukan titik x dan y dari kedua persamaan terlebih dahulu
                            </div>

                            <div>
                                <p>Persamaan ke 1:</p>
                                <p>•	x + y = 4, untuk y, x = 0</p>
                                <p className="ml-2">0 + y = 4</p>
                                <p className="ml-2">y = 4</p>

                                <p className="mt-3">•	x + y = 4, untuk x, y = 0</p>
                                <p className="ml-2">x + 0 =  4</p>
                                <p className="ml-2">x = 4</p>
                            </div>

                            <div className="mt-3">
                                <p>Persamaan ke 2:</p>
                                <p>•	x – y = 2, untuk y, x = 0</p>
                                <p className="ml-2">0 – y = 2</p>
                                <p className="ml-2">-y = 2</p>
                                <p className="ml-2">y = -2 </p>

                                <p className="mt-3">•	x – y = 2, untuk x, y = 0</p>
                                <p className="ml-2">x – 0 = 2</p>
                                <p className="ml-2">x = 2</p>
                            </div>

                            <div>
                                <p className="text-blue-400">Langkah 1.</p>
                                <p>Gambar grafik kedua persamaan dalam satu bidang koordinat.</p>
                            </div>

                            <div>
                                <img src="/src/image/image9(materi222)n.png" alt="" />
                            </div>

                            <div>
                                <p className="text-blue-400">Langkah 2.</p>
                                <p>Didapatkan titik potong berada di (3,1)</p>
                            </div>

                            <div>
                                <p className="text-blue-400">Langkah 3.</p>
                                <p>Periksa titik potong kedua grafik dengan menyubstitusikan nilai x dan y ke dalam setiap persamaan.</p>
                            </div>

                            <div>
                                <p>Persamaan 1: </p>
                                <p>x + y =  4</p>
                                <p>3 + 1 = 4</p>
                                <p>4 = 4</p>
                            </div>

                            <div className="mt-3">
                                <p>Persamaan 2: </p>
                                <p>x – y = 2</p>
                                <p>3 – 1 = 2</p>
                                <p>  2 = 2</p>
                            </div>

                            <div>
                                Jadi, penyelesaian dari sistem persamaan linear dua variabel di atas adalah        (3, 1).
                            </div>

                            <div>
                                Sehingga, panjang dan lebar kamar berturut-turut adalah 3 m dan 1 m.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}