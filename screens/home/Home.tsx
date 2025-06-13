import { View, Text, Pressable, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styles from './Styles'
import { Checkbox } from 'react-native-paper';
import { Color } from '../../components/Colors';
import SummaryCard from '../../components/summaryCard/SummaryCard';
import { NavListProps } from '../../navigation/Nav';
import { demo_task } from '../../data/FetchData';

type Props = NativeStackScreenProps<NavListProps, 'home'>;

type TaskProps = {
    name: string;
    status: string;
    timestamp: number;
    _id: number;
};

const Home = ({ navigation }: Props) => {
    const [listDay, setListDay] = useState<number[]>([]);
    const [tasks, setTasks] = useState<TaskProps[]>([]);
    const [allTasks, setAllTasks] = useState<TaskProps[]>([]);
    const [selectDay, setSelectDay] = useState<number>(new Date().getDate());
    const { t } = useTranslation();


    useEffect(() => {
        const demoData = demo_task;
        const toDay = new Date();
        const showDemo = () => {
            const dataFilter = demoData.filter((task) => {
                // Collect unique days within +/- 3 days of today
                const taskDate = new Date(task.timestamp * 1000);
                const diff = Math.abs(taskDate.getTime() - toDay.getTime());
                return diff <= 259200000; // 3 days in ms
            });
            return dataFilter;
        };
        const filteredTasks = showDemo();
        console.log("filteredTasks", filteredTasks)
        setAllTasks(filteredTasks);
        const days = [];
        for (let i = -3; i <= 3; i++) {
            const date = new Date(toDay);
            date.setDate(toDay.getDate() + i);
            days.push(date.getDate());
        }
        setListDay(days);
        setSelectDay(toDay.getDate());
        setTasks(
            filteredTasks.filter((task) => {
                const dayTask = new Date(task.timestamp * 1000);
                return dayTask.getDate() === toDay.getDate();
            })
        );
    }, []);

    const iconStatus = (status: string) => {
        switch (status) {
            case 'done':
                return <MaterialCommunityIcons style={styles.home_styles.listIconDone} name="check" />;
            case 'not':
                return <MaterialCommunityIcons style={styles.home_styles.listIconNot} name="close" />;
            case 'now':
                return <MaterialCommunityIcons style={styles.home_styles.listIconNow} name="record" />;
            default:
                return <View />;
        }
    };

    const onPressSelectDay = (day: number) => {
        setSelectDay(day);
        setTasks(
            allTasks.filter((task) => {
                const dayTask = new Date(task.timestamp * 1000);
                return dayTask.getDate() === day;
            })
        );
    };

    const toggleTask = (id: number) => {
        setAllTasks(prev => {
            const updatedTasks = prev.map(task =>
                task._id === id
                    ? { ...task, status: task.status === 'completed' ? 'pending' : 'completed' }
                    : task
            );
            setTasks(updatedTasks.filter(task => {
                const dayTask = new Date(task.timestamp * 1000);
                return dayTask.getDate() === selectDay;
            }));
            return updatedTasks;
        });
    };

    return (
        <View style={{ width: '100%', height: '100%', position: 'relative', justifyContent: 'flex-start', alignItems: 'center' }}>
            <ScrollView style={{ width: '100%', height: '100%', position: 'relative' }} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                <View style={styles.home_styles.container}>
                    <View style={styles.home_styles.header}>
                        <Text style={styles.home_styles.text_head1}>Murrah Farm</Text>
                        <Image
                            source={require('../../assets/buff2.png')}
                            style={styles.home_styles.headerImage}
                        />
                    </View>
                    <View>
                        <View style={styles.home_styles.calendar_head}>
                            <Text style={styles.home_styles.text_head4}>June</Text>
                            <Pressable><Text style={styles.home_styles.text_head4_gray}>ดูทั้งหมด</Text></Pressable>
                        </View>
                        <View style={styles.home_styles.calendar}>
                            {listDay.map((day, index) => (
                                <Pressable
                                    key={index}
                                    style={[
                                        styles.home_styles.listItem,
                                        { opacity: day === selectDay ? 1 : 0.2 }
                                    ]}
                                    onPress={() => onPressSelectDay(day)}
                                >
                                    <Text style={styles.home_styles.listItemText}>{day}</Text>
                                    {(() => {
                                        const task = allTasks.find(t => {
                                            const d = new Date(t.timestamp * 1000);
                                            return d.getDate() === day;
                                        });
                                        return task ? iconStatus(task.status) : null;
                                    })()}
                                </Pressable>
                            ))}
                        </View>
                        <Text style={styles.home_styles.text_head4}>รายการที่ต้องทำ</Text>
                        <View style={styles.cardtodo_styles.card}>
                            {tasks.length > 0 ? (
                                tasks.map((task, i) => (
                                    <View
                                        key={i}
                                        style={[
                                            styles.cardtodo_styles.taskRow
                                        ]}
                                    >
                                        <Checkbox
                                            status={task.status == 'completed' ? 'checked' : 'unchecked'}
                                            onPress={() => toggleTask(task._id)}
                                            color={Color.main}
                                        />
                                        <Text style={[
                                            styles.cardtodo_styles.taskText,
                                            (task.status == 'completed') && styles.cardtodo_styles.completed
                                        ]}>
                                            {task.name}
                                        </Text>
                                    </View>
                                ))
                            ) : (
                                <View>
                                    <Text style={[styles.cardtodo_styles.taskText, { opacity: 0.5, textAlign: 'center', fontSize: 24 }]}>ว่าง</Text>
                                    <Text style={[styles.cardtodo_styles.taskText, { opacity: 0.5, textAlign: 'center' }]}>ไม่มีรายการที่ต้องทำ</Text>
                                </View>
                            )}
                            <Pressable style={styles.cardtodo_styles.bottomRightIcon} >
                                <MaterialCommunityIcons name="format-list-bulleted" size={20} color="white" />
                            </Pressable>
                        </View>
                    </View>
                    <Text style={styles.home_styles.text_head3}>รายงานผลแบบย่อ</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap' }}>
                        <SummaryCard
                            title="การติดสัด"
                            icon="cards-heart"
                            abnormalLabel="โอกาส 80%"
                            abnormalCount={2}
                        />
                        <SummaryCard
                            title="สุขภาพ"
                            icon="stethoscope"
                            abnormalLabel="ผิดปกติ"
                            abnormalCount={0}
                        />
                        <SummaryCard
                            title="การเติบโต"
                            icon="paw"
                            abnormalLabel="ช้ากว่าปกติ"
                            abnormalCount={0}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default Home