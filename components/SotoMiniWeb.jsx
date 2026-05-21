import React from 'react';

export default function SotoMiniWeb() {
  return (
    <div className="h-48 w-full overflow-y-auto scroll-smooth rounded-b-none border-x border-t border-slate-200/60 bg-[#FFFBF3] text-[#2A1500] text-[9px] p-2 space-y-4 font-sans select-none">
      
      {/* MINI NAVIGATION */}
      <div className="flex justify-between items-center bg-[#FFFBF3]/90 backdrop-blur-md p-1.5 sticky top-0 z-10 rounded-md border border-[#D4731A]/20 shadow-2xs">
        <span className="font-serif font-bold text-[10px] text-[#3E1F05]">
          Soto <span className="text-[#D4731A]">Lamongan</span>
        </span>
        <div className="flex gap-2 text-[7px] text-[#7A5C3A] font-medium">
          <span>Tentang</span>
          <span>Menu</span>
          <span className="bg-[#D4731A] text-white px-1.5 py-0.5 rounded-full text-[6px]">Pesan</span>
        </div>
      </div>

      {/* MINI HERO SECTION */}
      <div className="relative text-center py-3 bg-gradient-to-b from-[#FDE8C0] to-[#FDF3E3] rounded-lg p-2 overflow-hidden border border-[#D4731A]/10">
        <div className="inline-block bg-[#FEF0D8] text-[#7A3D10] text-[6px] font-bold px-1.5 py-0.5 rounded-full border border-[#D4731A]/20 uppercase tracking-wider mb-1">
          🔥 Asli Lamongan · Sejak 1987
        </div>
        <h1 className="font-serif font-extrabold text-[12px] text-[#3E1F05] leading-tight mb-1">
          Kuah Gurih, <br />
          <span className="italic text-[#D4731A]">Cita Rasa</span> Tak Terlupakan
        </h1>
        <p className="text-[#7A5C3A] text-[6.5px] max-w-[160px] mx-auto leading-relaxed">
          Soto Lamongan dengan resep turun-temurun dan kesegaran kuah kaldu ayam kampung.
        </p>
      </div>

      {/* MINI STATS BAR */}
      <div className="grid grid-cols-4 bg-white py-1.5 rounded-md border border-[#D4731A]/10 text-center shadow-3xs">
        <div className="border-r border-[#D4731A]/10">
          <p className="font-serif font-bold text-[#D4731A] text-[9px] leading-none">37+</p>
          <p className="text-[#7A5C3A] text-[5.5px] uppercase tracking-tighter mt-0.5">Tahun</p>
        </div>
        <div className="border-r border-[#D4731A]/10">
          <p className="font-serif font-bold text-[#D4731A] text-[9px] leading-none">2rb+</p>
          <p className="text-[#7A5C3A] text-[5.5px] uppercase tracking-tighter mt-0.5">User</p>
        </div>
        <div className="border-r border-[#D4731A]/10">
          <p className="font-serif font-bold text-[#D4731A] text-[9px] leading-none">12</p>
          <p className="text-[#7A5C3A] text-[5.5px] uppercase tracking-tighter mt-0.5">Menu</p>
        </div>
        <div>
          <p className="font-serif font-bold text-[#D4731A] text-[9px] leading-none">4.9</p>
          <p className="text-[#7A5C3A] text-[5.5px] uppercase tracking-tighter mt-0.5">Rating</p>
        </div>
      </div>

      {/* MINI ABOUT SECTION DENGAN SOTO_4.JPG */}
      <div className="grid grid-cols-2 gap-2 pt-1 items-center">
        <div className="rounded-lg h-20 relative overflow-hidden border border-[#D4731A]/15 shadow-3xs bg-[#FEF0D8]">
          <img src="/soto_4.jpg" alt="Kisah Soto Pak Bejo" className="w-full h-full object-cover" />
          <div className="absolute bottom-1 right-1 bg-[#D4731A] text-white rounded-full w-6 h-6 flex flex-col justify-center items-center text-[5px] leading-none font-bold border-2 border-[#FFFBF3] shadow-sm z-10">
            <span className="font-serif text-[7px]">37</span>Thn
          </div>
        </div>
        <div className="space-y-1">
          <span className="text-[#D4731A] text-[6px] font-bold tracking-wider uppercase block">Kisah Kami</span>
          <h2 className="font-serif text-[10px] font-bold text-[#3E1F05] leading-tight">
            Warisan Rasa dari <span className="italic text-[#D4731A]">Lamongan</span>
          </h2>
          <p className="text-[#7A5C3A] text-[6px] leading-relaxed">
            Soto Lamongan Pak Bejo hadir dengan resep autentik tiga generasi.
          </p>
        </div>
      </div>

      {/* MINI MENU SECTION DENGAN FOTO SOTO_1, SOTO_2, SOTO_3 */}
      <div className="space-y-2 bg-white p-2 rounded-lg border border-[#D4731A]/10">
        <div className="text-center mb-2">
          <span className="text-[#D4731A] text-[6px] font-bold uppercase tracking-wider block">Menu Pilihan</span>
          <p className="font-serif text-[10px] font-bold text-[#3E1F05]">Nikmati Setiap Suapan</p>
        </div>

        <div className="space-y-2">
          {/* Menu 1 */}
          <div className="bg-[#FFFBF3] border border-[#D4731A]/18 rounded-md p-1.5 flex items-center justify-between gap-2 shadow-3xs relative">
            <span className="absolute top-1 right-1 bg-[#D4731A] text-white text-[4.5px] px-1 rounded-sm">Terlaris</span>
            <div className="flex items-center gap-2">
              <img src="/soto_1.jpg" alt="Soto Spesial" className="w-10 h-10 object-cover rounded-md flex-shrink-0" />
              <div>
                <p className="font-serif font-bold text-[#3E1F05] text-[7.5px]">Soto Lamongan Spesial</p>
                <p className="text-[#7A5C3A] text-[6px] leading-tight mt-0.5">Kuah kaldu ayam kampung & koya melimpah.</p>
              </div>
            </div>
            <div className="text-right flex-shrink-0 pl-1">
              <p className="font-serif font-bold text-[#D4731A] text-[8px]">Rp 18.000</p>
            </div>
          </div>

          {/* Menu 2 */}
          <div className="bg-[#FFFBF3] border border-[#D4731A]/18 rounded-md p-1.5 flex items-center justify-between gap-2 shadow-3xs">
            <div className="flex items-center gap-2">
              <img src="/soto_2.jpg" alt="Soto Telur" className="w-10 h-10 object-cover rounded-md flex-shrink-0" />
              <div>
                <p className="font-serif font-bold text-[#3E1F05] text-[7.5px]">Soto Lamongan Telur</p>
                <p className="text-[#7A5C3A] text-[6px] leading-tight mt-0.5">Dua butir telur rebus, tauge, dan bihun.</p>
              </div>
            </div>
            <div className="text-right flex-shrink-0 pl-1">
              <p className="font-serif font-bold text-[#D4731A] text-[8px]">Rp 14.000</p>
            </div>
          </div>

          {/* Menu 3 */}
          <div className="bg-[#FFFBF3] border border-[#D4731A]/18 rounded-md p-1.5 flex items-center justify-between gap-2 shadow-3xs">
            <div className="flex items-center gap-2">
              <img src="/soto_3.jpg" alt="Soto Jumbo" className="w-10 h-10 object-cover rounded-md flex-shrink-0" />
              <div>
                <p className="font-serif font-bold text-[#3E1F05] text-[7.5px]">Soto Komplit Jumbo</p>
                <p className="text-[#7A5C3A] text-[6px] leading-tight mt-0.5">Ayam goreng utuh, jeroan, & koya ekstra.</p>
              </div>
            </div>
            <div className="text-right flex-shrink-0 pl-1">
              <p className="font-serif font-bold text-[#D4731A] text-[8px]">Rp 28.000</p>
            </div>
          </div>
        </div>
      </div>

      {/* MINI FOOTER */}
      <div className="bg-[#2A1500] text-slate-400 text-[5.5px] p-2 rounded-md flex justify-between items-center px-2">
        <span className="text-white font-serif">Soto <span className="text-[#F5C06A]">Lamongan</span> Pak Bejo</span>
        <span>© 2026</span>
      </div>

    </div>
  );
}