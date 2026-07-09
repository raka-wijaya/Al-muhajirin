import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleDaftarSekarang = () => {
    navigate('/daftar-sekarang');
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 px-6 py-4 ${
        isScrolled || isOpen ? 'bg-white shadow-md py-4' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-mavenpro font-bold text-[#313273] flex items-center">
          Al-Muhajirin
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium text-[#230F0F]">
          <Link to="/" className="hover:text-[#313273] font-mavenpro">Beranda</Link>
          <Link to='/tentang-kami' className="hover:text-[#313273] font-mavenpro">Tentang Kami</Link>
          <Link to='/hubungi-kami' className="hover:text-[#313273] font-mavenpro">Kontak Kami</Link>

          {/* <div className="group relative cursor-pointer">
            <div className="flex items-center gap-1 hover:text-[#313273] font-mavenpro">
              Layanan
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-100 shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <a href="#" className="block px-4 py-2 hover:bg-gray-50 text-sm font-mavenpro">Program ngaji anak</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-50 text-sm font-mavenpro">Program ngaji dewasa</a>
            </div>
          </div> */}
        </div>

        <div className="hidden md:block">
          <button onClick={() => handleDaftarSekarang()} className="border-2 border-pink-500 text-pink-500 font-mavenpro font-bold px-6 py-2 rounded-xl transition-all hover:bg-pink-500 hover:text-white">
            Daftar Sekarang
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-indigo-900 focus:outline-none">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col gap-4 pb-4 font-medium text-gray-700">
          <Link to='/' className="hover:text-[#313273] px-2 font-mavenpro">Beranda</Link>
          <Link to='/tentang-kami' className="hover:text-[#313273] px-2 font-mavenpro">Tentang Kami</Link>
          <Link to='/hubungi-kami' className="hover:text-[#313273] px-2 font-mavenpro">Kontak Kami</Link>
          {/* <div className="px-2">
            <p className="text-sm text-gray-400 mb-2 font-mavenpro">Layanan:</p>
            <div className="flex flex-col gap-3 pl-4 border-l-2 border-gray-100">
              <Link to='#' className="text-sm hover:text-indigo-900 font-mavenpro">Program ngaji anak</Link>
              <Link to='#' className="text-sm hover:text-indigo-900 font-mavenpro">Program ngaji dewasa</Link>
            </div>
          </div> */}
          <button onClick={() => handleDaftarSekarang()} className="w-full border-2 border-pink-500 font-mavenpro text-pink-500 font-bold px-6 py-3 rounded-xl hover:bg-pink-500 hover:text-white transition-all">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
