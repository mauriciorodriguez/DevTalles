import React from 'react';
import { ThemeProvider } from './presentation/context/ThemeContext';
import { Navigator } from './presentation/navigator/Navigator';

export const ComponentsApp = () => {
  return (
    <ThemeProvider>
      <Navigator />
    </ThemeProvider>
  )
}
