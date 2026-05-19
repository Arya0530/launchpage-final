export default function Services() {
  return (
    <section id="layanan" className="py-24 bg-slate-50 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Apa yang Kami Lakukan?</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Kami fokus pada pembuatan website fungsional dengan desain modern untuk bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-[2rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-2xl">🎨</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">UI/UX Design</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Desain antarmuka yang memanjakan mata dan memberikan pengalaman pengguna terbaik untuk audiens Anda.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[2rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center mb-6 text-2xl">⚡</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Web Development</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Pengembangan website menggunakan teknologi terbaru yang super cepat, responsif, dan siap rilis.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[2rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-2xl">📈</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">SEO & Optimasi</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Website yang dioptimasi untuk mesin pencari sehingga bisnis Anda mudah ditemukan di halaman pertama.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}