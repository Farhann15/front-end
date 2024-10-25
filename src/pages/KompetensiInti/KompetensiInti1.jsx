import Navbar from '../../component/Navbar';
import Background from '../../image/newbackground.png'

export default function KompetensiInti1 () {
    return(
        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-screen w-screen relative overflow-y-auto'>
            <Navbar />
        <div className="mt-3">
            <div className="text-2xl font-bold ml-3">
            <p>KOMPETENSI INTI</p>
            </div>

            <div className="flex flex-col border-y-2 border-black w-full bg-white mt-3 pt-3">
                <p className="ml-3">1. Menghargai dan menghayati ajaran agama yang dianutnya.</p>
                <p className="mt-3 ml-3">2. Menghargai dan menghayati perilaku jujur, disiplin, tanggung jawab, peduli (toleransi, gotong royong), santun, percaya diri, dalam berinteraksi secara efektif dengan lingkungan sosial dan alam dalam jangkauan pergaulan dan keberadaannya.</p>
                <p className="mt-3 ml-3">3. Memahami dan menerapkan pengetahuan (faktual, konseptual, dan prosedural) berdasarkan rasa ingin tahunya tentang ilmu pengetahuan, teknologi, seni, budaya terkait fenomena dan kejadian tampak mata.</p>
                <p className="mt-3 ml-3 pb-3">4. Mengolah, menyaji dan menalar dalam ranah konkret (menggunakan, mengurai, merangkai, memodifikasi, dan membuat) dan ranah abstrak (menulis, membaca, menghitung, menggambar, dan mengarang) sesuai dengan yang dipelajari di sekolah dan sumber lain yang sama dalam sudut pandang/teori.</p>
            </div>
        </div>
        </div>      
    )
}