import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type SummaryCardProps = {
    title: string;
    icon: keyof typeof MaterialCommunityIcons.glyphMap;
    abnormalLabel: string;
    normalCount: number;
    abnormalCount: number;
    fastCount?: number;
};

const SummaryCard: React.FC<SummaryCardProps> = ({
    title,
    icon,
    abnormalLabel,
    normalCount,
    abnormalCount,
    fastCount,
}) => {
    return (
        <View style={styles.card}>
            <View style={styles.headerRow}>
                <Text style={styles.title}>{title}</Text>
                <MaterialCommunityIcons name={icon} size={24} color="#0f5132" />
            </View>

            <Text style={styles.subLabel}>{abnormalLabel}</Text>
            <Text style={styles.mainCount}>
                {abnormalCount} <Text style={styles.unit}>ตัว</Text>
            </Text>

            <View style={styles.footerRow}>
                <Text style={styles.footerText}>ปกติ</Text>
                <Text style={styles.footerText}>{normalCount} ตัว</Text>
            </View>

            {typeof fastCount === 'number' && (
                <View style={styles.footerRow}>
                    <Text style={styles.footerText}>เร็วกว่าปกติ</Text>
                    <Text style={styles.footerText}>{fastCount} ตัว</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
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
        marginVertical: 8,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0f5132',
        fontFamily: 'Kanit_400Regular',
    },
    subLabel: {
        fontSize: 14,
        color: '#000',
        marginBottom: 4,
        fontFamily: 'Kanit_400Regular',
    },
    mainCount: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        fontFamily: 'Kanit_400Regular',
    },
    unit: {
        fontSize: 18,
        fontWeight: 'normal',
        fontFamily: 'Kanit_400Regular',
    },
    footerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 4,
    },
    footerText: {
        fontSize: 14,
        color: '#000',
        fontFamily: 'Kanit_400Regular',
    },
});

export default SummaryCard;
