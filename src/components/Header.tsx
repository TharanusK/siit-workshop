import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <section className="mb-12 text-center sm:text-left relative">
      <div className="absolute right-0 top-0">
        <ThemeToggle />
      </div>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">
        THARANUS KONGJAROON
      </h1>
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 text-sm text-slate-600 dark:text-slate-400 mt-4 justify-center sm:justify-start">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>Nonthaburi, Thailand 11000</span>
        </div>
        <Link href="tel:+66890418913" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
          <Phone className="w-4 h-4" />
          <span>+66 89 041 8913</span>
        </Link>
        <Link href="mailto:tharanus.k@gmail.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
          <Mail className="w-4 h-4" />
          <span>tharanus.k@gmail.com</span>
        </Link>
        <Link href="https://tharanusk-resume.vercel.app/" target="_blank" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
          <Globe className="w-4 h-4" />
          <span>Portfolio</span>
        </Link>
      </div>
      <div className="mt-2 text-xs text-slate-500 dark:text-slate-500">
        129/865 soi 41 Perfect Place Rattanathibet Bang Rak Noi Mueang Nonthaburi 11000
      </div>
    </section>
  );
}
