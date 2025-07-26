import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Line from '../../utils/Line';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { BASE_URL } from "../../../constants";

// ✅ placeholder 이미지 아이콘 경로
const imagePlaceholderIcon = require('../../../assets/icons/ForkBot.png');

export default function RestaurantList({ category }) {
    const navigation = useNavigation();
    const [restaurants, setRestaurants] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [failedImages, setFailedImages] = useState({}); // 이미지 로딩 실패 추적

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/${category}/restaurants`);
                setRestaurants(response.data);
                console.log(JSON.stringify(response.data, null, 2));
            } catch (err) {
                setError("식당 데이터를 불러오는 데 실패했습니다.");
            } finally {
                setLoading(false);
            }
        };
        fetchRestaurants();
    }, [category]);

    if (loading) {
        return (
            <View style={styles.fullscreen}>
                <Text style={styles.loadingText}>불러오는 중...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.fullscreen}>
                <Text style={styles.errorText}>{error}</Text>
                <Text style={styles.retryText}>화면을 다시 로드하거나 인터넷 연결을 확인해 주세요.</Text>
            </View>
        );
    }

    const RestaurantCard = ({ id, name, menus, rating, reviewCount, hasAR, hasCoupon, isLast }) => {
        const photos = Array.isArray(menus)
            ? menus.filter(url => typeof url === 'string' && url.trim() !== '').slice(0, 4)
            : [];
        const renderPhotos =
            photos.length > 0
                ? photos
                : Array(4).fill(null); // ✅ 사진 없으면 placeholder 4개 생성

        return (
            <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetail', { restaurantId: id })} activeOpacity={0.8}>
                <View style={styles.restaurantItem}>
                    {/* 사진 스크롤 */}
                    <ScrollView
                        horizontal
                        pagingEnabled={false}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.photoScroll}
                        onStartShouldSetResponderCapture={() => true}
                    >
                        {renderPhotos.map((photo, index) => {
                            const isLastPhoto = index === renderPhotos.length - 1;
                            const hasFailed = failedImages[`${id}-${index}`];

                            return (
                                <View
                                    key={`${id}-${index}`}
                                    style={[
                                        styles.photoWrapper,
                                        { marginRight: isLastPhoto ? 0 : 12 }
                                    ]}
                                >
                                    {photo && !hasFailed ? (
                                        <Image
                                            source={{ uri: photo }}
                                            style={styles.photo}
                                            onError={() =>
                                                setFailedImages(prev => ({
                                                    ...prev,
                                                    [`${id}-${index}`]: true
                                                }))
                                            }
                                        />
                                    ) : (
                                        <View style={styles.imagePlaceholder}>
                                            <Image
                                                source={imagePlaceholderIcon}
                                                style={{ width: 40, height: 40, tintColor: '#ccc' }}
                                            />
                                        </View>
                                    )}
                                </View>
                            );
                        })}
                    </ScrollView>

                    {/* 식당명 및 평점 */}
                    <View style={styles.nameRatingRow}>
                        <Text style={styles.restaurantName}>{name}</Text>
                        <Text style={styles.restaurantRating}><Text style={styles.star}>★</Text> {rating}</Text>
                        <Text style={styles.restaurantReview}>({reviewCount})</Text>
                    </View>

                    {/* 뱃지 */}
                    <View style={styles.contentWrap}>
                        {/*{hasAR && <Text style={styles.arcontent}>AR보유</Text>}*/}
                        {/*{hasCoupon && <Text style={styles.coupon}>쿠폰보유</Text>}*/}
                        {<Text style={styles.arcontent}>AR보유</Text>}
                        {<Text style={styles.coupon}>쿠폰보유</Text>}
                    </View>

                    {!isLast && <Line />}
                </View>
            </TouchableOpacity>
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
        flex: 1,
        backgroundColor: '#fff',
    },
    fullscreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', // 필요 시 에러 배경 색상 변경 가능
        width: '100%',
        height: '100%',
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
    star: {
        color: '#FFD900',
        fontSize: 16,
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
        fontSize: 10,
        textAlign: 'center',
        color: '#006DF0',
        lineHeight: 20,
        marginLeft: 24,
        fontFamily: 'Paperlogy-SemiBold'
    },
    coupon: {
        backgroundColor: '#EDF4FF',
        borderRadius: 3,
        width: 47,
        height: 20,
        fontSize: 10,
        textAlign: 'center',
        color: '#006DF0',
        lineHeight: 20,
        marginLeft: 5,
        fontFamily: 'Paperlogy-SemiBold'
    },
    photoScroll: {
        flexDirection: 'row',
        paddingHorizontal: 24,
    },
    photoWrapper: {
        marginTop: 16,
        width: 130,
        flexShrink: 0,
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
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    loadingText: {
        fontSize: 16,
        fontFamily: 'Paperlogy-Regular',
        color: '#888',
    },
    errorText: {
        fontSize: 16,
        fontFamily: 'Paperlogy-Bold',
        color: '#d00',
        marginBottom: 10,
    },
    retryText: {
        fontSize: 14,
        fontFamily: 'Paperlogy-Regular',
        color: '#555',
    },

});
