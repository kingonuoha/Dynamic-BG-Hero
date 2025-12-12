import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Destination } from '../types';

interface BackgroundProps {
  currentDestination: Destination;
  direction: number;
}

export const Background: React.FC<BackgroundProps> = ({ currentDestination, direction }) => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black">
      <AnimatePresence mode="popLayout" initial={false} custom={direction}>
        <motion.div
          key={currentDestination.id}
          custom={direction}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="absolute inset-0 w-full h-full"
        >
            {/* Dark Overlay for readability */}
          <div className="absolute inset-0 bg-black/30 z-10" />
          {/* Gradient for bottom text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 z-10" />
          
          <img
            src={currentDestination.imageUrl}
            alt={currentDestination.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};