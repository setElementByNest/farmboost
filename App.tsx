import { ActivityIndicator, View, Text } from 'react-native';
import { useFonts, Kanit_400Regular, Kanit_600SemiBold, Kanit_700Bold } from '@expo-google-fonts/kanit';
import { AppProviders } from './contexts/AppProviders';
import Nav from './navigation/Nav';

export default function App() {
  const [fontsLoaded] = useFonts({
    Kanit_400Regular,
    Kanit_600SemiBold,
    Kanit_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  }

  return (
    <AppProviders>
      <Nav />
    </AppProviders>
  );
}