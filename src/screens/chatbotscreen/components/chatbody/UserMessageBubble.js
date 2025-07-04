import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function UserMessageBubble({ message }) {
    return (
        <View style={styles.wrapper}>
            <View style={styles.bubble}>
                <Text style={styles.message}>{message}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        marginRight: 30,
        alignItems: 'flex-end', // ✅ 우측 정렬

    },
    bubble: {
        borderWidth: 0.3,
        borderColor: '#A7A7A7',
        backgroundColor: '#FFFFFF', // ✅ 파란 배경
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        maxWidth: '80%',
    },
    message: {
        fontSize: 15,
        lineHeight: 20,
        fontFamily: 'Paperlogy-Regular',
        color: '#00000', // ✅ 흰 글씨
    },
});
