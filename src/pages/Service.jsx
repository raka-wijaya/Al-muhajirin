import { Link } from 'react-router-dom'
function Service() {
  return (
    <section className="bg-white px-6 py-12 md:py-11">
      <div className="max-w-6xl mx-auto flex flex-col gap-7">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#230F0F] font-mavenpro">
          Mengaji Tatap Muka Al-Muhajirin
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">

          <div className="card bg-base-100 w-full shadow-sm border border-gray-100">
            <div className="card-body">
              <h2 className="card-title text-[#230F0F] font-mavenpro font-bold">
                Kelas Privat & Reguler
              </h2>
              <p className="text-[#230F0F] opacity-90 font-mavenpro">
                Belajar mengaji jadi lebih mudah dengan dua pilihan program yang fleksibel. Anda bisa memilih Kelas Privat untuk belajar secara intensif bersama guru yang datang langsung ke rumah Anda, atau Kelas Reguler untuk mengikuti jadwal belajar kelompok di TPQ dengan materi yang terstruktur.
              </p>
              <div className="card-actions justify-end">
                <Link to='/detail-kelas' className="btn border-2 font-mavenpro border-pink-500 text-pink-500 rounded-xl hover:bg-pink-500 hover:text-white bg-transparent">
                  Detail Kelas
                </Link>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-full shadow-sm border border-gray-100">
            <div className="card-body">
              <h2 className="card-title text-[#230F0F] font-bold font-mavenpro">
                Guru Profesional & Berpengalaman
              </h2>
              <p className="text-[#230F0F] leading-relaxed opacity-90 font-mavenpro">
                Anda akan dibimbing langsung oleh pengajar Al-Qur'an yang bersertifikat dan merupakan lulusan dari pesantren terkemuka. Dengan metode tatap muka, pengajar dapat menyimak makhraj dan tajwid Anda secara lebih presisi, memberikan koreksi instan, serta bimbingan yang lebih mendalam dan personal.
              </p>
              <div className="card-actions justify-end">
                <Link to='/profile-guru' className="btn border-2 font-mavenpro border-pink-500 text-pink-500 rounded-xl hover:bg-pink-500 hover:text-white bg-transparent">
                  Profil Guru
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Service;