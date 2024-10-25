import Navbar from '../../component/Navbar';
import Background from '../../image/newbackground.png'

export default function Kompetensi1 () {

    return(
        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-screen w-screen relative overflow-y-auto'>
            <Navbar />
        <div className="mt-3">
            <div className="text-2xl font-bold ml-3 pb-3">
            <p>KOMPETENSI DASAR</p>
            </div>

            <div className="flex flex-col border-y-2 border-black w-full bg-white">
                <p className="ml-3 mt-3">3.5 Menjelaskan sistem persamaan linear dua variabel dan penyelesaiannya yang dihubungkan dengan masalah kontekstual.</p>
                <p className="ml-3 mt-3 mb-3">4.5 Menyelesaikan masalah yang berkaitan dengan sistem persamaan linear dua variabel.</p>
            </div>
        </div>
        </div>     
    )
}