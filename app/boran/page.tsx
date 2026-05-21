import React from 'react';

export default function BoranFullPage() {
  return (
    <div className="bg-[#FAF5EC] text-[#2A1F14] font-sans antialiased min-h-screen selection:bg-[#4A6741]/20 selection:text-[#3D2B1F] relative">
      
      {/* EFFECT OVERLAY NOISE (Tekstur kertas/daun pisang alami bawaan HTML asli lo) */}
      <div className="absolute inset-0 bg-repeat opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=%270 0 200 200%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.75%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E')]"></div>

      {/* 1. PREMIUM HEADER / NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-5 bg-[#FAF5EC]/85 backdrop-blur-md border-b border-[#4A6741]/10 shadow-3xs">
        <div className="font-serif text-xl font-bold tracking-tight text-[#3D2B1F]">
          Nasi <span className="text-[#4A6741] italic">Boran</span> <span className="text-[#7A6552] font-sans text-xs font-normal">Bu Sari</span>
        </div>
        
        <ul className="hidden md:flex gap-10 list-none text-xs font-medium uppercase tracking-widest text-[#7A6552]">
          <li><a href="#tentang" className="hover:text-[#4A6741] transition-colors">Cerita Kami</a></li>
          <li><a href="#menu" className="hover:text-[#4A6741] transition-colors">Sajian Menu</a></li>
          <li><a href="#ulasan" className="hover:text-[#4A6741] transition-colors">Ulasan Pelanggan</a></li>
          <li><a href="#kontak" className="hover:text-[#4A6741] transition-colors">Kontak & Lokasi</a></li>
        </ul>

        <a 
          href="https://wa.me/6281234567890?text=Halo%20Bu%20Sari%2C%20saya%20mau%20pesan%20nasi%20boran" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-[#4A6741] text-white px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#3D2B1F] transition-all hover:scale-105 active:scale-95 shadow-md shadow-[#4A6741]/20"
        >
          Pesan Via WA
        </a>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative pt-36 px-6 md:px-16 pb-24 md:py-40 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-radial from-[#4A6741]/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-[#F5E6C8] text-[#A64E1B] text-xs font-semibold px-4 py-1.5 rounded-full border border-[#C97D2E]/20 uppercase tracking-widest">
              🌿 Resep Turun-Temurun Lamongan
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#3D2B1F] leading-[1.15] tracking-tight">
              Cita Rasa Asli<br />
              Nasi <span className="italic text-[#4A6741]">Boran</span><br />
              Lamongan
            </h1>
            <p className="text-[#7A6552] text-base font-light leading-relaxed max-w-md mx-auto md:mx-0">
              Sajian kuliner legendaris khas Lamongan — nasi hangat pulen beralas daun pincuk tradisional dengan aneka lauk pilihan, siraman kuah kental gurih, dan sambal pedas nampol bumbu boran yang dirindukan.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
              <a href="#menu" className="bg-[#3D2B1F] text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-[#4A6741] transition-all shadow-lg shadow-[#3D2B1F]/25 hover:-translate-y-0.5">
                Lihat Menu Kuliner
              </a>
              <a href="#kontak" className="bg-transparent border-2 border-[#7A6552]/30 text-[#3D2B1F] px-7 py-3 rounded-full text-sm font-medium hover:border-[#4A6741] hover:text-[#4A6741] transition-all hover:-translate-y-0.5">
                Hubungi Kami →
              </a>
            </div>
          </div>

          {/* Hero Visual Area */}
          <div className="flex justify-center relative group">
            <div className="absolute inset-0 bg-radial from-[#4A6741]/10 to-transparent opacity-50 blur-xl"></div>
            <div className="relative w-72 sm:w-85 md:w-96 h-72 sm:h-85 md:h-96 bg-[#F5E6C8] rounded-full flex items-center justify-center border-2 border-[#C97D2E]/20 shadow-2xl transition-transform duration-700 hover:scale-102">
              <div className="w-[90%] h-[90%] bg-white rounded-full p-2 overflow-hidden shadow-inner flex items-center justify-center">
                <span className="text-9xl filter drop-shadow-xl animate-bounce duration-4000">🍱</span>
              </div>
              <div className="absolute top-4 left-[-10px] bg-white border border-[#4A6741]/20 rounded-xl px-3 py-1.5 text-center shadow-md">
                <p className="text-[#4A6741] font-bold text-xs">⭐ 4.9 Google</p>
                <p className="text-[9px] text-[#7A6552] uppercase mt-0.5 font-medium">Rating Pelanggan</p>
              </div>
              <div className="absolute bottom-8 right-[-15px] bg-white border border-[#C97D2E]/20 rounded-xl px-3 py-1.5 text-center shadow-md">
                <p className="text-[#A64E1B] font-bold text-xs">06.00 – 14.00</p>
                <p className="text-[9px] text-[#7A6552] uppercase mt-0.5 font-medium">Buka Setiap Pagi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BUSINESS STATS BAR */}
      <div className="bg-[#3D2B1F] py-12 px-6 shadow-sm text-[#FAF5EC] rounded-t-[2.5rem] md:rounded-t-[4rem] mx-0 sm:mx-4">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4 text-center">
          <div className="space-y-1">
            <p className="font-serif text-2xl md:text-4xl font-bold text-amber-400">15+</p>
            <p className="text-emerald-100/60 text-[10px] md:text-xs uppercase tracking-widest font-light">Tahun Berdiri</p>
          </div>
          <div className="space-y-1">
            <p className="font-serif text-2xl md:text-4xl font-bold text-amber-400">500+</p>
            <p className="text-emerald-100/60 text-[10px] md:text-xs uppercase tracking-widest font-light">Pelanggan Setia</p>
          </div>
          <div className="space-y-1">
            <p className="font-serif text-2xl md:text-4xl font-bold text-amber-400">100%</p>
            <p className="text-emerald-100/60 text-[10px] md:text-xs uppercase tracking-widest font-light">Rempah Alami</p>
          </div>
        </div>
      </div>

      {/* 4. ABOUT US SECTION (SUDAH DISINKRONKAN LAYOUT GRID DAN FOTO ASLI NYA) */}
      <section id="tentang" className="py-20 px-6 md:px-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center bg-white rounded-3xl border border-[#4A6741]/10 shadow-3xs my-8">
        {/* Gambar dikunci melengkung rapi di grid 5 kolom */}
        <div className="col-span-12 md:col-span-5 relative rounded-2xl overflow-hidden shadow-lg border border-[#4A6741]/10 aspect-square max-h-[320px] w-full mx-auto md:w-full bg-slate-50">
          <img 
            src="/boran_4 (1).jpg" 
            alt="Porsi Autentik Nasi Boran Bu Sari" 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
          />
        </div>

        {/* Teks deskripsi di grid 7 kolom biar lapang & gak ketutupan foto lagi */}
        <div className="col-span-12 md:col-span-7 space-y-4 text-left">
          <span className="text-[#4A6741] text-xs font-bold tracking-widest uppercase block">Cerita Kuliner Pincuk</span>
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-[#3D2B1F] leading-tight">
            Warisan Kuliner Lamongan <br />yang <span className="italic text-[#4A6741]">Tak Pernah Lekang</span>
          </h2>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-light">
            Berdiri kokoh melayani pencinta kuliner sejak tahun 2009, Nasi Boran Bu Sari hadir membawa konsistensi rasa otentik khas bumi Lamongan. Setiap porsi racikan dimasak dengan penuh perhatian, bahan baku segar harian, dan penuh cita rasa tradisi yang kental.
          </p>
          <div className="space-y-3 pt-2">
            <div className="flex gap-3 items-start">
              <span className="text-lg">🌾</span>
              <div>
                <h4 className="text-xs md:text-sm font-semibold text-[#3D2B1F]">Bahan Segar Pasar Lokal</h4>
                <p className="text-slate-500 text-[11px] md:text-xs mt-0.5">Kami hanya memilih komoditas lauk pauk segar terbaik dari pasar tradisional Lamongan setiap fajar tiba.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-lg">🔥</span>
              <div>
                <h4 className="text-xs md:text-sm font-semibold text-[#3D2B1F]">Dimasak Segar Tanpa Pengawet</h4>
                <p className="text-slate-500 text-[11px] md:text-xs mt-0.5">Seluruh kuah kuning kental, bumbu urap-urap, tahu tempe, gimbal, dan lauk utama diolah manual segar setiap subuh tanpa zat kimia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MENU SELECTION GRID (ZIGZAG LAYOUT / SELANG-SELING) */}
      <section id="menu" className="bg-white py-24 px-6 md:px-16 border-y border-slate-100">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-2">
            <span className="text-[#4A6741] text-xs font-bold tracking-widest uppercase block">Daftar Hidangan</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#3D2B1F]">Sajian Terbaik Warung Kami</h2>
          </div>

          <div className="space-y-12">
            {/* Menu 1: Foto Kiri (boran_1.jpg) */}
            <div className="bg-[#FAF5EC]/60 border border-[#4A6741]/10 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center shadow-2xs group">
              <div className="w-full md:w-56 h-40 overflow-hidden rounded-2xl flex-shrink-0 border border-slate-200/50">
                <img src="/boran_1.jpg" alt="Nasi Boran Komplit" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex-1 space-y-4 w-full">
                <div className="space-y-1">
                  <span className="bg-[#4A6741]/10 text-[#4A6741] text-[10px] font-bold px-2.5 py-0.5 rounded-md inline-block">Menu Unggulan</span>
                  <h3 className="font-serif text-xl font-bold text-[#3D2B1F]">Nasi Boran Komplit</h3>
                  <p className="text-slate-600 text-xs font-light leading-relaxed">Sajian nasi putih hangat pulen berpadu lauk potongan daging ayam kampung renyah, gimbal empuk, bothok jeroan, orek tempe, siraman kuah kuning kental khas, serta rempeyek gurih.</p>
                </div>
                <div className="flex justify-between items-center border-t border-slate-200/60 pt-4">
                  <span className="font-serif font-extrabold text-[#4A6741] text-xl">Rp 18.000</span>
                  <a href="https://wa.me/6281234567890?text=Halo%20Bu%20Sari%2C%20saya%20mau%20pesan%20Nasi%20Boran%20Komplit" target="_blank" rel="noopener noreferrer" className="bg-[#3D2B1F] text-white px-5 py-2 rounded-full text-xs font-semibold hover:bg-[#4A6741] transition-colors shadow-xs">Pesan Porsi</a>
                </div>
              </div>
            </div>

            {/* Menu 2: Foto Kanan - Efek Zigzag UX (boran_2.jpg) */}
            <div className="bg-[#FAF5EC]/60 border border-[#4A6741]/10 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row-reverse gap-8 items-center shadow-2xs group">
              <div className="w-full md:w-56 h-40 overflow-hidden rounded-2xl flex-shrink-0 border border-slate-200/50">
                <img src="/boran_2.jpg" alt="Nasi Boran Ikan Bandeng" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex-1 space-y-4 w-full">
                <div className="space-y-1">
                  <span className="bg-[#4A6741]/10 text-[#4A6741] text-[10px] font-bold px-2.5 py-0.5 rounded-md inline-block">Paling Diminati</span>
                  <h3 className="font-serif text-xl font-bold text-[#3D2B1F]">Nasi Boran Ikan Bandeng</h3>
                  <p className="text-slate-600 text-xs font-light leading-relaxed">Racikan khusus potongan ikan bandeng goreng bumbu marinasi tradisional khas pesisir Lamongan, disajikan lengkap bersama urap-urap sayur kelapa muda, peyek renyah, dan guyuran kuah pedas.</p>
                </div>
                <div className="flex justify-between items-center border-t border-slate-200/60 pt-4">
                  <span className="font-serif font-extrabold text-[#4A6741] text-xl">Rp 15.000</span>
                  <a href="https://wa.me/6281234567890?text=Halo%20Bu%20Sari%2C%20saya%20mau%20pesan%20Nasi%20Boran%20Ikan%20Bandeng" target="_blank" rel="noopener noreferrer" className="bg-[#3D2B1F] text-white px-5 py-2 rounded-full text-xs font-semibold hover:bg-[#4A6741] transition-colors shadow-xs">Pesan Porsi</a>
                </div>
              </div>
            </div>

            {/* Menu 3: Foto Kiri Kembali (boran_3.jpg) */}
            <div className="bg-[#FAF5EC]/60 border border-[#4A6741]/10 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center shadow-2xs group">
              <div className="w-full md:w-56 h-40 overflow-hidden rounded-2xl flex-shrink-0 border border-slate-200/50">
                <img src="/boran_3.jpg" alt="Nasi Boran Telur Pindang" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex-1 space-y-4 w-full">
                <div className="space-y-1">
                  <span className="bg-[#4A6741]/10 text-[#4A6741] text-[10px] font-bold px-2.5 py-0.5 rounded-md inline-block">Klasik Hemat</span>
                  <h3 className="font-serif text-xl font-bold text-[#3D2B1F]">Nasi Boran Telur Pindang</h3>
                  <p className="text-slate-600 text-xs font-light leading-relaxed">Menu sarapan merakyat andalan berisi butiran telur kecap bumbu pindang cokelat kental gurih, sate bothok tahu tradisional, krupuk lempeng renyah khas boranan, dan guyuran bumbu kuah.</p>
                </div>
                <div className="flex justify-between items-center border-t border-slate-200/60 pt-4">
                  <span className="font-serif font-extrabold text-[#4A6741] text-xl">Rp 12.000</span>
                  <a href="https://wa.me/6281234567890?text=Halo%20Bu%20Sari%2C%20saya%20mau%20pesan%20Nasi%20Boran%20Telur%20Pindang" target="_blank" rel="noopener noreferrer" className="bg-[#3D2B1F] text-white px-5 py-2 rounded-full text-xs font-semibold hover:bg-[#4A6741] transition-colors shadow-xs">Pesan Porsi</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SPECIAL SEKSI SAMBAL & CHILI CULINARY (Memasukkan sambal_1.jpg) */}
      <section className="py-20 px-6 md:px-16 bg-[#F5E6C8]/40 border-b border-[#4A6741]/10">
        <div className="max-w-4xl mx-auto bg-white border border-[#4A6741]/15 rounded-3xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-xs">
          <div className="md:col-span-7 space-y-4">
            <span className="text-red-600 text-xs font-bold uppercase tracking-widest block">🔥 Ciri Khas Utama</span>
            <h3 className="font-serif text-2xl font-bold text-[#3D2B1F]">Sambal Boran Pedas Mantap</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-light">Kunci kelezatan sejati Nasi Boran Bu Sari terletak pada ulekan cabai segar murni, paduan parutan kelapa sangrai, bawang merah kental, dan resep bumbu boran yang ditumbuk manual segar setiap subuh tanpa penambahan zat pengawet.</p>
          </div>
          <div className="md:col-span-5 h-44 rounded-2xl overflow-hidden shadow-sm border border-slate-100">
            <img src="/sambal_1.jpg" alt="Sambal Pedas Ulekan Bu Sari" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* 7. REVIEWS SECTION */}
      <section id="ulasan" className="py-24 px-6 md:px-16 max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-1">
          <span className="text-[#4A6741] text-xs font-bold tracking-widest uppercase block">Ulasan Warung</span>
          <h2 className="font-serif text-3xl font-bold text-[#3D2B1F]">Kata Pelanggan Setia</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200/50 p-6 rounded-2xl shadow-3xs space-y-3">
            <div className="text-amber-500 text-xs tracking-widest">★★★★★</div>
            <p className="text-slate-600 text-xs italic font-light leading-relaxed">"Nasi borannya beneran juara! Bumbunya medok pekat, lauk bothoknya gurih parah gak bau amis. Udah langganan bertahun-tahun tiap pulang dinas luar selalu mampir kesini subuh-subuh."</p>
            <p className="text-[11px] font-bold text-[#3D2B1F] mt-2">👩 Ratna Dewi <span className="font-normal text-slate-400">· Lamongan Kota</span></p>
          </div>
          <div className="bg-white border border-slate-200/50 p-6 rounded-2xl shadow-3xs space-y-3">
            <div className="text-amber-500 text-xs tracking-widest">★★★★★</div>
            <p className="text-slate-600 text-xs italic font-light leading-relaxed">"Harganya murah banget untuk porsi melimpah dengan kualitas potongan ayam kampung montok begini. Bu Sari juga ramah melayaninya cepet meskipun antreannya panjang."</p>
            <p className="text-[11px] font-bold text-[#3D2B1F] mt-2">👨 Ahmad Fauzi <span className="font-normal text-slate-400">· Babat, Lamongan</span></p>
          </div>
          <div className="bg-white border border-slate-200/50 p-6 rounded-2xl shadow-3xs space-y-3">
            <div className="text-amber-500 text-xs tracking-widest">★★★★★</div>
            <p className="text-slate-600 text-xs italic font-light leading-relaxed">"Sambal borannya nampol dan bikin nagih di lidah! Bungkus pincuk daun pisangnya bikin aroma makanan makin khas tradisional. Rekomendasi sarapan terbaik di Lamongan!"</p>
            <p className="text-[11px] font-bold text-[#3D2B1F] mt-2">👩 Siska H. <span className="font-normal text-slate-400">· Surabaya Kuliner</span></p>
          </div>
        </div>
      </section>

      {/* 8. DETAILED LOCATION & OPERATIONAL */}
      <section id="kontak" className="py-20 px-6 md:px-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-t border-slate-100">
        <div className="space-y-4">
          <span className="text-[#4A6741] text-xs font-bold block uppercase tracking-wider">Lokasi Cabang</span>
          <h3 className="font-serif text-2xl font-bold text-[#3D2B1F]">Silakan Datang Langsung</h3>
          <div className="space-y-3 pt-2 text-xs text-slate-600">
            <p>📍 <strong>Alamat Warung:</strong> Jl. Basuki Rahmat No. 12, Kec. Lamongan, Kabupaten Lamongan, Jawa Timur 62211</p>
            <p>🕐 <strong>Jam Buka Operasional:</strong> Senin – Sabtu: Pukul 06.00 – 14.00 WIB <span className="text-red-600 font-medium block mt-1">*Tutup Hari Minggu / Hari Libur Nasional Nasional</span></p>
            <p>📸 <strong>Instagram Resmi:</strong> @nasiboranbu.sari</p>
          </div>
        </div>
        {/* Mock Maps Widget */}
        <a 
          href="https://maps.google.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-emerald-900 text-white rounded-2xl h-56 flex flex-col justify-center items-center gap-1.5 shadow-md cursor-pointer hover:bg-emerald-950 transition-colors"
        >
          <span className="text-3xl">🗺️</span>
          <span className="text-xs font-bold">Jl. Basuki Rahmat No. 12</span>
          <span className="text-[10px] text-amber-300 font-medium">Buka Petunjuk Jalan Google Maps →</span>
        </a>
      </section>

      {/* 9. PREMIUM FOOTER BAR */}
      <footer className="bg-[#3D2B1F] text-slate-400 text-center py-8 text-xs px-6 border-t border-emerald-950">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="text-center sm:text-left">
            <p className="text-white font-serif text-sm font-semibold">Nasi Boran Bu Sari</p>
            <p className="text-[10px] text-slate-500 mt-0.5">Melayani cita rasa otentik bumbu boran kuliner tradisional sejak 2009</p>
          </div>
          <p className="text-[10px] text-slate-500">© 2026 Nasi Boran Bu Sari. Seluruh Hak Cipta Dilindungi.</p>
        </div>
      </footer>

    </div>
  );
}