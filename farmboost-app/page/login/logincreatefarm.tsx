import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import styles from './Styles';

type Props = NativeStackScreenProps<RootStackParamList, 'createfarm'>;

const LoginCreateFarm = ({ navigation }: Props) => {
    const [farmName, setFarmName] = useState<string | null>(null);
    const onPressNext = () => {
        if (!(farmName == null || farmName == '')) {
            navigation.navigate('creatingfarm');
        }
    }
    return (
        <ScrollView style={{ height: '100%' }} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <View style={styles.logincreatefarm_styles.container}>

                <Text style={styles.logincreatefarm_styles.createFarmText}>ตั้งชื่อฟาร์ม</Text>
                <Text style={styles.logincreatefarm_styles.createFarmDetailText}>ชื่อไม่เกิน 20 ตัวอักษร</Text>
                <TextInput
                    style={styles.logincreatefarm_styles.input}
                    placeholder="ชื่อฟาร์มของคุณ"
                    maxLength={20}
                    value={farmName ?? ''}
                    onChangeText={setFarmName}
                />
                <TouchableOpacity style={styles.logincreatefarm_styles.nextIcon} onPress={onPressNext}>
                    <Text style={[styles.logincreatefarm_styles.nextIconText, { color: !(farmName == null || farmName == '') ? "#2e6b50" : "#ccc" }]}>ถัดไป</Text>
                    <MaterialCommunityIcons name="arrow-right-circle" size={80} color={!(farmName == null || farmName == '') ? "#2e6b50" : "#ccc"} />
                </TouchableOpacity>
            </View>
        </ScrollView>

    )
}

export default LoginCreateFarm