import { useTranslation, Trans } from 'react-i18next';
import { Button } from '@mui/material';


const ChangeLanguageRadioGroup: React.FC = () => {
    const { i18n } = useTranslation();
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    }
    return (
        <div>
            <Button onClick={() => changeLanguage('en')}>English</Button>
            <Button onClick={() => changeLanguage('heb')}>Hebrew</Button>
        </div>
    );
}

export default ChangeLanguageRadioGroup;