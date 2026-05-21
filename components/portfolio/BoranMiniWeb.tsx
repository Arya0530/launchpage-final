import React from 'react';

export default function BoranMiniWeb() {
  return (
    <div className="h-48 w-full overflow-y-auto scroll-smooth rounded-b-none border-x border-t border-slate-200/60 bg-[#FAF5EC] text-slate-800 text-[9px] p-2 space-y-4 font-sans select-none relative">
      
      {/* 1. NAVIGATION BAR (HIJAU DAUN SOLID) */}
      <div className="flex justify-between items-center bg-emerald-800 text-white p-1.5 sticky top-0 z-10 rounded-md shadow-sm border border-emerald-900">
        <span className="font-serif font-bold text-[10px]">
          Boran <span className="text-amber-300 italic">Bu Sari</span>
        </span>
        <div className="flex gap-2 text-[7px] text-emerald-100 font-semibold uppercase tracking-wider">
          <span>Menu</span>
          <span className="text-amber-300">Pesan</span>
        </div>
      </div>

      {/* 2. HERO SECTION (HIJAU DAUN PEKAT & TEXT WHITE) */}
      <div className="text-center py-4 bg-emerald-900 text-white rounded-lg p-2 relative overflow-hidden shadow-md">
        <div className="inline-block bg-amber-400 text-emerald-950 text-[5.5px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest mb-1.5 shadow-sm">
          🌿 Resep Otentik Sejak 2009
        </div>
        <h1 className="font-serif font-bold text-[12px] text-white leading-tight mb-1">
          Kuliner Legendaris <br />
          Nasi <span className="italic text-amber-300">Boran</span> Lamongan
        </h1>
        <p className="text-emerald-100/80 text-[6.5px] max-w-[170px] mx-auto leading-relaxed">
          Sajian pincuk tradisional dengan siraman kuah pedas bumbu boran nan kaya rempah.
        </p>
      </div>

      {/* 3. HERO VISUAL & KISAH */}
      <div className="space-y-1.5 bg-white p-2 rounded-lg border border-slate-100 shadow-3xs">
        <span className="text-emerald-700 text-[6px] font-bold tracking-wider uppercase block">Cerita Kuliner</span>
        <div className="grid grid-cols-5 gap-2 items-center">
          <div className="col-span-2 rounded-md h-14 relative overflow-hidden border border-slate-100">
            <img src="/boran_4 (1).jpg" alt="Warisan Nasi Boran" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-3">
            <h2 className="font-serif text-[9px] font-bold text-slate-900 leading-tight mb-0.5">Warisan Kuliner Tak Lekang</h2>
            <p className="text-slate-500 text-[6px] leading-relaxed">Setiap porsi diracik menggunakan bahan segar dari pasar lokal Lamongan.</p>
          </div>
        </div>
      </div>

      {/* 4. MENU SECTION (ZIGZAG LAYOUT) */}
      <div className="space-y-2">
        <div className="flex justify-between items-center px-1">
          <p className="font-serif font-bold text-slate-900变速 text-[9px]">Sajian Terbaik Kami</p>
          <span className="text-[6px] text-emerald-700 font-bold">Menu Pilihan 🍱</span>
        </div>
        <div className="space-y-2">
          {/* Menu 1 */}
          <div className="bg-white border border-slate-100 rounded-lg p-1.5 flex items-center justify-between gap-2 shadow-3xs">
            <div className="flex items-center gap-2">
              <img src="/boran_1.jpg" alt="Boran Komplit" className="w-12 h-12 object-cover rounded-md flex-shrink-0" />
              <div className="space-y-0.5">
                <p className="font-serif font-bold text-slate-900 text-[7.5px]">Nasi Boran Komplit</p>
                <p className="text-slate-500 text-[5.5px] leading-tight">Nasi pulen, lauk ayam kampung, bothok, kuah kuning.</p>
              </div>
            </div>
            <div className="text-right flex-shrink-0 pl-1.5">
              <p className="font-bold text-emerald-700 text-[8px]">Rp 18k</p>
              <span className="inline-block bg-emerald-800 text-white px-1.5 py-0.5 rounded-md text-[4.5px] mt-1 font-bold">Pesan</span>
            </div>
          </div>
          {/* Menu 2 */}
          <div className="bg-white border border-slate-100 rounded-lg p-1.5 flex items-center justify-between gap-2 shadow-3xs">
            <div className="text-left flex-shrink-0 order-last pl-0.5">
              <p className="font-bold text-emerald-700 text-[8px]">Rp 15k</p>
              <span className="inline-block bg-slate-800 text-white px-1.5 py-0.5 rounded-md text-[4.5px] mt-1 font-bold">Pesan</span>
            </div>
            <div className="flex items-center justify-between flex-1 gap-2">
              <div className="space-y-0.5">
                <p className="font-serif font-bold text-slate-900 text-[7.5px]">Nasi Boran Bandeng</p>
                <p className="text-slate-500 text-[5.5px] leading-tight">Bandeng goreng renyah, urap-urap segar, & peyek.</p>
              </div>
              <img src="/boran_2.jpg" alt="Boran Ikan" className="w-12 h-12 object-cover rounded-md flex-shrink-0" />
            </div>
          </div>
        </div>
      </div>

      {/* 5. SEKSI SAMBAL */}
      <div className="bg-amber-50 rounded-lg border border-amber-200 p-2 grid grid-cols-2 gap-2 items-center">
        <div className="space-y-1">
          <span className="text-red-600 text-[5.5px] font-bold block">🔥 NAMPOL</span>
          <p className="font-serif font-bold text-[8.5px] text-amber-950">Sambal Boran Asli</p>
          <p className="text-amber-800 text-[5.5px] leading-tight">Diulek segar setiap hari dengan cabai pilihan.</p>
        </div>
        <div className="h-14 rounded-md overflow-hidden relative shadow-2xs">
          <img src="/sambal_1.jpg" alt="Sambal Boran" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* 6. FOOTER */}
      <div className="bg-emerald-900 text-emerald-100 text-[5.5px] p-2 rounded-md flex justify-between items-center px-2">
        <span className="font-serif font-semibold text-white">Nasi Boran Bu Sari</span>
        <span>Kuliner Tradisional 🌿</span>
      </div>
    </div>
  );
}