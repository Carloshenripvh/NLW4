import React, { createContext, ReactNode, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

import {darkTheme, lighTheme} from '../styles/themes/themes';

import { ThemeProvider as StyledComponentThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles ';


interface ThemeContextData{
  theme: string;
  toggleTheme: () => void;
}
interface ThemeProviderProps{
  children: ReactNode;
}
export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider ( { children }: ThemeProviderProps)  {
  const [theme, setTheme] = useState(null);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  useEffect(() => {
    const storedTheme = Cookies.get('theme');
    setTheme(storedTheme || 'light');
  }, []);

  useEffect(() => {
    Cookies.set('theme', theme);
  }, [theme]);
  
  

  return(
    <ThemeContext.Provider value={{
      theme,
      toggleTheme
    }}>
      <StyledComponentThemeProvider
       theme={theme ==='dark' ? darkTheme : lighTheme }
        >

      <GlobalStyles />
      { children }
      </StyledComponentThemeProvider>
    </ThemeContext.Provider>
  );
  
}

