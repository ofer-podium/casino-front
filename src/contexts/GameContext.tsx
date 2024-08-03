// // src/contexts/GameContext.tsx
// import React, { createContext, useState, useContext, ReactNode } from 'react';

// type GameContextType = {
//   sessionId: string | null;
//   credits: number;
//   spins: number;
//   setSessionId: React.Dispatch<React.SetStateAction<string | null>>;
//   setCredits: React.Dispatch<React.SetStateAction<number>>;
//   setSpins: React.Dispatch<React.SetStateAction<number>>;
// };

// const GameContext = createContext<GameContextType | undefined>(undefined);

// export const useGame = () => {
//   const context = useContext(GameContext);
//   if (context === undefined) {
//     throw new Error('useGame must be used within a GameProvider');
//   }
//   return context;
// };

// export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [sessionId, setSessionId] = useState<string | null>(null);
//   const [credits, setCredits] = useState(10);
//   const [spins, setSpins] = useState(0);

//   return (
//     <GameContext.Provider value={{ sessionId, credits, spins, setSessionId, setCredits, setSpins }}>
//       {children}
//     </GameContext.Provider>
//   );
// };
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { startSession, spinSlots, cashOut } from '../api/gameService';

type GameContextType = {
  sessionId: string | null;
  credits: number;
  spins: number;
  setSessionId: React.Dispatch<React.SetStateAction<string | null>>;
  setCredits: React.Dispatch<React.SetStateAction<number>>;
  setSpins: React.Dispatch<React.SetStateAction<number>>;
  handleNewSession: () => Promise<void>;
  handleSpin: () => Promise<void>;
  handleCashOut: () => Promise<void>;
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

  const handleNewSession = async () => {
    try {
      const response = await startSession();
      console.log(response.data);
      
      setSessionId(response.data.token);
      setCredits(response.data.currentCredits);
    } catch (error) {
      console.error('An error occurred while starting a new session', error);
    }
  };

  const handleSpin = async () => {
    console.log('handleSpin');
    console.log(sessionId);
      
    if (!sessionId) return;

    try {
      const response = await spinSlots(sessionId);
      setSpins(prevSpins => prevSpins + 1);
      setCredits(response.credits);
    } catch (error) {
      console.error('An error occurred while spinning the slots', error);
    }
  };

  const handleCashOut = async () => {
    if (!sessionId) return;
    try {
      const response = await cashOut(sessionId);
      setCredits(response.credits);
      alert(`You cashed out ${response.credits} credits!`);
    } catch (error) {
      console.error('An error occurred while cashing out', error);
    }
  };

  return (
    <GameContext.Provider value={{ sessionId, credits, spins, setSessionId, setCredits, setSpins, handleNewSession, handleSpin, handleCashOut }}>
      {children}
    </GameContext.Provider>
  );
};