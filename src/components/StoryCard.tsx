import React from 'react';
import { Flower2, ArrowRight } from 'lucide-react';
import { StoryNode, Choice } from '../data/storyData';

interface StoryCardProps {
  story: StoryNode;
  onChoiceSelect: (nextNode: string) => void;
  onRestart?: () => void;
}

export const StoryCard: React.FC<StoryCardProps> = ({ story, onChoiceSelect, onRestart }) => {
  // Function to get the appropriate video based on story node
  const getVideoSource = () => {
    // Show bloom.mp4 for the "The bulb blooms rare and beautiful" story node
    if (story.id === 'A') {
      return "https://idgbpkjccaftgnibwkeg.supabase.co/storage/v1/object/public/video/bloom.mp4";
    }
    
    // Default to opening.mp4 for all other nodes
    return "https://idgbpkjccaftgnibwkeg.supabase.co/storage/v1/object/public/video/opening.mp4";
  };

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
      
      {/* Background overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-black/40 pointer-events-none z-10" />
      
      {/* Story Text - Small square in left corner */}
      <div className="absolute top-8 left-8 z-20 w-80 max-w-[calc(100vw-4rem)]">
        <div className="bg-black/60 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-2xl">
          <p className="text-white text-sm leading-relaxed font-medium first-letter:text-3xl first-letter:font-bold first-letter:text-amber-300 first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:font-serif first-letter:drop-shadow-lg">
            {story.text}
          </p>
        </div>
      </div>

      {/* Choices or Ending Actions - Bottom center */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-2xl px-4">
        {story.isEnding ? (
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500/80 to-orange-500/80 backdrop-blur-sm rounded-full text-white font-medium mb-8 border border-amber-300/30 shadow-xl">
              <Flower2 className="w-5 h-5" />
              <span>The End</span>
              <Flower2 className="w-5 h-5" />
            </div>
            <button
              onClick={onRestart}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-600/90 to-orange-600/90 backdrop-blur-sm text-white font-semibold rounded-xl hover:from-amber-700/90 hover:to-orange-700/90 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 border border-amber-400/30"
            >
              Begin Again
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {story.choices?.map((choice, index) => (
              <button
                key={choice.id}
                onClick={() => onChoiceSelect(choice.nextNode)}
                className="w-full text-left p-4 bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 hover:border-white/40 rounded-lg transition-all duration-300 group hover:shadow-xl hover:scale-[1.02] transform"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-white font-medium text-sm leading-relaxed">
                      {choice.text}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-amber-300 group-hover:text-amber-200 group-hover:translate-x-1 transition-all duration-200 ml-3 flex-shrink-0" />
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};