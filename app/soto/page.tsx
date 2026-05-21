import React from 'react';

export default function SotoFullPage() {
  return (
    <div className="bg-[#FFFBF3] text-[#2A1500] font-sans antialiased min-h-screen selection:bg-[#D4731A]/20 selection:text-[#3E1F05]">
      
      {/* 1. PREMIUM HEADER / NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-5 bg-[#FFFBF3]/80 backdrop-blur-md border-b border-[#D4731A]/10 shadow-2xs">
        <div className="font-serif text-xl font-bold tracking-tight text-[#3E1F05]">
          Soto <span className="text-[#D4731A]">Lamongan</span> <span className="text-[#7A5C3A] font-sans text-xs font-normal">Pak Bejo</span>
        </div>
        
        <ul className="hidden md:flex gap-10 list-none text-xs font-medium uppercase tracking-widest text-[#7A5C3A]">
          <li><a href="#tentang" className="hover:text-[#D4731A] transition-colors">Tentang Kami</a></li>
          <li><a href="#menu" className="hover:text-[#D4731A] transition-colors">Menu Pilihan</a></li>
          <li><a href="#testimoni" className="hover:text-[#D4731A] transition-colors">Kata Mereka</a></li>
          <li><a href="#lokasi" className="hover:text-[#D4731A] transition-colors">Locations</a></li>
        </ul>

        <a 
          href="https://wa.me/6281234567890" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-[#D4731A] text-white px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#3E1F05] transition-all hover:scale-105 active:scale-95 shadow-md shadow-[#D4731A]/20"
        >
          Pesan Sekarang
        </a>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative pt-36 px-6 md:px-16 pb-24 md:py-40 overflow-hidden">
        {/* Decorative Golden Blur Background */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-radial from-[#FDE8C0] to-transparent opacity-60 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-[#FEF0D8] text-[#7A3D10] text-xs font-semibold px-4 py-1.5 rounded-full border border-[#D4731A]/20 uppercase tracking-widest">
              🔥 Asli Lamongan · Sejak 1987
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#3E1F05] leading-[1.1] tracking-tight">
              Kuah Gurih,<br />
              <span className="italic text-[#D4731A]">Cita Rasa</span><br />
              Tak Terlupakan
            </h1>
            <p className="text-[#7A5C44] text-base font-light leading-relaxed max-w-md mx-auto md:mx-0">
              Soto Lamongan dengan resep kuno turun-temurun, racikan bumbu rempah asli pilihan, dan kesegaran limpahan kaldu ayam kampung murni yang menggugah selera.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
              <a href="#menu" className="bg-[#D4731A] text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-[#3E1F05] transition-all shadow-lg shadow-[#D4731A]/25 hover:-translate-y-0.5">
                Lihat Daftar Menu
              </a>
              <a href="#lokasi" className="bg-transparent border-2 border-[#7A5C3A]/30 text-[#3E1F05] px-7 py-3 rounded-full text-sm font-medium hover:border-[#D4731A] hover:text-[#D4731A] transition-all hover:-translate-y-0.5">
                Temukan Kami →
              </a>
            </div>
          </div>

          {/* Big Plate Hero Visual */}
          <div className="flex justify-center relative">
            <div className="absolute inset-0 bg-radial from-[#FEF0D8] to-transparent opacity-40 blur-xl animate-pulse"></div>
            <div className="relative w-72 sm:w-85 md:w-96 h-72 sm:h-85 md:h-96 bg-[#FEF0D8] rounded-full flex items-center justify-center border border-[#D4731A]/15 shadow-2xl group transition-transform duration-700 hover:rotate-6">
              <img 
                src="/soto_3.jpg" 
                alt="Semangkok Kebahagiaan Soto Lamongan Pak Bejo" 
                className="w-[90%] h-[90%] object-cover rounded-full shadow-lg" 
              />
              <div className="absolute -top-2 -right-2 bg-white border border-[#D4731A]/20 rounded-2xl px-3 py-1.5 text-center shadow-md animate-bounce">
                <span className="text-amber-500 font-bold text-sm block">⭐ 4.9</span>
                <span className="text-[9px] text-[#7A5C3A] uppercase tracking-tighter">2rb+ Ulasan</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BUSINESS STATS BAR */}
      <div className="bg-white border-y border-[#D4731A]/10 py-12 px-6 shadow-xs">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <p className="font-serif text-3xl md:text-4xl font-extrabold text-[#D4731A]">37+</p>
            <p className="text-[#7A5C3A] text-xs font-semibold uppercase tracking-widest">Tahun Berdiri</p>
          </div>
          <div className="space-y-1">
            <p className="font-serif text-3xl md:text-4xl font-extrabold text-[#D4731A]">2rb+</p>
            <p className="text-[#7A5C3A] text-xs font-semibold uppercase tracking-widest">Pelanggan Setia</p>
          </div>
          <div className="space-y-1">
            <p className="font-serif text-3xl md:text-4xl font-extrabold text-[#D4731A]">12</p>
            <p className="text-[#7A5C3A] text-xs font-semibold uppercase tracking-widest">Varian Menu</p>
          </div>
          <div className="space-y-1">
            <p className="font-serif text-3xl md:text-4xl font-extrabold text-[#D4731A]">4.9</p>
            <p className="text-[#7A5C3A] text-xs font-semibold uppercase tracking-widest">Rating Bintang</p>
          </div>
        </div>
      </div>

      {/* 4. ABOUT US SECTION (FIXED SINKRONISASI LAYOUT GRID) */}
      <section id="tentang" className="py-20 px-6 md:px-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center bg-white rounded-3xl border border-[#D4731A]/10 shadow-3xs my-8">
        {/* Gambar ditaruh di kontainer grid 5 kolom */}
        <div className="col-span-12 md:col-span-5 relative rounded-2xl overflow-hidden shadow-md border border-[#D4731A]/10 aspect-square max-h-[320px] mx-auto md:w-full">
          <img 
            src="/soto_4.jpg" 
            alt="Proses Pembuatan Soto Autentik" 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
          />
          <div className="absolute bottom-3 right-3 bg-[#D4731A] text-white p-2 rounded-xl flex flex-col items-center justify-center text-center font-bold shadow-lg border-2 border-[#FFFBF3] w-16 h-16">
            <span className="font-serif text-xl leading-none">37</span>
            <span className="text-[8px] font-sans font-medium uppercase tracking-wider mt-0.5">Thn Rasa</span>
          </div>
        </div>

        {/* Teks deskripsi ditaruh di kontainer grid 7 kolom agar lapang & gak saling tindih */}
        <div className="col-span-12 md:col-span-7 space-y-4 text-left">
          <span className="text-[#D4731A] text-xs font-bold tracking-widest uppercase block">Kisah Legenda Kuliner</span>
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-[#3E1F05] leading-tight">
            Warisan Rasa Autentik <br />dari <span className="italic text-[#D4731A]">Tanah Lamongan</span>
          </h2>
          <p className="text-[#7A5C44] text-xs md:text-sm leading-relaxed font-light">
            Berdiri kokoh sejak tahun 1987, Soto Lamongan Pak Bejo menyajikan keaslian resep tradisional warisan leluhur yang dijaga ketat kemurnian rasanya melintasi tiga generasi keluarga. Setiap mangkok yang kami hidangkan menceritakan dedikasi tinggi pada cita rasa kuliner legendaris Jawa Timur.
          </p>
          <p className="text-[#7A5C44] text-xs md:text-sm leading-relaxed font-light">
            Kami berkomitmen penuh hanya menggunakan daging ayam kampung segar, paduan rempah-rempah basah pilihan tanah air, serta taburan bubuk koya gurih udang khas buatan kami yang pekat, gurih, dan kaya rasa alami tanpa zat pengawet.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {['🐓 Ayam Kampung', '🌿 Tanpa MSG', '🧄 Rempah Asli'].map((pill) => (
              <span key={pill} className="bg-[#FEF0D8] text-[#7A3D10] text-[10px] font-semibold px-3 py-1 rounded-full border border-[#D4731A]/15">
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MENU SELECTION GRID */}
      <section id="menu" className="bg-white py-24 px-6 md:px-16 border-y border-[#D4731A]/10">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-2">
            <span className="text-[#D4731A] text-xs font-bold tracking-widest uppercase block">Menu Pilihan</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#3E1F05]">
              Nikmati <span className="italic text-[#D4731A]">Setiap Suapan Kehangatan</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Menu 1 - Soto Spesial (soto_1.jpg) */}
            <div className="bg-[#FFFBF3] border border-[#D4731A]/15 rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group">
              <div className="h-56 overflow-hidden relative">
                <span className="absolute top-4 right-4 bg-[#D4731A] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10 shadow-sm">Terlaris</span>
                <img src="/soto_1.jpg" alt="Soto Lamongan Spesial" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[#D4731A] text-[10px] font-bold uppercase tracking-wider bg-[#FEF0D8] px-2.5 py-0.5 rounded-md inline-block">Unggulan Utama</span>
                  <h3 className="font-serif text-xl font-bold text-[#3E1F05]">Soto Lamongan Spesial</h3>
                  <p className="text-[#7A5C44] text-xs font-light leading-relaxed">Kuah kaldu pekat ayam kampung, suwiran daging ayam melimpah, telur rebus, bihun, kubis segar, dan taburan bubuk koya gurih rahasia.</p>
                </div>
                <div className="flex justify-between items-center border-t border-[#D4731A]/10 pt-4">
                  <span className="font-serif font-extrabold text-[#D4731A] text-xl">Rp 18.000</span>
                  <a href="https://wa.me/6281234567890?text=Halo%20Pak%20Bejo%2C%20saya%20mau%20pesan%20Soto%20Lamongan%20Spesial" target="_blank" rel="noopener noreferrer" className="bg-[#3E1F05] text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-[#D4731A] transition-colors shadow-sm">+ Pesan</a>
                </div>
              </div>
            </div>

            {/* Menu 2 - Soto Telur (soto_2.jpg) */}
            <div className="bg-[#FFFBF3] border border-[#D4731A]/15 rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group">
              <div className="h-56 overflow-hidden relative">
                <img src="/soto_2.jpg" alt="Soto Lamongan Telur" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[#D4731A] text-[10px] font-bold uppercase tracking-wider bg-[#FEF0D8] px-2.5 py-0.5 rounded-md inline-block">Populer Kuliner</span>
                  <h3 className="font-serif text-xl font-bold text-[#3E1F05]">Soto Lamongan Telur</h3>
                  <p className="text-[#7A5C44] text-xs font-light leading-relaxed">Pilihan kuah soto bening segar dipadu dengan isian mantap dua butir telur pindang/rebus penuh, kecambah tauge renyah, seledri, dan bihun kenyal.</p>
                </div>
                <div className="flex justify-between items-center border-t border-[#D4731A]/10 pt-4">
                  <span className="font-serif font-extrabold text-[#D4731A] text-xl">Rp 14.000</span>
                  <a href="https://wa.me/6281234567890?text=Halo%20Pak%20Bejo%2C%20saya%20mau%20pesan%20Soto%20Lamongan%20Telur" target="_blank" rel="noopener noreferrer" className="bg-[#3E1F05] text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-[#D4731A] transition-colors shadow-sm">+ Pesan</a>
                </div>
              </div>
            </div>

            {/* Menu 3 - Soto Komplit Jumbo (soto_3.jpg) */}
            <div className="bg-[#FFFBF3] border border-[#D4731A]/15 rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group">
              <div className="h-56 overflow-hidden relative">
                <span className="absolute top-4 right-4 bg-amber-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10 shadow-sm">Porsi Puas</span>
                <img src="/soto_3.jpg" alt="Soto Komplit Jumbo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[#D4731A] text-[10px] font-bold uppercase tracking-wider bg-[#FEF0D8] px-2.5 py-0.5 rounded-md inline-block">Rekomendasi Lapar</span>
                  <h3 className="font-serif text-xl font-bold text-[#3E1F05]">Soto Komplit Jumbo</h3>
                  <p className="text-[#7A5C44] text-xs font-light leading-relaxed">Porsi jumbo super kenyang dengan isian gabungan potongan daging ayam kampung melimpah, jeroan ati ampela pilihan, ekstra koya udang gurih ganda.</p>
                </div>
                <div className="flex justify-between items-center border-t border-[#D4731A]/10 pt-4">
                  <span className="font-serif font-extrabold text-[#D4731A] text-xl">Rp 28.000</span>
                  <a href="https://wa.me/6281234567890?text=Halo%20Pak%20Bejo%2C%20saya%20mau%20pesan%20Soto%20Komplit%20Jumbo" target="_blank" rel="noopener noreferrer" className="bg-[#3E1F05] text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-[#D4731A] transition-colors shadow-sm">+ Pesan</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. REAL TESTIMONIALS */}
      <section id="testimoni" className="py-24 px-6 md:px-16 bg-[#FDF3E3]">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-2">
            <span className="text-[#D4731A] text-xs font-bold tracking-widest uppercase block">Ulasan Jujur</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#3E1F05]">Apa Kata Pelanggan Setia?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-[#D4731A]/10 shadow-2xs space-y-4">
              <div className="text-[#F5C06A] text-sm tracking-widest">★★★★★</div>
              <p className="text-[#7A5C44] text-sm italic font-light leading-relaxed">"Sotonya beda banget dari warung pinggir jalan biasa! Kuahnya kental gurih, bubuk koyanya melimpah gak pelit. Udah 10 tahun saya langganan di sini bareng keluarga besar dan rasanya gak pernah berubah sedikit pun. Juara banget!"</p>
              <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="w-10 h-10 rounded-full bg-[#FEF0D8] flex items-center justify-center text-lg shadow-inner">👩</div>
                <div>
                  <h4 className="text-xs font-bold text-[#3E1F05]">Ibu Rina Susanti</h4>
                  <p className="text-[10px] text-[#7A5C44]">Surabaya · Pelanggan Tetap</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#D4731A]/10 shadow-2xs space-y-4">
              <div className="text-[#F5C06A] text-sm tracking-widest">★★★★★</div>
              <p className="text-[#7A5C44] text-sm italic font-light leading-relaxed">"Soto Lamongan terkonsisten dan terenak yang pernah saya makan selama ini. Potongan daging ayam kampungnya empuk, kuahnya wangi aroma jeruk nipis dan rempah pekat. Harganya sangat merakyat untuk kualitas bahan premium begini!"</p>
              <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="w-10 h-10 rounded-full bg-[#FEF0D8] flex items-center justify-center text-lg shadow-inner">👨</div>
                <div>
                  <h4 className="text-xs font-bold text-[#3E1F05]">Pak Dodi Hartono</h4>
                  <p className="text-[10px] text-[#7A5C44]">Sidoarjo · Google Local Guide</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#D4731A]/10 shadow-2xs space-y-4">
              <div className="text-[#F5C06A] text-sm tracking-widest">★★★★★</div>
              <p className="text-[#7A5C44] text-sm italic font-light leading-relaxed">"Setiap kali agenda pulang kampung mampir ke Lamongan, warung Pak Bejo ini selalu jadi tujuan kuliner paling utama wajib dikunjungi. Kangen berat sama rasa kuah kaldu segar bumbu rempahnya yang ngangenin di lidah."</p>
              <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="w-10 h-10 rounded-full bg-[#FEF0D8] flex items-center justify-center text-lg shadow-inner">👩</div>
                <div>
                  <h4 className="text-xs font-bold text-[#3E1F05]">Dewi Anggraeni</h4>
                  <p className="text-[10px] text-[#7A5C44]">Jakarta · Penikmat Kuliner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DETAILED LOCATION & OPERATIONAL HOURS */}
      <section id="lokasi" className="py-24 px-6 md:px-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <span className="text-[#D4731A] text-xs font-bold tracking-widest uppercase block">Kunjungi Warung Kami</span>
          <h2 className="font-serif text-3xl font-bold text-[#3E1F05] leading-tight">Mampir dan Nikmati <br />Kehangatan Soto Kami</h2>
          <p className="text-[#7A5C44] text-sm font-light leading-relaxed">Kami buka setiap hari sejak pagi buta, siap memanjakan sarapan lezat maupun makan siang santai Anda dengan pelayanan ramah penuh kehangatan.</p>
          
          <div className="space-y-4 pt-2">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-[#FEF0D8] border border-[#D4731A]/20 rounded-xl flex items-center justify-center text-lg flex-shrink-0">📍</div>
              <div className="text-xs">
                <strong className="block text-[#3E1F05] font-medium text-sm mb-0.5">Alamat Lengkap</strong>
                <span className="text-[#7A5C44] leading-relaxed">Jl. Raya Lamongan No. 47, Kec. Lamongan, Kabupaten Lamongan, Jawa Timur 62211</span>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-[#FEF0D8] border border-[#D4731A]/20 rounded-xl flex items-center justify-center text-lg flex-shrink-0">🕐</div>
              <div className="text-xs">
                <strong className="block text-[#3E1F05] font-medium text-sm mb-0.5">Jam Operasional</strong>
                <span className="text-[#7A5C44] leading-relaxed">Setiap Hari: Pukul 06.00 – 14.00 WIB<br /><span className="text-red-600 font-medium">*Kami segera tutup lebih awal setelah porsi kaldu harian habis terjual.</span></span>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-[#FEF0D8] border border-[#D4731A]/20 rounded-xl flex items-center justify-center text-lg flex-shrink-0">📱</div>
              <div className="text-xs">
                <strong className="block text-[#3E1F05] font-medium text-sm mb-0.5">Hubungi Customer Service</strong>
                <span className="text-[#7A5C44] leading-relaxed">WhatsApp: 0812-3456-7890 <br />Instagram resmi: @sotolamonganpakbejo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Simulated Web Maps Widget */}
        <a 
          href="https://maps.google.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-[#FEF0D8] border border-[#D4731A]/15 rounded-3xl h-72 md:h-80 flex flex-col justify-center items-center gap-2 group cursor-pointer shadow-xs hover:bg-[#FDE8C0] transition-colors overflow-hidden"
        >
          <span className="text-4xl transition-transform duration-300 group-hover:scale-110">🗺️</span>
          <span className="text-xs font-bold text-[#3E1F05]">Jl. Raya Lamongan No. 47</span>
          <span className="text-[11px] text-[#D4731A] font-medium">Buka Petunjuk Jalan Google Maps →</span>
        </a>
      </section>

      {/* 8. FOOTER BAR */}
      <footer className="bg-[#2A1500] text-stone-500 text-center py-10 text-xs px-6 border-t border-[#3E1F05]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <p className="text-white font-serif text-sm font-bold">Soto <span className="text-[#F5C06A]">Lamongan</span> Pak Bejo</p>
            <p className="text-[10px] text-stone-500 mt-0.5">Menjaga resep autentik cita rasa kuliner nusantara sejak 1987</p>
          </div>
          <p className="text-[11px]">© 2026 Soto Lamongan Pak Bejo. Seluruh Hak Cipta Dilindungi.</p>
        </div>
      </footer>

    </div>
  );
}