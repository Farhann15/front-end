import { Link } from 'react-router-dom';
import Navbar from '../../component/Navbar';
import Background from '../../image/newbackground.png'
import kd from '../../image/kd.png'
import ipk from '../../image/indikator.png'
import tujuan from '../../image/tujuan.png'

export default function Beranda() {
    
    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-screen w-screen relative overflow-y-auto'>
            <Navbar />
            <div className="flex items-center justify-center mt-4 flex-col">
                <div className="w-auto">
                    {/* <video src="/src/videos/cobain.mp4" className="w-[1000px] h-96" type="video"/> */}
                    <video className="h-[400px] w-[700px] rounded-lg" controls>
                        <source src="https://www.youtube.com/watch?v=Y-H99HBL9zg" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="flex flex-row border-y-2 border-black w-full items-center justify-between mt-6 px-6 py-5 bg-white">
                    <Link to={"/pages/kompetensidasar/kd1,5"} className="w-40 h-40 text-center mb-8">
                        <img className="items-center ml-3" src={kd} alt="image description" />
                        <button className="pt-1">
                            Kompetensi Dasar
                        </button>
                    </Link>

                    <Link to={"/pages/indikatorpencapaiankompetensi/ipk1,5"} className="w-40 h-40 text-center mb-10">
                        <img className="h-auto w-100 items-center" src={ipk} alt="image description" />
                        <button className="pt-1">
                            Indikator Pencapaian Kompetensi
                        </button>
                    </Link>

                    <Link to={"/pages/kompetensiinti/ki1,5"} className="w-40 h-40 text-center mb-8">
                        <img className="h-auto w-100 items-center mr-3" src={tujuan} alt="image description" />
                        <button className="pt-1">
                            Kompetensi Inti
                        </button>
                    </Link>
                </div>

                <div className="text-center mt-10">
                    <p>© 2023 Dikembangkan oleh Mohammad Farhan Sopyan</p>
                </div>
            </div>
            </div>
            )
}