import React from 'react';
import { Flower2, ArrowRight } from 'lucide-react';
import { StoryNode, Choice } from '../data/storyData';

interface StoryCardProps {
  story: StoryNode;
  onChoiceSelect: (nextNode: string) => void;
  onRestart?: () => void;
}

export const StoryCard: React.FC<StoryCardProps> = ({ story, onChoiceSelect, onRestart }) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video/opening.mp4" type="video/mp4" />
      </video>
      
      {/* Background overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-black/40 pointer-events-none z-10" />
      
      {/* Header - Floating at top */}
      <div className="relative z-20 pt-8 pb-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <Flower2 className="w-6 h-6 text-amber-300 drop-shadow-lg" />
            <h1 className="text-3xl md:text-4xl font-bold text-white font-serif drop-shadow-2xl">
              Tulipomania
            </h1>
            <Flower2 className="w-6 h-6 text-amber-300 drop-shadow-lg" />
          </div>
        </div>
      </div>

      {/* Main Content Area - Centered with lots of space */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-[80vh] px-4">
        
        {/* Story Text - Floating with backdrop */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-black/50 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <p className="text-white text-lg md:text-xl leading-relaxed font-medium text-center first-letter:text-5xl first-letter:font-bold first-letter:text-amber-300 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-serif first-letter:drop-shadow-lg">
              {story.text}
            </p>
          </div>
        </div>

        {/* Choices or Ending Actions - Floating at bottom */}
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
          <div className="w-full max-w-3xl space-y-4">
            <h3 className="text-xl font-semibold text-white mb-8 font-serif text-center drop-shadow-lg">
              What path will you choose?
            </h3>
            {story.choices?.map((choice, index) => (
              <button
                key={choice.id}
                onClick={() => onChoiceSelect(choice.nextNode)}
                className="w-full text-left p-6 bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 hover:border-white/40 rounded-xl transition-all duration-300 group hover:shadow-2xl hover:scale-[1.02] transform shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <span className="text-sm font-medium text-amber-300 mb-2 block">
                      Choice {String.fromCharCode(65 + index)}
                    </span>
                    <p className="text-white font-medium text-lg leading-relaxed">
                      {choice.text}
                    </p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-amber-300 group-hover:text-amber-200 group-hover:translate-x-1 transition-all duration-200 ml-4 flex-shrink-0" />
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};