import Navbar from '../../component/Navbar';
import Background from '../../image/newbackground.png'
import gambar1 from '../../image/gambar4ke1.png'
import gambar2 from '../../image/gambar4ke2.png'
import gambar3 from '../../image/gambar4ke3.png'
import gambar4 from '../../image/gambar4ke4.png'
import gambar5 from '../../image/gambar4ke5.png'
import gambar6 from '../../image/gambar4ke6.png'
import gambar7 from '../../image/gambar4ke7.png'
import gambar8 from '../../image/gambar4ke8.png'
import gambar9 from '../../image/gambar4ke9.png'
import gambar10 from '../../image/gambar4ke10.png'
import gambar11 from '../../image/gambar4ke11.png'

export default function Materi4() {
    const angka = "{..., (0, 3), (1, 2), (2, 1), ...}"
    const angka1 = "{..., (-1, 7), (0, 6), (1, 5), (2, 4), (3, 3), (6, 0), (7, -1), (8, -2)  ...}"
    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-screen w-screen relative overflow-y-auto'>
            <Navbar />
            <div className="mt-3">
                <div className='flex flex-row space-x-3 justify-center'>
                    <div className="text-xl font-semibold ml-3 p-1 pl-3 pr-3 border-solid border-2 rounded-full bg-slate-300 border-black">
                        <div className='ml-3 mr-3'>Konsep Persamaan Linear Dua Variabel</div>
                    </div>
                </div>

                <div className="flex flex-col w-full mt-3 pt-3 ">

                    <div className='flex flex-row space-x-3'>
                        <div className="text-red-700 text-justify ml-3 font-semibold p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-slate-200 border-black">
                            <div className='ml-3 mr-3'>Pastikan sebelum mempelajari materi ini kalian sudah mempelajari konsep persamaan linear satu variabel di kelas VII dan sudah mempelajari operasi bentuk aljabar serta persamaan garis lurus. Materi tersebut merupakan konsep dasar yang akan digunakan untuk mempelajari sistem persamaan linear dua variabel. Selanjutnya mari kita simak materi berikut dengan seksama.
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-row space-x-3'>
                        <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-white border-black">
                            <div className="mt-3 ml-3 mb-3">
                                <div>Dalam kehidupan sehari-hari banyak hal yang berakitan dengan persamaan linear dua variabel. Namun, bagaimana situasi tersebut dapat dinyatakan dalam persamaan linear dua variabel? Bagaimana cara kita menuliskannya dengan persamaan? Untuk mengetahuinya, amati kegiatan berikut.
                                </div>

                                <div className="pt-0 ml-3 mb-3">
                                    1.	Aden merupakan mahasiswa yang baru saja lulus dan membuka bimbingan belajar dengan tarif Rp60.000,00 per jam.
                                </div>

                                <div className="pt-0 ml-7 mb-3">
                                    Berikut tabel pendapatan Aden
                                </div>

                                <div className='flex flex-row space-x-3 justify-center'>
                                    <div className="max-w-lg">
                                        <img className="h-auto max-w-full mb-3 rounded-lg" src={gambar1} alt="" />
                                    </div>
                                </div>


                                <div className="pt-0 ml-3 mb-3">
                                    2.	Berikut nilai dalam tabel yang digunakan untuk melengkapi suatu grafik.
                                </div>

                                <div className='flex flex-row space-x-3 justify-center'>
                                    <div className="max-w-lg">
                                        <img className="h-auto max-w-full mb-3 rounded-lg" src={gambar2} alt="" />
                                    </div>
                                </div>

                                <div className='ml-7 mb-3'>
                                    <p>Keterangan:</p>
                                    <p>x = durasi waktu tes</p>
                                    <p>y = pendapatan (dalam puluhan ribu)</p>
                                </div>

                                <div className="ml-7">
                                    <p className="">
                                        a.	Sumbu horizontal menunjukkan jumlah jam les privat. Variabel yang digunakan adalah x.
                                    </p>
                                    <p>
                                        b.	Sumbu vertikal menunjukkan pendapatan yang diterima. Variabel yang digunakan adalah y.
                                    </p>
                                    <p>
                                        c.	Terdapat lima pasangan berurutan, yakni (1, 6), (2, 12), (3, 18), (4, 24), dan (5, 30).
                                    </p>
                                    <p>
                                        d.	Garis pada grafik menyatakan hubungan antara jumlah jam dengan pendapatan dari bimbingan belajar yang diberikan Aden.
                                    </p>
                                    <p>
                                        e.	Sehingga bisa dilihat dari contoh diatas yaitu persamaan linear yang dipelajari di kelas VII hanya memiliki satu variabel. Sedangkan persamaan di atas memiliki dua variabel.
                                    </p>
                                    <p>
                                        f.	Bisa disimpulkan uang yang didapatkan Aden bergantung pada banyaknya jam yang diberikan dalam memberikan bimbingan belajar.
                                    </p>
                                    <p>
                                        g.	Namun, banyaknya jam yang Aden berikan untuk memberikan bimbingan belajar tidak bergantung pada banyaknya uang yang didapatkan.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-row space-x-3'>
                        <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-slate-200 border-black">
                            <div>
                                <p className='font-semibold'>Berikut beberapa contoh persamaan linear dua variabel</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row space-x-3'>
                        <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-white border-black">
                            <div className="ml-3">
                                <p>
                                    a. y = 4x
                                </p>
                                <p>
                                    b. y = 2x - 3
                                </p>
                                <p>
                                    c. a + 4b = 2
                                </p>
                                <p>
                                    d. 3m + 6n = 9
                                </p>
                                <p>
                                    e. 0,2 - 0,6n = 2,1
                                </p>
                                <p>
                                    f. 1/3p + 2/9q = 4/3
                                </p>
                                <p>
                                    g. y = x
                                </p>
                                <p>
                                    h. y = 1/2x + 7
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex flex-row space-x-3'>
                    <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-slate-200 border-black">
                        <div className="font-semibold">
                            Contoh 1
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-3'>
                    <div className="mt-1 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-white border-black">

                        <div className="ml-3">
                            Sekelompok siswa dan siswi SMP Bahagia merencanakan studi banding. Perwakilan siswa mendapatkan tawaran dari suatu agen bus bernama agen bus angkasa yang menawarkan detail penyewaan satu hari membutuhkan biaya sewa bus sebesar Rp1.500.000,00 dan untuk makan serta retribusi lainnya, tiap siswa dikenakan biaya sebesar Rp100.000,00. Untuk memudahkan menghitung biaya yang dikeluarkan oleh rombongan, ketua rombongan menulis persamaan berikut.
                        </div>

                        <div className='flex flex-row space-x-3 justify-center'>
                            <div className="max-w-lg mt-3">
                                <img className="h-auto max-w-full mb-3 rounded-lg" src={gambar3} alt="" />
                            </div>
                        </div>

                        <div className="ml-3">
                            <p>Variabel dari persamaan di atas dimisalkan dengan h yaitu sebagai total biaya yang dikeluarkan, dan s yaitu sebagai banyak siswa yang mengikuti studi lapangan. Sehingga persamaan menjadi:</p>
                        </div>

                        <div className='flex flex-row space-x-3 justify-center'>
                            <div className="max-w-lg mt-3">
                                <img className="h-auto max-w-full mb-3 rounded-lg" src={gambar4} alt="" />
                                <p className='text-center'>atau</p>
                                <img className="mt-3 h-auto max-w-full mb-3 rounded-lg" src={gambar5} alt="" />
                            </div>
                        </div>

                        <div className="ml-3 mt-3">
                            Persamaan h = 1.500.000 + 100.000s merupakan Persamaan Linear Dua Variabel. Persamaan ini terdapat dua variabel, yaitu h dan s yang keduanya memiliki pangkat satu.
                        </div>

                        <div className="ml-3 mt-3">
                            Perhatikan persamaan h = 1.500.000 + 100.000s. Untuk menentukan penyelesaiannya dapat diselesaikan dengan menyubstitusikan (mengganti) nilai s dengan sebarang bilangan. Ingat, bahwa s menunjukkan banyak siswa yang mengikuti studi banding.
                        </div>

                        <div className='ml-3 mt-3'>
                            Perhatikan langkah-langkah berikut untuk lebih jelasnya.
                        </div>

                        <div className="ml-3">
                            <p>
                                Misalkan s = 15, maka:
                            </p>
                            <p>
                                h = 1.500.000 + 150.000(15)
                            </p>
                            <p>
                                h = 1.500.000 + 1.500.000
                            </p>
                            <p>
                                h = 3.000.000
                            </p>
                            <p className='font-semibold'>
                                Jadi, salah satu penyelesaian dari persamaan h = 1.500.000 + 100.000s adalah (15, 3.000.000). </p>

                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-3'>
                    <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-slate-200 border-black">
                        <div className="mt-3 mb-3 font-semibold">
                            Untuk contoh di atas apakah hanya satu penyelesaian saja? Tidak. Karena contoh di atas merupakan salah satu dari variabel s yang selalu berubah dan merupakan variabel bebas. Sedangkan variabel h merupakan variabel terikat karena nilai h bergantung pada nilai s. Sehingga kesimpulannya harga yang dikeluarkan kelompok siswa, bergantung pada banyaknya siswa yang ikut dalam studi banding.
                        </div>
                    </div>
                </div>


                <div className='flex flex-row space-x-3'>
                    <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-slate-200 border-black">
                        <div className="font-semibold">
                            Contoh 2
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-2'>
                    <div className="mt-1 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-white border-black">

                        <div className="ml-3">
                            Persamaan h = 1.500.000 + 100.000s menyatakan h (dalam rupiah) biaya yang dikeluarkan untuk studi banding sebanyak s siswa. Berapa banyak siswa yang mengikuti studi lapangan jika biaya yang harus dikeluarkan adalah Rp3.700.000,00
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-3'>
                    <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-slate-200 border-black">
                        <div className="font-semibold">
                            Penyelesaian
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-2'>
                    <div className="mt-1 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-white border-black">
                        <div className="ml-3">
                            <p>Gunakan persamaan untuk menentukan nilai s dengan h = 3.700.000</p>
                            <p>h = 1.500.000 + 100.000s</p>
                            <p>3.700.000 = 1.500.000 + 100.000s</p>
                            <p>3.700.000 − 1.500.000 = 100.000s </p>
                            <p>2.200.000 = 100.000s </p>
                            <p>s = 22</p>
                        </div>

                        <div className='ml-3 font-semibold'>
                            Jadi, banyak siswa yang ikut dalam studi banding sebanyak 37 siswa
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-3'>
                    <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-slate-200 border-black">
                        <div className="font-semibold">
                            Contoh 3
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-2'>
                    <div className="mt-1 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-white border-black">
                        <div className='ml-3'>
                            <p>
                                Diberikan pasangan persamaan berikut, tentukan apakah pasangan berurutan tersebut merupakan salah satu penyelesaiannya.
                            </p>

                            <div className=''>
                                <p>a. y = 2x; (2,4)</p>
                                <p>b. y = 6x - 5; (2,6)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-3'>
                    <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-slate-200 border-black">
                        <div className="font-semibold">
                            Penyelesaian
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-2'>
                    <div className="mt-1 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-white border-black">
                        <div className='flex flex-row'>
                            <div>
                                <p>a. y = 2x; (2,4)</p>
                                <p className='ml-4'>4 = 2(2)</p>
                                <p className='ml-4'>4 = 4 (benar)</p>
                                <p className='ml-4 font-semibold'>Jadi, (2,4) adalah penyelesaian dari y = 2x</p>
                            </div>
                            <div>
                                <p>b. y = 2x; (2,4)</p>
                                <p className='ml-4'>4 = 2(2)</p>
                                <p className='ml-4'>4 = 4 (benar)</p>
                                <p className='ml-4 font-semibold'>Jadi, (2,4) adalah penyelesaian dari y = 2x</p>
                                <div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-3'>
                    <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-slate-200 border-black">
                        <div className="font-semibold">
                            Contoh 4
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-2'>
                    <div className="mt-1 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-white border-black">

                        <div className='ml-3'>
                            <p>
                                Untuk mencari nilai x dan y yang memenuhi persamaan x + y = 3, untuk x, y ∈ himpunan bilangan bulat, dapat ditulis dalam bentuk tabel seperti berikut.
                            </p>
                        </div>

                        <div className='flex flex-row space-x-3 justify-center'>
                            <div className="mt-3 mb-3">
                                <img src={gambar6} alt="" />
                            </div>
                        </div>
                        <div>
                            <p className='ml-3'>
                                Buatlah grafik dan himpunan penyelesaiannya.</p></div>
                    </div>
                </div>

                <div className='flex flex-row space-x-3'>
                    <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-slate-200 border-black">
                        <div className="font-semibold">
                            Penyelesaian
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-2'>
                    <div className="mt-1 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-white border-black">
                        <div>
                            <p>Sehingga didapatkan grafik dan himpunan penyelesaiannya</p></div>
                        <div className='flex flex-row space-x-3 justify-center'>
                            <img className='mt-3 mb-3' src={gambar7} alt="" />
                        </div>
                        <p className='font-semibold'>Jadi, himpunan penyelesaian persamaan x + y = 3 adalah {angka}</p>
                    </div>
                </div>

                <div className='flex flex-row space-x-3'>
                    <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-slate-200 border-black">
                        <div className="font-semibold">
                            <p>Salah satu persamaan linear dua variabel yang biasanya di temukan adalah rumus jarak. Rumus Jarak didapatkan dari hasil perkalian kecepatan dikali waktu. </p>
                            <p>Perhatikan contoh berikut. </p>
                        </div>
                    </div>
                </div>


                <div className='flex flex-row space-x-3'>
                    <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-slate-200 border-black">
                        <div className="font-semibold">
                            Contoh 5
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-2'>
                    <div className="mt-1 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-white border-black">
                        <div className="ml-3">
                            <p>
                                Rata-rata kecepatan sebuah motor adalah 32 km per jam. Buatlah persamaan, tabel, dan grafik yang menyatakan hubungan antara waktu dan jarak yang ditempuh motor tersebut.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-3'>
                    <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-slate-200 border-black">
                        <div className="font-semibold">
                            Penyelesaian
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-2'>
                    <div className="mt-1 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-white border-black">
                        <div className="ml-3">
                            <p>Untuk menyelesaikan masalah ini, kalian bisa menggunakan rumus s = 32t, s menyatakan jarak dan t menyatakan waktu.</p>
                            <p>Tabel yang dibuat dari masalah di atas sebagai berikut</p>
                        </div>

                        <div className='flex flex-row space-x-3 justify-center'>
                            <div className='ml-3 mt-3 mb-3'>
                                <img src={gambar8} alt="" />
                            </div>
                        </div>

                        <div className='flex flex-row space-x-3 justify-center'>
                            <div className='ml-3 mt-3 mb-3'>
                                <img src={gambar9} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-3'>
                    <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-slate-200 border-black">
                        <div className="font-semibold">
                            Contoh 6
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-2'>
                    <div className="mt-1 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-white border-black">

                        <div className='ml-3'>
                            Tentukan penyelesaian sebanyak mungkin dari persamaan berikut untuk                       x, y ∈ himpunan bilangan asli.
                        </div>

                        <div className='ml-3'>
                            x + y = 6
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-3'>
                    <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-slate-200 border-black">
                        <div className="font-semibold">
                            Penyelesaian
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-2'>
                    <div className="mt-1 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-white border-black">
                        <div className='ml-3'>
                            Untuk menentukan penyelesaian persamaan x + y = 6, kita perlu menentukan terlebih dahulu himpunan semesta dari variabel x dan y. Misalkan himpunan semesta variabel x dan y dalam persamaan adalah bilangan asli. penyelesaian dari persamaan x + y = 6 dapat ditentukan sebagai berikut:
                        </div>

                        <div className='flex flex-row space-x-3 justify-center'>
                            <div className='ml-3 mt-3'>
                                <img src={gambar10} alt="" />
                            </div>
                        </div>

                        <div className='ml-3 mt-3 font-semibold'>
                            <p>Jadi, penyelesaian dari persamaan linear dua variabel untuk x dan y adalah anggota himpunan bilangan asli terdapat tiga penyelesaian yaitu (1, 5), (2, 4), dan (3, 3).</p>
                            <p>(6, 0) bukanlah penyelesaian dari x + y = 6, untuk x dan y anggota himpunan bilangan asli, karena y = 0 bukan anggota bilangan asli</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-3'>
                    <div className="mt-5 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-slate-200 border-black">
                        <div className="font-semibold">
                            Namun, jika himpunan semesta dari x dan y menggunakan persamaan bilangan bulat. Maka, penyelesaian dari persamaan x + y = 6 dengan x dan y adalah anggota himpunan bilangan bulat dapat ditentukan sebagai berikut.
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-2'>
                    <div className="mt-1 text-justify ml-3 font-normal p-1 pl-3 pr-3 border-solid border-2 rounded-2xl bg-white border-black">
                        <div className='flex flex-row space-x-3 justify-center'>
                            <div className='ml-3 mt-3 mb-3'>
                                <img src={gambar11} alt="" />
                            </div>
                        </div>

                        <div className='ml-3 mb-3 font-semibold text-justify'>
                            <p>Jadi, penyelesaian dari persamaan linear dua variabel untuk x dan y dengan anggota himpunan bilangan bulat adalah </p>
                            <p>{angka1}</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex items-center justify-center flex-row">
                {/* <video src="/src/videos/cobain.mp4" className="w-[1000px] h-96" type="video"/> */}
                <video className="mt-5 mb-5 ml-2 h-[200px] w-[300px] rounded-lg" controls>
                    <source src="https://www.youtube.com/watch?v=Y-H99HBL9zg" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <body className="ml-3 font-semibold">
                    <p className="">Video Pembelajaran</p>
                    <p>Terkait Pengertian Persamaan Linear Dua Variabel</p>
                </body>
            </div>
        </div>

    )
}