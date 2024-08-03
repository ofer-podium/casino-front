import React, { createContext, useState, useContext, ReactNode } from 'react';
import { startSession, spinSlots, cashOut } from '../api/gameService';

type GameContextType = {
  sessionId: string | null;
  credits: number;
  spins: number;
  areButtonsDisabled: boolean;
  setAreButtonsDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  setSessionId: React.Dispatch<React.SetStateAction<string | null>>;
  setCredits: React.Dispatch<React.SetStateAction<number>>;
  setSpins: React.Dispatch<React.SetStateAction<number>>;
  handleNewSession: () => Promise<void>;
  handleSpin: () => Promise<any>;
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
  const [areButtonsDisabled, setAreButtonsDisabled] = useState(false);

  const handleNewSession = async () => {
    try {
      const response = await startSession();    
      setSessionId(response.data.token);
      setCredits(response.data.currentCredits);
    } catch (error) {
      console.error('An error occurred while starting a new session', error);
    }
  };

  const handleSpin = async () => {
    if (!sessionId) return;
    try {
      setAreButtonsDisabled(true);
      const response = await spinSlots(sessionId);
      setSpins(prevSpins => prevSpins + 1);
      setCredits(response.data.currentCredits);
      return response.data;
    } catch (error) {
      console.error('An error occurred while spinning the slots', error);
      throw error;
    }
  };

  const handleCashOut = async () => {
    if (!sessionId) return;
    try {
      setCredits(0);
      setAreButtonsDisabled(true);
      const response = await cashOut(sessionId);
      alert(`You cashed out ${response.data.prize} credits!`);
    } catch (error) {
      console.error('An error occurred while cashing out', error);
    }
  };

  return (
    <GameContext.Provider value={{ sessionId, credits, spins,areButtonsDisabled, setSessionId, setCredits, setSpins, handleNewSession, handleSpin, handleCashOut, setAreButtonsDisabled }}>
      {children}
    </GameContext.Provider>
  );
};