import { Printer, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Printer className="w-8 h-8 text-cyan-400" />
            <span className="text-xl font-bold text-white">PackFlow</span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} PackFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
