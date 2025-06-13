import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { Bar } from 'react-native-progress';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'loading'>;

const Loading = ({ navigation }: Props) => {
    const [percent, setPercent] = useState<number>(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setPercent((prev: number) => {
                if (prev < 1) {
                    return prev + 0.2;
                } else {
                    clearInterval(interval); // Clear here or inside cleanup
                    return prev;
                }
            });
        }, 300);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (percent >= 1) {
            navigation.navigate('home');  // Safe here
        }
    }, [percent]);
    return (
        <ScrollView style={{ height: '100%' }} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={[styles.progressContainer]}>
                    <Text style={styles.percentText}>{Math.round(percent * 100)}%</Text>
                    <Bar
                        progress={percent}
                        height={12}
                        width={null}
                        borderRadius={6}
                        color="#1B4F3E"
                        unfilledColor="#E0E0E0"
                        borderWidth={0}
                        style={{ width: '80%' }}
                    />
                </View>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    createFarmText: {
        fontSize: 42,
        color: '#000',
        fontFamily: 'Kanit_600SemiBold',
    },
    createFarmDetailText: {
        fontSize: 20,
        color: '#2e6b50',
        marginVertical: 15,
        fontFamily: 'Kanit_400Regular',
    },
    progressContainer: {
        gap: 8,
        bottom: 55,
        left: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    percentText: {
        fontSize: 16,
        fontFamily: 'Kanit_700Bold',
        color: '#1B4F3E',
        marginBottom: 8,
    },
})

export default Loading
