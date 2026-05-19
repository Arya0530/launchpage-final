export default function Team() {
  return (
    <section id="tim" className="py-24 bg-[#111827] px-4 sm:px-6 border-b border-slate-800">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Tim di Balik <span className="text-yellow-400">Launchpage</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Tiga pengembang lokal yang siap mengubah ide bisnis Anda menjadi produk digital modern.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Arya */}
          <div className="bg-[#1f2937] rounded-3xl p-8 text-center border border-slate-700/50">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-cyan-300 p-0.5 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <div className="w-full h-full bg-[#1f2937] rounded-full flex items-center justify-center overflow-hidden">
                {/* Illustrated avatar — Arya: Frontend dev */}
                <svg viewBox="0 0 80 80" width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="40" cy="40" r="40" fill="#1e3a5f"/>
                  <ellipse cx="40" cy="28" rx="16" ry="14" fill="#1e293b"/>
                  <ellipse cx="40" cy="35" rx="13" ry="14" fill="#fcd9b0"/>
                  <ellipse cx="35" cy="33" rx="2" ry="2.5" fill="#1e293b"/>
                  <ellipse cx="45" cy="33" rx="2" ry="2.5" fill="#1e293b"/>
                  <ellipse cx="35.6" cy="32.4" rx="0.8" ry="0.8" fill="white"/>
                  <ellipse cx="45.6" cy="32.4" rx="0.8" ry="0.8" fill="white"/>
                  <path d="M35 39 Q40 43 45 39" stroke="#c2855a" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                  <path d="M20 70 Q20 55 30 52 L40 57 L50 52 Q60 55 60 70 Z" fill="#2563eb"/>
                  <text x="35" y="65" fontSize="8" fill="white" fontFamily="monospace">&lt;/&gt;</text>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Arya</h3>
            <p className="text-blue-400 text-sm font-semibold mb-4">Frontend & UI/UX</p>
            <p className="text-slate-400 text-xs leading-relaxed">Fokus pada antarmuka pengguna yang memanjakan mata dan performa web optimal.</p>
          </div>

          {/* Febri */}
          <div className="bg-[#1f2937] rounded-3xl p-8 text-center border border-slate-700/50">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 p-0.5 shadow-[0_0_20px_rgba(251,191,36,0.3)]">
              <div className="w-full h-full bg-[#1f2937] rounded-full flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 80 80" width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="40" cy="40" r="40" fill="#1a1f2e"/>
                  <ellipse cx="40" cy="26" rx="15" ry="11" fill="#111827"/>
                  <ellipse cx="40" cy="36" rx="13" ry="14" fill="#e8b88a"/>
                  <ellipse cx="40" cy="46" rx="9" ry="4" fill="#c49060" opacity="0.5"/>
                  <ellipse cx="35" cy="33" rx="2" ry="2.5" fill="#111827"/>
                  <ellipse cx="45" cy="33" rx="2" ry="2.5" fill="#111827"/>
                  <ellipse cx="35.6" cy="32.4" rx="0.8" ry="0.8" fill="white"/>
                  <ellipse cx="45.6" cy="32.4" rx="0.8" ry="0.8" fill="white"/>
                  <path d="M36 39.5 Q40 41.5 44 39.5" stroke="#a0714a" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                  <path d="M20 70 Q20 55 30 52 L40 57 L50 52 Q60 55 60 70 Z" fill="#111827"/>
                  <text x="34" y="65" fontSize="7" fill="#fbbf24" fontFamily="monospace">API</text>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Febri</h3>
            <p className="text-yellow-400 text-sm font-semibold mb-4">Backend Developer</p>
            <p className="text-slate-400 text-xs leading-relaxed">Arsitek di balik layar. Memastikan sistem berjalan cepat, aman, dan tanpa hambatan.</p>
          </div>

          {/* Risa */}
          <div className="bg-[#1f2937] rounded-3xl p-8 text-center border border-slate-700/50">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 p-0.5 shadow-[0_0_20px_rgba(244,63,94,0.3)]">
              <div className="w-full h-full bg-[#1f2937] rounded-full flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 80 80" width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="40" cy="40" r="40" fill="#2d1b2e"/>
                  <ellipse cx="40" cy="25" rx="16" ry="13" fill="#3b1f1a"/>
                  <rect x="24" y="25" width="6" height="22" rx="3" fill="#3b1f1a"/>
                  <rect x="50" y="25" width="6" height="22" rx="3" fill="#3b1f1a"/>
                  <ellipse cx="40" cy="36" rx="12" ry="13" fill="#f5c8a0"/>
                  <ellipse cx="35" cy="33" rx="2.2" ry="2.2" fill="#2d1b2e"/>
                  <ellipse cx="45" cy="33" rx="2.2" ry="2.2" fill="#2d1b2e"/>
                  <ellipse cx="35.6" cy="32.5" rx="0.8" ry="0.8" fill="white"/>
                  <ellipse cx="45.6" cy="32.5" rx="0.8" ry="0.8" fill="white"/>
                  <ellipse cx="32" cy="38" rx="3" ry="2" fill="#f9a8d4" opacity="0.5"/>
                  <ellipse cx="48" cy="38" rx="3" ry="2" fill="#f9a8d4" opacity="0.5"/>
                  <path d="M36 40 Q40 44 44 40" stroke="#c06080" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                  <path d="M20 70 Q20 55 30 52 L40 57 L50 52 Q60 55 60 70 Z" fill="#be185d"/>
                  <text x="34" y="65" fontSize="7" fill="white" fontFamily="sans-serif">PM</text>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Risa</h3>
            <p className="text-rose-400 text-sm font-semibold mb-4">Project Manager / QA</p>
            <p className="text-slate-400 text-xs leading-relaxed">Menjaga alur kerja tim agar semua fitur dan desain sesuai standar kualitas tinggi.</p>
          </div>

        </div>
      </div>
    </section>
  );
}