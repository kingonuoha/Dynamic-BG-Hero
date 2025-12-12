import React from 'react';
import { Globe, Search, User } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

export const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12">
      {/* Logo */}
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="bg-white/10 p-2 rounded-full backdrop-blur-md group-hover:bg-white/20 transition-all">
            <Globe className="w-5 h-5 text-white" />
        </div>
        <span className="text-white font-bold tracking-widest text-sm heading-font">GLOBE EXPRESS</span>
      </div>

      {/* Center Links - Desktop */}
      <div className="hidden lg:flex items-center gap-8 bg-black/20 backdrop-blur-sm px-8 py-3 rounded-full border border-white/10">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-white/70 hover:text-white text-xs uppercase tracking-wider font-medium transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-4">
        <button className="p-2 text-white/80 hover:text-white transition-colors">
            <Search className="w-5 h-5" />
        </button>
        <button className="p-2 text-white/80 hover:text-white transition-colors">
            <User className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
};