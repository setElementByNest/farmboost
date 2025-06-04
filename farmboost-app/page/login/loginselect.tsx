import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react'

interface Props {
  gotoCreateFarm: () => void;
}

const Loginselect = ({gotoCreateFarm}: Props) => {
    const [selected, setSelected] = useState<number | null>(null);
    const dataSelectFarm = [
        {
            id: 1,
            name: 'Mular1 Farm',
            image: require('../../assets/selactfarm-buffalo.png'),
        },
        {
            id: 2,
            name: 'Mular2 Farm',
            image: require('../../assets/selactfarm-buffalo.png'),
        },
        {
            id: 3,
            name: 'Mular3 Farm',
            image: require('../../assets/selactfarm-buffalo.png'),
        },
    ];
    const handleSelectFarm = (id: number) => {
        setSelected(id);
    };
    return (
        <ScrollView style={{height: '100%'}} contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>

                <Text style={styles.selectFarmText}>ฟาร์มของคุณ</Text>
                <Text style={styles.selectFarmDetailText}>กดเพื่อเลือกฟาร์มของคุณ</Text>
                <View style={styles.selectLayout}>
                    {
                        dataSelectFarm.map((farm) => (
                            <TouchableOpacity
                                key={farm.id}
                                style={styles.selectFarmItem}
                                onPress={() => handleSelectFarm(farm.id)}
                            >
                                <Text></Text>
                                <View style={[styles.selectFarmItemImg,
                                selected === farm.id && { outlineColor: '#2e6b50' }]}>
                                    <Image
                                        source={farm.image}
                                        style={styles.selectImage}
                                    />
                                </View>
                                <Text style={styles.selectFarmItemText}>{farm.name}</Text>
                            </TouchableOpacity>
                        ))
                    }
                    <TouchableOpacity style={styles.selectFarmItem} onPress={gotoCreateFarm}>
                        <Text></Text>
                        <MaterialCommunityIcons name="plus-circle" size={40} color="#999" />
                        <Text></Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.nextIcon}>
                    <Text style={[styles.nextIconText,{color: selected !== null ? "#2e6b50" : "#ccc"}]}>เริ่มใช้งาน</Text>
                    <MaterialCommunityIcons name="arrow-right-circle" size={80} color={selected !== null ? "#2e6b50" : "#ccc"} />
                </TouchableOpacity>
            </View>
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
    },
    selectFarmText: {
        fontSize: 42,
        color: '#000',
        fontFamily: 'Kanit_600SemiBold',
    },
    selectFarmDetailText: {
        fontSize: 20,
        color: '#2e6b50',
        marginBottom: 15,
        fontFamily: 'Kanit_400Regular',
    },
    selectImage: {
        width: '96%',
        height: '96%',
        resizeMode: 'contain',
        borderRadius: 10,
        alignSelf: 'center',
        position: 'relative',
    },
    selectLayout: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    selectFarmItem: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 0,
        marginBottom: '2%',
        width: '48%',
        borderRadius: 10,
        aspectRatio: 0.8,
        position: 'relative',
    },
    selectFarmItemImg: {
        width: '90%',
        height: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 4px #00000044',
        borderRadius: 10,
        marginBottom: 8,
        outlineStyle: 'solid',
        outlineWidth: 3,
        outlineColor: '#2e6b5000',
    },
    selectFarmItemText: {
        fontSize: 20,
        fontWeight: '400',
        color: '#000',
        fontFamily: 'Kanit_400Regular',
        marginBottom: 2,
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

export default Loginselect