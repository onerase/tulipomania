import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface TitlePageProps {
  onBegin: () => void;
}

export const TitlePage: React.FC<TitlePageProps> = ({ onBegin }) => {
  const [showButton, setShowButton] = useState(false);
  const [badgeAnimationCompleted, setBadgeAnimationCompleted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000); // Show button after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleBadgeAnimationEnd = () => {
    setBadgeAnimationCompleted(true);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-black flex items-center justify-center">
      {/* Made in Bolt Badge */}
      <div className="fixed top-4 right-4 z-50">
        <a href="https://bolt.new/?rid=os72mi" target="_blank" rel="noopener noreferrer" 
           className="block transition-all duration-300 hover:shadow-2xl">
          <img src="https://storage.bolt.army/white_circle_360x360.png" 
               alt="Built with Bolt.new badge" 
               className={`w-20 h-20 md:w-28 md:h-28 rounded-full shadow-lg bolt-badge bolt-badge-intro ${badgeAnimationCompleted ? 'animated' : ''}`}
               onAnimationEnd={handleBadgeAnimationEnd} />
        </a>
      </div>

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="max-w-full max-h-full object-contain z-0"
      >
        <source src="https://idgbpkjccaftgnibwkeg.supabase.co/storage/v1/object/public/video/title.mp4" type="video/mp4" />
      </video>
      
      {/* Begin Button - Positioned higher, just under the title */}
      {showButton && (
        <div className="absolute bottom-[30vh] left-1/2 transform -translate-x-1/2 z-20 animate-fade-in">
          <button
            onClick={onBegin}
            className="px-4 py-3 bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 hover:border-white/40 rounded-lg transition-all duration-300 group hover:shadow-xl hover:scale-105 transform"
          >
            <div className="flex items-center gap-2">
              <span className="text-white font-medium text-sm">Begin</span>
              <ArrowRight className="w-4 h-4 text-amber-300 group-hover:text-amber-200 group-hover:translate-x-1 transition-all duration-200" />
            </div>
          </button>
        </div>
      )}
    </div>
  );
};