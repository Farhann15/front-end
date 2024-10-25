import Navbar from '../../component/Navbar';
import Background from '../../image/newbackground.png'

export default function Indikator1 () {
    
    return(
        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-screen w-screen relative overflow-y-auto'>
            <Navbar />
        <div className="mt-3">
            <div className="text-2xl font-bold ml-3">
            <p>INDIKATOR PENCAPAIAN KOMPETENSI</p>
            </div>

            <div className="flex flex-col border-y-2 border-black w-full bg-white mt-3 pt-3">
                <p className="ml-3">1. Siswa Mampu Mengidentifikasi persamaan linear dua variabel.  </p>
                <p className="mt-3 ml-3">2. Siswa Mampu Membuat persamaan linear dua variabel sebagai model matematika dari situasi yang diberikan.  </p>
                <p className="mt-3 ml-3">3. Siswa Mampu Mengidentifikasi selesaian dari persamaan linear dua variabel.  </p>
                <p className="mt-3 ml-3">4. Siswa Mampu Membuat sistem persamaan linear dua variabel sebagai model matematika dari situasi yang diberikan.</p>
                <p className="mt-3 ml-3">5.Siswa Mampu Membuat model matematika dan menentukan selesaian sistem persamaan linear dua variabel dengan menggambar grafik dua persamaan serta menafsirkan grafik yang terbentuk. </p>
                <p className="mt-3 ml-3">6. Siswa Mampu Membuat model matematika dan menentukan selesaian sistem persamaan linear dua variabel dengan metode eliminasi dan substitusi. </p>
                <p className="mt-3 ml-3 mb-3">7. Siswa Mampu Mengidentifikasi sistem persamaan linear dua variabel khusus dan selesaiannya. </p>
            </div>
        </div>
        </div>
    )
}