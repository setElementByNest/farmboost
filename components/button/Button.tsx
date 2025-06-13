import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

type themeProps = 'green' | 'gray' | 'white';

const themeSet: Record<string, { background: string; color: string }> = {
    'green': { background: '#2e6b50', color: '#fff' },
    'gray': { background: '#eaeaea', color: '#888' },
    'white': { background: '#ffffff', color: '#222' },
};

type Props = {
    text: string;
    theme: themeProps;
    fn: () => void;
}

const Button = ({ text, theme, fn }: Props) => {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: themeSet[theme].background}]} onPress={fn}>
            <Text style={[styles.button_text, {color: themeSet[theme].color}]}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 14,
        borderRadius: 4,
        alignItems: 'center',
        marginBottom: 15,
        borderColor: '#ddd',
        borderWidth: 1,
    },
    button_text: {
        fontSize: 16,
        fontFamily: 'Kanit_400Regular',
    },
})

export default Button