import React, { createContext, use, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

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
    setNowSetting: () => {},
    changeLang: () => {},
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
            style={styles.modal}
            backdropTransitionOutTiming={0}
        >
            <View style={styles.container}>
                <Text style={styles.title}>ตั้งค่า</Text>

                <Text style={styles.label}>ภาษา</Text>
                <View style={styles.buttonRow}>
                    <TouchableOpacity onPress={() => handleLanguageChange('THA')} style={setting.nowSetting.lang == 'THA' ? styles.activeButton : styles.inactiveButton}><Text style={setting.nowSetting.lang == 'THA' ? styles.buttonText : {} }>ไทย</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => handleLanguageChange('ENG')} style={setting.nowSetting.lang == 'ENG' ? styles.activeButton : styles.inactiveButton}><Text style={setting.nowSetting.lang == 'ENG' ? styles.buttonText : {} }>English</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => handleLanguageChange('MYA')} style={setting.nowSetting.lang == 'MYA' ? styles.activeButton : styles.inactiveButton}><Text style={setting.nowSetting.lang == 'MYA' ? styles.buttonText : {} }>မြန်မာ</Text></TouchableOpacity>
                </View>

                <Text style={styles.label}>ขนาดตัวอักษร</Text>
                <TextInput style={styles.input} defaultValue="20" keyboardType="numeric" />

                <Text style={styles.label}>ธีม</Text>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.activeButton}><Text style={styles.buttonText}>สีสัน</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.inactiveButton}><Text>โทนมืด</Text></TouchableOpacity>
                </View>

                {/* <TouchableOpacity style={styles.confirmButton} onPress={onClose}>
                    <Text style={styles.confirmText}>ตั้งค่า</Text>
                </TouchableOpacity> */}
            </View>
        </Modal>
    );
};

export default SettingsModal;

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    container: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 30,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Kanit',
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        fontFamily: 'Kanit',
        marginTop: 12,
    },
    buttonRow: {
        flexDirection: 'row',
        gap: 8,
        marginVertical: 8,
    },
    activeButton: {
        backgroundColor: '#1c4c3f',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 6,
    },
    inactiveButton: {
        backgroundColor: '#eee',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 6,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'Kanit',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        padding: 8,
        marginVertical: 8,
        fontFamily: 'Kanit',
    },
    confirmButton: {
        backgroundColor: '#1c4c3f',
        borderRadius: 8,
        padding: 12,
        alignItems: 'center',
        marginTop: 24,
    },
    confirmText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Kanit',
    },
});
