import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react'

interface Props {
    gotoHome: () => void;
}

const Createdone = ({ gotoHome }: Props) => {
    return (
        <ScrollView style={{ height: '100%' }} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>

                <Text style={styles.createFarmText}>สร้างฟาร์มเสร็จสิ้น</Text>
                <Text style={styles.createFarmDetailText}>กดปุ่มเริ่มใช้งาน</Text>
                <TouchableOpacity style={styles.nextIcon} onPress={gotoHome}>
                    <Text style={[styles.nextIconText, { color: "#2e6b50" }]}>เริ่มใช้งาน</Text>
                    <MaterialCommunityIcons name="arrow-right-circle" size={80} color={"#2e6b50"} />
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

export default Createdone