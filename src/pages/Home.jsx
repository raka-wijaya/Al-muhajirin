import Footer from '../components/Footer'
import RotatingText from '../components/RotatingText'
import Service from './Service'
import Testimoni from './Testimoni'

function Home() {
  return (
    <>
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 md:py-11 overflow-hidden">
      <div className="max-w-4xl w-full text-center z-10 flex flex-col gap-3">
        <div className="flex items-center justify-center gap-2">
          <span className="text-[#230F0F] font-semibold md:text-xl font-mavenpro">Belajar</span>
          <RotatingText
            texts={['Tartil', 'Al-quran', 'Iqro' ]}
            mainClassName="px-3 bg-white text-[#230F0F] font-mavenpro overflow-hidden py-1 justify-center rounded-lg font-bold shadow-sm"
            staggerFrom="center"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
            splitBy="characters"
            auto
            loop
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-mavenpro font-bold text-[#230F0F]">
          Bersama <span className="text-[#1B735A] font-mavenpro">Al-Muhajirin</span> Dengan Metode Tatap Muka
        </h1>

        <p className="text-[#FBBF24] font-mavenpro font-bold text-lg md:text-2xl drop-shadow-sm">
          Bacaan Tartil Mu Pintu Hidayah Mu.
        </p>

        <p className="text-[#230F0F] text-sm font-mavenpro md:text-base max-w-2xl mx-auto opacity-80">
          Belajar Al-Qur’an secara langsung, intensif, dan personal. Didampingi oleh pengajar bersanad atau setara bersanad yang siap membimbing secara privat atau di center kami, memberikan bimbingan makhraj dan tajwid secara presisi untuk semua jenjang usia.
        </p>
      </div>
    </section>
    <Service />
    <Testimoni />
    <Footer/>
    </>
  )
}

export default Home