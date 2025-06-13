import { View, Text, Pressable, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import styles from './Styles'
import { Checkbox } from 'react-native-paper';
import { Color } from '../../components/Colors';
import { t } from 'i18next';
import SummaryCard from '../../components/summaryCard/SummaryCard';
import BottomNav from '../../components/nav/BottomNav';
import AnimalCardList from '../../components/petCard/Petcard';
import AddModal from './AddModal';

type Props = NativeStackScreenProps<RootStackParamList, 'livestock'>;

type TaskProps = {
    id: string;
    title: string;
    completed: boolean;
};

type filterListProps = {
    id: string;
    title: string;
};

const filterList = [
    { id: '1', title: 'ทั้งหมด' },
    { id: '2', title: 'ติดสัด', },
    { id: '3', title: 'ผิดปกติ' },
    { id: '4', title: 'ปกติ', },
]

const statusOrder = ['ติดสัด', 'ผิดปกติ', 'ปกติ', 'ส่งออก', 'ตาย'];

type AnimalStatus = 'ปกติ' | 'ติดสัด' | 'ผิดปกติ' | 'ส่งออก' | 'ตาย';

type Animal = {
    id: string;
    name: string;
    code: string;
    gender: 'ผู้' | 'เมีย';
    age: number;
    weight: number;
    status: AnimalStatus;
};

const animals: Animal[] = [
    { id: '1', name: 'บื้อ', code: 'M241129', gender: 'ผู้', age: 5, weight: 612, status: 'ปกติ' },
    { id: '2', name: 'Bella', code: 'BF005', gender: 'เมีย', age: 6, weight: 672, status: 'ติดสัด' },
    { id: '3', name: 'ตะโกร๋', code: 'M14596', gender: 'เมีย', age: 10, weight: 318.5, status: 'ผิดปกติ' },
    { id: '4', name: 'Max', code: 'BF004', gender: 'ผู้', age: 4, weight: 524, status: 'ปกติ' },
    { id: '5', name: 'Luna', code: 'BF003', gender: 'เมีย', age: 5, weight: 624, status: 'ส่งออก' },
    { id: '6', name: 'Max', code: 'BF004', gender: 'ผู้', age: 4, weight: 598, status: 'ตาย' },
    { id: '7', name: 'Min', code: 'BF005', gender: 'ผู้', age: 4, weight: 534, status: 'ตาย' },
];

const Livestock = ({ navigation }: Props) => {
    const [filter, setFilter] = useState<filterListProps[]>([]);
    const [dataPet, setSataPet] = useState<Animal[]>([]);
    const [nowFilter, setNowFilter] = useState<number>(1);
    const [tasks, setTasks] = useState<TaskProps[]>([]);
    const [gridView, setGridView] = useState<boolean>(true);
    const [showAdd, setShowAdd] = useState(false);
    const { t } = useTranslation();

    const closeModal = () => {
        setShowAdd(false);
    }

    useEffect(() => {
        setFilter(filterList);
        const sortedAnimals = animals.sort((a, b) => {
            const indexA = statusOrder.findIndex(status => a.status.includes(status));
            const indexB = statusOrder.findIndex(status => b.status.includes(status));
            return indexA - indexB;
        });
        setSataPet(sortedAnimals);
    }, []);

    useEffect(() => {
        const selectedFilter = filter.find(item => Number(item.id) === nowFilter);
        const sortedAnimals = animals.sort((a, b) => {
            const indexA = statusOrder.findIndex(status => a.status.includes(status));
            const indexB = statusOrder.findIndex(status => b.status.includes(status));
            return indexA - indexB;
        });
        const filteredPets = nowFilter !== 1 && selectedFilter
            ? sortedAnimals.filter(animal => animal.status === selectedFilter.title)
            : sortedAnimals;
        setSataPet(filteredPets);
    }, [nowFilter]);

    return (
        <View style={{ width: '100%', height: '100%', position: 'relative', justifyContent: 'flex-start', alignItems: 'center' }}>
            <ScrollView style={{ width: '100%', height: '100%', position: 'relative' }} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                <View style={styles.livestock_styles.container}>
                    <View style={styles.livestock_styles.header}>
                        <Text style={styles.livestock_styles.text_head1}>ข้อมูลปศุสัตว์</Text>
                        <Image
                            source={require('../../assets/buff2.png')}
                            style={styles.livestock_styles.headerImage}
                        />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', gap: 6 }}>
                        {
                            filter.map((item) => (
                                <Pressable key={item.id} onPress={() => setNowFilter(Number(item.id))} >
                                    <View style={{ display: 'flex', alignItems: 'center', borderRadius: 10, backgroundColor: nowFilter == Number(item.id) ? '#bbd7c0' : '#bbd7c044', padding: 10 }}>
                                        <Text style={styles.livestock_styles.text_head3}>{item.title}</Text>
                                    </View>
                                </Pressable>
                            ))
                        }
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', gap: 6, marginVertical: 12 }}>
                        <Pressable onPress={() => setGridView(true)}>
                            <MaterialCommunityIcons name="view-grid" size={24} color={Color.text3} style={{ opacity: gridView ? 1 : 0.5 }} />
                        </Pressable>
                        <Pressable onPress={() => setGridView(false)}>
                            <MaterialCommunityIcons name="view-agenda" size={24} color={Color.text3} style={{ opacity: gridView ? 0.5 : 1 }} />
                        </Pressable>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap' }}>
                        {
                            dataPet.map((animal, i) => (
                                <AnimalCardList animals={animal} gridView={gridView} key={i} />
                            ))
                        }
                    </View>
                </View>
            </ScrollView>
            <Pressable onPress={() => setShowAdd(true)} style={styles.livestock_styles.plusIcon}>
                <MaterialCommunityIcons name="plus" size={32} color={'white'} />
            </Pressable>
            <BottomNav navigation={navigation} nowpage='livestock' />
            <AddModal isVisible={showAdd} onClose={closeModal} />
        </View>
    )
}

export default Livestock