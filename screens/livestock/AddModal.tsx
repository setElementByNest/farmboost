import { Picker } from '@react-native-picker/picker';
import React, { createContext, use, useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Pressable, } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Modal from 'react-native-modal';
import styles from './Styles';
import Button from '../../components/button/Button';

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

const AddModal: React.FC<SettingsModalProps> = ({ isVisible, onClose }) => {
    const [addId, setAddId] = useState<string>("XX0000")
    const [addName, setName] = useState<string>("")
    const [addSex, setSex] = useState<string>("m")
    const [addMass, setMass] = useState<string>()
    const [addPedigree, setPedigree] = useState<string>()
    const [addDad, setDad] = useState<string>("")
    const [addMom, setMon] = useState<string>("")
    const [addDate, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState(false);
    const setting = useContext(SettingContext);

    const onChangeDate = (event: any, selectedDate?: Date) => {
        if (selectedDate) {
            setDate(selectedDate);
            setShow(false)
        }
    };
    const showDatepicker = () => {
        setShow(true);
    };
    const onSave = () => {
        onClose();
    }

    useEffect(() => {
        setting.changeLang(setting.nowSetting.lang);
    }, []);

    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onClose}
            swipeDirection="down"
            style={styles.addmodal_styles.modal}
            backdropTransitionOutTiming={0}
        >
            <View style={styles.addmodal_styles.container}>
                <Text style={styles.addmodal_styles.title}>เพิ่มรายการปศุสัตว์</Text>
                <Text style={styles.addmodal_styles.label}>ID</Text>
                <TextInput
                    style={styles.addmodal_styles.input}
                    placeholder={"ID"}
                    value={addId}
                    onChangeText={setAddId}
                />
                <Text style={styles.addmodal_styles.label}>ชื่อสัตว์</Text>
                <TextInput
                    style={styles.addmodal_styles.input}
                    placeholder={"ชื่อสัตว์"}
                    value={addName}
                    onChangeText={setName}
                />
                <View style={{ display: 'flex', flexDirection: 'row', gap: 10, justifyContent: 'space-between' }}>
                    <View style={{ display: 'flex', width: '48%' }}>
                        <Text style={styles.addmodal_styles.label}>เพศ</Text>
                        <View style={styles.addmodal_styles.buttonRow}>
                            <Pressable onPress={() => setSex('m')} style={addSex == 'm' ? styles.addmodal_styles.activeButton : styles.addmodal_styles.inactiveButton}>
                                <Text style={addSex == 'm' ? styles.addmodal_styles.buttonRow_text_active : styles.addmodal_styles.buttonRow_text_inactive}>ผู้</Text>
                            </Pressable>
                            <Pressable onPress={() => setSex('w')} style={addSex == 'w' ? styles.addmodal_styles.activeButton : styles.addmodal_styles.inactiveButton}>
                                <Text style={addSex == 'w' ? styles.addmodal_styles.buttonRow_text_active : styles.addmodal_styles.buttonRow_text_inactive}>เมีย</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={{ display: 'flex', width: '48%' }}>
                        <Text style={styles.addmodal_styles.label}>วันเกิด</Text>
                        <TouchableOpacity onPress={showDatepicker}>
                            <TextInput
                                style={styles.addmodal_styles.input}
                                placeholder={"วันเกิด"}
                                value={addDate.toLocaleDateString()}
                                editable={false}
                                pointerEvents="none"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 10, justifyContent: 'space-between' }}>
                    <View style={{ display: 'flex', width: '48%' }}>
                        <Text style={styles.addmodal_styles.label}>น้ำหนัก</Text>
                        <TextInput
                            style={styles.addmodal_styles.input}
                            placeholder={"น้ำหนัก"}
                            value={addMass}
                            onChangeText={setMass}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={{ display: 'flex', width: '48%' }}>
                        <Text style={styles.addmodal_styles.label}>สายพันธุ์</Text>
                        <TextInput
                            style={styles.addmodal_styles.input}
                            placeholder={"สายพันธุ์"}
                            value={addPedigree}
                            onChangeText={setPedigree}
                        />
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 10, justifyContent: 'space-between' }}>
                    <View style={{ display: 'flex', width: '48%' }}>
                        <Text style={styles.addmodal_styles.label}>พ่อพันธุ์</Text>
                        <TextInput
                            style={styles.addmodal_styles.input}
                            placeholder={"พ่อพันธุ์"}
                            value={addDad}
                            onChangeText={setDad}
                        />
                    </View>
                    <View style={{ display: 'flex', width: '48%' }}>
                        <Text style={styles.addmodal_styles.label}>แม่พันธุ์</Text>
                        <TextInput
                            style={styles.addmodal_styles.input}
                            placeholder={"แม่พันธุ์"}
                            value={addMom}
                            onChangeText={setMon}
                        />
                    </View>
                </View>
                {show && <DateTimePicker
                    value={addDate}
                    mode="date"
                    display="default"
                    onChange={onChangeDate}
                />}
                <View style={{ height: 32 }} />
                <Button text='บันทึกข้อมูล' theme='green' fn={onSave} />
            </View>
        </Modal>
    );
};

export default AddModal;