import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ArrowBack from '../../../assets/icons/arrow_back.svg';

export default function HeaderBar() {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.backButton}>
                <ArrowBack width={24} height={24} />
            </TouchableOpacity>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>주문상세</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        position: 'relative',
    },
    backButton: {
        position: 'absolute',
        left: 16,
        padding: 8,
        zIndex: 10,
    },
    titleWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontFamily: 'Paperlogy-Medium',
    },
});
