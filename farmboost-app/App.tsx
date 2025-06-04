import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useFonts, Kanit_400Regular, Kanit_600SemiBold, Kanit_700Bold } from '@expo-google-fonts/kanit';
import Login from './page/login';
import { createContext, useState } from 'react';
import { defaultSetting, SettingContext, SettingProps } from './page/login/SettingsModal';
import './lang';
import { useTranslation } from 'react-i18next';

export default function App() {
  const [nowSetting, setNowSetting] = useState<SettingProps>(defaultSetting);
  const {t, i18n} = useTranslation();

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  let [fontsLoaded] = useFonts({
    Kanit_400Regular,
    Kanit_600SemiBold,
    Kanit_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  }
  return (
    <SettingContext.Provider value={{ nowSetting, setNowSetting, changeLang }}>
      <View style={styles.container}>
        <Login />
      </View>
    </SettingContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
