import { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useFonts, Kanit_400Regular, Kanit_600SemiBold, Kanit_700Bold } from '@expo-google-fonts/kanit';
import { defaultSetting, SettingContext, SettingProps } from './page/login/SettingsModal';
import './lang';
import { useTranslation } from 'react-i18next';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginMain from './page/login/LoginMain';
import LoginSelect from './page/login/LoginSelect';
import LoginCreateFarm from './page/login/LoginCreateFarm';
import LoginCreatingFarm from './page/login/LoginCreatingFarm';
import LoginCreateDone from './page/login/LoginCreateDone';
import LoginNewUser from './page/login/LoginNewUser';

export type RootStackParamList = {
  loginmain: undefined;
  selectFarm: undefined;
  createfarm: undefined;
  creatingfarm: undefined;
  createdone: undefined;
  newuser: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [nowSetting, setNowSetting] = useState<SettingProps>(defaultSetting);
  const { t, i18n } = useTranslation();

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
      <NavigationContainer>
        <Stack.Navigator initialRouteName="loginmain" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="loginmain" component={LoginMain} />
          <Stack.Screen name="selectFarm" component={LoginSelect} />
          <Stack.Screen name="createfarm" component={LoginCreateFarm} />
          <Stack.Screen name="creatingfarm" component={LoginCreatingFarm} />
          <Stack.Screen name="createdone" component={LoginCreateDone} />
          <Stack.Screen name="newuser" component={LoginNewUser} />
        </Stack.Navigator>
      </NavigationContainer>
    </SettingContext.Provider>
  );
}