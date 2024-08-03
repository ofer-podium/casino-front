import React, { useEffect, useRef } from 'react';
import Layout from '../components/general/Layout';
import { useAppBar } from '../contexts/AppBarProvider';
import { Container } from '@mui/material';
import SlotMachine from '../components/SlotMachine/SlotMachine';
import GameStats from '../components/stats/GameStats';
import CashOut from '../components/general/CashOut';
import NewGameButton from '../components/general/NewGameButton';
import { useGame } from '../contexts/GameContext';
import { useAlert } from '../contexts/AlertContext';

const MainPage: React.FC = () => {
  const { setTitle } = useAppBar();
  const { showAlert } = useAlert();
  const { handleNewSession } = useGame();
  const sessionInitialized = useRef(false);

  useEffect(() => {
    setTitle('BELAGIO CASINO');
    if (!sessionInitialized.current) {
      sessionInitialized.current = true;
      handleNewSession();
      showAlert('Welcome to Belagio Casino!', 'success');
    }
  }, [handleNewSession, setTitle, showAlert]); // Add dependencies here

  return (
    <Layout>
      <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
        <GameStats />
        <SlotMachine />
        <CashOut />
        <NewGameButton />
      </Container>
    </Layout>
  );
};

export default MainPage;