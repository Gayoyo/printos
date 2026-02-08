import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cloud, Smartphone, Tablet, Monitor } from 'lucide-react';

export default function Solutions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Solusi Terintegrasi untuk Workshop Anda
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Fitur-fitur powerful yang dirancang khusus untuk industri percetakan
          </p>
        </motion.div>

        <div className="space-y-32">
          {/* Feature 1 & 2 tetap sama seperti kode Anda sebelumnya... */}
          {/* Saya langsung ke perbaikan Feature 3 agar fokus */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold mb-4">
                Feature #3
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Tanpa Instalasi Ribet
              </h3>
              <p className="text-lg text-slate-400 leading-relaxed mb-6">
                Cloud-based system yang bisa diakses dari HP, Tablet, atau Laptop di mana saja. Tidak perlu beli server mahal atau instalasi software berat.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <Cloud className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Akses via browser, no installation needed</span>
                </li>
                <li className="flex items-start">
                  <Cloud className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Data tersimpan aman dengan backup otomatis</span>
                </li>
                <li className="flex items-start">
                  <Cloud className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Akses multi-device untuk seluruh tim produksi</span>
                </li>
              </ul>
            </div>

            {/* PERBAIKAN VISUAL MULTI-DEVICE DI SINI */}
            <div className="relative h-[450px] w-full flex items-center justify-center">
              {/* Glow Background Effect */}
              <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full"></div>

              <div className="relative w-full max-w-[500px] h-full">
                
                {/* LAPTOP (Paling Belakang) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute top-0 right-0 w-[80%] aspect-video bg-slate-900 border-4 border-slate-800 rounded-xl shadow-2xl overflow-hidden"
                  style={{ zIndex: 10 }}
                >
                  <img src="/dashboard.png" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-500" alt="Desktop View" />
                  <div className="absolute bottom-0 w-full h-3 bg-slate-800"></div>
                </motion.div>

                {/* TABLET (Tengah) */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="absolute bottom-10 left-0 w-[50%] aspect-[3/4] bg-slate-900 border-[6px] border-slate-800 rounded-[2.5rem] shadow-2xl overflow-hidden ring-1 ring-white/10"
                  style={{ zIndex: 20 }}
                >
                  <img src="/tahapan.png" className="w-full h-full object-cover" alt="Tablet View" />
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-10 h-1 bg-slate-700 rounded-full"></div>
                </motion.div>

                {/* SMARTPHONE (Paling Depan) */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute bottom-0 left-[35%] w-[25%] aspect-[9/19] bg-black border-[5px] border-slate-800 rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden ring-1 ring-white/20"
                  style={{ zIndex: 30 }}
                >
                  <img src="/dependency.png" className="w-full h-full object-cover" alt="Phone View" />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 bg-slate-800 rounded-b-2xl"></div>
                </motion.div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}