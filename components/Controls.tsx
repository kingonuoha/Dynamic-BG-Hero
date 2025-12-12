import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ControlsProps {
  currentIndex: number;
  totalLength: number;
  onNext: () => void;
  onPrev: () => void;
}

export const Controls: React.FC<ControlsProps> = ({ currentIndex, totalLength, onNext, onPrev }) => {
  const formatNumber = (num: number) => (num < 10 ? `0${num}` : num);

  return (
    <>
      {/* Navigation Arrows (Bottom Leftish) */}
      <div className="absolute bottom-8 md:bottom-12 left-6 md:left-24 z-30 flex gap-4">
        <button
          onClick={onPrev}
          className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all active:scale-95 backdrop-blur-sm"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={onNext}
          className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all active:scale-95 backdrop-blur-sm"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Large Counter (Bottom Right) */}
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-12 z-30">
        <div className="relative heading-font font-bold text-6xl md:text-8xl leading-none tracking-tighter text-transparent select-none">
             <span className="text-white/20">
                {formatNumber(currentIndex + 1)}
             </span>
        </div>
      </div>
      
      {/* Progress Bar (Bottom) */}
       <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-30">
        <div 
            className="h-full bg-yellow-400 transition-all duration-500 ease-out"
            style={{ width: `${((currentIndex + 1) / totalLength) * 100}%` }}
        />
      </div>
    </>
  );
};