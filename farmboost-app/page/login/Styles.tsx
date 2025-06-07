import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container_center: {
        flex: 1,
        padding: 30,
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
    },
    container_top: {
        flex: 1,
        padding: 30,
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        paddingTop: 60,
        justifyContent: 'flex-start',
    },
    text_head1: {
        fontSize: 42,
        color: '#000',
        fontFamily: 'Kanit_600SemiBold',
    },
    text_head3: {
        fontSize: 20,
        color: '#2e6b50',
        marginVertical: 15,
        fontFamily: 'Kanit_400Regular',
    },
    text_head3_white: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Kanit_400Regular',
    },
    text_head5_red: {
        color: '#c44',
        fontSize: 16,
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
    button_green: {
        backgroundColor: '#2e6b50',
        paddingVertical: 14,
        borderRadius: 4,
        alignItems: 'center',
        marginBottom: 15,
    },
    button_green_text: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Kanit_400Regular',
    },
    button_white: {
        backgroundColor: '#fff',
        borderRadius: 4,
        borderColor: '#ddd',
        borderWidth: 1,
        paddingVertical: 12,
        alignItems: 'center',
        marginBottom: 20,
    },
    button_gray: {
        backgroundColor: '#eaeaea',
        paddingVertical: 14,
        borderRadius: 4,
        alignItems: 'center',
    },
    button_gray_text: {
        color: '#888',
        fontSize: 16,
        fontFamily: 'Kanit_400Regular',
    },
    nextIcon: {
        position: 'absolute',
        bottom: 25,
        right: 25,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    nextIcon_Text: {
        fontSize: 24,
        color: '#000',
        fontFamily: 'Kanit_400Regular',
        marginRight: 10,
    },
})

const loginmain_styles = StyleSheet.create({
    container: styles.container_center,
    text_head1: styles.text_head1,
    text_head2: styles.text_head1,
    text_head3: styles.text_head3,
    input: styles.input,
    loginButton: styles.button_green,
    loginButton_text: styles.button_green_text,
    noticText: styles.text_head5_red,
    googleButton: styles.button_white,
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
    registerButton: styles.button_gray,
    registerButton_text: styles.button_gray_text,
    gearIcon: {
        position: 'absolute',
        bottom: 25,
        right: 25,
    },
});

const loginselect_styles = StyleSheet.create({
    container: styles.container_top,
    selectFarmText: styles.text_head1,
    selectFarmDetailText: styles.text_head3,
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
    nextIcon: styles.nextIcon,
    nextIconText: styles.nextIcon_Text,
})

const loginnewuser_styles = StyleSheet.create({
    container: styles.container_top,
    text_head1: styles.text_head1,
    text_head2: styles.text_head3,
    input: styles.input,
    nextIcon: styles.nextIcon,
    nextIconText: styles.nextIcon_Text,
});

const logincreatefarm_styles = StyleSheet.create({
    container: styles.container_top,
    createFarmText: styles.text_head1,
    createFarmDetailText: styles.text_head3,
    input: styles.input,
    nextIcon: styles.nextIcon,
    nextIconText: styles.nextIcon_Text,
})

const logincreatingfarm_styles = StyleSheet.create({
    container: styles.container_center,
    createFarmText: styles.text_head1,
    createFarmDetailText: styles.text_head3,
    progressContainer: {
        alignItems: 'center',
        gap: 8,
        position: 'absolute',
        bottom: 45,
    },
    percentText: {
        fontSize: 16,
        fontFamily: 'Kanit_700Bold',
        color: '#1B4F3E',
        marginBottom: 8,
    },
})

const logincreatedone_styles = StyleSheet.create({
    container: styles.container_top,
    createFarmText: styles.text_head1,
    createFarmDetailText: styles.text_head3,
    nextIcon: styles.nextIcon,
    nextIconText: styles.nextIcon_Text,
})

const settingmodal_styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    container: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 30,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Kanit',
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        fontFamily: 'Kanit',
        marginTop: 12,
    },
    buttonRow: {
        flexDirection: 'row',
        gap: 8,
        marginVertical: 8,
    },
    activeButton: {
        backgroundColor: '#1c4c3f',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 6,
    },
    inactiveButton: {
        backgroundColor: '#eee',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 6,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'Kanit',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        padding: 8,
        marginVertical: 8,
        fontFamily: 'Kanit',
        fontSize: 18,
        width: '30%',
    },
    confirmButton: {
        backgroundColor: '#1c4c3f',
        borderRadius: 8,
        padding: 12,
        alignItems: 'center',
        marginTop: 24,
    },
    confirmText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Kanit',
    },
});

export default {
    loginmain_styles,
    loginselect_styles,
    loginnewuser_styles,
    logincreatefarm_styles,
    logincreatingfarm_styles,
    logincreatedone_styles,
    settingmodal_styles
};