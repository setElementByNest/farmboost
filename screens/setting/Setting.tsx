import { Picker } from '@react-native-picker/picker';
import React, { useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Pressable, ScrollView } from 'react-native';
import styles from './Styles';
import Button from '../../components/button/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavListProps } from '../../navigation/Nav';
import { LangContext, LangProps } from '../../contexts/LangContext';
type Props = NativeStackScreenProps<NavListProps, 'setting'>;

const Setting = ({ navigation }: Props) => {
    const { lang, selectLang } = useContext(LangContext);

    const handleLanguageChange = (lang: LangProps) => {
        selectLang(lang);
    }

    const onLogOut = () => {
        navigation.navigate('loginmain')
    }

    return (
        <View style={{ width: '100%', height: '100%', position: 'relative', justifyContent: 'flex-start', alignItems: 'center' }}>
            <ScrollView style={{ width: '100%', height: '100%', position: 'relative' }} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                <View style={styles.setting_styles.container}>
                    <Text style={styles.setting_styles.text_head1}>ตั้งค่า</Text>

                    <Text style={styles.setting_styles.label}>ภาษา</Text>
                    <View style={styles.setting_styles.buttonRow}>
                                        <TouchableOpacity onPress={() => handleLanguageChange('THA')} style={lang == 'THA' ? styles.setting_styles.activeButton : styles.setting_styles.inactiveButton}><Text style={lang == 'THA' ? styles.setting_styles.buttonText : {}}>ไทย</Text></TouchableOpacity>
                                        <TouchableOpacity onPress={() => handleLanguageChange('ENG')} style={lang == 'ENG' ? styles.setting_styles.activeButton : styles.setting_styles.inactiveButton}><Text style={lang == 'ENG' ? styles.setting_styles.buttonText : {}}>English</Text></TouchableOpacity>
                                        <TouchableOpacity onPress={() => handleLanguageChange('MYA')} style={lang == 'MYA' ? styles.setting_styles.activeButton : styles.setting_styles.inactiveButton}><Text style={lang == 'MYA' ? styles.setting_styles.buttonText : {}}>မြန်မာ</Text></TouchableOpacity>
                    </View>

                    <Text style={styles.setting_styles.label}>ขนาดตัวอักษร</Text>
                    <Picker
                        style={styles.setting_styles.picker}
                    >
                        <Picker.Item label="Small" value={"small"} />
                        <Picker.Item label="Normal" value={"normal"} />
                        <Picker.Item label="Large" value={"large"} />
                    </Picker>

                    <Text style={styles.setting_styles.label}>ธีม</Text>
                    <View style={styles.setting_styles.buttonRow}>
                        <Pressable style={styles.setting_styles.activeButton}><Text style={styles.setting_styles.buttonText}>สีสัน</Text></Pressable>
                        <Pressable style={styles.setting_styles.inactiveButton}><Text>โทนมืด</Text></Pressable>
                    </View>
                    <Button text='ออกจากระบบ' theme='gray' fn={onLogOut} />
                </View>
            </ScrollView >
        </View >
    )
}

export default Setting