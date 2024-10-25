import Navbar from '../component/Navbar';
import Background from '../image/newbackground.png'

export default function FileSoal() {

    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-screen w-screen relative overflow-y-auto'>
            <Navbar />
            <div className="px-20 mt-3">
                <div className="p-1 pl-2 pr-2 border-solid border-2 rounded-3xl bg-white border-black mt-3 h-[661px] w-[1060px]">
                    <div className="text-center text-2xl mb-3">
                        Bank soal
                    </div>

                    <div className="h-px w-auto my-1 bg-black border-1 dark:bg-black mt-0">
                    </div>

                    <div>
                        <p>
                            1. Tentukan himpunan penyelesaian dari SPLDV 2x - y = 2 dan x + 2y = 6 denga metode grafik!
                        </p>
                        <p className='ml-4'>
                            Jawaban: x = 2, y = 2
                        </p>
                    </div>
                </div>

                <div className='flex items-center justify-center pt-3'>
                    <button className='mt-2 mb-3 p-1 border-solid border-2 rounded-full bg-blue-400 pr-3 pl-3 border-black'>
                        Pilih soal
                    </button>
                </div>
            </div>
        </div>
    )
}