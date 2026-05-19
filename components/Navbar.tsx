import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo dengan Image */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 relative overflow-hidden rounded-lg">
              <Image 
                src="/logo-launchpage.jpg" 
                alt="Launchpage Logo" 
                fill 
                className="object-cover"
              />
            </div>
            <span className="font-extrabold text-slate-900 text-lg tracking-tight">LAUNCHPAGE.</span>
          </a>

          {/* Links */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <li><a href="#layanan" className="hover:text-blue-600 transition-colors">Layanan</a></li>
            <li><a href="#portofolio" className="hover:text-blue-600 transition-colors">Portofolio</a></li>
            <li><a href="#harga" className="hover:text-blue-600 transition-colors">Harga</a></li>
            <li><a href="#tim" className="hover:text-blue-600 transition-colors">Tim Kami</a></li>
          </ul>

          {/* CTA Button */}
          <a href="https://wa.me/6281230813044" target="_blank" rel="noreferrer"
            className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 text-sm font-bold px-6 py-2.5 rounded-full transition-all duration-300">
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </nav>
  );
}