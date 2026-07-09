import { useState } from "react";
import { MapPin, MessageSquare, Mail, Clock } from "lucide-react";
import { supabase } from "../services/supabaseClient";

function HubungiKami() {
  const [form, setForm] = useState({
    nama_lengkap: "",
    nomor_telepon: "",
    email: "",
    pesan: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const { error } = await supabase.from("pesan_kontak").insert([
      {
        nama_lengkap: form.nama_lengkap,
        nomor_telepon: form.nomor_telepon,
        email: form.email,
        pesan: form.pesan,
      },
    ]);

    setLoading(false);

    if (error) {
      console.error("Supabase error:", error);
      setStatus("error");
    } else {
      setStatus("success");
      setForm({ nama_lengkap: "", nomor_telepon: "", email: "", pesan: "" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 md:py-24 overflow-hidden bg-gray-50">
      <div className="w-full max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#230F0F]  font-mavenpro mb-2">
            Hubungi Kami
          </h1>
          <p className="text-gray-500 text-sm md:text-base font-mavenpro max-w-xl mx-auto">
            Ada pertanyaan atau ingin tahu lebih lanjut? Jangan ragu untuk
            menghubungi kami.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left — Info Cards */}
          <div className="flex flex-col gap-4 md:w-[42%]">
            {/* Alamat Kantor */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex items-start gap-4">
              <div className="bg-blue-50 rounded-xl p-3 flex-shrink-0">
                <MapPin className="text-[#1a7fa8] w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 font-mavenpro text-base">
                  Alamat Kantor
                </h3>
                <p className="text-gray-500 text-sm font-mavenpro mt-1 leading-relaxed">
                  Jl. Kebersihan No. 123, Jakarta Selatan, 12345
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex items-start gap-4">
              <div className="bg-blue-50 rounded-xl p-3 flex-shrink-0">
                <MessageSquare className="text-[#1a7fa8] w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 font-mavenpro text-base">
                  WhatsApp
                </h3>
                <p className="text-gray-500 text-sm font-mavenpro mt-1">
                  0812-3456-7890
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex items-start gap-4">
              <div className="bg-blue-50 rounded-xl p-3 flex-shrink-0">
                <Mail className="text-[#1a7fa8] w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 font-mavenpro text-base">
                  Email
                </h3>
                <p className="text-gray-500 text-sm font-mavenpro mt-1">
                  halo@cleanza.id
                </p>
              </div>
            </div>

            {/* Jam Operasional */}
            <div className="bg-blue-50 rounded-2xl border border-blue-100 p-5">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="text-[#1a7fa8] w-4 h-4" />
                <span className="text-[#1a7fa8] font-semibold text-sm font-mavenpro">
                  Jam Operasional
                </span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600 text-sm font-mavenpro">
                  Senin – Jumat
                </span>
                <span className="text-gray-800 font-bold text-sm font-mavenpro">
                  08:00 – 20:00
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm font-mavenpro">
                  Sabtu – Minggu
                </span>
                <span className="text-gray-800 font-bold text-sm font-mavenpro">
                  09:00 – 18:00
                </span>
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 flex-1">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 h-full">
              {/* Row 1 */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-gray-700 font-mavenpro text-sm font-medium mb-1">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="nama_lengkap"
                    value={form.nama_lengkap}
                    onChange={handleChange}
                    placeholder="Masukkan nama Anda"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 font-mavenpro focus:outline-none focus:ring-2 focus:ring-[#1a7fa8]/30 focus:border-[#1a7fa8] transition"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-gray-700 font-mavenpro text-sm font-medium mb-1">
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    name="nomor_telepon"
                    value={form.nomor_telepon}
                    onChange={handleChange}
                    placeholder="0812-xxxx-xxxx"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 font-mavenpro focus:outline-none focus:ring-2 focus:ring-[#1a7fa8]/30 focus:border-[#1a7fa8] transition"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-mavenpro text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="nama@email.com"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 font-mavenpro focus:outline-none focus:ring-2 focus:ring-[#1a7fa8]/30 focus:border-[#1a7fa8] transition"
                />
              </div>

              {/* Pesan */}
              <div className="flex-1">
                <label className="block text-gray-700 font-mavenpro text-sm font-medium mb-1">
                  Pesan
                </label>
                <textarea
                  name="pesan"
                  value={form.pesan}
                  onChange={handleChange}
                  placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
                  required
                  rows={5}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 font-mavenpro focus:outline-none focus:ring-2 focus:ring-[#1a7fa8]/30 focus:border-[#1a7fa8] transition resize-none"
                />
              </div>

              {/* Status Message */}
              {status === "success" && (
                <div className="text-green-600 text-sm font-mavenpro bg-green-50 border border-green-200 rounded-xl px-4 py-3">
                  ✅ Pesan berhasil dikirim! Kami akan segera menghubungi Anda.
                </div>
              )}
              {status === "error" && (
                <div className="text-red-600 text-sm font-mavenpro bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                  ❌ Gagal mengirim pesan. Pastikan tabel Supabase sudah dibuat dan coba lagi.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full border border-pink-500 text-pink-500 font-bold font-mavenpro text-base py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Mengirim..." : "Kirim Pesan"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HubungiKami;
