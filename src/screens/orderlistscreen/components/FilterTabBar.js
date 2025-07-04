// components/FilterTabBar.js

import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // 드롭다운 표시용 아이콘

export default function FilterTabBar({
    address = '주소',
    period = '조회 기간',
    status = '주문 상태/정보',
    onChangeAddress,
    onChangePeriod,
    onChangeStatus,
}) {
    return (
        <View style={styles.container}>
            <FilterButton label={address} onPress={onChangeAddress} />
            <FilterButton label={period} onPress={onChangePeriod} />
            <FilterButton label={status} onPress={onChangeStatus} />
        </View>
    );
}

function FilterButton({ label, onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.label}>{label}</Text>
            <Icon name="chevron-down" size={16} color="#444" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flexDirection: 'row',
        marginHorizontal: 16,
        marginBottom: 10,
        // justifyContent: 'space-between',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#ddd',
        marginHorizontal: 4,
        justifyContent: 'center',
    },
    label: {
        marginLeft: 5,
        marginRight: 6,
        fontSize: 11,
        fontFamily: 'Paperlogy-Medium',
        color: '#333',
    },
});
