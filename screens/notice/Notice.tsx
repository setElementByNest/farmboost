import { View, Text, Pressable, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styles from './Styles'
import NoticeCard from '../../components/noticeCard/Noticecard';
import { NavListProps } from '../../navigation/Nav';

type Props = NativeStackScreenProps<NavListProps, 'notice'>;

type noticeListProps = {
    time: string;
    list: string;
    read: boolean;
};

const noticeList: noticeListProps[] = [
    {time: '1749813621', list: 'คุณมีสัตว์ป่วย 40 ตัว', read: false},
    {time: '1749813521', list: 'คุณมีสัตว์ป่วย 2 ตัว', read: false},
    {time: '1749813421', list: 'คุณมีสัตว์ป่วย 4 ตัว', read: true},
    {time: '1749813321', list: 'คุณมีสัตว์ป่วย 12 ตัว', read: true},
    {time: '1749813221', list: 'คุณมีสัตว์ป่วย 5 ตัว', read: true},
    {time: '1749813121', list: 'คุณมีสัตว์ป่วย 2 ตัว', read: true},
]

const Notice = ({ }: Props) => {
    const [filter, setFilter] = useState<noticeListProps[]>([]);

    const onClear = () => {
        setFilter(prev => prev.map(item => ({ ...item, read: true })));
    }

    useEffect(() => {
        const dataNoticeList: noticeListProps[] = noticeList;
        const sortedNoticeList = dataNoticeList.sort((a, b) => (Number(b.time) - Number(a.time)));
        setFilter(sortedNoticeList);
    }, []);

    return (
        <View style={{ width: '100%', height: '100%', position: 'relative', justifyContent: 'flex-start', alignItems: 'center' }}>
            <ScrollView style={{ width: '100%', height: '100%', position: 'relative' }} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                <View style={styles.notice_styles.container}>
                    <Text style={styles.notice_styles.text_head1}>ประวัติการแจ้งเตือน</Text>
                    
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', gap: 6, marginVertical: 12 }}>
                        <Pressable onPress={onClear}>
                            <Text style={styles.notice_styles.text_head4}>อ่านทั้งหมด</Text>
                        </Pressable>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap' }}>
                        {
                            filter.map((data, i) => (
                                <NoticeCard data={data} key={i} />
                            ))
                        }
                    </View>
                </View>
            </ScrollView >
        </View >
    )
}

export default Notice