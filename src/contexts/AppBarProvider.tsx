import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppBarContextType {
  title: string;
  setTitle: (title: string) => void;
  headerColor: string;
  setHeaderColor: (color: string) => void;
  backNavigation: string | null; // For later use => will be used to navigate back to the previous page/desired page 🔜
  setBackNavigation: (path: string | null) => void; // For later use => will be used to navigate back to the previous page/desired page 🔜
}

const AppBarContext = createContext<AppBarContextType | undefined>(undefined);

export const AppBarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [title, setTitle] = useState('PODIUM');
  const [backNavigation, setBackNavigation] = useState<string | null>(null);
  const [headerColor, setHeaderColor] = useState('primary');

  return (
    <AppBarContext.Provider value={{ title, setTitle, backNavigation, setBackNavigation, headerColor, setHeaderColor }}>
      {children}
    </AppBarContext.Provider>
  );
};

export const useAppBar = (): AppBarContextType => {
  const context = useContext(AppBarContext);
  if (!context) {
    throw new Error('useAppBar must be used within an AppBarProvider');
  }
  return context;
};