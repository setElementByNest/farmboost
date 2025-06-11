import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type TabItem = {
    name: string;
    label: string;
    icon: keyof typeof MaterialCommunityIcons.glyphMap;
    isActive: boolean;
};

const tabs: TabItem[] = [
    { name: 'home', label: 'หน้าแรก', icon: 'home', isActive: true },
    { name: 'livestock', label: 'ข้อมูลสัตว์', icon: 'book-open', isActive: false },
    { name: 'Add', label: 'เพิ่มสัตว์', icon: 'plus-circle', isActive: false },
    { name: 'Alert', label: 'แจ้งเตือน', icon: 'bell', isActive: false },
    { name: 'Settings', label: 'ตั้งค่า', icon: 'cog-outline', isActive: false },
];

interface Props {
    nowpage?: string;
    navigation: any;
};

const BottomNav = ({ navigation, nowpage }: Props) => {
    return (
        <View style={styles.container}>
            {tabs.map((tab, index) => (
                <TouchableOpacity key={index} style={styles.tab} onPress={() => navigation.navigate(tab.name)}>
                    <MaterialCommunityIcons
                        name={tab.icon}
                        size={28}
                        color={ tab.name == nowpage ? '#005E3D' : '#84b98e88'}
                    />
                    <Text style={[styles.label, { color: tab.name == nowpage ? '#005E3D' : '#84b98e88' }]}>
                        {tab.label}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 90,
        backgroundColor: '#e2ece4',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        paddingBottom: 10,
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    tab: {
        alignItems: 'center',
    },
    label: {
        fontSize: 14,
        marginTop: 4,
        fontFamily: 'Kanit_400Regular',
    },
});

export default BottomNav;
