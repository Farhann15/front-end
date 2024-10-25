import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Navbar from '../../component/Navbar';
import Background from '../../image/newbackground.png'

export default function InputPG() {
    const [pertanyaan, setpertanyaan] = useState('');
    const [jawaban1, setjawaban1] = useState('');
    const [jawaban2, setjawaban2] = useState('');
    const [jawaban3, setjawaban3] = useState('');
    const [jawaban4, setjawaban4] = useState('');

    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-screen w-screen relative overflow-y-auto'>
            <Navbar />
            <div className="px-40">
                <div className="p-1 pl-2 pr-2 border-solid border-2 rounded-3xl bg-white border-black mt-3 ">
                    <div className="text-center text-2xl mb-3">
                        Formulir Input Soal Pilihan Ganda
                    </div>

                    <div className="h-px w-auto my-1 bg-black border-1 dark:bg-black mt-0">
                    </div>

                    <div>
                        <button className="mt-2 mb-3 p-1 border-solid border rounded-full bg-blue-300 pr-3 pl-3 border-black">
                            Pilih Materi
                        </button>
                    </div>

                    <div className="pl-2 font-semibold">
                        <div>
                            Pertanyaan
                        </div>
                    </div>

                    <div className='p-2'>
                        <ReactQuill className='bg-white w-full' theme="snow" value={pertanyaan} onChange={setpertanyaan} />
                    </div>

                    <div className="pl-2 pt-3 font-semibold">
                        <div>
                            Jawaban 1
                        </div>
                    </div>

                    <div className='p-2'>
                        <ReactQuill className='bg-white w-full' theme="snow" value={jawaban1} onChange={setjawaban1} />
                    </div>

                    <div className="pl-2 pt-3 font-semibold">
                        <div>
                            Jawaban 2
                        </div>
                    </div>

                    <div className='p-2'>
                        <ReactQuill className='bg-white w-full' theme="snow" value={jawaban2} onChange={setjawaban2} />
                    </div>

                    <div className="pl-2 pt-3 font-semibold">
                        <div>
                            Jawaban 3
                        </div>
                    </div>

                    <div className='p-2'>
                        <ReactQuill className='bg-white w-full' theme="snow" value={jawaban3} onChange={setjawaban3} />
                    </div>

                    <div className="pl-2 pt-3 font-semibold">
                        <div>
                            Jawaban 4
                        </div>
                    </div>

                    <div className='p-2 pb-6'>
                        <ReactQuill className='bg-white w-full' theme="snow" value={jawaban4} onChange={setjawaban4} />
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center pt-3'>
                    <button className='mt-2 mb-3 p-1 border-solid border rounded-full bg-blue-300 pr-3 pl-3 border-black'>
                        Input Soal Latihan
                    </button>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <button className='mt-2 mb-3 p-1 border-solid border rounded-full bg-blue-300 pr-3 pl-3 border-black'>
                        Lihat Bank Soal Latihan
                    </button>
                </div>

            </div>
        </div>
    )
}