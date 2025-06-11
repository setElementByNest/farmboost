import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Color } from '../Colors';

const statusColors: Record<string, { border: string; label: string }> = {
    'ติดสัด': { border: '#E91E63', label: 'pink' },
    'ผิดปกติ': { border: '#B71C1C', label: 'darkred' },
    'ปกติ': { border: '#0f5132', label: 'green' },
    'ส่งออกแล้ว': { border: '#FFC107', label: 'orange' },
};

type AnimalStatus = 'ปกติ' | 'ติดสัด' | 'ผิดปกติ' | 'ส่งออกแล้ว';

type Animal = {
    id: string;
    name: string;
    code: string;
    gender: 'ผู้' | 'เมีย';
    age: number;
    weight: number;
    status: AnimalStatus;
};

type Props = {
    animals: Animal[];
};

const AnimalCardList: React.FC<Props> = ({ animals }) => {
    return (
        <FlatList
            data={animals}
            numColumns={2}
            keyExtractor={(item) => item.id}
            columnWrapperStyle={{ justifyContent: 'space-between', gap: 10 }}
            renderItem={({ item }) => {
                const status = statusColors[item.status];
                return (
                    <View style={[styles.card, { borderColor: status.border }]}>
                        <Text style={[styles.name, { color: status.border }]}>{item.name}</Text>
                        <Text style={styles.text_head3}>{item.code}</Text>
                        <Text style={styles.text_head3}>เพศ: {item.gender}</Text>
                        <Text style={styles.text_head3}>อายุ: {item.age} ปี</Text>
                        <Text style={styles.text_head3}>น้ำหนัก: {item.weight} Kg.</Text>
                        {item.status !== 'ปกติ' && item.status !== 'ส่งออกแล้ว' && (
                            <View style={[styles.statusBadge, { backgroundColor: status.border }]}>
                                <Text style={styles.statusText}>{item.status}</Text>
                            </View>
                        )}
                    </View>
                );
            }}
        />
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
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        marginVertical: 8,
        position: 'relative',
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        fontFamily: 'Kanit_400Regular',
    },
    statusBadge: {
        marginTop: 8,
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 5,
        alignSelf: 'flex-start',
        position: 'absolute',
        top: 8,
        right: 16,
    },
    statusText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Kanit_400Regular',
    },
    text_head3: {
        fontSize: 16,
        color: Color.text1,
        fontFamily: 'Kanit_400Regular',
    },
});

export default AnimalCardList;