import { useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Testimoni = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("testimoni_tpq")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setTestimonials(data);
      }

      setLoading(false);
    };

    fetchTestimonials();
  }, []);

  const nextSlide = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(testimonials.length - 1);
    }
  };

  return (
    <>
    <section className="px-6 py-12 md:py-11">
      <div className="max-w-6xl mx-auto flex flex-col gap-7">

        <div className="flex flex-col md:flex-row justify-between gap-7">
          <h2 className="text-2xl md:text-3xl text-center font-bold text-[#230F0F] font-mavenpro">
            Apa Kata Mereka?
          </h2>

          <div className="hidden sm:flex gap-3">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full border border-gray-200 bg-white shadow-sm hover:bg-gray-100 transition-colors text-gray-700"
            >
              <ArrowLeft size={20} />
            </button>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full border border-gray-200 bg-white shadow-sm hover:bg-gray-100 transition-colors text-gray-700"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          {loading ? (
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md border border-gray-100">
              <div className="flex flex-col gap-6">
                <div className="skeleton h-6 w-24"></div>

                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-11/12"></div>
                <div className="skeleton h-4 w-10/12"></div>

                <div className="border-t pt-4">
                  <div className="skeleton h-5 w-32 mb-2"></div>
                  <div className="skeleton h-4 w-24"></div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  className="w-full shrink-0 px-1 z-10"
                >
                  <div className="bg-white p-8 md:p-10 rounded-2xl font-mavenpro shadow-md border border-gray-100 flex flex-col gap-6 min-h-[260px]">

                    <div className="flex text-emerald-600 text-xl">
                      {[...Array(item.rating || 5)].map((_, i) => (
                        <span key={i} className="mr-0.5">
                          ★
                        </span>
                      ))}
                    </div>

                    <p className="text-gray-600 text-lg leading-relaxed">
                      "{item.isi_testimoni}"
                    </p>

                    <div className="border-t border-gray-100 pt-4">
                      <h4 className="font-bold text-gray-900 text-base">
                        {item.nama}
                      </h4>

                      <p className="text-sm text-gray-500">
                        {item.pekerjaan}
                      </p>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {!loading && testimonials.length > 0 && (
          <div className="flex items-center justify-between sm:justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="sm:hidden p-3 rounded-full border border-gray-200 bg-white"
            >
              <ArrowLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "w-6 bg-emerald-600"
                      : "w-2.5 bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="sm:hidden p-3 rounded-full border border-gray-200 bg-white"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
    </>
  );
};

export default Testimoni;