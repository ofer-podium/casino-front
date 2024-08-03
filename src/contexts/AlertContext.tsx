// src/contexts/AlertContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Snackbar, Alert as MuiAlert, AlertColor, SnackbarCloseReason } from '@mui/material';
import { useTranslation } from 'react-i18next';

type AlertContextType = {
  showAlert: (message: string, severity: AlertColor) => void;
};

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (context === undefined) {
    throw new Error('useAlert must be used within an AlertProvider');
  }
  return context;
};

export const AlertProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState<AlertColor>('success');

  const showAlert = (message: string, severity: AlertColor) => {
    setMessage(t(message));
    setSeverity(severity);
    setOpen(true);
  };

  const handleClose = (event: Event | React.SyntheticEvent<any, Event>, reason?: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose} sx={{width:'100%'}}>
        <MuiAlert onClose={handleClose} severity={severity}>
          {message}
        </MuiAlert>
      </Snackbar>
    </AlertContext.Provider>
  );
};