import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, { useState } from 'react';
import Navbar from "../../component/Navbar";
import Background from '../../image/newbackground.png'
import panahbawah from '../../image/forum6.png'
import gambarpertanyaan from '../../image/forum7.png'

export default function ForumDiskusi3() {
    const [pertanyaan, setpertanyaan] = useState('');

    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-screen w-screen relative overflow-y-auto'>
            <Navbar />

            <div className="flex flex-row justify-center">
                <div className="mt-3">
                    <div className="">
                        <h1 className="text-xl">Ajukan pertanyaan</h1>
                    </div>

                    <div className="flex flex-row">
                        <div className="mt-3 rounded flex flex-row items-center justify-between border-black border bg-white h-[29px] w-[223px]">
                            <input className="border-y border-black rounded-l px-2 outline-none w-[223px] h-[29px]" type="text" placeholder="Tulis namamu disini" name="search" />
                        </div>

                        <div className="mt-3 ml-3 mr-3">
                            -
                        </div>

                        <div className="mt-3 rounded flex flex-row items-center justify-between border-black border bg-white h-[29px] w-[223px]">
                            <input className="border-y border-black rounded-l px-2 outline-none w-[223px] h-[29px]" type="text" placeholder="Tingkat pendidikan" name="search" />
                            <button className="pr-2" type="button">
                                <img className="w-[21px] h-[17" src={panahbawah} alt="" />
                            </button>
                        </div>
                    </div>

                    <div className='p-2'>
                        <ReactQuill className='bg-white w-full' theme="snow" value={pertanyaan} onChange={setpertanyaan} />
                    </div>

                    <div className="">
                        <button className="h-[29px] w-[223px] mt-3 text-base font-semibold border-solid border-2 rounded-xl bg-white border-black">
                            Tambahkan pertanyaan
                        </button>
                    </div>

                    <div className='mt-3'>
                        <p className='font-medium'>Catatan!</p>
                        <p className='font-medium'>Buatlah pertanyaan dengan bahasa dan kalimat yang mudah di mengerti</p>
                    </div>

                </div>

                <div className="ml-10 mt-5">
                    <div className="space-x-2 h-[333px] w-[299px]">
                        <img className="" src={gambarpertanyaan} alt="" />
                    </div>
                </div>
            </div>
        </div >
    )
}