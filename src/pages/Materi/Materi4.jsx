export default function Materi4() {
    return (
        <div className="mt-3">
            <div className="text-2xl font-semibold ml-3">
                <p>Konsep Persamaan Linear Dua Variabel</p>
            </div>

            <div className="flex flex-col border-y-2 border-black w-full bg-white mt-3 pt-3 ">
                <div className="ml-3 font-bold">
                    Pastikan sebelum mempelajari materi ini kalian sudah mempelajari konsep persamaan linear dengan satu variabel di kelas VII dan sudah mempelajari operasi bentuk aljabar serta persamaan garis lurus di semester ini. Materi tersebut merupakan konsep dasar yang akan digunakan untuk mempelajari sistem persamaan linear dua variabel.
                </div>

                <div className="mt-3 ml-3 mb-3">
                    Dalam kehidupan sehari-hari banyak hal yang berakitan dengan persamaan linear dua variabel. Namun, bagaimana situasi tersebut dapat dinyatakan dengan persamaan linear dua variabel? Bagaimana cara kita menuliskannya dengan persamaan? Untuk mengetahuinya, amati kegiatan berikut.
                </div>

                <div className="pt-0 ml-3 mb-3">
                    1.	Aden merupakan mahasiswa yang baru saja lulus dan membuka bimbingan belajar dengan tarif Rp60.000,00 per jam.
                </div>

                <div className="pt-0 ml-7 mb-3">
                    Berikut tabel pendapatan Aden
                </div>

                <div className="max-w-lg">
                    <img className="h-auto max-w-full ml-10 mb-3 rounded-lg" src="/src/image/image1(materi4).PNG" alt="" />
                </div>

                <div className="pt-0 ml-3 mb-3">
                    2.	Berikut nilai dalam tabel yang digunakan untuk melengkapi suatu grafik.
                </div>

                <div className="max-w-lg">
                    <img className="h-auto max-w-full ml-10 mb-3 rounded-lg" src="/src/image/image1,5(materi4).PNG" alt="" />
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

                <div className="pt-3 ml-3">
                    Contoh 1:
                </div>

                <div className="ml-3">
                    Sekelompok siswa dan siswi SMP Adijaya merencanakan studi banding. Perwakilan siswa mengamati brosur yang ditawarkan oleh sebuah agen bus yang akan ia gunakan. Agen Bus tersebut bernama Agen Bus Meteor yang siap melayani keberangkatannya dan disitu tertulis satu hari membutuhkan biaya sewa bus sebesar Rp2.000.000,00 dan untuk makan serta retribusi lainnya, tiap siswa dikenakan biaya sebesar Rp150.000,00. Untuk memudahkan menghitung biaya yang dikeluarkan oleh rombongan, ketua rombongan menulis persamaan seperti berikut.
                </div>

                <div className="max-w-lg mt-3">
                    <img className="h-auto max-w-full ml-10 mb-3 rounded-lg" src="/src/image/image2(materi4).PNG" alt="" />
                </div>

                <div className="ml-3">
                    Variabel dari persamaan dimisalkan h, yakni total biaya yang dikeluarkan, dan s, yakni banyak siswa yang mengikuti studi banding. Sehingga, persamaannya menjadi h = 2.000.000 + 150.000 × s  atau h = 2.000.000 + 150.000s.
                </div>

                <div className="ml-3">
                    Persamaan h = 2.000.000 + 150.000s merupakan persamaan linear dua variabel. Persamaan ini terdapat dua variabel, yakni h dan s yang keduanya berpangkat satu.
                </div>

                <div className="ml-3 mt-3">
                    Berikut beberapa contoh persamaan linear dua variabel.
                </div>

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

                <div className="mt-3 ml-3">
                    Perhatikan persamaan h = 2.000.000 + 150.000s. Bagaimana cara kita menentukan penyelesaiannya? Kita tahu bahwa persamaan linear satu variabel memiliki satu penyelesaian. Lalu, berapa penyelesaian dari persamaan linear dua variabel? Penyelesaian persamaan linear dua variabel adalah pasangan berurutan yang membuat persamaan menjadi benar.
                </div>

                <div className="ml-3">
                    Penyelesaian dari persamaan h = 2.000.000 + 150.000s dapat ditentukan dengan menyubstitusikan (mengganti) nilai s dengan sebarang bilangan. Ingat, bahwa s menunjukkan banyak siswa yang mengikuti studi banding. Perhatikan langkah-langkah berikut.
                </div>

                <div className="ml-3">
                    <p>
                        Misalkan s = 20, maka:
                    </p>
                    <p>
                        h = 2.000.000 + 150.000(20)
                    </p>
                    <p>
                        h = 2.000.000 + 3.000.000
                    </p>
                    <p>
                        h = 2.000.000 + 3.000.000 = 5.000.000
                    </p>
                    <p>
                        Jadi, penyelesaian dari persamaan h = 2.000.000 + 150.000s adalah (20, 5.000.000).
                    </p>
                    <p className="mt-3">
                        Perhatikan bahwa untuk s = 20 dan h = 5.000.000 membuat persamaan menjadi pernyataan yang bernilai benar. Apakah hanya satu penyelesaian saja? Tentunya tidak. Karena variabel s selalu berubah dan merupakan variabel bebas. Sedangkan variabel h adalah variabel terikat karena nilai h bergantung pada nilai s. Artinya, harga yang dikeluarkan kelompok siswa, bergantung pada banyaknya siswa yang ikut dalam studi banding.
                    </p>
                </div>

                <div className="ml-3 mt-3">
                    Contoh 2:
                </div>

                <div className="ml-3">
                    Tentukan apakah pasangan berurutan berikut adalah penyelesaian dari persamaan yang diberikan.
                </div>

                <div className="flex flex-row">
                    <div className="ml-3">
                        <p>
                            a. y = 2x; (3,6)
                        </p>
                        <p className="ml-4">
                            6 = 2(3)
                        </p>
                        <p className="ml-4">
                            6 = 6 (benar)
                        </p>
                        <p className="ml-4">
                        Jadi, (3, 6) adalah penyelesaian dari y = 2x.
                        </p>
                    </div>
                    <div className="ml-3">
                        <p>
                            b. y = 4x - 3; (4,12)
                        </p>
                        <p className="ml-3">
                            12 = 4(4) - 3
                        </p>
                        <p className="ml-3">
                            12 ≠ 13 (salah)
                        </p>
                        <p className="ml-3">
                        Jadi, (4, 12) adalah bukan penyelesaian dari y = 2x.
                        </p>
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

            <div>
                <button>Mulai Kuis</button>
            </div>
        </div>

    )
}