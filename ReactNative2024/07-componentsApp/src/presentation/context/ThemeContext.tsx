import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { darkColors, forestColors, lightColors, oceanColors, sunsetColors, ThemeColors } from '../../config/theme/theme';
type ThemeColor = "light" | "dark" | "forest" | "sunset" | "ocean";

interface ThemeContextProps {
  currentTheme: ThemeColor;
  colors: ThemeColors;
  setTheme: (theme: ThemeColor) => void;
  isDark: boolean;
}

const ThemeColorsRecord: Record<ThemeColor, ThemeColors> = {
  dark: darkColors,
  forest: forestColors,
  light: lightColors,
  ocean: oceanColors,
  sunset: sunsetColors,
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: PropsWithChildren) => {

  const colorScheme = useColorScheme();
  const [currentTheme, setCurrentTheme] = useState<ThemeColor>("light")
  const isDark = currentTheme === "dark";

  const setTheme = (theme: ThemeColor) => {
    setCurrentTheme(theme);
  }

  useEffect(() => {
    if (colorScheme === "dark") {
      setCurrentTheme("dark");
    } else {
      setCurrentTheme("light");
    }
  }, [colorScheme])

  // useEffect(() => {
  //   const subscription = AppState.addEventListener('change', nextAppState => {
  //     const colorScheme = Appearance.getColorScheme();
  //     setCurrentTheme(colorScheme === "dark" ? "dark" : "light");
  //   });

  //   return () => {
  //     subscription.remove();
  //   };
  // }, []);

  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <ThemeContext.Provider
        value={{
          currentTheme,
          colors: ThemeColorsRecord[currentTheme],
          setTheme,
          isDark
        }}>
        {children}
      </ThemeContext.Provider>
    </NavigationContainer>
  )
}