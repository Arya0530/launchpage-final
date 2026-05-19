export default function Hero() {
  return (
    <section className="pt-40 pb-24 px-4 sm:px-6 text-center max-w-4xl mx-auto">
      <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold mb-8">
        <span className="text-blue-500">✦</span> Agency Digital Terbaik di Lamongan
      </div>

      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
        Bikin Bisnis kamu <br />
        <span className="text-blue-600">Terbang Lebih</span> <span className="text-yellow-400">Tinggi</span>
      </h1>
      
      <p className="text-slate-500 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
        Kami membantu UMKM dan startup membangun identitas digital dengan landing page yang cepat, modern, dan didesain khusus untuk memaksimalkan konversi penjualan online.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="#portofolio" className="w-full sm:w-auto bg-blue-800 hover:bg-blue-900 text-white font-semibold px-8 py-3.5 rounded-full transition-all">
          Lihat Portofolio →
        </a>
        <a href="#layanan" className="w-full sm:w-auto bg-white border-2 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 font-semibold px-8 py-3.5 rounded-full transition-all">
          Pelajari Layanan
        </a>
      </div>
    </section>
  );
}