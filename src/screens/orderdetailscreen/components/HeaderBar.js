import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ArrowBack from '../../../assets/icons/arrow_back.svg';
import { useNavigation } from '@react-navigation/native';

export default function HeaderBar() {
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.backButton} onPress={()=> navigation.goBack()}>
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
        height: 85,
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
