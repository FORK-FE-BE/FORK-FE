import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Line from '../../utils/Line';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {restaurantsByCategory} from "../../../data/restaurantsByCategory";

export default function RestaurantList({category}) {
    const navigation = useNavigation();
    const restaurants = restaurantsByCategory[category];
    const RestaurantCard = ({ name, menus, rating, reviewCount, isLast }) => {
        const photos = menus && menus.length ? menus : [null, null, null, null]; // 기본 4칸
        return (
            <View style={styles.restaurantItem} onTouchEnd={() => navigation.navigate('RestaurantDetail')}>
                {/* 사진 스크롤 */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.photoScroll}
                >
                    {photos.map((photo, index) => {
                        const isLastPhoto = index === photos.length - 1;
                        return (
                            <View
                                key={index}
                                style={[
                                    styles.photoWrapper,
                                    { marginRight: isLastPhoto ? 0 : 12 },
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

                {/* 식당명 및 평점 */}
                <View style={styles.nameRatingRow}>
                    <Text style={styles.restaurantName}>{name}</Text>
                    <Text style={styles.restaurantRating}>★ {rating}</Text>
                    <Text style={styles.restaurantReview}>({reviewCount})</Text>
                </View>

                {/* 보유 뱃지 */}
                <View style={styles.contentWrap}>
                    <Text style={styles.arcontent}>AR보유</Text>
                    <Text style={styles.coupon}>쿠폰보유</Text>
                </View>

                {/* 마지막 카드가 아니면 선 추가 */}
                {!isLast && <Line />}
            </View>
        );
    };
    return (
        <View style={styles.container}>
            {restaurants.map((restaurant, index) => (
                <RestaurantCard
                    key={restaurant.id}
                    {...restaurant}
                    isLast={index === restaurants.length - 1}
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
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
