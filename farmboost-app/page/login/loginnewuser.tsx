import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface Props {
  gotoCreateFarm: () => void;
}

const Loginnewuser = ({ gotoCreateFarm }: Props) => {
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
      gotoCreateFarm();
    }
  }

  return (
    <ScrollView style={{ height: '100%' }} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>

        <Text style={styles.newUserText}>สวัสดีผู้ใช้งานใหม่</Text>
        <Text style={styles.newUserDetailText}>ลงทะเบียน</Text>
        <br />

        <TextInput
          style={styles.input}
          placeholder="ชื่อผู้ใช้งาน"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="หมายเลขโทรศัพท์"
          value={phone}
          onChangeText={setPhone}
        />
        <TextInput
          style={styles.input}
          placeholder="อีเมล"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={[styles.input, !passMatch && { borderColor: 'red' }]}
          placeholder="รหัสผ่าน"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={[styles.input, !passMatch && { borderColor: 'red' }]}
          placeholder="รหัสผ่านอีกครั้ง"
          secureTextEntry
          value={password2}
          onChangeText={setPassword2}
        />
      </View>

      <TouchableOpacity style={styles.nextIcon} onPress={onPressNext}>
        <Text style={[styles.nextIconText, { color: (typeFull && passMatch) ? "#2e6b50" : "#ccc" }]}>ถัดไป</Text>
        <MaterialCommunityIcons name="arrow-right-circle" size={80} color={(typeFull && passMatch) ? "#2e6b50" : "#ccc"} />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 60,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  newUserText: {
    fontSize: 42,
    color: '#000',
    fontFamily: 'Kanit_600SemiBold',
  },
  newUserDetailText: {
    fontSize: 20,
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
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Kanit_400Regular',
  },
  nextIcon: {
    position: 'absolute',
    bottom: 25,
    right: 25,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  nextIconText: {
    fontSize: 24,
    color: '#000',
    fontFamily: 'Kanit_400Regular',
    marginRight: 10,
  },
});

export default Loginnewuser