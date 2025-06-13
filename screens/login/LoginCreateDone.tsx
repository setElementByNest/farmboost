import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styles from './Styles';
import { NavListProps } from '../../navigation/Nav';

type Props = NativeStackScreenProps<NavListProps, 'createdone'>;

const LoginCreateDone = ({ navigation }: Props) => {
    return (
        <ScrollView style={{ height: '100%' }} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <View style={styles.logincreatedone_styles.container}>

                <Text style={styles.logincreatedone_styles.createFarmText}>สร้างฟาร์มเสร็จสิ้น</Text>
                <Text style={styles.logincreatedone_styles.createFarmDetailText}>กดปุ่มเริ่มใช้งาน</Text>
                <TouchableOpacity style={styles.logincreatedone_styles.nextIcon} onPress={() => navigation.navigate('loading')}>
                    <Text style={[styles.logincreatedone_styles.nextIconText, { color: "#2e6b50" }]}>เริ่มใช้งาน</Text>
                    <MaterialCommunityIcons name="arrow-right-circle" size={80} color={"#2e6b50"} />
                </TouchableOpacity>
            </View>
        </ScrollView>

    )
}

export default LoginCreateDone