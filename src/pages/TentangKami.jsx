import Metode from "../components/Metode"
import Galeri from "../components/Galeri"
import Footer from "../components/Footer";

function TentangKami() {
  return (
    <>
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 md:py-11">
      <div className="max-w-6xl mx-auto flex flex-col gap-7">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#230F0F] font-mavenpro">Selamat datang di TPQ Al Muhajirin</h2>
        <p className="text-[#230F0F] text-sm font-mavenpro md:text-base max-w-2xl text-center opacity-80">lembaga pendidikan Al-Qur'an yang berkomitmen penuh dalam mencetak generasi dan masyarakat yang fasih, bertajwid, dan cinta Al-Qur'an di wilayah Sidoarjo.</p>
      </div>
    </section>
    <Metode />
    <Galeri />
    <Footer/>
    </>
  )
}

export default TentangKami;