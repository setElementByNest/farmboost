import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type SummaryCardProps = {
    title: string;
    icon: keyof typeof MaterialCommunityIcons.glyphMap;
    abnormalLabel: string;
    abnormalCount: number;
};

const SummaryCard: React.FC<SummaryCardProps> = ({
    title,
    icon,
    abnormalLabel,
    abnormalCount,
}) => {
    return (
        <Pressable style={[styles.card, { borderBottomColor: abnormalCount > 0 ? '#c44' : '#0f5132' }]}>
            <View style={styles.headerRow}>
                <Text style={[styles.title, { color: abnormalCount > 0 ? "#c44" : "#0f5132" }]}>{title}</Text>
                <MaterialCommunityIcons name={icon} size={36} color={abnormalCount > 0 ? "#c44" : "#0f5132"} />
            </View>

            <Text style={styles.subLabel}>{abnormalLabel}</Text>
            <Text style={[styles.mainCount, { color: abnormalCount > 0 ? '#c44' : '#000' }]}>
                {abnormalCount} <Text style={styles.unit}>ตัว</Text>
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        elevation: 2,
        borderBottomWidth: 4,
        borderBottomColor: '#0f5132',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        marginVertical: 2,
        width: '48%',
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0f5132',
        fontFamily: 'Kanit_400Regular',
    },
    subLabel: {
        fontSize: 18,
        color: '#000',
        marginBottom: 4,
        fontFamily: 'Kanit_400Regular',
    },
    mainCount: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000',
        fontFamily: 'Kanit_400Regular',
        textAlign: 'center',
    },
    unit: {
        fontSize: 24,
        fontWeight: 'normal',
        fontFamily: 'Kanit_400Regular',
    },
    footerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 4,
    },
    footerText: {
        fontSize: 18,
        color: '#000',
        fontFamily: 'Kanit_400Regular',
    },
});

export default SummaryCard;
