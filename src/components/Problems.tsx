import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { AlertTriangle, FileStack, UserX } from 'lucide-react';

const problems = [
  {
    icon: FileStack,
    title: 'Data Produksi Berantakan',
    description: 'Order masuk dari berbagai channel, catatan manual di buku/Excel, sulit tracking progress real-time.',
  },
  {
    icon: AlertTriangle,
    title: 'Waste Bahan Tidak Tercatat',
    description: 'Kehilangan ribuan rupiah setiap hari karena tidak ada sistem pencatatan waste vinyl, kertas, dan tinta.',
  },
  {
    icon: UserX,
    title: 'Admin Input Ganda',
    description: 'Staff input data berkali-kali di berbagai tempat, membuang waktu dan meningkatkan risiko human error.',
  },
];

export default function Problems() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Masalah yang Sering Dialami
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Workshop percetakan menghadapi tantangan operasional yang menguras waktu dan biaya
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>

                <div className="relative bg-slate-900 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 h-full">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-red-400" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{problem.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
