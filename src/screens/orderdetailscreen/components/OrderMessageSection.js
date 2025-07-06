// src/screens/orderdetailscreen/components/OrderMessageSection.js

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Line from '../../utils/Line';
import Rectangle from '../../../assets/icons/Rectangle.png';

export default function OrderMessageSection() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.textContainer}>
                    <Text style={styles.deliveryMessage}>배달이 완료됐어요</Text>
                    <Text style={styles.orderTime}>주문일시: 2023년 3월 5일 오후 6:24</Text>
                    <Text style={styles.orderCode}>주문번호: T230129F123PUB</Text>
                </View>
                <Line />
                <View style={styles.row}>
                    <Image
                        source={require('../../../assets/images/ramen.png')}
                        style={styles.thumbnail}
                    />
                    <TouchableOpacity style={styles.storeNameRow}>
                        <Text style={styles.restaurantName}>멘야라멘 이촌역점</Text>
                        <Image source={Rectangle} style={styles.storeIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: 21,
        marginBottom: 47,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        borderColor: '#d9d9d9',
        borderWidth: 1,

    },
    textContainer: {
        marginTop: 21,
        marginLeft: 18,
    },
    deliveryMessage: {
        fontSize: 15,
        fontFamily: 'Paperlogy-Medium',
    },
    orderTime: {
        fontSize: 12,
        fontFamily: 'Paperlogy-Regular',
        color: '#7C7C7C',
    },
    orderCode: {
        fontSize: 12,
        fontFamily: 'Paperlogy-Regular',
        marginBottom: 20,
        color: '#7C7C7C',
    },
    row: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    thumbnail: {
        marginLeft: 20,
        width: 50,
        height: 50,
        borderRadius: 5,
    },
    restaurantName: {
        marginLeft: 10,
        fontSize: 14,
        fontFamily: 'Paperlogy-Medium',
    },
    storeIcon: {
        width: 11,
        height: 11,
        marginLeft: 6,
        transform: [{ rotate: '-90deg' }], // 각도
    },
    storeNameRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
