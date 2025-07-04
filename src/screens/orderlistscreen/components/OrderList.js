// components/OrderList.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import Line from '../../utils/Line';
import Rectangle from '../../../assets/icons/Rectangle.png';

export default function OrderList({ orders = [] }) {
    const renderItem = ({ item }) => (
        <View style={styles.card}>
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
            {/* 메뉴이름 */}
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
    );

    return (
        <FlatList
            data={orders}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            contentContainerStyle={styles.listContainer}
        />
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
        borderColor: '#D9D9D9', //회색
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
        borderColor: '#D9D9D9', //회색
        borderWidth: 1,
        borderRadius: 10,
        fontFamily: 'Paperlogy-Regular',
        width:61,
        height: 20,
        fontSize: 11,
        textAlign: 'center', // 글씨 가운데 정렬
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

    storeName: { //가게이름
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
        transform: [{ rotate: '-90deg' }], // 각도
    },
    menus: {
        flexDirection: 'row', // 가로 배치
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
        flexDirection: 'row', // 가로 배치
        justifyContent: 'space-between', // 최대 간격
        marginTop: 12,
        marginBottom: 8,
    },
    price: { //가격
        fontSize: 13,
        fontFamily: 'Paperlogy-Medium',
    },
    reorderBtn: {
        borderWidth: 1,
        borderColor: '#006DF0', //파란색
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
