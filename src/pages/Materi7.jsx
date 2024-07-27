export default function Materi7() {
    return (
        <div>
            <div className="text-2xl font-semibold ml-3 mt-3">
                <p>Contoh Persamaan Linear Dua Variabel</p>
            </div>

            <div className="flex flex-col border-y-2 border-black w-full bg-white mt-3">
                <p className="ml-1">Contoh:</p>

                <div>
                    <p className="ml-1">Pak Mursalin memulai bisnis baru dengan menyewakan kamar. Selain menyewakan kamar, beliau juga menyediakan makanan bagi setiap pengunjung. Untuk itu, Pak Mursalin menata ulang setiap kamar rumahnya dengan biaya yang dikeluarkannya sebesar Rp5.000.000,00. Biaya untuk menyiapkan makanan sebesar Rp100.000,00 per malam. Pak Mursalin menyewakan Rp600.000,00 per malam setiap kamarnya sudah termasuk fasilitas makan. </p>
                </div>

                <div>
                    <p className="ml-3">a. Tulis persamaan yang menunjukkan biaya yang dikeluarkan. </p>
                </div>

                <div>
                    <div className="ml-3">Besar Pengeluaran (C) = Rp100.000 per malam x Lama menginap (x) + Rp5.000.000</div>
                </div>

                <div>
                    <p className="ml-3">b. Tulis persamaan yang menunjukkan pendapatan. </p>
                </div>

                <div>
                    <div className="ml-3">Besar Pendapatan (p) = Rp600.000 per malam x Lama menginap (x) </div>
                </div>

                <div>
                    <div className="ml-1 mt-2">Perhatikan bahwa pada situasi yang dialami oleh Pak Mursalin terdapat dua persamaan. Kumpulan dua (atau lebih) persamaan linear dua variabel disebut Sistem Persamaan Linear Dua Variabel (SPLDV). Sehingga, dua persamaan yang dimaksud adalah </div>
                </div>

                <div>
                    <p className="ml-1 mt-2">C = 100.000x + 5.000.000 (untuk pengeluaran)</p>
                </div>

                <div>
                    <p className="ml-1 ">P = 600.000x (untuk pendapatan yang diperoleh)</p>
                </div>

                <div>
                    <p className="ml-3 mt-2">c. Gunakan kedua persamaan untuk menentukan berapa malam Pak Mursalin menyewakan kamar sehingga uang dari penyewaan dapat menutupi biaya pengeluaran. Hal ini dinamakan break-even point (Break event point adalah suatu keadaan di mana dalam suatu operasi perusahaan tidak mendapat untung maupun rugi/impas)(pendapatan = total biaya pengeluaran). Salin dan lengkapi tabel berikut.</p>
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
                    <p>Terkait Pengertian Sistem Persamaan Linear Dua Variabel</p>
                </body>
            </div>
            </div>
    )
}