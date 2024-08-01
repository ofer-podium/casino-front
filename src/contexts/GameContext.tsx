// src/contexts/GameContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

type GameContextType = {
  sessionId: string | null;
  credits: number;
  spins: number;
  setSessionId: React.Dispatch<React.SetStateAction<string | null>>;
  setCredits: React.Dispatch<React.SetStateAction<number>>;
  setSpins: React.Dispatch<React.SetStateAction<number>>;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [credits, setCredits] = useState(10);
  const [spins, setSpins] = useState(0);

  return (
    <GameContext.Provider value={{ sessionId, credits, spins, setSessionId, setCredits, setSpins }}>
      {children}
    </GameContext.Provider>
  );
};