export default function Materi8() {
    return (
        <div>
            <div className="text-2xl font-semibold ml-3 mt-3">
                <p>Model Persamaan Linear Dua Variabel</p>
            </div>

            <div className="flex flex-col border-y-2 border-black w-full bg-white mt-3 p-1">
                <p className="ml-1 mt-2">Misal:</p>

                <div>
                    <p className="ml-3">Di wahana taman hiburan, misalkan Heru melakukan permainan A dengan 2 tiket sebanyak x kali, dan permainan B dengan 1 tiket sebanyak y kali. Nyatakan jumlah total tiket yang digunakan Heru dalam sebuah persamaan!</p>
                </div>

                <div>
                    <p className="ml-1">Penyelesaian:</p>
                </div>

                <div>
                    <div className="ml-1">Pada permisalan yang diberikan , jika total banyaknya tiket yang digunakan adalah 11, hubungan antara x dan y dapat dinyatakan dengan persamaan berikut.
                    </div>
                </div>

                <div>
                    <div className="ml-1">
                        2x + y = 11
                    </div>
                </div>

                <div>
                    <p className="ml-1 font-thin mt-3 mb-2">Catatan: huruf x dan y dapat diganti dengan berbagai nilai bilangan. Oleh karena itu, keduanya disebut sebagai variabel. </p>
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