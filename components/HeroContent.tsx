import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Play } from 'lucide-react';
import { Destination } from '../types';

interface HeroContentProps {
  destination: Destination;
}

export const HeroContent: React.FC<HeroContentProps> = ({ destination }) => {
  return (
    <div className="relative z-20 h-full flex flex-col justify-end pb-24 md:pb-32 pl-6 md:pl-16 lg:pl-24 max-w-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={destination.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-start gap-4"
        >
          {/* Breadcrumb/Subtitle */}
          <div className="flex items-center gap-2 text-yellow-400">
            <div className="h-[2px] w-8 bg-yellow-400" />
            <span className="uppercase tracking-widest text-sm font-medium">
              {destination.subtitle}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] text-white heading-font uppercase break-words drop-shadow-lg">
            {destination.title}
          </h1>

          {/* Description */}
          <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-md mt-4 font-light">
            {destination.description}
          </p>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-sm hover:bg-white/20 transition-all group"
          >
            <MapPin className="w-4 h-4 text-yellow-400" />
            <span className="text-xs font-bold tracking-widest uppercase">Discover Location</span>
          </motion.button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};