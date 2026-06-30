import { useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient";

function Metode() {
  const [dataMetode, setDataMetode] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMetode = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("pembelajaran_metode")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.log("Error fetching data:", error);
      } else {
        setDataMetode(data);
      }

      setLoading(false);
    };

    getMetode();
  }, []);

  return (
    <section className="px-6 py-12 md:py-11">
      <div className="max-w-6xl mx-auto flex flex-col gap-7">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#230F0F] font-mavenpro">
          Metode Pembelajaran
        </h2>

        {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 justify-items-center">
                {[...Array(1)].map((_, index) => (
                    <div
                        key={index}
                        className="card bg-base-100 w-full shadow-sm border border-gray-100"
                    >
                        <div className="card-body">
                        <div className="skeleton h-6 w-40"></div>
                        <div className="skeleton h-4 w-32"></div>
                        <div className="space-y-2 mt-2">
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-3/4"></div>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
            ) : (
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 justify-items-center">
            {dataMetode.map((item) => (
              <div
                key={item.id}
                className="card bg-base-100 w-full shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="card-body">
                  <h2 className="card-title text-[#230F0F] font-bold font-mavenpro">
                    {item.nama_metode}
                  </h2>

                  <p className="text-pink-500 font-semibold font-mavenpro">
                    {item.tagline}
                  </p>

                  <p className="text-[#230F0F] opacity-90 leading-relaxed font-mavenpro">
                    {item.deskripsi}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Metode;