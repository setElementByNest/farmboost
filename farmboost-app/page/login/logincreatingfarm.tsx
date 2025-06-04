import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-native-progress';

interface Props {
    gotoCreatingDone: () => void;
}

const Creatingfarm = ({ gotoCreatingDone }: Props) => {
    const [percent, setPercent] = useState<number>(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setPercent((prev: number) => {
                if (prev < 1) {
                    return prev + 0.2;
                } else {
                    clearInterval(interval);
                    gotoCreatingDone();
                    return prev;
                }
            });
        }, 500);
        return () => clearInterval(interval);
    }, []);
    return (
        <ScrollView style={{ height: '100%' }} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.createFarmText}>กำลังสร้างฟาร์ม</Text>
                <Text style={styles.createFarmDetailText}>กรุณารอสักครู่</Text>
                <View style={[styles.progressContainer, { width: '85%' }]}>
                    <Text style={styles.percentText}>{Math.round(percent * 100)}%</Text>
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
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    createFarmText: {
        fontSize: 42,
        fontWeight: '600',
        color: '#000',
        fontFamily: 'Kanit_600SemiBold',
    },
    createFarmDetailText: {
        fontSize: 20,
        color: '#2e6b50',
        marginBottom: 15,
        fontFamily: 'Kanit_400Regular',
    },
    progressContainer: {
        alignItems: 'center',
        gap: 8,
        position: 'absolute',
        bottom: 25,
    },
    percentText: {
        fontSize: 16,
        fontFamily: 'Kanit_700Bold',
        color: '#1B4F3E',
        marginBottom: 8,
    },
})

export default Creatingfarm