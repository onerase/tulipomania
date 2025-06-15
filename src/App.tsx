import React, { useState } from 'react';
import { TitlePage } from './components/TitlePage';
import { StoryCard } from './components/StoryCard';
import { useStoryNavigation } from './hooks/useStoryNavigation';

function App() {
  const [showTitle, setShowTitle] = useState(true);
  const { currentStory, navigateToNode, restart } = useStoryNavigation();

  const handleBegin = () => {
    setShowTitle(false);
  };

  const handleRestart = () => {
    restart();
    setShowTitle(true);
  };

  if (showTitle) {
    return <TitlePage onBegin={handleBegin} />;
  }

  if (!currentStory) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-amber-900 mb-4">Story Not Found</h1>
          <button
            onClick={handleRestart}
            className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
          >
            Return to Beginning
          </button>
        </div>
      </div>
    );
  }

  return (
    <StoryCard
      story={currentStory}
      onChoiceSelect={navigateToNode}
      onRestart={handleRestart}
    />
  );
}

export default App;