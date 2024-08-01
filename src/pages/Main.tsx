import React, { useEffect } from 'react';
import Layout from '../components/general/Layout';
import { useAppBar } from '../contexts/AppBarProvider';
import { Container } from '@mui/material';
import SlotMachine from '../components/SlotMachine/SlotMachine';
import GameStats from '../components/stats/GameStats';
import CashOut from '../components/general/CashOut';

const MainPage: React.FC = () => {
  const { setTitle } = useAppBar();

  useEffect(() => {
    setTitle('BELAGIO CASINO');
  }, [setTitle]);

  return (
      <Layout>
        <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  mt: 2 }}>
          <GameStats />
          <SlotMachine />
          <CashOut />
        </Container>
      </Layout>
  );
};

export default MainPage;