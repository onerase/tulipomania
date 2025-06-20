import React, { useState, useEffect } from 'react';
import { Flower2, ArrowRight } from 'lucide-react';
import { StoryNode, Choice } from '../data/storyData';

interface StoryCardProps {
  story: StoryNode;
  onChoiceSelect: (nextNode: string) => void;
  onRestart?: () => void;
}

export const StoryCard: React.FC<StoryCardProps> = ({ story, onChoiceSelect, onRestart }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pendingChoice, setPendingChoice] = useState<string | null>(null);

  // Function to get the appropriate video based on story node
  const getVideoSource = () => {
    // Show crash.mp4 for the crash scene
    if (story.id === 'crash') {
      return "https://idgbpkjccaftgnibwkeg.supabase.co/storage/v1/object/public/video/crash.mp4";
    }
    
    // Show bloom.mp4 for the "The bulb blooms rare and beautiful" story node
    if (story.id === 'A') {
      return "https://idgbpkjccaftgnibwkeg.supabase.co/storage/v1/object/public/video/bloom.mp4";
    }
    
    // Show envy.mp4 for the regret and greed story node
    if (story.id === 'A1') {
      return "https://idgbpkjccaftgnibwkeg.supabase.co/storage/v1/object/public/video/envy.mp4";
    }
    
    // Show A1a.mp4 for the staggering price story node
    if (story.id === 'A1a') {
      return "https://idgbpkjccaftgnibwkeg.supabase.co/storage/v1/object/public/video/A1a.mp4";
    }
    
    // Show A1a1.mp4 for the A1a1 story node
    if (story.id === 'A1a1') {
      return "https://idgbpkjccaftgnibwkeg.supabase.co/storage/v1/object/public/video/A1a1.mp4";
    }
    
    // Show admire.mp4 for the garden scene
    if (story.id === 'B') {
      return "https://idgbpkjccaftgnibwkeg.supabase.co/storage/v1/object/public/video/admire.mp4";
    }
    
    // Show sellbulb.mp4 for the friend's fortune scene
    if (story.id === 'C') {
      return "https://idgbpkjccaftgnibwkeg.supabase.co/storage/v1/object/public/video/sellbulb.mp4";
    }
    
    // Default to opening.mp4 for all other nodes
    return "https://idgbpkjccaftgnibwkeg.supabase.co/storage/v1/object/public/video/opening.mp4";
  };

  // Function to format story text with proper spacing for closing text
  const formatStoryText = (text: string) => {
    // Split on double newlines to separate the main story from the closing text
    const parts = text.split('\n\n');
    if (parts.length > 1) {
      return (
        <>
          <span>{parts[0]}</span>
          <br /><br />
          <span className="text-amber-200 italic">{parts.slice(1).join('\n\n')}</span>
        </>
      );
    }
    return text;
  };

  // Handle choice selection with transition
  const handleChoiceSelect = (nextNode: string) => {
    if (isTransitioning) return; // Prevent multiple clicks during transition
    
    setIsTransitioning(true);
    setPendingChoice(nextNode);
    
    // After transition duration, actually navigate
    setTimeout(() => {
      onChoiceSelect(nextNode);
      setIsTransitioning(false);
      setPendingChoice(null);
    }, 400); // Slightly faster for fade
  };

  // Handle restart with transition
  const handleRestart = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      if (onRestart) onRestart();
      setIsTransitioning(false);
    }, 400);
  };

  // Reset transition state when story changes (for external navigation)
  useEffect(() => {
    setIsTransitioning(false);
    setPendingChoice(null);
  }, [story.id]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Video */}
      <video
        key={story.id} // Force video reload when story changes
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={getVideoSource()} type="video/mp4" />
      </video>
      
      {/* Background overlay for readability - Enhanced darkness */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70 pointer-events-none z-10" />
      
      {/* Story Content Container with fade transition */}
      <div className={`absolute inset-0 z-20 transition-opacity duration-400 ease-in-out ${
        isTransitioning ? 'opacity-0' : 'opacity-100'
      }`}>
        {/* Story Text - Responsive positioning and sizing with improved readability */}
        <div className="absolute top-4 md:top-8 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] md:w-80 max-w-lg px-4 md:px-0">
          <div className="bg-black/80 backdrop-blur-md rounded-xl p-6 md:p-8 border border-white/20 shadow-2xl max-h-[40vh] overflow-y-auto">
            <p className="text-white text-xs md:text-sm leading-relaxed font-medium first-letter:text-2xl md:first-letter:text-3xl first-letter:font-bold first-letter:text-amber-300 first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:font-serif first-letter:drop-shadow-lg">
              {formatStoryText(story.text)}
            </p>
          </div>
        </div>

        {/* Choices - Bottom center with improved mobile layout and enhanced visibility */}
        {!story.isEnding && (
          <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-lg px-4">
            <div className="space-y-2 md:space-y-3">
              {story.choices?.map((choice, index) => (
                <button
                  key={choice.id}
                  onClick={() => handleChoiceSelect(choice.nextNode)}
                  disabled={isTransitioning}
                  className="w-full text-left p-3 md:p-4 bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 hover:border-white/40 rounded-lg transition-all duration-300 group hover:shadow-xl hover:scale-[1.02] transform disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-white font-medium text-xs md:text-sm leading-relaxed">
                        {choice.text}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-amber-300 group-hover:text-amber-200 group-hover:translate-x-1 transition-all duration-200 ml-3 flex-shrink-0" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Begin Again Button - Small, bottom right corner */}
        {story.isEnding && (
          <div className="absolute bottom-4 right-4">
            <button
              onClick={handleRestart}
              disabled={isTransitioning}
              className="px-3 py-2 bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 hover:border-white/40 rounded-lg transition-all duration-300 group hover:shadow-xl hover:scale-105 transform disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="flex items-center gap-2">
                <span className="text-white font-medium text-xs">Begin Again</span>
                <ArrowRight className="w-3 h-3 text-amber-300 group-hover:text-amber-200 group-hover:translate-x-1 transition-all duration-200" />
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};