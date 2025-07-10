// src/screens/restaurantdetail/components/RestaurantMenuWithCart.js
import React, { useRef } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const menuItems = [
    // 대표 메뉴
    { id: 1, title: '평양냉면', description: '시원한 육수의 평양냉면', price: 10000, image: require('../../../dummyData/dummyImages/image1.jpg'), category: '대표 메뉴' },
    { id: 2, title: '비빔냉면', description: '매콤한 비빔냉면', price: 11000, image: require('../../../dummyData/dummyImages/image2.jpg'), category: '대표 메뉴' },
    { id: 3, title: '물냉면', description: '정통 평양식 물냉면', price: 9500, image: require('../../../dummyData/dummyImages/image3.jpg'), category: '대표 메뉴' },
    { id: 4, title: '회냉면', description: '회가 올라간 냉면', price: 12000, image: require('../../../dummyData/dummyImages/image4.jpg'), category: '대표 메뉴' },
    { id: 5, title: '고기냉면', description: '불고기가 함께 나오는 냉면', price: 13000, image: require('../../../dummyData/dummyImages/image5.jpg'), category: '대표 메뉴' },
  
    // 세트 메뉴
    { id: 6, title: '냉면 세트', description: '냉면과 만두 세트', price: 16000, image: require('../../../dummyData/dummyImages/image1.jpg'), category: '세트 메뉴' },
    { id: 7, title: '가족 세트', description: '냉면+돈까스+음료', price: 28000, image: require('../../../dummyData/dummyImages/image2.jpg'), category: '세트 메뉴' },
    { id: 8, title: '콤보 세트', description: '냉면+튀김+콜라', price: 19000, image: require('../../../dummyData/dummyImages/image3.jpg'), category: '세트 메뉴' },
    { id: 9, title: '냉면 더블세트', description: '2인용 냉면 세트', price: 22000, image: require('../../../dummyData/dummyImages/image4.jpg'), category: '세트 메뉴' },
    { id: 10, title: '팔당세트', description: '팔당 냉면 정식', price: 25000, image: require('../../../dummyData/dummyImages/image5.jpg'), category: '세트 메뉴' },
  
    // 식사류
    { id: 11, title: '돈까스 정식', description: '돈까스와 밥 세트', price: 13000, image: require('../../../dummyData/dummyImages/image1.jpg'), category: '식사류' },
    { id: 12, title: '불고기 정식', description: '불고기와 밥 세트', price: 14000, image: require('../../../dummyData/dummyImages/image2.jpg'), category: '식사류' },
    { id: 13, title: '제육볶음 정식', description: '매콤한 제육볶음 세트', price: 13500, image: require('../../../dummyData/dummyImages/image3.jpg'), category: '식사류' },
    { id: 14, title: '된장찌개 정식', description: '전통 된장찌개와 밥', price: 12000, image: require('../../../dummyData/dummyImages/image4.jpg'), category: '식사류' },
    { id: 15, title: '김치찌개 정식', description: '매콤한 김치찌개 정식', price: 12500, image: require('../../../dummyData/dummyImages/image5.jpg'), category: '식사류' },
  
    // 분식류
    { id: 16, title: '떡볶이', description: '매콤달콤한 떡볶이', price: 7000, image: require('../../../dummyData/dummyImages/image1.jpg'), category: '분식류' },
    { id: 17, title: '순대', description: '따끈한 순대 한 접시', price: 8000, image: require('../../../dummyData/dummyImages/image2.jpg'), category: '분식류' },
    { id: 18, title: '김밥', description: '정성껏 만든 김밥', price: 6000, image: require('../../../dummyData/dummyImages/image3.jpg'), category: '분식류' },
    { id: 19, title: '튀김모듬', description: '바삭한 튀김 모음', price: 9000, image: require('../../../dummyData/dummyImages/image4.jpg'), category: '분식류' },
    { id: 20, title: '라볶이', description: '라면과 떡볶이의 조합', price: 8500, image: require('../../../dummyData/dummyImages/image5.jpg'), category: '분식류' },
  
    // 사이드
    { id: 21, title: '계란찜', description: '부드러운 계란찜', price: 5000, image: require('../../../dummyData/dummyImages/image1.jpg'), category: '사이드' },
    { id: 22, title: '공기밥', description: '따끈한 밥 한 공기', price: 2000, image: require('../../../dummyData/dummyImages/image2.jpg'), category: '사이드' },
    { id: 23, title: '샐러드', description: '신선한 야채 샐러드', price: 4000, image: require('../../../dummyData/dummyImages/image3.jpg'), category: '사이드' },
    { id: 24, title: '만두', description: '찐만두 5개', price: 6000, image: require('../../../dummyData/dummyImages/image4.jpg'), category: '사이드' },
    { id: 25, title: '콘치즈', description: '달콤하고 고소한 콘치즈', price: 5000, image: require('../../../dummyData/dummyImages/image5.jpg'), category: '사이드' },
  
    // 음료
    { id: 26, title: '콜라 500ml', description: '시원한 콜라', price: 2000, image: require('../../../dummyData/dummyImages/image1.jpg'), category: '음료' },
    { id: 27, title: '사이다 500ml', description: '상큼한 사이다', price: 2000, image: require('../../../dummyData/dummyImages/image2.jpg'), category: '음료' },
    { id: 28, title: '환타 오렌지', description: '상큼한 오렌지 맛', price: 2000, image: require('../../../dummyData/dummyImages/image3.jpg'), category: '음료' },
    { id: 29, title: '아이스티', description: '달콤한 아이스티', price: 2500, image: require('../../../dummyData/dummyImages/image4.jpg'), category: '음료' },
    { id: 30, title: '물', description: '생수 500ml', price: 1000, image: require('../../../dummyData/dummyImages/image5.jpg'), category: '음료' },
  
    // 디저트
    { id: 31, title: '붕어빵', description: '팥 붕어빵 2개', price: 3000, image: require('../../../dummyData/dummyImages/image1.jpg'), category: '디저트' },
    { id: 32, title: '호떡', description: '꿀 호떡 1개', price: 2500, image: require('../../../dummyData/dummyImages/image2.jpg'), category: '디저트' },
    { id: 33, title: '빙수', description: '팥빙수 한 그릇', price: 7000, image: require('../../../dummyData/dummyImages/image3.jpg'), category: '디저트' },
    { id: 34, title: '아이스크림', description: '바닐라 아이스크림', price: 3000, image: require('../../../dummyData/dummyImages/image4.jpg'), category: '디저트' },
    { id: 35, title: '모나카', description: '아이스 모나카', price: 3500, image: require('../../../dummyData/dummyImages/image5.jpg'), category: '디저트' },
  ];


