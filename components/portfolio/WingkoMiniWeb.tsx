import React from 'react';

export default function WingkoMiniWeb() {
  return (
    <div className="h-48 w-full overflow-y-auto scroll-smooth rounded-b-none border-x border-t border-slate-200/60 bg-[#FAF6EE] text-[#2E1C0E] text-[9px] p-2 space-y-4 font-sans select-none relative">
      
      {/* 1. MINI NAVIGATION (COKELAT PREMIUM) */}
      <div className="flex justify-between items-center bg-[#3A2010] text-white p-1.5 sticky top-0 z-10 rounded-md shadow-sm border border-[#200f05]">
        <span className="font-serif font-bold text-[10px]">
          Wingko <span className="text-[#E8C678]">Babat</span>
        </span>
        <div className="flex gap-2 text-[7px] text-amber-100 font-medium tracking-wide">
          <span>Produk</span>
          <span className="bg-[#C9943A] text-[#3A2010] px-1.5 py-0.5 rounded-full text-[6px] font-bold">Pesan</span>
        </div>
      </div>

      {/* 2. MINI HERO SECTION (COKELAT GELAP SOLID & TEXT GOLD) */}
      <div className="relative text-center py-4 bg-[#3A2010] text-white rounded-lg p-2 overflow-hidden shadow-md border border-[#200f05]">
        <div className="inline-block bg-[#C9943A] text-[#3A2010] text-[5.5px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest mb-1 shadow-sm">
          🏆 Authentic Since 1978
        </div>
        <h1 className="font-serif font-extrabold text-[12px] text-white leading-tight mb-1">
          Kelezatan <span className="italic text-[#E8C678]">Wingko Babat</span> <br />
          yang Tak Terlupakan
        </h1>
        <p className="text-amber-100/70 text-[6.5px] max-w-[170px] mx-auto leading-relaxed">
          Dibuat dengan kelapa pilihan, gula aren asli, dan warisan resep legendaris empat dekade.
        </p>
      </div>

      {/* 3. MINI ABOUT & BAHAN BAKU */}
      <div className="bg-white p-2 rounded-lg border border-slate-100 grid grid-cols-12 gap-2 items-center shadow-3xs">
        <div className="col-span-4 h-14 rounded-md overflow-hidden bg-slate-50 relative border border-slate-100">
          <img src="/kelapa_1.jpg" alt="Bahan Kelapa Segar" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-8 space-y-0.5">
          <span className="text-[#C9943A] text-[5.5px] font-bold uppercase tracking-wider block">Bahan Pilihan</span>
          <p className="font-serif font-bold text-[#3A2010] text-[8.5px] leading-tight">Kelapa Parut Segar Pilihan</p>
          <p className="text-slate-500 text-[5.8px] leading-normal">Dipanen langsung oleh petani lokal Lamongan setiap pagi.</p>
        </div>
      </div>

      {/* 4. PRODUK SECTION (KATALOG VERTIKAL COKELAT) */}
      <div className="space-y-2">
        <div className="text-center">
          <span className="text-[#C9943A] text-[6px] font-bold uppercase tracking-widest block">Pilihan Produk</span>
          <p className="font-serif font-bold text-[#3A2010] text-[9.5px]">Varian Premium Wingko</p>
        </div>
        <div className="grid grid-cols-1 gap-1.5">
          {/* Varian 1 */}
          <div className="bg-white border border-slate-100 rounded-lg p-1.5 flex items-center justify-between gap-2 shadow-3xs">
            <div className="flex items-center gap-2">
              <img src="/wingko_1.jpg" alt="Wingko Original" className="w-11 h-11 object-cover rounded-md flex-shrink-0" />
              <div>
                <span className="bg-amber-100 text-[#C9943A] text-[4.5px] px-1 rounded-sm font-bold uppercase">Klasik</span>
                <p className="font-serif font-bold text-[#3A2010] text-[7.5px] mt-0.5">Wingko Original Premium</p>
              </div>
            </div>
            <div className="text-right flex-shrink-0 pl-1">
              <p className="font-serif font-bold text-[#5C3A1E] text-[8px]">Rp 3.5k</p>
              <span className="inline-block bg-[#3A2010] text-white px-1.5 py-0.5 rounded-full text-[4.5px] mt-1 font-semibold">Beli</span>
            </div>
          </div>
          {/* Varian 2 */}
          <div className="bg-white border border-slate-100 rounded-lg p-1.5 flex items-center justify-between gap-2 shadow-3xs">
            <div className="flex items-center gap-2">
              <img src="/wingko_2.jpg" alt="Wingko Coklat" className="w-11 h-11 object-cover rounded-md flex-shrink-0" />
              <div>
                <span className="bg-amber-100 text-[#3A2010] text-[4.5px] px-1 rounded-sm font-bold uppercase">Favorit</span>
                <p className="font-serif font-bold text-[#3A2010] text-[7.5px] mt-0.5">Wingko Cokelat Lezat</p>
              </div>
            </div>
            <div className="text-right flex-shrink-0 pl-1">
              <p className="font-serif font-bold text-[#5C3A1E] text-[8px]">Rp 4.0k</p>
              <span className="inline-block bg-[#3A2010] text-white px-1.5 py-0.5 rounded-full text-[4.5px] mt-1 font-semibold">Beli</span>
            </div>
          </div>
        </div>
      </div>

      {/* 5. FORM ORDER */}
      <div className="bg-white rounded-lg border border-slate-100 p-2.5 space-y-1.5 shadow-3xs">
        <p className="font-serif font-bold text-[#3A2010] text-[8px] border-b border-slate-100 pb-1">📋 Form Pemesanan Cepat</p>
        <div className="bg-[#3A2010] text-white text-center py-1 rounded text-[6px] font-bold">Kirim via WhatsApp 💬</div>
      </div>

      {/* 6. FOOTER */}
      <div className="bg-[#3A2010] text-[#E8C678] text-[5.5px] p-2 rounded-md text-center">
        © 2026 Wingko Babat Asli Lamongan · Sejak 1978 ❤️
      </div>
    </div>
  );
}