import SotoMiniWeb from './portfolio/SotoMiniWeb';
import BoranMiniWeb from './portfolio/BoranMiniWeb';
import WingkoMiniWeb from './portfolio/WingkoMiniWeb';

export default function Portfolio() {
  return (
    <section id="portofolio" className="py-24 bg-white px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Proyek yang Pernah Kami Luncurkan</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1 – Soto Lamongan */}
          <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden flex flex-col group hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] transition-shadow duration-300">
            
            {/* LINK DINAMIS: Otomatis mengarah ke halaman internal /soto di hostingan yang sama */}
            <a 
              href="/soto" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-3 pb-0 bg-slate-50 border-b border-slate-100 cursor-pointer group/browser"
            >
              {/* Header Jendela Browser */}
              <div className="flex items-center gap-2 bg-white rounded-t-xl px-4 py-2.5 border border-b-0 border-slate-200/60 group-hover/browser:border-slate-300 transition-colors">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400 block"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400 block"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 block"></span>
                </div>
                <div className="flex-1 max-w-[140px] mx-auto bg-slate-50 rounded text-[10px] text-slate-400 py-0.5 px-2 text-center truncate border border-slate-100 select-none group-hover/browser:text-blue-600 group-hover/browser:bg-blue-50/50 transition-all font-medium">
                  sotolamongan.com ↗
                </div>
              </div>
              
              {/* Draft Website Mini Soto (Bisa di-scroll & ada foto produk) */}
              <SotoMiniWeb />
            </a>

            {/* Konten Teks Deskripsi */}
            <div className="p-8 flex-1 flex flex-col">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">E-Commerce & Digital Menu</p>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Soto Lamongan Pak Bejo</h3>
              <p className="text-slate-500 text-sm mb-6 flex-1">
                Modernisasi warung soto legendaris lewat sistem manajemen menu digital dan pesan-antar online untuk memangkas antrean.
              </p>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-xs font-medium mb-0.5">IMPACT</p>
                  <p className="text-slate-900 font-bold text-sm">150+ Pesanan/Hari Online</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600 text-xs font-black">↑</div>
              </div>
            </div>
          </div>

          {/* Card 2 – Nasi Boran */}
          <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden flex flex-col group hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] transition-shadow duration-300">
            
            {/* LINK DINAMIS: Otomatis mengarah ke halaman internal /boran di hostingan yang sama */}
            <a 
              href="/boran" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-3 pb-0 bg-slate-50 border-b border-slate-100 cursor-pointer group/browser"
            >
              {/* Header Jendela Browser */}
              <div className="flex items-center gap-2 bg-white rounded-t-xl px-4 py-2.5 border border-b-0 border-slate-200/60 group-hover/browser:border-slate-300 transition-colors">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400 block"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400 block"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 block"></span>
                </div>
                <div className="flex-1 max-w-[140px] mx-auto bg-slate-50 rounded text-[10px] text-slate-400 py-0.5 px-2 text-center truncate border border-slate-100 select-none group-hover/browser:text-blue-600 group-hover/browser:bg-blue-50/50 transition-all font-medium">
                  nasiboran-busari.id ↗
                </div>
              </div>
              
              {/* Draft Website Mini Nasi Boran */}
              <BoranMiniWeb />
            </a>

            {/* Konten Teks Deskripsi */}
            <div className="p-8 flex-1 flex flex-col">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">UMKM Landing Page</p>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Nasi Boran Bu Sari</h3>
              <p className="text-slate-500 text-sm mb-6 flex-1">
                Membangun *brand awareness* kuliner khas melalui landing page interaktif yang menceritakan sejarah rasa hingga lokasi cabang.
              </p>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-xs font-medium mb-0.5">IMPACT</p>
                  <p className="text-slate-900 font-bold text-sm">Omset Naik 45%</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 text-xs font-black">↑</div>
              </div>
            </div>
          </div>

          {/* Card 3 – Wingko Babat */}
          <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden flex flex-col group hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] transition-shadow duration-300">
            
            {/* LINK DINAMIS: Otomatis mengarah ke halaman internal /wingko di hostingan yang sama */}
            <a 
              href="/wingko" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-3 pb-0 bg-slate-50 border-b border-slate-100 cursor-pointer group/browser"
            >
              {/* Header Jendela Browser */}
              <div className="flex items-center gap-2 bg-white rounded-t-xl px-4 py-2.5 border border-b-0 border-slate-200/60 group-hover/browser:border-slate-300 transition-colors">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400 block"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400 block"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 block"></span>
                </div>
                <div className="flex-1 max-w-[140px] mx-auto bg-slate-50 rounded text-[10px] text-slate-400 py-0.5 px-2 text-center truncate border border-slate-100 select-none group-hover/browser:text-blue-600 group-hover/browser:bg-blue-50/50 transition-all font-medium">
                  wingkobabat.com ↗
                </div>
              </div>
              
              {/* Draft Website Mini Wingko Babat */}
              <WingkoMiniWeb />
            </a>

            {/* Konten Teks Deskripsi */}
            <div className="p-8 flex-1 flex flex-col">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">E-Commerce Website</p>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Wingko Babat Loe Lan Ing</h3>
              <p className="text-slate-500 text-sm mb-6 flex-1">
                Pengembangan toko online dengan integrasi cek ongkir otomatis untuk memudahkan pengiriman oleh-oleh ke seluruh Indonesia.
              </p>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-xs font-medium mb-0.5">IMPACT</p>
                  <p className="text-slate-900 font-bold text-sm">Seamless Nasional Shipping</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 text-xs font-black">✓</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}