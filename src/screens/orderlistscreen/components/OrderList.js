// components/OrderList.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Line from '../../utils/Line';
import Rectangle from '../../../assets/icons/Rectangle.png';
import { useNavigation } from '@react-navigation/native';

export default function OrderList({ orders = [] }) {
    const navigation = useNavigation();
    return (
        <View style={styles.listContainer}>
            {orders.map((item, index) => (
                <View key={index} style={styles.card}>
                    <View style={styles.headerRow}>
                        <Text style={styles.date}>{item.date}</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('OrderDetail')}>
                            <Text style={styles.detailBtn}>주문상세</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.storeRow}>
                        <Image source={item.image} style={styles.thumbnail} />
                        <View style={styles.storeInfo}>
                            <TouchableOpacity style={styles.storeNameRow}>
                                <Text style={styles.storeName}>{item.storeName}</Text>
                                <Image source={Rectangle} style={styles.storeIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.menus}>
                        <Text style={styles.menu}>{item.menu} </Text>
                        <Text style={styles.menuCount}>{item.count}개 </Text>
                    </View>

                    <Line />

                    <View style={styles.footerRow}>
                        <Text style={styles.label}>결제금액</Text>
                        <Text style={styles.price}>{item.price.toLocaleString()}원</Text>
                    </View>

                    <TouchableOpacity style={styles.reorderBtn}>
                        <Text style={styles.reorderText}>같은 메뉴 담기</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: 24,
        paddingBottom: 30,
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: '#eee',
    },
    card: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 10,
        padding: 25,
        marginBottom: 18,
        marginTop: 30
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    date: {
        fontSize: 14,
        color: '#7C7C7C',
        fontFamily: 'Paperlogy-Medium',
    },
    detailBtn: {
        borderColor: '#D9D9D9',
        backgroundColor: '#ecececff',
        borderWidth: 0,
        borderRadius: 100,
        fontFamily: 'Paperlogy-Medium',
        width: 70,
        height: 25,
        fontSize: 12,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    storeRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    storeInfo: {
        flex: 1,
    },
    thumbnail: {
        width: 45,
        height: 49,
        borderRadius: 8,
        marginRight: 12,
    },
    storeName: {
        fontSize: 16,
        fontFamily: 'Paperlogy-Medium',
        color: "#000000",
    },
    storeNameRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    storeIcon: {
        width: 11,
        height: 11,
        marginLeft: 6,
        transform: [{ rotate: '-90deg' }],
    },
    menus: {
        flexDirection: 'row',
        marginBottom: 18,
    },
    menu: {
        marginTop: 8,
        fontFamily: 'Paperlogy-Regular',
        fontSize: 14,
    },
    menuCount: {
        marginLeft: 14,
        marginTop: 7.5,
        fontFamily: 'Paperlogy-Regular',
        fontSize: 14,
    },
    footerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
        marginBottom: 8,
    },
    price: {
        fontSize: 14,
        fontFamily: 'Paperlogy-SemiBold',
        color: "#000"
    },
    reorderBtn: {
        marginTop: 5,
        backgroundColor: '#3b93ffff',
        borderRadius: 5,
        paddingVertical: 12,
        alignItems: 'center',
    },
    reorderText: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'Paperlogy-SemiBold',
    },
});
