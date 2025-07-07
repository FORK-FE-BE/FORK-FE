// components/OrderList.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Line from '../../utils/Line';
import Rectangle from '../../../assets/icons/Rectangle.png';

export default function OrderList({ orders = [] }) {
    return (
        <View style={styles.listContainer}>
            {orders.map((item, index) => (
                <View key={index} style={styles.card}>
                    <View style={styles.headerRow}>
                        <Text style={styles.date}>{item.date}</Text>
                        <TouchableOpacity>
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
    },
    card: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 16,
        padding: 30,
        marginBottom: 18,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    date: {
        fontSize: 12,
        color: '#7C7C7C',
        fontFamily: 'Paperlogy-Medium',
    },
    detailBtn: {
        borderColor: '#D9D9D9',
        borderWidth: 1,
        borderRadius: 10,
        fontFamily: 'Paperlogy-Regular',
        width: 61,
        height: 20,
        fontSize: 11,
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
        fontSize: 14,
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
        fontSize: 10,
    },
    menuCount: {
        marginLeft: 14,
        marginTop: 7.5,
        fontFamily: 'Paperlogy-Regular',
        fontSize: 10,
    },
    footerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
        marginBottom: 8,
    },
    price: {
        fontSize: 13,
        fontFamily: 'Paperlogy-Medium',
    },
    reorderBtn: {
        borderWidth: 1,
        borderColor: '#006DF0',
        borderRadius: 5,
        paddingVertical: 12,
        alignItems: 'center',
    },
    reorderText: {
        fontSize: 13,
        color: '#006DF0',
        fontFamily: 'Paperlogy-Medium',
    },
});
