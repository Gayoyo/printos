import { motion } from 'framer-motion';
import { Printer } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-slate-900/70 border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Printer className="w-8 h-8 text-cyan-400" />
            <span className="text-xl font-bold text-white">PackFlow</span>
          </div>

          <a
            href="#audit"
            className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg font-semibold text-white transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50"
          >
            Jadwalkan Audit
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
