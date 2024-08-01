import React, { useEffect } from 'react';
import Layout from '../components/general/Layout';
import { useAppBar } from '../contexts/AppBarProvider';
import { useTranslation, Trans } from 'react-i18next';
import ChangeLanguageRadioGroup from '../components/general/ChangeLanguage';


const MainPage: React.FC = () => {
  const { setTitle } = useAppBar();
  const { t,i18n } = useTranslation();
 
  const changeLanguage = () => {
    i18n.changeLanguage('en');
}

  const count = 3;

  useEffect(() => {
    setTitle('Bellagio Casino');
  } ,[]);

  return (
    <Layout>
      {/* <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%">
        <Typography variant="h4" gutterBottom>
        {t('login_title')}
        </Typography>
        <Typography variant="body1">
          Pull the lever to start the game and try your luck.
        </Typography>
      </Box> */}
      <p>{t('title', { name: 'John' })}</p>
      <p>{t('description.part1')}</p>
      <p>{t('description.part2')}</p>
      <Trans i18nKey="userMessagesUnread" count={count}>
        You have {{ count }} unread message.
      </Trans>
      <ChangeLanguageRadioGroup/>
    </Layout>
  );
};

export default MainPage;