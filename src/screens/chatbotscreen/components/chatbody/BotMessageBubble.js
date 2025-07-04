import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import BotIcon from '../../../../assets/icons/chatBotIcon.svg';

export default function BotMessageBubble({ message }) {
    return (
        <View style={styles.wrapper}>
            <View style={styles.iconWrapper}>
                <BotIcon style={styles.icon} />

            </View>
            <View style={styles.bubble}>
                <Text style={styles.message}>{message}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconWrapper: {
        width: 60,
        height: 60,
        borderRadius: 30, // ✅ width/height의 절반이면 완전한 원
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center', // ✅ 수직 중앙 정렬
        overflow: 'hidden', // ✅ 아이콘이 배경을 넘지 않도록
    },
    icon: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    bubble: {
        backgroundColor: '#fff',
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        maxWidth: '80%',
        borderWidth: 0.3,
        borderColor: '#A7A7A7',

    },
    message: {
        fontSize: 15,
        lineHeight: 20,
        fontFamily: 'Paperlogy-Regular',
        color: '#000000',
        marginRight:20,
    },
});
