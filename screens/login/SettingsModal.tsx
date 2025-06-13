import { Picker } from '@react-native-picker/picker';
import React, { useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import styles from './Styles';
import { LangContext, LangProps } from '../../contexts/LangContext';

interface SettingsModalProps {
    isVisible: boolean;
    onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isVisible, onClose }) => {
    const { lang, selectLang } = useContext(LangContext);

    const handleLanguageChange = (lang: LangProps) => {
        selectLang(lang);
    }

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
                    <TouchableOpacity onPress={() => handleLanguageChange('THA')} style={lang == 'THA' ? styles.settingmodal_styles.activeButton : styles.settingmodal_styles.inactiveButton}><Text style={lang == 'THA' ? styles.settingmodal_styles.buttonText : {}}>ไทย</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => handleLanguageChange('ENG')} style={lang == 'ENG' ? styles.settingmodal_styles.activeButton : styles.settingmodal_styles.inactiveButton}><Text style={lang == 'ENG' ? styles.settingmodal_styles.buttonText : {}}>English</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => handleLanguageChange('MYA')} style={lang == 'MYA' ? styles.settingmodal_styles.activeButton : styles.settingmodal_styles.inactiveButton}><Text style={lang == 'MYA' ? styles.settingmodal_styles.buttonText : {}}>မြန်မာ</Text></TouchableOpacity>
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