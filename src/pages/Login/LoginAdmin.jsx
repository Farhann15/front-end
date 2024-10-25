import Navbar from '../../component/Navbar';
import Background from '../../image/newbackground.png'

export default function LoginAdmin() {
    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-screen w-screen relative overflow-y-auto'>
            <Navbar />
            <section className="">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full dark:bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-white dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                                Masuk 
                            </h1>
                            <form class="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium dark:text-gray-900 text-black">Id pengguna</label>
                                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nama@pengguna" required="" />
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Kata sandi</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div class="ml-3 text-sm">
                                            <label for="remember" class="text-gray-500 dark:text-black">Ingat saya</label>
                                        </div>
                                    </div>
                                    <a href="#" class="text-sm font-medium text-blue-500 hover:underline dark:text-primary-500">Lupa kata sandi?</a>
                                </div>
                                <button type="submit" class="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-normal rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-black">Sign in</button>
                                <p class="text-sm font-light text-gray-500 dark:text-black">
                                    Belum mempunyai akun? <a href="#" class="font-medium text-blue-500 hover:underline dark:text-primary-500">Daftar</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}