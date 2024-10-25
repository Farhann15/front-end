import Navbar from "../../component/Navbar";
import Background from '../../image/newbackground.png'

export default function Materi8() {
    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-screen w-screen relative overflow-y-auto'>
            <Navbar />
            <div className="mt-3">
                <div className='flex flex-row space-x-3 justify-center'>
                    <div className="text-xl font-semibold ml-3 p-1 pl-3 pr-3 border-solid border-2 rounded-full bg-slate-300 border-black">
                        <div className='ml-3 mr-3'>Menyelesaikan Sistem Persamaan Linear Dua Variabel Dengan Metode Eliminasi</div>
                    </div>
                </div>

                <div className='flex flex-row space-x-3'>
                    <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-slate-200 border-black">
                        <div>
                            <p className='font-semibold'>Pada kegiatan sebelumnya kalian telah mengetahui bagaimana cara menentukan penyelesaian dari Sistem Persamaan Linear Dua Variabel dengan menggunakan metode grafik dan metode substitusi. Pada materi sekarang nantinya kalian bisa memilih metode mana yang akan digunakan dari ketiga metode yang telah dipelajari.  Kalian juga akan mengetahui kapan waktu yang tepat untuk menggunakan metode substitusi, grafik , dan metode eliminasi. Oleh karena itu, amati kegiatan berikut.</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-3'>
                    <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-white border-black">
                        <div className="mt-3 ml-3 mb-3">
                            <div>
                                Sistem persamaan berikut dapat diselesaikan dengan menggunakan dua metode
                            </div>

                            <div className="flex flex-row">
                                <div>
                                    <p>a. 4x + 2y = 6</p>
                                    <p className="ml-3">4x - 2y = 2</p>
                                </div>

                                <div className="ml-10">
                                    <p>b. 5x - 3y = 6</p>
                                    <p className="ml-3">5x + 2y = 4</p>
                                </div>

                                <div className="ml-10">
                                    <p>c. 3x + 4y = 9</p>
                                    <p className="ml-3">3x - 4y = -7</p>
                                </div>
                            </div>

                            <div className="mt-2 justify-center">
                                <img src="/src/image/materi8(1).png" alt="" />
                            </div>

                            <div className="">
                                Penggunaan kedua metode di atas menghasilkan penyelesaian yang sama. Apakah sistem persamaan linear dua variabel b. dan c akan sama hasilnya? Ada kondisi dengan menggunakan metode penjumlahan dan pengurangan belum menghasilkan hasil yang sesuai atau sama. Sehingga dibutuhkan penyesuaian persamaan satu sama lain. Perhatikan kegiatan selanjutnya.
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-3'>
                    <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-slate-200 border-black">
                        <div>
                            <p className='font-semibold'>Perhatikan kegiatan berikut.</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-3'>
                    <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-white border-black">
                        <div className="mt-3 ml-3 mb-3">
                            <div>
                                <p>a.	Dengan menggunakan metode eliminasi, untuk menyamakan koefisien y sama dengan persamaan kedua maka kita dapat mengubah persamaan pertama untuk mendapatkan nilai x.</p>
                            </div>

                            <div className="flex flex-row">
                                <div>
                                    <p>4x + y = 4</p>
                                    <p>2x + 7y = 2</p>
                                </div>

                                <div className="ml-10">
                                    <p>(dikalikan 7)</p>
                                </div>

                                <div className="ml-5">
                                    <p>28x + 7y = 28</p>
                                    <p>2x + 7y = 2</p>
                                </div>
                            </div>

                            <div>
                                Untuk mengeliminasi y hitunglah dengan metode pengurangan kedua persamaan yang telah didapatkan diatas.
                            </div>

                            <div className="mt-2">
                                <img src="/src/image/materi8(2).png" alt="" />
                                <p>Jadi, didapatkan nilai x = 1</p>
                            </div>

                            <div>
                                <p>b.	Dengan menggunakan metode eliminasi, untuk menyamakan koefisien x sama dengan persamaan pertama maka kita dapat mengubah persamaan kedua untuk mendapatkan nilai y.</p>
                            </div>

                            <div className="flex flex-row">
                                <div>
                                    <p>4x + y = 4</p>
                                    <p>2x + 7y = 2</p>
                                </div>

                                <div className="mt-6 ml-10">
                                    <p>(dikalikan 2)</p>
                                </div>

                                <div className="ml-5">
                                    <p>4x + y = 4</p>
                                    <p>4x + 14y = 4</p>
                                </div>
                            </div>

                            <div>
                                Untuk mengeliminasi x hitunglah dengan metode pengurangan kedua persamaan yang telah didapatkan di atas.
                            </div>

                            <div className="mt-2">
                                <img src="/src/image/materi8(3).png" alt="" />
                                <p>Jadi, didapatkan nilai y = 0</p>
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
                            <div className="">
                                <p>Tentukan penyelesaian dari sistem persamaan linear dua variabel berikut</p>
                            </div>

                            <div>
                                <img src="/src/image/materi8(4).png" alt="" />
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
                                Perhatikan koefisien y pada kedua persamaan yang di mana masing-masing memiliki tanda yang berlawanan. Sehingga kita bisa menjumlahkannya untuk mengeliminasinya.
                            </div>

                            <div className="">
                                <img src="/src/image/materi8(5).png" alt="" />
                            </div>

                            <div>
                                Jadi, hasil dari proses eliminasi di atas didapatkan x = 11/5
                            </div>

                            <div className="mt-3">
                                Selanjutnya, mari kita lakukan pengurangan pada koefisien x untuk mengeliminasinya.
                            </div>

                            <div>
                                <img src="/src/image/materi8(5).png" alt="" />
                            </div>

                            <div>
                                <p>Jadi, hasil dari proses eliminasi di atas didapatkan y = -10/7</p>
                                <p>Maka, didapatkan nilai dari x dan y dari metode eliminasi di atas yakin x = 11/5, 	dan y = -10/7</p>
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
                                Tentukan penyelesaian dari sistem persamaan linear dua variabel berikut
                            </div>

                            <div className="">
                                <img src="/src/image/materi8(7).png" alt="" />
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
                                Sebelum kita mengeliminasi persamaan di atas kita harus menyamakan salah satu koefisien terlebih dahulu. Contohnya, dengan mengalikan persamaan kedua dengan 2 untuk mengeliminasi variabel x.
                            </div>

                            <div className="flex flex-row">
                                <div>
                                    <p>-4x + 2y = 10</p>
                                    <p>-2x - y = 1</p>
                                </div>

                                <div className="mt-6 ml-10">
                                    <p>(dikalikan 2)</p>
                                </div>

                                <div className="ml-5">
                                    <p>-4x + 2y = 10</p>
                                    <p>-4x - 2y = 2</p>
                                </div>
                            </div>

                            <div className="mt-3">
                                Lakukan langkah metode pengurangan pada kedua persamaan.
                            </div>

                            <div className="mt-2">
                                <img src="/src/image/materi8(8).png" alt="" />
                                <p>Jadi, hasil dari proses eliminasi di atas didapatkan y = 2</p>
                            </div>

                            <div className="mt-3">
                                Selanjutnya, mari kita coba eliminasi koefisien y untuk mendapatkan nilai dari x.
                            </div>

                            <div className="mt-2">
                                <img src="/src/image/materi8(9).png" alt="" />
                            </div>

                            <div>
                                <p>Jadi, hasil dari proses eliminasi di atas didapatkan x = -3/2</p>
                                <p> Maka, didapatkan nilai dari x dan y dari metode eliminasi di atas yakin x = -3/2,  dan y = 2</p>
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
                                Diketahui tiga minuman soda dan empat burger dijual dengan harga Rp112.000,00. Dua minuman soda dan lima burger dijual dengan harga Rp126.000,00. Berapakah harga setiap minuman soda?
                            </div>

                            <div className="flex flex-row">
                                <img src="/src/image/materi8(10).png" alt="" />
                                <img src="/src/image/materi8(11).png" alt="" />
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
                                Misalkan harga satu minuman soda dimisalkan dengan x dan harga satu burger dengan y, maka sistem persamaan linear dua variabel yang terbentuk sebagai berikut.
                            </div>

                            <div className="">
                                <p>3x + 4y = 112.000</p>
                                <p>2x + 5y = 126.000</p>
                            </div>

                            <div className="mt-3">
                                Selanjutnya, mari kita coba eliminasi y dengan mengalikan persamaan pertama dengan 4 dan persamaan kedua dengan 5 untuk mendapatkan harga dari 1 minuman soda.
                            </div>

                            <div className="flex flex-row">
                                <div>
                                    <p>3x + 4y = 112.000</p>
                                    <p>2x + 5y = 126.000</p>
                                </div>

                                <div className=" ml-10">
                                    <p>(dikalikan 5)</p>
                                    <p>(dikalikan 4)</p>
                                </div>

                                <div className="ml-5">
                                    <p>15x + 20y = 560.000</p>
                                    <p>8x + 20y = 504.000</p>
                                </div>
                            </div>

                            <div className="mt-3">
                                Lakukan metode pengurangan untuk mengeliminasi  y.
                            </div>

                            <div>
                                <img src="/src/image/materi8(12).png" alt="" />
                            </div>

                            <div>
                                Jadi, nilai x atau harga satu minuman soda adalah Rp8.000,00
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}