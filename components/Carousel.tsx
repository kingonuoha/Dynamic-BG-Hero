import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Destination } from '../types';

interface CarouselProps {
  destinations: Destination[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export const Carousel: React.FC<CarouselProps> = ({ destinations, activeIndex, onSelect }) => {
  // We want to show the NEXT 3 items, wrapping around
  const visibleItems = [1, 2, 3].map((offset) => {
    const index = (activeIndex + offset) % destinations.length;
    return destinations[index];
  });

  return (
    <div className="absolute right-0 bottom-0 top-0 w-full md:w-1/2 lg:w-[45%] z-20 flex items-center justify-end pr-0 md:pr-12 pointer-events-none">
      <div className="flex gap-4 md:gap-6 overflow-hidden w-full justify-end h-[35vh] md:h-[45vh] items-end pb-24 md:pb-32 px-6 md:px-0">
        <AnimatePresence mode="popLayout">
          {visibleItems.map((item, i) => (
            <motion.div
              key={item.id}
              layoutId={`card-${item.id}`} // Shared layout ID for smooth movement
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, ease: "anticipate" }}
              className={`
                relative flex-shrink-0 cursor-pointer pointer-events-auto group overflow-hidden rounded-xl
                w-[120px] h-[180px] md:w-[160px] md:h-[240px]
                transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
              `}
              onClick={() => {
                // Find the actual index of this item to jump to it
                 const originalIndex = destinations.findIndex(d => d.id === item.id);
                 onSelect(originalIndex);
              }}
            >
              {/* Card Image */}
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Text Content */}
              <div className="absolute bottom-4 left-4 right-4">
                 <p className="text-[10px] text-yellow-400 uppercase tracking-wider mb-1">
                    {item.country}
                 </p>
                 <h3 className="text-white text-sm md:text-lg font-bold leading-tight heading-font uppercase">
                    {item.title.split(' ')[0]} {/* Show first word for compactness */}
                 </h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};