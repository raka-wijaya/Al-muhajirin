import { useEffect, useState } from "react"
import { supabase } from "../services/supabaseClient"
function Galeri() {
    const [dataGaleri, setDataGaleri] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getDataGaleri = async () => {
            setLoading(true);
            const { data, error} = await supabase
            .from('galeri_foto')
            .select('*')
            .order('created_at', {ascending: false});
            
            if(error) {
                console.log('Error fetching data:', error);
            } else {
                setDataGaleri(data);
            }

            setLoading(false);
        }
        getDataGaleri();
    }, []);
  return (
    <section className="flex flex-col items-center justify-center px-6 py-12 md:py-11">
        <div className="w-full max-w-6xl mx-auto flex flex-col gap-7">
            <h2 className="text-2xl md:text-3xl font-bold text-center font-mavenpro text-[#230F0F]">
                Foto Kegiatan
            </h2>
            {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="skeleton h-64 w-full"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dataGaleri.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <img
                src={item.url_foto}
                alt="Foto Kegiatan"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      )}
        </div>
    </section>
  )
}

export default Galeri