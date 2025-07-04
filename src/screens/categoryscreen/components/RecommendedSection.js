import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function RecommendedSection() {
    const restaurantList = [
        {
            id: '1',
            title: '맛있는 치킨 홍대점',
            image: require('../../../assets/images/chicken.png'),
            rating: 4.9,
            reviewCount: 777,
        },
        {
            id: '2',
            title: '하나 라멘 동대문본점',
            image: require('../../../assets/images/egg.png'),
            rating: 4.7,
            reviewCount: 512,
        },
        {
            id: '3',
            title: '하나 라멘 동대문본점',
            image: require('../../../assets/images/ramen.png'),
            rating: 4.7,
            reviewCount: 512,
        },
    ];

    // ✅ 카드 컴포넌트에 index와 isLast 추가 → 마지막 카드엔 marginRight 제거
    const RestaurantCard = ({ image, title, rating, reviewCount, index, isLast }) => (
        <View
            style={[
                styles.restaurantCard,
                {
                    marginRight: isLast ? 0 : 24, // ✅ 카드 간격은 12, 마지막 카드는 0
                },
            ]}
        >
            <Image source={image} style={styles.restaurantImage} />
            <View>
                <Text style={styles.restaurantTitle}>{title}</Text>
                <Text style={styles.restaurantRating}>★ {rating} ({reviewCount})</Text>
                <Text style={styles.arcontent}>AR보유</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>크봇이 골라주는 맞춤 맛집</Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.cardRow} // ✅ 좌우 여백 적용되는 스타일
            >
                {restaurantList.map((item, idx) => (
                    <RestaurantCard
                        key={item.id}
                        {...item}
                        index={idx}
                        isLast={idx === restaurantList.length - 1} // ✅ 마지막 카드인지 여부 전달
                    />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingVertical: 34,
    },
    title: {
        marginLeft: 24,
        fontSize: 16,
        fontFamily: 'Paperlogy-Medium',
    },
    cardRow: {
        flexDirection: 'row',
        paddingHorizontal: 24, // ✅ 좌우 여백을 카드 간격과 동일하게 설정
        marginTop: 15, 
    },
    restaurantCard: {
        width: 150, 
    },
    restaurantImage: {
        width: '100%',
        height: 107,
        borderRadius: 10,
        resizeMode: 'cover',
    },
    restaurantTitle: {
        color: '#000000',
        marginTop: 6,
        fontFamily: 'Paperlogy-Medium',
        fontSize: 13,
    },
    restaurantRating: {
        color: '#000000',
        fontSize: 13,
        fontFamily: 'Paperlogy-Medium',
    },
    arcontent: {
        marginTop: 6,
        backgroundColor: '#EDF4FF',
        borderRadius: 3,
        width: 47,
        height: 20,
        fontSize: 12,
        textAlign: 'center',
        color: '#006DF0',
        lineHeight: 20,
    },
});
