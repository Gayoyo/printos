import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
              Ubah Workshop Percetakan Anda
            </span>
            <br />
            <span className="text-white">Menjadi Digital Factory</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Solusi manajemen produksi yang didesain khusus untuk pengusaha Digital Printing, Offset, dan Hardcover Box.
            Eliminasi human error dan pantau waste bahan dalam satu dashboard terintegrasi.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col items-center space-y-4"
          >
            <motion.a
              href="#audit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-xl font-bold text-lg text-white transition-all duration-300 shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 animate-pulse"
            >
              Jadwalkan Audit Gratis
            </motion.a>

            <p className="text-sm text-slate-400 max-w-md">
              Analisis alur produksi workshop Anda selama 30 menit via Zoom/WA.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-6xl mx-auto mt-16"
        >
          <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 p-4 shadow-2xl">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            <div className="relative rounded-lg overflow-hidden bg-slate-950">
              <img
                src="/dashboard.png"
                alt="Printing OS Dashboard"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
