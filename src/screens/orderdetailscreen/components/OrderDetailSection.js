// src/screens/orderdetailscreen/components/OrderDetailSection.js

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const items = [
    {
        id: '1',
        name: '돈코츠 라멘',
        price: '13,900원',
        quantity: 1,
        image: require('../../../assets/images/ramen.png'),
    },
];

export default function OrderDetailSection() {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>주문 메뉴</Text>
            {items.map((item) => (
                <View key={item.id} style={styles.itemCard}>
                    <View style={styles.textContainer}>
                        <Text style={styles.menuName}>{item.name}</Text>
                        <Text style={styles.menuSub}>{item.price} {item.quantity}개</Text>
                    </View>

                    <TouchableOpacity style={styles.ARContainer}>
                        <Text style={styles.arButton}>AR보기</Text>
                        <Image source={item.image} style={styles.menuImage} />
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#EDF4FF',
        paddingHorizontal: 24,
    },
    title: {
        marginTop: 37,
        fontSize: 15,
        fontFamily: 'Paperlogy-Medium',
    },
    itemCard: {
        padding:20,
        marginTop: 12,
        backgroundColor: '#fff',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContainer:{
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    menuName: {
        fontSize: 14,
        fontFamily: 'Paperlogy-Medium',
    },
    menuSub: {
        fontSize: 12,
        fontFamily: 'Paperlogy-Regular',
    },
    ARContainer:{
    },  
    arButton:{
        padding: 1,
        backgroundColor: '#1f76ff',
        borderRadius:20,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#fff',
        fontFamily: 'Paperlogy-SemiBold',
        fontSize: 10,
    },
    menuImage: {
        marginTop: 3,
        width: 80,
        borderRadius: 10,
        maxWidth: "100%",
        overflow: "hidden",
        height: 70
    },
});
