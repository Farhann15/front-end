export default function Beranda() {
    return (
        <div className="flex items-center justify-center mt-4 flex-col">
            <div className="w-auto">
                {/* <video src="/src/videos/cobain.mp4" className="w-[1000px] h-96" type="video"/> */}
                <video className="h-[400px] w-[700px] rounded-lg" controls>
                    <source src="https://www.youtube.com/watch?v=Y-H99HBL9zg" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="flex flex-row border-y-2 border-black w-full items-center justify-between mt-6 px-6 py-5 bg-white">
                <div className="w-40 h-40 text-center mb-8">
                <img className="items-center" src="/src/image/kd.png" alt="image description" />
                <button>
                    Kompetensi Dasar
                </button>
                </div>

                <div className="w-40 h-40 text-center mb-10">
                <img className="h-auto w-100 items-center" src="/src/image/indikator.png" alt="image description" />
                <button>
                    Indikator Pencapaian Pembelajaran
                </button>
                </div>

                <div className="w-40 h-40 text-center mb-8">
                <img className="h-auto w-100 items-center" src="/src/image/tujuan.png" alt="image description" />
                <button>
                    Tujuan Pembelajaran
                </button>
                </div>
            </div>

            <div className="text-center mt-10">
                <p>© 2023 Dikembangkan oleh Mohammad Farhan Sopyan</p>
            </div>
        </div>

    )
}