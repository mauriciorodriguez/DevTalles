import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {ThemeContextProvider} from './presentation/context/ThemeContext';
import {StackNavigator} from './presentation/navigator/StackNavigator';

const queryClient = new QueryClient();

export const PokedexApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <StackNavigator />
      </ThemeContextProvider>
    </QueryClientProvider>
  );
};
