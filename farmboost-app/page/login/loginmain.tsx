import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SettingsModal from './SettingsModal';
import { useTranslation } from 'react-i18next';

interface Props {
  gotoSelectFarm: () => void;
  gotoNewUser: () => void;
}

const Loginmain = ({ gotoSelectFarm, gotoNewUser }: Props) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [notic, setNotic] = useState<string>('');

  const [showSettings, setShowSettings] = useState(false);

  const { t } = useTranslation();

  const handleLogin = () => {
    // TODO: Handle traditional login
    console.log(username, password);
  };

  const handleGoogleLogin = () => {
    // TODO: Handle Google login
    console.log('Login with Google');
  };

  const handleRegister = () => {
    // TODO: Navigate to register screen
    console.log('Go to Register');
  };

  // useEffect(() => {
  //   if (username && password) {
  //     setNotic('* กรุณากรอกชื่อผู้ใช้งานและรหัสผ่านให้ถูกต้อง');
  //   } else {
  //     setNotic('');
  //   }
  // }, [username, password]);

  const onPressNextgotoSelectFarm = () => {
    console.log((username !== ''), (password !== ''));
    if ((username !== '') && (password !== '')) {
      setNotic('');
      gotoSelectFarm();
    } else {
      setNotic('* กรุณากรอกชื่อผู้ใช้งานและรหัสผ่านให้ถูกต้อง');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>{t('login.login_head1')}</Text>
      <Text style={styles.title}>{t('login.login_head2')}</Text>

      <Text style={styles.sectionTitle}>{t('login.login_topic1')}</Text>

      <TextInput
        style={styles.input}
        placeholder={t('login.login_input1')}
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder={t('login.login_input2')}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Text style={styles.noticText}>{notic}</Text>
      <br />

      <TouchableOpacity style={styles.loginButton} onPress={onPressNextgotoSelectFarm}>
        <Text style={styles.loginText}>{t('login.login_button1')}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
        <View style={styles.googleContent}>
          <MaterialCommunityIcons style={styles.googleIcon} name="google" size={30} color="#999" />
          <Text style={styles.googleText}>{t('login.login_button2')}</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.separatorContainer}>
        <View style={styles.separatorLine} />
        <Text style={styles.separatorText}>{t('login.login_line1')}</Text>
        <View style={styles.separatorLine} />
      </View>

      <TouchableOpacity style={styles.registerButton} onPress={gotoNewUser}>
        <Text style={styles.registerText}>{t('login.login_button3')}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.gearIcon} onPress={() => setShowSettings(true)}>
        <MaterialCommunityIcons name="cog-outline" size={30} color="#999" />
      </TouchableOpacity>
      <SettingsModal isVisible={showSettings} onClose={() => setShowSettings(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  welcomeText: {
    fontSize: 42,
    color: '#000',
    fontFamily: 'Kanit_600SemiBold',
  },
  title: {
    fontSize: 42,
    marginBottom: 30,
    color: '#000',
    fontFamily: 'Kanit_600SemiBold',
  },
  sectionTitle: {
    fontSize: 18,
    color: '#2e6b50',
    marginBottom: 15,
    fontFamily: 'Kanit_400Regular',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e6e6e6',
    borderRadius: 4,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    elevation: 1,
    fontFamily: 'Kanit_400Regular',
  },
  loginButton: {
    backgroundColor: '#2e6b50',
    paddingVertical: 14,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 15,
  },
  noticText: {
    color: '#c44',
    fontSize: 16,
    fontFamily: 'Kanit_400Regular',
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Kanit_400Regular',
  },
  googleButton: {
    backgroundColor: '#fff',
    borderRadius: 4,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  googleContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  googleIcon: {
    marginRight: 25,
  },
  googleText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Kanit_400Regular',
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  separatorText: {
    marginHorizontal: 10,
    color: '#999',
    fontFamily: 'Kanit_400Regular',
  },
  registerButton: {
    backgroundColor: '#eaeaea',
    paddingVertical: 14,
    borderRadius: 4,
    alignItems: 'center',
  },
  registerText: {
    color: '#888',
    fontSize: 16,
    fontFamily: 'Kanit_400Regular',
  },
  gearIcon: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
});

export default Loginmain