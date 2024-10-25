import Navbar from "../../component/Navbar";
import Background from '../../image/newbackground.png'

export default function Kuis3() {
    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-screen w-screen relative overflow-y-auto'>
            <Navbar />
            <div>
                <div className="px-40">
                    <div className="border-solid border-2 rounded-3xl bg-white border-black mt-3 h-[300px]">
                        <div className="text-center">Nomor soal</div>
                        <div className="flex items-center justify-center gap-10 h-10 w-full border-black border-y-2">
                            <div className="text-center h-7 w-12 rounded-xl border-2 border-black">1</div>
                            <div className="text-center h-7 w-12 rounded-xl border-2 border-black">2</div>
                            <div className="text-center h-7 w-12 rounded-xl border-2 border-black">3</div>
                            <div className="text-center h-7 w-12 rounded-xl border-2 border-black">4</div>
                            <div className="text-center h-7 w-12 rounded-xl border-2 border-black">5</div>
                            <div className="text-center h-7 w-12 rounded-xl border-2 border-black">6</div>
                            <div className="text-center h-7 w-12 rounded-xl border-2 border-black">7</div>
                            <div className="text-center h-7 w-12 rounded-xl border-2 border-black">8</div>
                            <div className="text-center h-7 w-12 rounded-xl border-2 border-black">9</div>
                            <div className="text-center h-7 w-12 rounded-xl border-2 border-black">10</div>
                        </div>

                        <div className="text-center p-2 text-xl">
                            Soal 1
                        </div>

                        <div className=''>
                            <div className="mt-5">
                                <div className="text-center text-lg">
                                    Penyelesaian dari sistem persamaan 3x + 2y - 4 = 0 dan x - 3y - 5 = 0 adalah ...
                                </div>

                                <div className="w-full flex items-center justify-center text-lg">
                                    <div className="">
                                        <div className="ml-4">
                                            <input type="radio" id="a" name="pilih" value="(-2, 1)" />
                                            <label className="ml-2" for="(-2, 1)">(-2, 1)</label>
                                            <input className="ml-64" type="radio" id="c" name="pilih" value="(2, 1)" />
                                            <label className="ml-2" for="(2, 1)">(2, 1)</label>
                                        </div>

                                        <div className="ml-4">
                                            <input type="radio" id="b" name="pilih" value="(2, -1)" />
                                            <label className="ml-2" for="(2, -1)">(2, -1)</label>
                                            <input className="ml-64" type="radio" id="d" name="pilih" value="(-2, -1)" />
                                            <label className="ml-2" for="(-2, -1)">(-2, -1)</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex items-center justify-center p-3">
                    <div className="text-center text-[50px] h-[91px] w-[402px] border-solid border-2 rounded-[15px] bg-white border-black">
                        01:00:00
                    </div>
                </div>

            </div>
        </div>
    )
}
