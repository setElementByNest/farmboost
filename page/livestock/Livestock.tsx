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

type Props = NativeStackScreenProps<RootStackParamList, 'livestock'>;

type ListDayProps = {
    day: string;
    status: string;
};

type TaskProps = {
    id: string;
    title: string;
    completed: boolean;
};

const ListDay = [
    { day: '11', status: 'done' },
    { day: '12', status: 'not' },
    { day: '13', status: 'done' },
    { day: '14', status: 'now' },
    { day: '15', status: 'none' },
    { day: '16', status: 'none' },
    { day: '17', status: 'none' }
];

const initialTasks: TaskProps[] = [
    { id: '1', title: 'ฉีดยาควาย 2 ตัว', completed: false },
    { id: '2', title: 'ชั่งน้ำหนักควาย 28 ตัว', completed: true },
    { id: '3', title: 'ฉีดวัคซีน Haemorrhagic Septicaemia', completed: false },
    { id: '4', title: 'ฉีดวัคซีน MorrhaTic Ticaegia', completed: false },
];
const task1: TaskProps[] = [
    { id: '1', title: 'ชั่งน้ำหนักควาย 2 ตัว', completed: true },
];
const task2: TaskProps[] = [
    { id: '1', title: 'ฉีดยาควาย 5 ตัว', completed: false },
    { id: '2', title: 'ชั่งน้ำหนักควาย 2 ตัว', completed: true },
];
const task3: TaskProps[] = [
    { id: '1', title: 'ฉีดยาควาย 5 ตัว', completed: false },
];
const taskGroup = [
    {
        day: '11',
        tasks: task1
    },
    {
        day: '12',
        tasks: task2
    },
    {
        day: '13',
        tasks: task1
    },
    {
        day: '14',
        tasks: initialTasks
    },
    {
        day: '15',
        tasks: task3
    },
    {
        day: '16',
        tasks: []
    },
    {
        day: '17',
        tasks: []
    },
]

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

const animals: Animal[] = [
    { id: '1', name: 'Bella', code: 'BF005', gender: 'เมีย', age: 6, weight: 672, status: 'ติดสัด' },
    { id: '2', name: 'ตะโกร๋', code: 'M14596', gender: 'เมีย', age: 10, weight: 318.5, status: 'ผิดปกติ' },
    { id: '3', name: 'บื้อ', code: 'M241129', gender: 'ผู้', age: 5, weight: 612, status: 'ปกติ' },
    { id: '4', name: 'Max', code: 'BF004', gender: 'ผู้', age: 4, weight: 524, status: 'ปกติ' },
    { id: '5', name: 'Luna', code: 'BF003', gender: 'เมีย', age: 5, weight: 624, status: 'ส่งออกแล้ว' },
    { id: '6', name: 'Max', code: 'BF004', gender: 'ผู้', age: 4, weight: 598, status: 'ส่งออกแล้ว' },
];

const Livestock = ({ navigation }: Props) => {
    const [listDay, setListDay] = useState<ListDayProps[]>([]);
    const [tasks, setTasks] = useState<TaskProps[]>([]);
    const [selectDay, setSelectDay] = useState<string>(ListDay[3].day);
    const { t } = useTranslation();

    const iconStatus = (status: string) => {
        switch (status) {
            case 'done':
                return <MaterialCommunityIcons style={styles.livestock_styles.listIconDone} name="check" />;
            case 'not':
                return <MaterialCommunityIcons style={styles.livestock_styles.listIconNot} name="close" />;
            case 'now':
                return <MaterialCommunityIcons style={styles.livestock_styles.listIconNow} name="record" />;
            default:
                return <View></View>;
        }
    }

    const onPressSelectDay = (day: string) => {
        setSelectDay(day);
        setTasks(taskGroup.find(item => item.day === day)?.tasks || []);
    }

    const toggleTask = (id: string) => {
        setTasks(prev =>
            prev.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    useEffect(() => {
        setListDay(ListDay);
        setTasks(initialTasks);
    }, []);

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
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 10 }}>
                        <AnimalCardList animals={animals} />
                    </View>
                </View>
            </ScrollView>
            <BottomNav navigation={navigation} nowpage='livestock'/>
        </View>
    )
}

export default Livestock