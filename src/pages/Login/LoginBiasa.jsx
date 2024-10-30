import Navbar from '../../component/Navbar';
import Background from '../../image/newbackground.png'
import logobemaru from '../../image/BEMARU2.png'
import { Link } from 'react-router-dom';

export default function LoginBiasa() {
    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-screen w-screen relative overflow-y-auto'>


            <div className="flex flex-shrink-0 items-center mt-3">
                <div className='flex flex-row gap-2 pb-1 items-center text-sm border-b-2 border-black'>
                    <img
                        className="h-12 w-auto pl-2"
                        src={logobemaru}
                        alt="Belajar Matematika Seru"
                    />
                    <div className='flex flex-col items-start'>
                        <p className='font-bold'>BeMaRu</p>
                        <p>Belajar Matematika Seru!</p>
                    </div>
                </div>
            </div>

            <section className="">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full dark:bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-white dark:border-gray-700">

                        <div className="flex flex-row space-x-3">
                            <div className="ml-3  mt-7">
                                <div className="p-1 border-solid border-1 rounded-xl bg-white border-black">
                                    <p className='font-bold text-xl'>Masuk</p>
                                    <div className='mt-2'>
                                        <p>Dengan masuk untuk BeMaRu, Anda setuju dengan</p>
                                        <p>Ketentuan Layanan dan Kebijakan Privasi kami.</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="p-6 md:space-y-6 ">

                            <div className='font-semibold'>
                                Masuk menggunakan:
                            </div>
                            <div className='flex flex-row'>
                                <button
                                    type="button"
                                    data-twe-ripple-init
                                    data-twe-ripple-color="light"
                                    class="mb-2 inline-block rounded bg-[#1877f2] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                                    <span class="[&>svg]:h-4 [&>svg]:w-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 320 512">
                                            <path
                                                d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                        </svg>
                                    </span>
                                </button>

                                <div className='ml-3'>
                                    <button
                                        type="button"
                                        data-twe-ripple-init
                                        data-twe-ripple-color="light"
                                        class="mb-2 inline-block rounded bg-[#ea4335] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                                        <span class="[&>svg]:h-4 [&>svg]:w-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 488 512">
                                                <path
                                                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium dark:text-gray-900 text-black">Id pengguna</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nama@pengguna" required="" />
                                </div>
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Kata sandi</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label for="remember" className="text-gray-500 dark:text-black">Ingat saya</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-blue-500 hover:underline dark:text-primary-500">Lupa kata sandi?</a>
                                </div>
                                <Link to={"/beranda"} className=''>
                                    <button type="submit" className="mt-3 w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-normal rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-black">Sign in</button>
                                </Link>
                                <p className="text-sm font-light text-gray-500 dark:text-black">
                                    Belum mempunyai akun? <a href="#" className="font-medium text-blue-500 hover:underline dark:text-primary-500">Daftar</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}