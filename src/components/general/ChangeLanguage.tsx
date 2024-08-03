import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, FormControl, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { Languages } from '../../constants/general';
import { COLOR_PALLETE } from '../../themes';

const ChangeLanguageDropdown: React.FC = () => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = React.useState(i18n.language);

    const handleChange = (event: SelectChangeEvent<string>) => {
        const selectedLanguage = event.target.value as string;
        setLanguage(selectedLanguage);
        i18n.changeLanguage(selectedLanguage);
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <FormControl variant="outlined" sx={{ minWidth: 120 }}>
                <Select
                    id="language-select"
                    value={language}
                    onChange={handleChange}
                    displayEmpty
                    sx={{
                        backgroundColor: COLOR_PALLETE.gold,
                        color: '#000',
                        '& .MuiSvgIcon-root': { color: '#000' },
                    }}
                >
                    <MenuItem value="en">{Languages.ENGLISH}</MenuItem>
                    <MenuItem value="heb">{Languages.HEBREW}</MenuItem>
                    <MenuItem value="es">{Languages.ESPANOL}</MenuItem>
                    <MenuItem value="fr">{Languages.FRANCAIS}</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default ChangeLanguageDropdown;