import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import styles from './Styles';

type Props = NativeStackScreenProps<RootStackParamList, 'newuser'>;

const LoginNewUser = ({ navigation }: Props) => {
  const [username, setUsername] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [password2, setPassword2] = useState<string>('');
  const [typeFull, setTypeFull] = useState<boolean>(false);
  const [passMatch, setPassMatch] = useState<boolean>(false);

  useEffect(() => {
    if (username && phone && email && password && password2) {
      setTypeFull(true);
    } else {
      setTypeFull(false);
    }
    console.log('typeFull', typeFull);
    if (password === password2) {
      setPassMatch(true);
    } else {
      setPassMatch(false);
    }
  }, [username, phone, email, password, password2]);

  const onPressNext = () => {
    if (typeFull && passMatch) {
      navigation.navigate('createfarm')
    }
  }

  return (
    <ScrollView style={{ height: '100%' }} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <View style={styles.loginnewuser_styles.container}>

        <Text style={styles.loginnewuser_styles.text_head1}>สวัสดีผู้ใช้งานใหม่</Text>
        <Text style={styles.loginnewuser_styles.text_head2}>ลงทะเบียน</Text>
        <br />

        <TextInput
          style={styles.loginnewuser_styles.input}
          placeholder="ชื่อผู้ใช้งาน"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.loginnewuser_styles.input}
          placeholder="หมายเลขโทรศัพท์"
          value={phone}
          onChangeText={setPhone}
        />
        <TextInput
          style={styles.loginnewuser_styles.input}
          placeholder="อีเมล"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={[styles.loginnewuser_styles.input, !passMatch && { borderColor: 'red' }]}
          placeholder="รหัสผ่าน"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={[styles.loginnewuser_styles.input, !passMatch && { borderColor: 'red' }]}
          placeholder="รหัสผ่านอีกครั้ง"
          secureTextEntry
          value={password2}
          onChangeText={setPassword2}
        />
      </View>

      <TouchableOpacity style={styles.loginnewuser_styles.nextIcon} onPress={onPressNext}>
        <Text style={[styles.loginnewuser_styles.nextIconText, { color: (typeFull && passMatch) ? "#2e6b50" : "#ccc" }]}>ถัดไป</Text>
        <MaterialCommunityIcons name="arrow-right-circle" size={80} color={(typeFull && passMatch) ? "#2e6b50" : "#ccc"} />
      </TouchableOpacity>
    </ScrollView>
  );
}


export default LoginNewUser