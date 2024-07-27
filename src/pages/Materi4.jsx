export default function Materi4() {
    return (
        <div className="mt-3">
            <div className="text-2xl font-semibold ml-3">
                <p>Pengertian Persamaan Linear Dua Variabel</p>
            </div>

            <div className="flex flex-col border-y-2 border-black w-full bg-white mt-3">
                <p className="ml-3">Sebelum kita mempelajari Sistem Persamaan Linear Dua Variabel, kita harus lebih mengenal dulu apa itu Persamaan Linear Dua Variebal. Banyak sekali masalah yang berkaitan dengan persamaan linear dua variabel. Namun, masalah atau situasi bagaimana yang dapat dinyatakan dengan persamaan linear dua variabel? Bagaimana cara kita menuliskannya dengan persamaan? Untuk mengetahuinya, amati kegiatan berikut.</p>
                <p className="mt-3 ml-8 mb-3">1. Arthur, seorang mahasiswa tingkat tiga, menerima les privat dan memperoleh Rp80.000,00 per jam.</p>

                <img className="max-w-xs ml-10 mb-3 " src="/src/image/image4.PNG" alt="" />
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