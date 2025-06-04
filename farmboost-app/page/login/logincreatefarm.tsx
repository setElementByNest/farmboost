import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react'

interface Props {
    gotoCreatingFarm: () => void;
}

const Createfarm = ({ gotoCreatingFarm }: Props) => {
    const [farmName, setFarmName] = useState<string | null>(null);
    const onPressNext = () => {
        if (!(farmName == null || farmName == '')) {
            gotoCreatingFarm();
        }
    }
    return (
        <ScrollView style={{ height: '100%' }} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>

                <Text style={styles.createFarmText}>ตั้งชื่อฟาร์ม</Text>
                <Text style={styles.createFarmDetailText}>ชื่อไม่เกิน 20 ตัวอักษร</Text>
                <br />
                <TextInput
                    style={styles.input}
                    placeholder="ชื่อฟาร์มของคุณ"
                    maxLength={20}
                    value={farmName ?? ''}
                    onChangeText={setFarmName}
                />
                <TouchableOpacity style={styles.nextIcon} onPress={onPressNext}>
                    <Text style={[styles.nextIconText, { color: !(farmName == null || farmName == '') ? "#2e6b50" : "#ccc" }]}>ถัดไป</Text>
                    <MaterialCommunityIcons name="arrow-right-circle" size={80} color={!(farmName == null || farmName == '') ? "#2e6b50" : "#ccc"} />
                </TouchableOpacity>
            </View>
        </ScrollView>

    )
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
    input: {
        borderWidth: 1,
        borderColor: '#e6e6e6',
        borderRadius: 4,
        padding: 12,
        marginBottom: 12,
        fontSize: 22,
        backgroundColor: '#fff',
        elevation: 1,
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
})

export default Createfarm