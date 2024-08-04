import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function InputMateri() {
    const [judulMateri, setjudulMateri] = useState('');
    const [isiMateri, setisiMateri] = useState('');

    return (
        <div className="px-40">
            <div className="p-1 pl-2 pr-2 border-solid border-2 rounded-3xl bg-white border-black mt-3 ">
                <div className="text-center text-2xl mb-3">
                    Formulir Input Materi
                </div>

                <div className="h-px w-auto my-1 bg-black border-1 dark:bg-black mt-0">
                </div>

                <div className="pl-2 pt-3 font-semibold">
                    <div>
                        Judul Materi
                    </div>
                </div>

                <div className='p-2'>
                    <ReactQuill className='bg-white w-full' theme="snow" value={judulMateri} onChange={setjudulMateri} />
                </div>

                <div className="pl-2 pt-3 font-semibold">
                    <div>
                       Isi Materi
                    </div>
                </div>

                <div className='p-2 pb-6'>
                    <ReactQuill className='bg-white w-full' theme="snow" value={isiMateri} onChange={setisiMateri} />
                </div>

            </div>

            <div className='flex flex-col items-center justify-center pt-3'>
                <button className='mt-2 mb-3 p-1 border-solid border rounded-full bg-blue-300 pr-3 pl-3 border-black'>
                Input Materi
                </button>
            </div>
        </div>

    )
}