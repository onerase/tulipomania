import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface TitlePageProps {
  onBegin: () => void;
}

export const TitlePage: React.FC<TitlePageProps> = ({ onBegin }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 8000); // Show button after 8 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-black flex items-center justify-center">
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
      
      {/* Begin Button - Appears after 8 seconds */}
      {showButton && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
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