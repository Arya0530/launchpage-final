export default function Portfolio() {
  return (
    <section id="portofolio" className="py-24 bg-white px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Proyek yang Pernah Kami Luncurkan</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1 – Anther Cafe */}
          <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden flex flex-col group hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] transition-shadow duration-300">
            {/* Foto Dummy Unsplash - Cafe/Coffee */}
            <div className="h-56 w-full relative overflow-hidden bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Aether Cafe Web App" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">Web App & UI/UX</p>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Anther Cafe Web App</h3>
              <p className="text-slate-500 text-sm mb-6 flex-1">
                Membangun website digital dan platform pemesanan untuk kenyamanan dan efisiensi pelanggan.
              </p>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-xs font-medium mb-0.5">IMPACT</p>
                  <p className="text-slate-900 font-bold text-sm">40% Conversion Increase</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600 text-xs font-black">↑</div>
              </div>
            </div>
          </div>

          {/* Card 2 – Novatech */}
          <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden flex flex-col group hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] transition-shadow duration-300">
            {/* Foto Dummy Unsplash - Tech Startup/Meeting */}
            <div className="h-56 w-full relative overflow-hidden bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Novatech Innovations" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">Corporate Landing</p>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Novatech Innovations</h3>
              <p className="text-slate-500 text-sm mb-6 flex-1">
                Membantu portal tech B2B mendapatkan leads melalui desain web konversi tinggi.
              </p>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-xs font-medium mb-0.5">IMPACT</p>
                  <p className="text-slate-900 font-bold text-sm">75k+ Leads Generated</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 text-xs font-black">↑</div>
              </div>
            </div>
          </div>

          {/* Card 3 – Chic Thread */}
          <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden flex flex-col group hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] transition-shadow duration-300">
            {/* Foto Dummy Unsplash - Ecommerce/Fashion/Laptop */}
            <div className="h-56 w-full relative overflow-hidden bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Chic Thread Co." 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">E-Commerce UI</p>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Chic Thread Co.</h3>
              <p className="text-slate-500 text-sm mb-6 flex-1">
                Meningkatkan retensi dan sales melalui re-desain arsitektur informasi website.
              </p>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-xs font-medium mb-0.5">IMPACT</p>
                  <p className="text-slate-900 font-bold text-sm">Seamless Mobile UX</p>
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