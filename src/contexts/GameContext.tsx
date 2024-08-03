import React, { createContext, useState, useContext, ReactNode } from 'react';
import { startSession, spinSlots, cashOut } from '../api/gameService';

type GameContextType = {
  sessionId: string | null;
  credits: number;
  spins: number;
  areButtonsDisabled: boolean;
  isGameRunning: boolean;
  setIsGameRunning: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [credits, setCredits] = useState(0);
  const [spins, setSpins] = useState(0);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [areButtonsDisabled, setAreButtonsDisabled] = useState(false);

  const handleNewSession = async () => {
    try {
      const response = await startSession();    
      setIsGameRunning(true);
      setSessionId(response.data.token);
      setCredits(response.data.currentCredits);
      setSpins(0);
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
      setCredits(prevCredits => prevCredits -1);

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
      setIsGameRunning(false);
      const response = await cashOut(sessionId);
      return response.data.prize;
    } catch (error) {
      console.error('An error occurred while cashing out', error);
    }
  };

  return (
    <GameContext.Provider value={{ sessionId, credits, spins,areButtonsDisabled,isGameRunning, setSessionId, setCredits, setSpins, handleNewSession, handleSpin, handleCashOut, setAreButtonsDisabled, setIsGameRunning }}>
      {children}
    </GameContext.Provider>
  );
};