import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SettingsModal from './SettingsModal';
import { useTranslation } from 'react-i18next';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styles from './Styles';
import Button from '../../components/button/Button';
import { NavListProps } from '../../navigation/Nav';

type Props = NativeStackScreenProps<NavListProps, 'loginmain'>;

const LoginMain = ({ navigation }: Props) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [notic, setNotic] = useState<string>('');

  const [showSettings, setShowSettings] = useState(false);

  const { t } = useTranslation();

  const handleGoogleLogin = () => {
    console.log('Login with Google');
  };

  const onPressNextgotoSelectFarm = () => {
    console.log((username !== ''), (password !== ''));
    if ((username !== '') && (password !== '')) {
      setNotic('');
      navigation.navigate('selectFarm');
    } else {
      setNotic('* กรุณากรอกชื่อผู้ใช้งานและรหัสผ่านให้ถูกต้อง');
    }
  }

  return (
    <View style={styles.loginmain_styles.container}>
      <Text style={styles.loginmain_styles.text_head1}>{t('login.login_head1')}</Text>
      <Text style={styles.loginmain_styles.text_head2}>{t('login.login_head2')}</Text>

      <Text style={styles.loginmain_styles.text_head3}>{t('login.login_topic1')}</Text>

      <TextInput
        style={styles.loginmain_styles.input}
        placeholder={t('login.login_input1')}
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.loginmain_styles.input}
        placeholder={t('login.login_input2')}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Text style={styles.loginmain_styles.noticText}>{notic}</Text>
      <Button text={t('login.login_button1')} theme='green' fn={onPressNextgotoSelectFarm} />
      <Button text={t('login.login_button2')} theme='white' fn={handleGoogleLogin} />

      <View style={styles.loginmain_styles.separatorContainer}>
        <View style={styles.loginmain_styles.separatorLine} />
        <Text style={styles.loginmain_styles.separatorText}>{t('login.login_line1')}</Text>
        <View style={styles.loginmain_styles.separatorLine} />
      </View>
      <Button text={t('login.login_button3')} theme='gray' fn={() => navigation.navigate('newuser')} />

      <TouchableOpacity style={styles.loginmain_styles.gearIcon} onPress={() => setShowSettings(true)}>
        <MaterialCommunityIcons name="cog-outline" size={30} color="#999" />
      </TouchableOpacity>

      <View style={{ position: 'absolute', top: 0, right: 0, height: '50%', width: '50%', filter: 'blur(70px)', zIndex: -1 }}>
        <View style={{ backgroundColor: 'green', width: '50%', aspectRatio: 1, position: 'absolute', top: '-15%', right: 30 }}></View>
        <View style={{ backgroundColor: 'yellow', width: '30%', aspectRatio: 1, position: 'absolute', top: '30%', right: 5 }}></View>
      </View>

      <SettingsModal isVisible={showSettings} onClose={() => setShowSettings(false)} />
    </View>
  );
}


export default LoginMain