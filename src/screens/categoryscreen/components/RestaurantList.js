import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Line from '../../utils/Line';

export default function RestaurantList() {
    const restaurants = [
        {
            id: '1',
            name: '맛있는 치킨',
            photos: [
                require('../../../assets/images/chicken.png'),
                null,
                require('../../../assets/images/chicken.png'),
                null,
                null,
            ],
            rating: 4.9,
            reviewCount: 777,
        },
        {
            id: '2',
            name: '피자 천국',
            photos: [
                require('../../../assets/images/egg.png'),
                require('../../../assets/images/egg.png'),
                null,
                null,
                require('../../../assets/images/egg.png'),
            ],
            rating: 4.7,
            reviewCount: 512,
        },
    ];

    return (
        <View style={styles.container}>
            {restaurants.map((restaurant, index) => {
                const isLast = index === restaurants.length - 1;
                return (<View key={restaurant.id} style={styles.restaurantItem}>
                    {/* 👇 가로 스크롤로 이미지 목록 표시 */}
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.photoScroll} // ✅ 좌우 여백 포함
                    >
                        {restaurant.photos.map((photo, index) => {
                            const isLastPhoto = index === restaurant.photos.length - 1;
                            return (
                                <View
                                    key={index}
                                    style={[
                                        styles.photoWrapper,
                                        { marginRight: isLastPhoto ? 0 : 12 }, // ✅ 마지막 사진이면 간격 제거
                                    ]}
                                >
                                    {photo ? (
                                        <Image source={photo} style={styles.photo} />
                                    ) : (
                                        <View style={styles.imagePlaceholder}>
                                            <Text style={styles.placeholderText}>사진</Text>
                                        </View>
                                    )}
                                </View>
                            );
                        })}
                    </ScrollView>
                    <View style={styles.nameRatingRow}>
                        <Text style={styles.restaurantName}>{restaurant.name}</Text>
                        <Text style={styles.restaurantRating}>
                            ★ {restaurant.rating}
                        </Text>
                        <Text style={styles.restaurantReview}>
                            ({restaurant.reviewCount})
                        </Text>

                    </View>

                    <View style={styles.contentWrap}>
                        <Text style={styles.arcontent}>AR보유</Text>
                        <Text style={styles.coupon}>쿠폰보유</Text>
                    </View>
                    {/* ✅ 마지막 식당이면 Line 안보이게 */}
                    {!isLast && <Line />}
                </View>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    restaurantItem: {
        marginBottom: 17,
    },
    nameRatingRow: {
        paddingHorizontal: 24,
        flexDirection: 'row',
        marginTop: 10,
    },
    restaurantName: {
        fontSize: 16,
        fontFamily: 'Paperlogy-Medium',
    },
    restaurantRating: {
        textAlignVertical: 'center',
        marginLeft: 10,
        fontSize: 14,
        marginBottom: 10,
        fontFamily: 'Paperlogy-Medium',
    },
    restaurantReview: {
        marginLeft: 3,
        marginTop: 2,
        fontSize: 13,
        marginBottom: 10,
        fontFamily: 'Paperlogy-Medium',
        color: '#979797',
    },
    contentWrap: {
        flexDirection: 'row',
        marginBottom: 17,
    },

    arcontent: {
        backgroundColor: '#EDF4FF',
        borderRadius: 3,
        width: 47,
        height: 20,
        fontSize: 12,
        textAlign: 'center',
        color: '#006DF0',
        lineHeight: 20,
        marginLeft: 24,
    },
    coupon: {
        backgroundColor: '#EDF4FF',
        borderRadius: 3,
        width: 47,
        height: 20,
        fontSize: 12,
        textAlign: 'center',
        color: '#006DF0',
        lineHeight: 20,
        marginLeft: 5,
    },
    photoScroll: {
        flexDirection: 'row',
        paddingHorizontal: 24, // ✅ 양쪽 여백
    },
    photoWrapper: {
        marginTop: 16,
    },
    photo: {
        width: 130,
        height: 130,
        borderRadius: 10,
    },
    imagePlaceholder: {
        width: 130,
        height: 130,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeholderText: {
        fontSize: 12,
        color: '#aaa',
    },

});
