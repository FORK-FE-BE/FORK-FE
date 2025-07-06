import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function QuickButtons({ options = [], onPressOption }) {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.buttonRow}
        >
            {options.map((option, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.button}
                    onPress={() => onPressOption?.(option)} // 선택 시 콜백
                >
                    <Text style={styles.buttonText}>{option}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    buttonRow: {
        paddingVertical:30,
        paddingHorizontal:30,
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#fff',
        borderColor: '#B7D4FF',
        borderWidth: 1,
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginRight: 8,
        elevation: 1,
    },
    buttonText: {
        fontSize: 13,
        color: '#006DF0',
        fontFamily: 'Paperlogy-Medium',
    },
});
