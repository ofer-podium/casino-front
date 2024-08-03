import React, { useEffect, useRef } from 'react';
import Layout from '../components/general/Layout';
import { useAppBar } from '../contexts/AppBarProvider';
import { Container } from '@mui/material';
import SlotMachine from '../components/SlotMachine/SlotMachine';
import GameStats from '../components/stats/GameStats';
import CashOut from '../components/general/CashOut';
import { useGame } from '../contexts/GameContext';

const MainPage: React.FC = () => {
  const { setTitle } = useAppBar();
  const { handleNewSession } = useGame();
  const sessionInitialized = useRef(false);

  useEffect(() => {
    setTitle('BELAGIO CASINO');
    if (!sessionInitialized.current) {
      sessionInitialized.current = true;
      handleNewSession();
    }
  }, []);

  return (
    <Layout>
      <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
        <GameStats />
        <SlotMachine />
        <CashOut />
      </Container>
    </Layout>
  );
};

export default MainPage;