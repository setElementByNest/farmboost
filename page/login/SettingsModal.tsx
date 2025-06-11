import { Picker } from '@react-native-picker/picker';
import React, { createContext, use, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import styles from './Styles';

interface SettingsModalProps {
    isVisible: boolean;
    onClose: () => void;
}

export type SettingProps = {
    lang: string;
    theme: string;
    fontsizre: number;
};

export const defaultSetting: SettingProps = {
    lang: 'THA',
    theme: 'light',
    fontsizre: 20,
};

export type SettingContextType = {
    nowSetting: SettingProps;
    setNowSetting: React.Dispatch<React.SetStateAction<SettingProps>>;
    changeLang: (lang: string) => void;
}

export const SettingContext = createContext<SettingContextType>({
    nowSetting: defaultSetting,
    setNowSetting: () => { },
    changeLang: () => { },
});

const SettingsModal: React.FC<SettingsModalProps> = ({ isVisible, onClose }) => {
    const setting = useContext(SettingContext);

    const handleLanguageChange = (lang: string) => {
        setting.setNowSetting((prev) => ({ ...prev, lang }));
        setting.changeLang(lang);
    }

    useEffect(() => {
        setting.changeLang(setting.nowSetting.lang);
    }, []);

    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onClose}
            swipeDirection="down"
            style={styles.settingmodal_styles.modal}
            backdropTransitionOutTiming={0}
        >
            <View style={styles.settingmodal_styles.container}>
                <Text style={styles.settingmodal_styles.title}>ตั้งค่า</Text>

                <Text style={styles.settingmodal_styles.label}>ภาษา</Text>
                <View style={styles.settingmodal_styles.buttonRow}>
                    <TouchableOpacity onPress={() => handleLanguageChange('THA')} style={setting.nowSetting.lang == 'THA' ? styles.settingmodal_styles.activeButton : styles.settingmodal_styles.inactiveButton}><Text style={setting.nowSetting.lang == 'THA' ? styles.settingmodal_styles.buttonText : {}}>ไทย</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => handleLanguageChange('ENG')} style={setting.nowSetting.lang == 'ENG' ? styles.settingmodal_styles.activeButton : styles.settingmodal_styles.inactiveButton}><Text style={setting.nowSetting.lang == 'ENG' ? styles.settingmodal_styles.buttonText : {}}>English</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => handleLanguageChange('MYA')} style={setting.nowSetting.lang == 'MYA' ? styles.settingmodal_styles.activeButton : styles.settingmodal_styles.inactiveButton}><Text style={setting.nowSetting.lang == 'MYA' ? styles.settingmodal_styles.buttonText : {}}>မြန်မာ</Text></TouchableOpacity>
                </View>

                <Text style={styles.settingmodal_styles.label}>ขนาดตัวอักษร</Text>
                <Picker
                    style={styles.settingmodal_styles.input}
                >
                    <Picker.Item label="Small" value={"small"} />
                    <Picker.Item label="Normal" value={"normal"} />
                    <Picker.Item label="Large" value={"large"} />
                </Picker>

                <Text style={styles.settingmodal_styles.label}>ธีม</Text>
                <View style={styles.settingmodal_styles.buttonRow}>
                    <TouchableOpacity style={styles.settingmodal_styles.activeButton}><Text style={styles.settingmodal_styles.buttonText}>สีสัน</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.settingmodal_styles.inactiveButton}><Text>โทนมืด</Text></TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default SettingsModal;