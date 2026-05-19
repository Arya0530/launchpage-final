export default function Pricing() {
  return (
    <section id="harga" className="py-24 bg-slate-50 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Pilihan Investasi Digital</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Manfaatkan promo diskon terbatas untuk UMKM Lamongan! Sistem pembayaran transparan, sekali bayar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

          {/* Paket Hemat */}
          <div className="bg-white p-8 rounded-[2rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="inline-block bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full mb-4">PEMULA</div>
              <h3 className="text-2xl font-bold text-slate-900">Paket Hemat</h3>
              <p className="text-slate-500 text-sm mt-2 mb-6">Cocok untuk UMKM yang baru mulai go digital</p>
              
              <div className="flex flex-col mb-6">
                <span className="text-sm text-slate-400 line-through">Rp 500.000</span>
                <span className="text-4xl font-black text-slate-900 tracking-tight">Rp 250<span className="text-2xl text-slate-400 font-bold">.000</span></span>
              </div>

              <p className="text-xs text-slate-400 font-medium mb-4 uppercase tracking-wider">Yang kamu dapat:</p>
              <ul className="space-y-3 text-sm text-slate-600">
                {['Landing Page 1 Halaman', 'Domain .my.id (1 Tahun)', 'Hosting Cepat & Aman', 'Tombol Hubungi WhatsApp', 'Desain Mobile Friendly'].map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center text-[10px] font-bold shrink-0">✓</div>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <a href="https://wa.me/6281230813044" target="_blank" rel="noreferrer"
              className="mt-8 block text-center border-2 border-slate-200 text-slate-700 font-bold py-3.5 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all duration-300">
              Pilih Paket Hemat
            </a>
          </div>

          {/* Paket Bisnis Pro (Highlight) */}
          <div className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] border-2 border-yellow-400 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-yellow-400 text-slate-900 text-xs font-black px-4 py-1.5 tracking-wide rounded-bl-xl">
              DISKON SPESIAL
            </div>
            <div>
              <div className="inline-block bg-yellow-50 text-yellow-600 text-xs font-bold px-3 py-1 rounded-full mb-4">BISNIS</div>
              <h3 className="text-2xl font-bold text-slate-900">Paket Bisnis Pro</h3>
              <p className="text-slate-500 text-sm mt-2 mb-6">Investasi terbaik untuk bisnis yang serius</p>
              
              <div className="flex flex-col mb-6">
                <span className="text-sm text-slate-400 line-through">Rp 1.200.000</span>
                <span className="text-4xl font-black text-blue-600 tracking-tight">Rp 750<span className="text-2xl text-blue-400 font-bold">.000</span></span>
              </div>

              <p className="text-xs text-slate-400 font-medium mb-4 uppercase tracking-wider">Semua Paket Hemat, plus:</p>
              <ul className="space-y-3 text-sm text-slate-600">
                {['Premium Custom Design', 'Domain .id Profesional', 'Copywriting AI Optimasi', 'Setup Google Maps Bisnis', 'Sesi Foto Produk di Lamongan', 'Revisi hingga 3x'].map((f) => (
                  <li key={f} className="flex items-center gap-3 font-semibold text-slate-900">
                    <div className="w-5 h-5 rounded-full bg-yellow-400 text-slate-900 flex items-center justify-center text-[10px] font-bold shrink-0">✓</div>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <a href="https://wa.me/6281230813044" target="_blank" rel="noreferrer"
              className="mt-8 block text-center bg-blue-800 text-white font-bold py-3.5 rounded-full hover:bg-blue-900 transition-all duration-300">
              Ambil Paket Pro
            </a>
          </div>

          {/* Paket Enterprise */}
          <div className="bg-[#111827] p-8 rounded-[2rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.15)] border border-slate-700 flex flex-col justify-between">
            <div>
              <div className="inline-block bg-slate-700 text-slate-300 text-xs font-bold px-3 py-1 rounded-full mb-4">ENTERPRISE</div>
              <h3 className="text-2xl font-bold text-white">Paket Custom</h3>
              <p className="text-slate-400 text-sm mt-2 mb-6">Untuk kebutuhan kompleks & skala besar</p>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-3xl font-black text-yellow-400 tracking-tight">Hubungi Kami</span>
              </div>
              <p className="text-xs text-slate-500 font-medium mb-4 uppercase tracking-wider">Termasuk semua fitur Pro, plus:</p>
              <ul className="space-y-3 text-sm text-slate-300">
                {['Multi-page Website', 'Sistem CMS / Dashboard', 'Integrasi API & Database', 'Maintenance Bulanan', 'Dedicated Support', 'Konsultasi Strategi Digital'].map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-yellow-400/20 text-yellow-400 flex items-center justify-center text-[10px] font-bold shrink-0">✓</div>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <a href="https://wa.me/6281230813044" target="_blank" rel="noreferrer"
              className="mt-8 block text-center bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-3.5 rounded-full transition-all duration-300">
              Diskusi Kebutuhan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}