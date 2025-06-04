import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Loginmain from './login/loginmain';
import Loginselect from './login/loginselect';
import Createfarm from './login/logincreatefarm';
import Creatingfarm from './login/logincreatingfarm';
import Createdone from './login/logincreatedone';
import Loginnewuser from './login/loginnewuser';

const Login = () => {
    const [page, setPage] = useState<string>('');

    const gotoLogin = () => {
        setPage('');
    }
    const gotoSelectFarm = () => {
        setPage('selectFarm');
    }
    const gotoCreateFarm = () => {
        setPage('createfarm');
    }
    const gotoCreatingFarm = () => {
        setPage('creatingfarm');
    }
    const gotoCreatingDone = () => {
        setPage('createdone');
    }
    const gotoNewUser = () => {
        setPage('newuser');
    }

    return (
        <View style={styles.container}>
            {
                page == '' && (
                    <Loginmain gotoSelectFarm={gotoSelectFarm} gotoNewUser={gotoNewUser} />
                )
            }
            {
                page == 'selectFarm' && (
                    <Loginselect gotoCreateFarm={gotoCreateFarm}/>
                )
            }
            {
                page == 'createfarm' && (
                    <Createfarm gotoCreatingFarm={gotoCreatingFarm}/>
                )
            }
            {
                page == 'creatingfarm' && (
                    <Creatingfarm gotoCreatingDone={gotoCreatingDone}/>
                )
            }
            {
                page == 'createdone' && (
                    <Createdone  gotoHome={gotoLogin}/>
                )
            }
            {
                page == 'newuser' && (
                    <Loginnewuser  gotoCreateFarm={gotoCreateFarm}/>
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
    },
    welcomeText: {
        fontSize: 42,
        fontWeight: '700',
        color: '#000',
        fontFamily: 'Kanit_700Bold',
    },
    title: {
        fontSize: 42,
        fontWeight: '800',
        marginBottom: 30,
        color: '#000',
        fontFamily: 'Kanit_700Bold',
    },
    sectionTitle: {
        fontSize: 18,
        color: '#2e6b50',
        marginBottom: 15,
        fontFamily: 'Kanit_400Regular',
    },
    input: {
        borderWidth: 1,
        borderColor: '#e6e6e6',
        borderRadius: 4,
        padding: 12,
        marginBottom: 12,
        fontSize: 16,
        backgroundColor: '#fff',
        elevation: 1,
        fontFamily: 'Kanit_400Regular',
    },
    loginButton: {
        backgroundColor: '#2e6b50',
        paddingVertical: 14,
        borderRadius: 4,
        alignItems: 'center',
        marginBottom: 15,
    },
    loginText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Kanit_400Regular',
    },
    googleButton: {
        backgroundColor: '#fff',
        borderRadius: 4,
        borderColor: '#ddd',
        borderWidth: 1,
        paddingVertical: 12,
        alignItems: 'center',
        marginBottom: 20,
    },
    googleContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    googleIcon: {
        marginRight: 25,
    },
    googleText: {
        fontSize: 16,
        color: '#000',
        fontFamily: 'Kanit_400Regular',
    },
    separatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    separatorLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc',
    },
    separatorText: {
        marginHorizontal: 10,
        color: '#999',
        fontFamily: 'Kanit_400Regular',
    },
    registerButton: {
        backgroundColor: '#eaeaea',
        paddingVertical: 14,
        borderRadius: 4,
        alignItems: 'center',
    },
    registerText: {
        color: '#888',
        fontSize: 16,
        fontFamily: 'Kanit_400Regular',
    },
    gearIcon: {
        position: 'absolute',
        bottom: 25,
        right: 25,
    },
});

export default Login