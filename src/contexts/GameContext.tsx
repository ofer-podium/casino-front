import React, { createContext, useState, ReactNode } from 'react';

type GameContextType = {
  credits: number;
  rollSlots: () => void;
  cashOut: () => void;
};

export const GameContext = createContext<GameContextType>({
  credits: 0,
  rollSlots: () => {},
  cashOut: () => {},
});

type GameProviderProps = {
  children: ReactNode;
};

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [credits, setCredits] = useState(10);

  const rollSlots = () => {
    // Implement slot rolling logic
  };

  const cashOut = () => {
    // Implement cash out logic
  };

  return (
    <GameContext.Provider value={{ credits, rollSlots, cashOut }}>
      {children}
    </GameContext.Provider>
  );
};