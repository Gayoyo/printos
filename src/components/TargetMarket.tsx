import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Printer, Package, Layers, Monitor } from 'lucide-react';

const markets = [
  {
    icon: Monitor,
    name: 'Digital Printing',
  },
  {
    icon: Printer,
    name: 'Percetakan Offset',
  },
  {
    icon: Package,
    name: 'Hardcover Box Specialist',
  },
  {
    icon: Layers,
    name: 'Workshop Advertising',
  },
];

export default function TargetMarket() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ideal untuk
          </h2>
          <p className="text-lg text-slate-400">
            Dirancang khusus untuk berbagai jenis bisnis percetakan
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {markets.map((market, index) => {
            const Icon = market.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>

                <div className="relative bg-slate-900 backdrop-blur-sm p-6 rounded-xl border border-slate-800 text-center h-full flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{market.name}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 backdrop-blur-sm p-8 sm:p-12 rounded-2xl border border-slate-700 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Siap Transformasi Digital?
            </h3>
            <p className="text-lg text-slate-300 mb-8">
              Dapatkan audit gratis untuk workshop Anda dan temukan peluang efisiensi yang tersembunyi
            </p>

            <motion.a
              href="#audit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-xl font-bold text-lg text-white transition-all duration-300 shadow-2xl shadow-cyan-500/50"
            >
              Jadwalkan Audit Gratis Sekarang
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
