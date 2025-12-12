import React, { useState, useEffect, useCallback } from 'react';
import { DESTINATIONS } from './constants';
import { Navbar } from './components/Navbar';
import { Background } from './components/Background';
import { HeroContent } from './components/HeroContent';
import { Carousel } from './components/Carousel';
import { Controls } from './components/Controls';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % DESTINATIONS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + DESTINATIONS.length) % DESTINATIONS.length);
  }, []);

  const handleSelect = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  const currentDestination = DESTINATIONS[currentIndex];

  return (
    <div className="relative w-full h-screen bg-neutral-900 text-white overflow-hidden selection:bg-yellow-400 selection:text-black">
      <Navbar />

      <main className="relative w-full h-full grid grid-cols-1 lg:grid-cols-12">
        {/* Background is absolute to cover full screen */}
        <Background currentDestination={currentDestination} direction={direction} />

        {/* Left Side Content - Spans full on mobile, 7 cols on desktop */}
        <div className="pointer-events-none lg:col-span-7 h-full w-full">
            {/* Pointer events none allows clicking through to carousel if stacked, but content has pointer-events-auto */}
             <div className="h-full w-full pointer-events-auto">
                 <HeroContent destination={currentDestination} />
             </div>
        </div>
        
        {/* Right Side Carousel - Spans full on mobile, 5 cols on desktop */}
        {/* Note: In the video, the carousel overlays the right side. Our grid setup is structural, but carousel is absolute-positioned in its component for the overlap effect */}
        <div className="lg:col-span-5 hidden lg:block" /> 
      </main>

      <Carousel 
        destinations={DESTINATIONS} 
        activeIndex={currentIndex} 
        onSelect={handleSelect}
      />

      <Controls 
        currentIndex={currentIndex} 
        totalLength={DESTINATIONS.length} 
        onNext={handleNext} 
        onPrev={handlePrev} 
      />
    </div>
  );
}

export default App;