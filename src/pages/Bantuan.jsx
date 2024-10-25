import Navbar from "../component/Navbar";
import Background from '../image/newbackground.png'

export default function Bantuan() {
    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-screen w-screen relative overflow-y-auto'>
            <Navbar />
            <div className=' pt-3 flex flex-row space-x-3'>
                <div className="text-l font-semibold ml-3 p-1 pl-3 pr-3 border-solid border-2 rounded-3xl bg-white border-black">
                    <div className='ml-3 mr-3'>
                        <p>Hubungi kami:</p>
                        <p>E-mail    : farhansofyan0415@gmail.com</p>
                        <p>Instagram : @_farhansfyn</p>
                        <p>Facebook : Farhan</p>
                        </div>
                </div>
            </div>

        </div>
    )
}