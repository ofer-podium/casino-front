import React, { useEffect, useRef } from 'react';
import Layout from '../components/general/Layout';
import { useAppBar } from '../contexts/AppBarProvider';
import { Container, Divider } from '@mui/material';
import SlotMachine from '../components/SlotMachine/SlotMachine';
import GameStats from '../components/stats/GameStats';
import { useGame } from '../contexts/GameContext';
import { useAlert } from '../contexts/AlertContext';
import ControlButtons from '../components/general/ControlButtons';
import { COLOR_PALLETE } from '../themes';

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
    }
  }, [handleNewSession, setTitle, showAlert]);

  return (
    <Layout>
      <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <GameStats />
        <SlotMachine />
        <Divider sx={{ width: '100%', my: 4, backgroundColor: COLOR_PALLETE.gold }} />
        <ControlButtons />
      </Container>
    </Layout>
  );
};

export default MainPage;