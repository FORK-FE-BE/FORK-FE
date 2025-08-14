import React, { useEffect, useRef, useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import RestaurantImageCarousel from './components/RestaurantImageCarousel';
import RestaurantInfoSection from './components/RestaurantInfoSection';
import RestaurantMenuWithCart from './components/RestaurantMenuWithCart';
import CartFixedBar from './components/CartFixedBar';
import { BASE_URL } from "../../constants";
import axios from 'axios';
import { useRoute } from "@react-navigation/native";


export default function RestaurantDetail() {
    const scrollRef = useRef();
    const route = useRoute();
    const { restaurantId } = route.params;
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    const [menus, setMenus] = useState({});

    useEffect(() => {
        const fetchRestaurantDetail = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/restaurants/${restaurantId}`)
                setRestaurantInfo({
                    restaurantId: response.data.id,
                    name: response.data.name,
                    rating: response.data.rating,
                    reviewCount: response.data.reviewCount,
                    storePictureUrl: response.data.storePictureUrl,
                    //fullRoadAddress: response.data.fullRoadAddress,
                    //address: response.data.address,
                    minDeliveryPrice: response.data.minDeliveryPrice,
                    minDeliveryTime: response.data.minDeliveryTime,
                    maxDeliveryTime: response.data.maxDeliveryTime,
                    deliveryInfo: response.data.deliveryInfo,

                    // 주소 필드
                    province: response.data.province,
                    city: response.data.city,
                    roadName: response.data.roadName,
                    buildingNumber: response.data.buildingNumber,

                    // 기타 정보-한줄 소개, 결제 방법
                    introText: response.data.introText,
                    paymentMethod: response.data.paymentMethod,
                });
                // setMenus(response.data.menus);
                setMenus(
                    Object.values(response.data.menus || {}).flat()
                  );

                  console.log(JSON.stringify(response.data, null, 2));
            } catch (error) {
                console.error("음식점 상세 정보 요청 실패:", error);
            }
        };
        fetchRestaurantDetail();
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView
                ref={scrollRef}
                contentContainerStyle={styles.scrollContent}
            >
                <RestaurantImageCarousel images={restaurantInfo?.storePictureUrl || []} />

                {restaurantInfo && (
                    <>
                        <RestaurantInfoSection restaurantInfo={restaurantInfo} />
                        <RestaurantMenuWithCart
                            scrollRef={scrollRef}
                            menuItems={menus}
                            restaurantId={restaurantInfo.restaurantId}
                        />
                    </>
                )}
            </ScrollView>
            <CartFixedBar minOrderPrice={restaurantInfo?.minDeliveryPrice} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: 120, // 고정 버튼 영역 만큼 여백
    },
});
