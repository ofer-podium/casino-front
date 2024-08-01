import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, FormControl, Select, MenuItem, SelectChangeEvent } from '@mui/material';

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
                        backgroundColor: '#FFD700',
                        color: '#000',
                        '& .MuiSvgIcon-root': { color: '#000' },
                    }}
                >
                    <MenuItem value="en">English</MenuItem>
                    <MenuItem value="heb">עברית</MenuItem>
                    <MenuItem value="es">Español</MenuItem>
                    <MenuItem value="fr">Français</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default ChangeLanguageDropdown;