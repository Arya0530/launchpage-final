import React from 'react';

export default function WingkoFullPage() {
  return (
    <div className="bg-[#FAF6EE] text-[#2E1C0E] font-sans antialiased min-h-screen selection:bg-[#C9943A]/20 selection:text-[#3A2010]">
      
      {/* 1. PREMIUM HEADER / NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-5 bg-[#FAF6EE]/90 backdrop-blur-md border-b border-[#5C3A1E]/10 shadow-3xs">
        <div className="font-serif text-xl font-bold tracking-tight text-[#3A2010]">
          Wingko <span className="text-[#C9943A]">Babat</span> <span className="text-[#7A5C44] font-sans text-xs font-normal">Asli Lamongan</span>
        </div>
        
        <ul className="hidden md:flex gap-10 list-none text-xs font-medium uppercase tracking-widest text-[#7A5C44]">
          <li><a href="#tentang" className="hover:text-[#C9943A] transition-colors">Tentang Kami</a></li>
          <li><a href="#produk" className="hover:text-[#C9943A] transition-colors">Pilihan Produk</a></li>
          <li><a href="#testimoni" className="hover:text-[#C9943A] transition-colors">Testimoni</a></li>
          <li><a href="#pesan" className="hover:text-[#C9943A] transition-colors">Form Pemesanan</a></li>
        </ul>

        <a 
          href="#pesan" 
          className="bg-[#3A2010] text-white px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#C9943A] transition-all hover:scale-105 active:scale-95 shadow-md shadow-[#3A2010]/20"
        >
          Pesan Sekarang
        </a>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative pt-36 px-6 md:px-16 pb-24 md:py-40 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#F5EDD8] rounded-full blur-3xl pointer-events-none opacity-70"></div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-[#E8C678]/20 text-[#3A2010] text-xs font-semibold px-4 py-1.5 rounded-full border border-[#C9943A]/30 uppercase tracking-widest">
              🌴 Asli Lamongan · Sejak 1978
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#3A2010] leading-[1.15] tracking-tight">
              Kelezatan <span className="italic text-[#C9943A]">Wingko Babat</span><br />
              yang Tak Terlupakan
            </h1>
            <p className="text-[#7A5C44] text-base font-light leading-relaxed max-w-md mx-auto md:mx-0">
              Dibuat murni dengan kelapa pilihan, kemurnian gula aren asli, dan warisan resep turun-temurun. Setiap gigitan membawa kenangan kampung halaman yang hangat dan autentik.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
              <a href="#produk" className="bg-[#3A2010] text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-[#C9943A] transition-all shadow-lg shadow-[#3A2010]/25 hover:-translate-y-0.5">
                Lihat Varian Produk
              </a>
              <a href="#pesan" className="bg-transparent border-2 border-[#7A5C44]/30 text-[#3A2010] px-7 py-3 rounded-full text-sm font-medium hover:border-[#3A2010] transition-all hover:-translate-y-0.5">
                Isi Form Order →
              </a>
            </div>
          </div>

          {/* Hero Visual Studio Plate Animation */}
          <div className="flex justify-center relative">
            <div className="relative w-72 sm:w-85 md:w-96 h-72 sm:h-85 md:h-96 bg-white rounded-full flex items-center justify-center border border-[#C9943A]/10 shadow-2xl">
              <span className="text-8xl filter drop-shadow-2xl">🥥</span>
              <div className="absolute bottom-4 left-4 bg-[#3A2010] text-[#E8C678] border border-[#C9943A]/20 rounded-2xl px-4 py-2 text-center shadow-md">
                <span className="font-serif font-bold text-lg block">10rb+</span>
                <span className="text-[9px] uppercase tracking-wider text-white/80">Pelanggan Puas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT & BAHAN BAKU (Memasukkan kelapa_1.jpg) */}
      <section id="tentang" className="py-24 px-6 md:px-16 bg-white border-y border-[#5C3A1E]/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#C9943A] text-xs font-bold tracking-widest uppercase block">Warisan Rasa Tradisional</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#3A2010] leading-tight">
              Kisah Rasa dari <br />Tanah <span className="italic text-[#C9943A]">Babat Lamongan</span>
            </h2>
            <p className="text-[#7A5C44] text-sm leading-relaxed font-light">
              Wingko Babat kami hadir sejak tahun 1978, dirintis pertama kali oleh nenek kami di Kecamatan Babat, Lamongan. Selama lebih dari empat dekade, kami berkomitmen penuh menjaga keaslian resep pusaka — tanpa zat pengawet, tanpa pemanis buatan.
            </p>
            <ul className="space-y-2.5 text-xs text-[#7A5C44] font-light">
              <li className="flex gap-2 items-center">✦ Kelapa parut segar dipilih setiap hari dari petani lokal Lamongan</li>
              <li className="flex gap-2 items-center">✦ Gula aren organik asli memberikan rasa manis legit alami yang kaya</li>
              <li className="flex gap-2 items-center">✦ Dipanggang tradisional menggunakan arang kayu untuk aroma khas</li>
            </ul>
          </div>

          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-5 h-48 rounded-2xl overflow-hidden border border-slate-100 shadow-md">
              <img src="/kelapa_1.jpg" alt="Bahan Kelapa Parut Segar" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-7 bg-[#FAF6EE] p-6 rounded-3xl border border-[#5C3A1E]/10 space-y-4">
              <div className="flex gap-3 items-start">
                <span className="text-2xl">🌴</span>
                <div>
                  <h4 className="text-sm font-semibold text-[#3A2010]">Kelapa Pilihan</h4>
                  <p className="text-[#7A5C44] text-xs mt-0.5">Diparik segar setiap pagi dari perkebunan lokal Lamongan.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-2xl">🔥</span>
                <div>
                  <h4 className="text-sm font-semibold text-[#3A2010]">Panggang Manual</h4>
                  <p className="text-[#7A5C44] text-xs mt-0.5">Proses pemanggangan arang menciptakan karamelisasi pinggiran wingko yang autentik.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUK CATALOG GRID (Memasukkan wingko_1, wingko_2, wingko_3) */}
      <section id="produk" className="py-24 px-6 md:px-16 max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-2">
          <span className="text-[#C9943A] text-xs font-bold tracking-widest uppercase block">Pilihan Menu</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#3A2010]">Varian Produk Wingko Premium</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Varian 1 (wingko_1.jpg) */}
          <div className="bg-white border border-[#5C3A1E]/10 rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group">
            <div className="h-52 overflow-hidden">
              <img src="/wingko_1.jpg" alt="Wingko Original" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-1">
                <span className="text-[#C9943A] text-[10px] font-bold uppercase tracking-wider bg-[#F5EDD8] px-2.5 py-0.5 rounded-md inline-block">Resep Klasik</span>
                <h3 className="font-serif text-lg font-bold text-[#3A2010]">Wingko Original</h3>
                <p className="text-[#7A5C44] text-xs font-light leading-relaxed">Resep warisan asli turun-temurun sejak 1978. Perpaduan kelapa parut segar melimpah, gula aren, dan tepung ketan premium.</p>
              </div>
              <div className="flex justify-between items-center border-t border-slate-100 pt-4">
                <span className="font-serif font-bold text-[#3A2010] text-lg">Rp 3.500 <span className="text-xs text-slate-400 font-sans">/ pcs</span></span>
                <a href="#pesan" className="bg-[#3A2010] text-white px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-[#C9943A] transition-colors">Pesan</a>
              </div>
            </div>
          </div>

          {/* Varian 2 (wingko_2.jpg) */}
          <div className="bg-white border border-[#5C3A1E]/10 rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group">
            <div className="h-52 overflow-hidden">
              <img src="/wingko_2.jpg" alt="Wingko Coklat" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-1">
                <span className="text-[#C9943A] text-[10px] font-bold uppercase tracking-wider bg-[#F5EDD8] px-2.5 py-0.5 rounded-md inline-block">Favorit Milenial</span>
                <h3 className="font-serif text-lg font-bold text-[#3A2010]">Wingko Cokelat</h3>
                <p className="text-[#7A5C44] text-xs font-light leading-relaxed">Perpaduan adonan gurih serutan kelapa tradisional dengan isian cokelat premium yang lumer manis pas di lidah.</p>
              </div>
              <div className="flex justify-between items-center border-t border-slate-100 pt-4">
                <span className="font-serif font-bold text-[#3A2010] text-lg">Rp 4.000 <span className="text-xs text-slate-400 font-sans">/ pcs</span></span>
                <a href="#pesan" className="bg-[#3A2010] text-white px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-[#C9943A] transition-colors">Pesan</a>
              </div>
            </div>
          </div>

          {/* Varian 3 (wingko_3.jpg) */}
          <div className="bg-white border border-[#5C3A1E]/10 rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group">
            <div className="h-52 overflow-hidden">
              <img src="/wingko_3.jpg" alt="Paket Oleh-Oleh Hampers" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-1">
                <span className="text-amber-700 text-[10px] font-bold uppercase tracking-wider bg-amber-100 px-2.5 py-0.5 rounded-md inline-block">Hampers Eksklusif</span>
                <h3 className="font-serif text-lg font-bold text-[#3A2010]">Paket Box Oleh-Oleh</h3>
                <p className="text-[#7A5C44] text-xs font-light leading-relaxed">Isi 20 pcs wingko aneka varian rasa mix campur, dikemas cantik dalam kotak kemasan premium. Sangat cocok untuk hadiah keluarga.</p>
              </div>
              <div className="flex justify-between items-center border-t border-slate-100 pt-4">
                <span className="font-serif font-bold text-[#3A2010] text-lg">Rp 75.000 <span className="text-xs text-slate-400 font-sans">/ box</span></span>
                <a href="#pesan" className="bg-[#3A2010] text-white px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-[#C9943A] transition-colors">Pesan</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS SECTION */}
      <section id="testimoni" className="py-24 px-6 md:px-16 bg-[#3A2010] text-white rounded-t-[3rem]">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-1">
            <span className="text-[#E8C678] text-xs font-bold uppercase tracking-widest block">Testimoni Nyata</span>
            <h2 className="font-serif text-3xl font-bold text-[#FAF6EE]">Apa Kata Mereka?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[#2E1C0E]">
            <div className="bg-white p-6 rounded-2xl space-y-3">
              <div className="text-[#C9943A] text-xs">★★★★★</div>
              <p className="text-[#7A5C44] text-xs italic font-light leading-relaxed">"Rasanya beneran beda sama wingko jalanan biasa. Kerasa kelapa mudanya parut segar, manisnya pas dari gula aren alami asli dan gak bikin eneg!"</p>
              <p className="text-[11px] font-bold text-[#3A2010] mt-2">👩 Ratih Dewi <span className="font-normal text-slate-400">· Surabaya</span></p>
            </div>
            <div className="bg-white p-6 rounded-2xl space-y-3">
              <div className="text-[#C9943A] text-xs">★★★★★</div>
              <p className="text-[#7A5C44] text-xs italic font-light leading-relaxed">"Saya order 10 paket hampers kemarin buat oleh-oleh lebaran kantor, boks boksnya dikemas cantik premium, pengiriman aman kilat sampai Sidoarjo."</p>
              <p className="text-[11px] font-bold text-[#3A2010] mt-2">👨 Budi Winarso <span className="font-normal text-slate-400">· Sidoarjo</span></p>
            </div>
            <div className="bg-white p-6 rounded-2xl space-y-3">
              <div className="text-[#C9943A] text-xs">★★★★★</div>
              <p className="text-[#7A5C44] text-xs italic font-light leading-relaxed">"Varian cokelatnya juara! Perpaduan rasa gurih kelapa panggang arang tradisional ketemu rasa cokelat lumer bener-bener nagih di lidah anak-anak."</p>
              <p className="text-[11px] font-bold text-[#3A2010] mt-2">👩 Sari Pratiwi <span className="font-normal text-slate-400">· Malang</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ORDER FORM & INTERACTIVE INPUT (UX FORM RE-DESIGN FROM HTML) */}
      <section id="pesan" className="py-24 px-6 md:px-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-4">
          <span className="text-[#C9943A] text-xs font-bold block uppercase tracking-wider">Pesan Sekarang</span>
          <h3 className="font-serif text-3xl font-bold text-[#3A2010]">Siap Dikirim Ke <br />Seluruh Indonesia</h3>
          <p className="text-[#7A5C44] text-sm font-light leading-relaxed">Isi formulir pemesanan cepat di samping kanan. Sistem kami akan otomatis merangkum data dan menghubungkan Anda langsung ke WhatsApp resmi kami.</p>
          <div className="space-y-2 pt-2 text-xs text-[#7A5C44]">
            <p>🏪 <strong>Alamat Toko:</strong> Jl. Raya Babat No. 45, Lamongan, Jawa Timur</p>
            <p>🕐 <strong>Jam Buka:</strong> Setiap Hari, Pukul 07.00 – 20.00 WIB</p>
          </div>
        </div>

        {/* Form Interactive Input */}
        <div className="bg-white border border-[#5C3A1E]/12 rounded-3xl p-6 md:p-8 shadow-sm space-y-4">
          <h4 className="font-serif font-bold text-[#3A2010] text-lg border-b border-slate-100 pb-2">Form Pemesanan Cepat</h4>
          <div className="space-y-3 text-xs">
            <div className="space-y-1">
              <label className="text-[#7A5C44] font-medium block">Nama Lengkap</label>
              <input type="text" placeholder="Contoh: Budi Santoso" className="w-full p-2.5 bg-[#FAF6EE] rounded-xl border border-slate-200 outline-none focus:border-[#C9943A] transition-colors" />
            </div>
            <div className="space-y-1">
              <label className="text-[#7A5C44] font-medium block">Pilih Varian Produk</label>
              <select className="w-full p-2.5 bg-[#FAF6EE] rounded-xl border border-slate-200 outline-none focus:border-[#C9943A] transition-colors">
                <option>Wingko Original (Rp 3.500/pcs)</option>
                <option>Wingko Coklat (Rp 4.000/pcs)</option>
                <option>Paket Oleh-Oleh 20pcs (Rp 75.000)</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-[#7A5C44] font-medium block">Catatan Tambahan</label>
              <textarea placeholder="Jumlah pesanan, Alamat kirim lengkap..." className="w-full p-2.5 bg-[#FAF6EE] rounded-xl border border-slate-200 outline-none focus:border-[#C9943A] transition-colors min-h-[70px] resize-none" />
            </div>
            <button className="w-full bg-[#3A2010] text-white text-center py-3 rounded-xl font-bold hover:bg-[#C9943A] transition-colors shadow-3xs cursor-pointer">
              Kirim Pesanan Via WhatsApp 💬
            </button>
          </div>
        </div>
      </section>

      {/* 7. PREMIUM FOOTER BAR */}
      <footer className="bg-[#3A2010] text-amber-100/50 text-center py-8 text-xs px-6 border-t border-[#200f05]">
        <p>© 2026 <span className="text-[#E8C678] font-serif font-semibold">Wingko Babat Asli Lamongan</span> · Dibuat dengan ❤️ di Jawa Timur · Sejak 1978</p>
      </footer>

    </div>
  );
}