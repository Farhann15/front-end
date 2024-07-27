export default function Materi9() {
    return(
        <div>
            <div className="text-2xl font-semibold ml-3 mt-3">
                <p>Model Persamaan Linear Dua Variabel</p>
            </div>

            <div className="flex flex-col border-y-2 border-black w-full bg-white mt-3 p-1">
                <p className="ml-1 mt-2">Misal:</p>

                <div>
                    <p className="ml-3">1. Di Jepang, Heru membeli 12 buah makanan yang terdiri dari kue dan puding dengan total harga 2.000 yen. Harga untuk 1 kue 200 yen dan 1 puding seharga 120 yen. Berapa banyak masing-masing kue dan puding yang dibeli?</p>
                </div>

                <div>
                    <p className="ml-1">Penyelesaian:</p>
                </div>

                <div>
                    <div className="ml-1">Jika kita menggunakan sistem persamaan, maka kita dapat menyelesaikannya seperti berikut.
                    </div>
                </div>

                <div>
                    <div className="ml-1">
                    Hubungan antara banyaknya makanan tersebut adalah sebagai berikut.
                    </div>
                </div>

                <div>
                    <p className="ml-1 mt-2">Hubungan antar banyak  </p>
                </div>

                <div>
                    <img className="max-w-s" src="/src/image/materi9.png" alt="" />
                </div>

                <div>
                    <div>
                    Dari pengaplikasian di atas, banyak kue ditambah banyak puding sama dengan 12
                    </div>
                </div>

                <div>
                    <p className="ml-1">Hubungan antar harga  </p>
                </div>

                <div>
                    <img className="max-w-s mb-3" src="/src/image/materi9(1).png" alt="" />
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