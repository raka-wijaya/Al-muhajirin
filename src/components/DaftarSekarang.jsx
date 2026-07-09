import { useState } from "react";
import Footer from "./Footer";

function DaftarSekarang() {
  const [form, setForm] = useState({
    nama: "",
    umur: "",
    whatsapp: "",
    kelas: "",
  });

  const nomorWA = "6281336131759"; // Ganti dengan nomor admin

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const pesan = `Assalamu'alaikum, Saya ingin mendaftarkan diri untuk mengikuti program mengaji di TPQ Al Muhajirin.

Berikut adalah data diri saya:
Nama Lengkap: ${form.nama}
Umur: ${form.umur}
Nomor WhatsApp: ${form.whatsapp}
Pilihan Kelas: ${form.kelas}

Mohon informasi lebih lanjut mengenai prosedur dan jadwal pendaftaran. Terima kasih.`

    const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(
      pesan
    )}`;

    window.open(url, "_blank");
  };

  return (
    <>
    <section className="bg-white px-6 py-12 md:py-24">
      <div className="max-w-2xl mx-auto">
        <div className="card bg-base-100 shadow-sm border border-gray-100">
            <div className="card-body flex flex-col gap-6">
                <div className="flex flex-col gap-2 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#230F0F] font-mavenpro">
                        Daftar Sekarang
                    </h2>
                    <p className="text-gray-500 font-mavenpro">
                        Isi data berikut untuk melanjutkan pendaftaran melalui WhatsApp.
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                >
                    <div className="flex flex-col gap-2">
                        <label className="font-mavenpro text-sm text-[#230F0F]">
                            Nama Lengkap
                        </label>
                        <input
                            type="text"
                            name="nama"
                            value={form.nama}
                            onChange={handleChange}
                            placeholder="Masukkan nama lengkap"
                            className="input input-bordered w-full font-mavenpro"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-mavenpro text-sm text-[#230F0F]">
                            Umur
                        </label>
                        <input
                            type="number"
                            name="umur"
                            value={form.umur}
                            onChange={handleChange}
                            placeholder="Masukkan umur Anda"
                            className="input input-bordered w-full font-mavenpro"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-mavenpro text-sm text-[#230F0F]">
                            Nomor WhatsApp
                        </label>
                        <input
                            type="tel"
                            name="whatsapp"
                            value={form.whatsapp}
                            onChange={handleChange}
                            placeholder="08xxxxxxxxxx"
                            className="input input-bordered w-full font-mavenpro"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-mavenpro text-sm text-[#230F0F]">
                            Pilihan Kelas
                        </label>
                        <select
                            name="kelas"
                            value={form.kelas}
                            onChange={handleChange}
                            className="select select-bordered w-full font-mavenpro"
                            required
                        >
                            <option value="">Pilih Kelas</option>
                            <option value="Kelas Privat">Kelas Privat</option>
                            <option value="Kelas Reguler">Kelas Reguler</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="btn bg-pink-500 border-pink-500 hover:bg-pink-600 hover:border-pink-600 text-white font-mavenpro"
                    >
                        Daftar via WhatsApp
                    </button>
                </form>
                </div>
            </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}

export default DaftarSekarang;
