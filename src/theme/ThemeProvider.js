import React, { createContext, useMemo, useContext } from 'react';
import { defaultTheme } from './defaultTheme';

const ThemeContext = createContext(defaultTheme);

export const ThemeProvider = ({ theme, children }) => {
  // Deep merge simple objects for colors and tokens
  const merged = useMemo(() => {
    const provided = theme || {};
    return {
      ...defaultTheme,
      ...provided,
      colors: { ...defaultTheme.colors, ...(provided.colors || {}) },
      spacing: { ...defaultTheme.spacing, ...(provided.spacing || {}) },
      radius: { ...defaultTheme.radius, ...(provided.radius || {}) },
      typography: { ...defaultTheme.typography, ...(provided.typography || {}) }
    };
  }, [theme]);

  return <ThemeContext.Provider value={merged}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;
