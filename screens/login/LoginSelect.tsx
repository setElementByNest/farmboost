import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styles from './Styles';
import { NavListProps } from '../../navigation/Nav';

type Props = NativeStackScreenProps<NavListProps, 'selectFarm'>;

const LoginSelect = ({ navigation }: Props) => {
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
    const onPressNext = () => {
        if (selected !== null) {
            navigation.navigate('loading')
        }
    }
    return (
        <ScrollView style={{ height: '100%' }} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <View style={styles.loginselect_styles.container}>

                <Text style={styles.loginselect_styles.selectFarmText}>ฟาร์มของคุณ</Text>
                <Text style={styles.loginselect_styles.selectFarmDetailText}>กดเพื่อเลือกฟาร์มของคุณ</Text>
                <View style={styles.loginselect_styles.selectLayout}>
                    {
                        dataSelectFarm.map((farm) => (
                            <TouchableOpacity
                                key={farm.id}
                                style={styles.loginselect_styles.selectFarmItem}
                                onPress={() => handleSelectFarm(farm.id)}
                            >
                                <Text></Text>
                                <View style={[styles.loginselect_styles.selectFarmItemImg,
                                selected === farm.id && { outlineColor: '#2e6b50' }]}>
                                    <Image
                                        source={farm.image}
                                        style={styles.loginselect_styles.selectImage}
                                    />
                                </View>
                                <Text style={styles.loginselect_styles.selectFarmItemText}>{farm.name}</Text>
                            </TouchableOpacity>
                        ))
                    }
                    <TouchableOpacity style={styles.loginselect_styles.selectFarmItem} onPress={() => navigation.navigate('createfarm')}>
                        <Text></Text>
                        <MaterialCommunityIcons name="plus-circle" size={40} color="#999" />
                        <Text></Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.loginselect_styles.nextIcon} onPress={onPressNext}>
                    <Text style={[styles.loginselect_styles.nextIconText, { color: selected !== null ? "#2e6b50" : "#ccc" }]}>เริ่มใช้งาน</Text>
                    <MaterialCommunityIcons name="arrow-right-circle" size={80} color={selected !== null ? "#2e6b50" : "#ccc"} />
                </TouchableOpacity>
            </View>
        </ScrollView>

    )
}

export default LoginSelect