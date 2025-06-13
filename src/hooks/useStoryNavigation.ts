import { useState, useCallback } from 'react';
import { storyData, shouldRouteToCrash } from '../data/storyData';

export const useStoryNavigation = () => {
  const [currentNodeId, setCurrentNodeId] = useState('start');
  const [storyPath, setStoryPath] = useState<string[]>(['start']);

  const currentStory = storyData[currentNodeId];

  const navigateToNode = useCallback((nodeId: string) => {
    // Check if this choice should route to crash
    if (shouldRouteToCrash(nodeId)) {
      setCurrentNodeId('crash');
      setStoryPath(prev => [...prev, 'crash']);
    } else if (storyData[nodeId]) {
      setCurrentNodeId(nodeId);
      setStoryPath(prev => [...prev, nodeId]);
    } else {
      // Fallback to crash if node doesn't exist
      setCurrentNodeId('crash');
      setStoryPath(prev => [...prev, 'crash']);
    }
  }, []);

  const restart = useCallback(() => {
    setCurrentNodeId('start');
    setStoryPath(['start']);
  }, []);

  const goBack = useCallback(() => {
    if (storyPath.length > 1) {
      const newPath = storyPath.slice(0, -1);
      const previousNodeId = newPath[newPath.length - 1];
      setCurrentNodeId(previousNodeId);
      setStoryPath(newPath);
    }
  }, [storyPath]);

  return {
    currentStory,
    navigateToNode,
    restart,
    goBack,
    canGoBack: storyPath.length > 1,
    storyPath
  };
};