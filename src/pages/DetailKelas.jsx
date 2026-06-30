import { useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient";
import Footer from "../components/Footer";

function DetailKelas() {
  const [dataKelas, setDataKelas] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const getKelas = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('jadwal_mengajar')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (error) {
        console.log('Error fetching data:', error);
      } else {
        setDataKelas(data);
      }
      setLoading(false);
    };
    getKelas();
  }, []);

  return (
    <>
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 md:py-24 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-7">
        <h2 className="text-2xl md:text-3xl font-bold text-center font-mavenpro text-[#230F0F]">
          Jadwal Kelas
        </h2>
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              >
                <div className="flex justify-between items-center border-b pb-2 mb-4">
                  <div className="skeleton h-4 w-20"></div>
                  <div className="skeleton h-4 w-20"></div>
                </div>

                <div className="space-y-3">
                  <div className="skeleton h-4 w-32"></div>
                  <div className="skeleton h-4 w-32"></div>
                </div>
              </div>
            ))}
          </div>
        ) : dataKelas.length === 0 ? (
          <div className="text-center text-gray-500">
            Tidak ada agenda atau jadwal mengajar ditemukan.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {dataKelas.map((kelas) => (
              <div 
                key={kelas.id} 
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow flex flex-col gap-4 duration-200"
              >
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-semibold text-[#DC4298] font-Nunito text-sm">
                    {kelas.hari || "Hari tidak diatur"}
                  </span>
                  <span className="text-sm text-[#4D4D4D] font-medium">
                    {kelas.waktu || kelas.jam || "Waktu tidak diatur"}
                  </span>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#777795] uppercase tracking-wider mb-1">
                    Agenda / Materi
                  </h4>
                  <p className="text-[#0A0A0A] font-medium leading-relaxed">
                    {kelas.agenda || "Tidak ada agenda"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
    <Footer/>
    </>
  );
}

export default DetailKelas;