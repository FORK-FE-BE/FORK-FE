// src/screens/orderdetailscreen/components/PaymentSection.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Line from '../../utils/Line';

export default function PaymentSection() {
    const totalPrice = '23,800원';
    const discount = '0원';
    const finalAmount = '23,800원';
    const payment = '네이버페이';

    return (
        <View style={styles.container}>
            <Text style={styles.title}>결제 정보</Text>

            <View style={styles.card}>
                <View style={styles.row}>
                    <Text style={styles.label}>결제 금액</Text>
                    <Text style={styles.value}>{totalPrice}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>할인금액</Text>
                    <Text style={styles.value}>{discount}</Text>
                </View>
                <Line style={styles.line}/>
                <View style={styles.row}>
                    <Text style={styles.label}>결제방법</Text>
                    <Text style={styles.value}>{payment}</Text>
                </View>
            </View>

            <View style= {styles.highlightCard}>
                <View style={styles.row}>
                    <Text style={styles.labelBold}>총 금액</Text>
                    <Text style={styles.valueBold}>{finalAmount}</Text>
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
        marginBottom: 12,
    },
    card: {
        backgroundColor: '#FFF',
        borderRadius: 12,
        padding: 20,
        marginBottom: 10,
    },
    highlightCard: {
        backgroundColor: '#FFF',
        borderRadius: 12,
        padding: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6,
    },
    label: {
        fontSize: 14,
        fontFamily: 'Paperlogy-Medium',
    },
    value: {
        fontSize: 14,
        fontFamily: 'Paperlogy-Medium',
    },
    labelBold: {
        fontSize: 14,
        fontFamily: 'Paperlogy-Medium',
    },
    valueBold: {
        fontSize: 14,
        fontFamily: 'Paperlogy-Medium',
    },
});
