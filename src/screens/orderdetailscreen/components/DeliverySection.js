// src/screens/orderdetailscreen/components/DeliveryMessageSection.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Line from '../../utils/Line';

export default function DeliveryMessageSection() {
    const phone = '010-1234-5678';
    const address = '서울 중랑구 봉화산로 192길 47-6 (면목동 126-56)';
    const deliveryNote = '문 앞에 놓아주세요';
    const storeNote = '덜 맵게 해주세요';

    return (
        <View style={styles.container}>
            <Text style={styles.title}>배달 정보</Text>

            <View style={styles.card}>
                <View style={styles.row}>
                    <Text style={styles.label}>전화번호</Text>
                    <Text style={styles.value}>{phone}</Text>
                </View>
                <Line/>
                <View style={styles.row}>
                    <Text style={styles.label}>배달주소</Text>
                    <Text style={styles.value}>{address}</Text>
                </View>
                <Line/>

                <View style={styles.row}>
                    <Text style={styles.label}>가게요청</Text>
                    <Text style={styles.value}>{storeNote}</Text>
                </View>
                <Line/>
                <View style={styles.row}>
                    <Text style={styles.label}>라이더님께</Text>
                    <Text style={styles.value}>{deliveryNote}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        backgroundColor: '#EDF4FF',
    },
    title: {
        marginTop: 32,
        fontSize: 15,
        fontFamily: 'Paperlogy-Medium',
    },
    card: {
        marginTop: 12,
        backgroundColor: '#FFF',
        borderRadius: 12,
        padding: 20,
        marginBottom:32,
    },
    row: {
        marginBlock: 12,
    },
    label: {
        fontSize: 14,
        fontFamily: 'Paperlogy-Regular',
        marginBottom: 4,
    },
    value: {
        color:'#7C7C7C',
        fontSize: 13,
        fontFamily: 'Paperlogy-Regular',
    },
});
