import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* Handles tabbed screens */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* AR and Game screens need to be added here */}
        <Stack.Screen name="ar"   options={{ title: 'AR Experience' }} />
        <Stack.Screen name="game" options={{ title: 'Play Game' }} />

        {/* Not found screen */}
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
