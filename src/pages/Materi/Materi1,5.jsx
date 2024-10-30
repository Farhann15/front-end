import Navbar from '../../component/Navbar';
import Background from '../../image/newbackground.png'
import { Link } from 'react-router-dom';

export default function Materi11() {
  return (
    <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-screen w-screen relative overflow-y-auto'>
      <Navbar />
      <div className="flex flex-row space-x-3">
        <Link to={"/materi1"} className="ml-7 mt-7">
          <button className="p-1 pl-3 pr-3 border-solid border-2 rounded-full bg-white border-black">
            KELAS 8
          </button>
        </Link>
      </div>
    </div>
  )
}