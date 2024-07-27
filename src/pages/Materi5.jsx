export default function Materi5() {
    return (
        <div>
            <div className="text-2xl font-semibold ml-3 mt-3">
                <p>Contoh Persamaan Linear Dua Variabel</p>
            </div>

            <div className="flex flex-col border-y-2 border-black w-full bg-white mt-3">
                <p className="ml-2">Contoh:</p>

                <div>
                    <p className="ml-5">1. Persamaan h = 2.000.000 + 150.000s menyatakan h (dalam rupiah) biaya yang dikeluarkan untuk studi lapangan sebanyak s siswa. Berapakah banyak siswa yang mengikuti studi lapangan jika biaya yang harus dikeluarkan adalah Rp7.700.000,00? </p>
                </div>

                <div>
                    <p className="ml-2">Penyelesaian: </p>
                </div>

                <div>
                    <p className="ml-2">Gunakan persamaan untuk menentukan nilai s dengan h = 7.700.000</p>
                </div>

                <div>
                    <p className="ml-2">h = 2.000.000 + 150.000s </p>
                </div>

                <div>
                    <p className="ml-2">7.700.000 = 2.000.000 + 150.000s</p>
                </div>

                <div>
                    <p className="ml-2">7.700.000 - 2.000.000 = 150.000s </p>
                </div>

                <div>
                    <p className="ml-2">5.700.000 = 150.000s</p>
                </div>

                <div>
                    <img className="w-28 ml-1" src="/src/image/materi5.png" alt="" />
                </div>

                <div>
                    <p className="ml-2 mt-3">Jadi, banyak siswa yang ikut dalam studi wisata adalah 38 siswa.</p>
                </div>

                <div>
                    <p className="ml-2">Kalian bisa menggunakan tabel dan grafik untuk menyajikan persamaan linear dua variabel.</p>
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
                    <p>Terkait Contoh Persamaan Linear Dua Variabel</p>
                </body>
        </div>
        </div>
    )
}