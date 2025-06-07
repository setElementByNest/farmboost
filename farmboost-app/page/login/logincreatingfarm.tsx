import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Bar } from 'react-native-progress';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import styles from './Styles';

type Props = NativeStackScreenProps<RootStackParamList, 'creatingfarm'>;

const LoginCreatingFarm = ({ navigation }: Props) => {
    const [percent, setPercent] = useState<number>(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setPercent((prev: number) => {
                if (prev < 1) {
                    return prev + 0.2;
                } else {
                    clearInterval(interval);
                    navigation.navigate('createdone');
                    return prev;
                }
            });
        }, 500);
        return () => clearInterval(interval);
    }, []);
    return (
        <ScrollView style={{ height: '100%' }} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <View style={styles.logincreatingfarm_styles.container}>
                <Text style={styles.logincreatingfarm_styles.createFarmText}>กำลังสร้างฟาร์ม</Text>
                <Text style={styles.logincreatingfarm_styles.createFarmDetailText}>กรุณารอสักครู่</Text>
                <View style={[styles.logincreatingfarm_styles.progressContainer, { width: '85%' }]}>
                    <Text style={styles.logincreatingfarm_styles.percentText}>{Math.round(percent * 100)}%</Text>
                    <Bar
                        progress={percent}
                        height={12}
                        width={null}
                        style={{ alignSelf: 'stretch' }}
                        borderRadius={6}
                        color="#1B4F3E"
                        unfilledColor="#E0E0E0"
                        borderWidth={0}
                    />
                </View>
            </View>
        </ScrollView>

    )
}
export default LoginCreatingFarm