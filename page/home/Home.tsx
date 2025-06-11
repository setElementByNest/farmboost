import { View, Text, Pressable } from 'react-native'
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

type Props = NativeStackScreenProps<RootStackParamList, 'home'>;

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
        tasks: task2
    },
    {
        day: '16',
        tasks: task1
    },
    {
        day: '17',
        tasks: task2
    },
]

const Home = ({ navigation }: Props) => {
    const [listDay, setListDay] = useState<ListDayProps[]>([]);
    const [tasks, setTasks] = useState<TaskProps[]>([]);
    const [selectDay, setSelectDay] = useState<string>(ListDay[3].day);
    const { t } = useTranslation();

    const iconStatus = (status: string) => {
        switch (status) {
            case 'done':
                return <MaterialCommunityIcons style={styles.home_styles.listIconDone} name="check" />;
            case 'not':
                return <MaterialCommunityIcons style={styles.home_styles.listIconNot} name="close" />;
            case 'now':
                return <MaterialCommunityIcons style={styles.home_styles.listIconNow} name="record" />;
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
        <View style={styles.home_styles.container}>
            <Text style={styles.home_styles.text_head1}>Murrah Farm</Text>
            <Text style={styles.home_styles.text_head3}>รายการที่ต้องทำ</Text>
            <View>
                <View style={styles.home_styles.calendar_head}>
                    <Text style={styles.home_styles.text_head4}>June</Text>
                    <Pressable><Text style={styles.home_styles.text_head4_gray}>ดูทั้งหมด</Text></Pressable>
                </View>
                <View style={styles.home_styles.calendar}>
                    {
                        listDay.map((item, index) => (
                            <Pressable key={index} style={[styles.home_styles.listItem, { opacity: (item.day === selectDay ? 1 : 0.2) }]} onPress={() => onPressSelectDay(item.day)}>
                                <Text style={styles.home_styles.listItemText}>{item.day}</Text>
                                {
                                    iconStatus(item.status)
                                }

                            </Pressable>
                        ))
                    }
                </View>
                <View style={styles.cardtodo_styles.card}>
                    {tasks.map((task) => (
                        <View
                            key={task.id}
                            style={[
                                styles.cardtodo_styles.taskRow
                            ]}
                        >
                            <Checkbox
                                status={task.completed ? 'checked' : 'unchecked'}
                                onPress={() => toggleTask(task.id)}
                                color={Color.main}
                            />
                            <Text style={[styles.cardtodo_styles.taskText, task.completed && styles.cardtodo_styles.completed]}>
                                {task.title}
                            </Text>
                        </View>
                    ))}
                    <Pressable style={styles.cardtodo_styles.bottomRightIcon}>
                        <MaterialCommunityIcons name="format-list-bulleted" size={20} color="white" />
                    </Pressable>
                </View>
            </View>
            <Text style={styles.home_styles.text_head3}>รายงานผลแบบย่อ</Text>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 10}}>
                <SummaryCard
                    title="การเติบโต"
                    icon="paw"
                    abnormalLabel="ช้ากว่าปกติ"
                    abnormalCount={0}
                    normalCount={0}
                    fastCount={0}
                />
                <SummaryCard
                    title="สุขภาพ"
                    icon="head-heart"
                    abnormalLabel="ผิดปกติ"
                    abnormalCount={0}
                    normalCount={0}
                />
            </View>
        </View>
    )
}

export default Home