export default function RestaurantMenuWithCart({ scrollRef }) {
    const categoryPositions = useRef({});

    const scrollToCategory = (category) => {
        const y = categoryPositions.current[category];
        if (scrollRef.current && y !== undefined) {
            scrollRef.current.scrollTo({ y, animated: true });
        }
    };

    const categorizedMenus = menuItems.reduce((acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item);
        return acc;
    }, {});

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            {/* 카테고리 탭 */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.tabRow}
                contentContainerStyle={{ paddingHorizontal: 30 }}
            >
                {Object.keys(categorizedMenus).map((category) => (
                    <TouchableOpacity
                        key={category}
                        style={styles.tabButton}
                        onPress={() => scrollToCategory(category)}
                    >
                        <Text style={styles.tabButtonText}>{category}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* 카테고리별 메뉴 렌더링 */}
            {Object.entries(categorizedMenus).map(([category, items]) => (
                <View key={category}>
                    <View
                        onLayout={(e) => {
                            categoryPositions.current[category] = e.nativeEvent.layout.y;
                        }}
                    >
                        <View style={styles.divider} />
                        <Text style={styles.categoryTitle}>{category}</Text>
                    </View>

                    {items.map((item, index) => (
                        <View key={item.id}>
                            {index !== 0 && <View style={styles.smallDivider} />}
                            <View style={styles.menuItem}>
                                <View style={styles.menuText}>
                                    <Text style={styles.menuTitle}>{item.title}</Text>
                                    <Text style={styles.menuPrice}>{item.price.toLocaleString()}원</Text>
                                    <Text style={styles.menuDescription}>{item.description}</Text>
                                </View>
                                <Image source={item.image} style={styles.menuImage} />
                            </View>
                        </View>
                    ))}
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    tabRow: {
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingVertical: 24,
        flexDirection: 'row',
    },
    tabButton: {
        backgroundColor: '#fff',
        borderColor: '#222',
        borderWidth: 1,
        borderRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: 14,
        marginRight: 8,
    },
    tabButtonText: {
        fontSize: 16,
        fontFamily: 'Paperlogy-Medium',
    },
    categoryTitle: {
        fontSize: 24,
        fontFamily: 'Paperlogy-SemiBold',
        marginVertical: 14,
        paddingHorizontal: 30,
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 34,
        paddingHorizontal: 30,
        alignItems: 'flex-start',
    },
    menuImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    menuText: {
        flex: 1,
        gap: 5,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    menuTitle: {
        fontSize: 20,
        fontFamily: 'Paperlogy-SemiBold',
    },
    menuDescription: {
        fontSize: 15,
        fontFamily: 'Paperlogy-Light',
        color: '#969696',
    },
    menuPrice: {
        fontSize: 18,
        fontFamily: 'Paperlogy-Medium',
        color: '#000',
    },
    divider: {
        height: 14,
        backgroundColor: '#EFEFEF',
        width: '100%',
        marginBottom: 30,
    },
    smallDivider: {
        height: 1,
        backgroundColor: '#EFEFEF',
        width: '100%',
        marginBottom: 16,
        marginTop: -16,
    },
});