import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Button } from 'react-native';

// 로컬 슬라이드 이미지 배열 (이미지 경로가 맞는지 확인하세요)
const slides = [
  { id: 1, uri: require('../assets/image1.jpg') },
  { id: 2, uri: require('../assets/image2.jpg') },
  { id: 3, uri: require('../assets/image3.jpg') },
  { id: 4, uri: require('../assets/image4.jpg') },
  { id: 5, uri: require('../assets/image5.jpg') },
];

// 메뉴 항목 배열
const menuItems = [
  {
    id: 1,
    title: '평양냉면',
    description: '평양에서 직접 만든 냉면. 더운 계절에 어울리는 메뉴입니다.',
    price: 10000,
    image: require('../assets/image1.jpg'),
  },
  {
    id: 2,
    title: '평양비빔냉면',
    description: '평양에서 직접 만든 비빔냉면. 매콤하고 시원한 맛.',
    price: 11000,
    image: require('../assets/image2.jpg'),
  },
  {
    id: 3,
    title: '세트메뉴',
    description: '평양냉면 + 평양비빔냉면 + 콜라 1.25L',
    price: 32400,
    image: require('../assets/image3.jpg'),
  },
  {
    id: 4,
    title: '평양냉면 + 돈까스',
    description: '평양냉면과 돈까스를 한 번에 즐길 수 있는 메뉴.',
    price: 12500,
    image: require('../assets/image4.jpg'),
  },
  {
    id: 5,
    title: '콜라 1.25L',
    description: '시원한 콜라 1.25L',
    price: 3000,
    image: require('../assets/image5.jpg'),
  },
];

export default function RestaurantDetail() {
  return (
    <ScrollView style={styles.container}>
      {/* 상단 슬라이드 이미지 */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.slider}>
        {slides.map(slide => (
          <Image key={slide.id} source={slide.uri} style={styles.slideImage} />
        ))}
      </ScrollView>

      {/* 음식 정보 */}
      <View style={styles.foodInfo}>
        <Text style={styles.restaurantName}>맛있는 냉면집</Text>
        <View style={styles.rating}>
          <Text style={styles.ratingText}>⭐ 4.79(2931)</Text>
        </View>
        <Text style={styles.description}>“시간을 살고, 정성을 식혔다. 팔당냉면.”</Text>

        {/* 배달 정보 */}
        <View style={styles.deliveryInfo}>
          <Text style={styles.deliveryInfoTitle}>배달 정보</Text>
          <Text>최소 주문 20,000원</Text>
          <Text>조리 시간 7-25분</Text>
          <Text>위치 평양시 수성구 121길 18</Text>
          <Text>결제 방법 바로 결제</Text>
        </View>

        {/* AR 리뷰 포인트 */}
        <Text style={styles.arReview}>AR 리뷰 작성 시 최대 5,000 포인트 적립</Text>
      </View>

      {/* 음식 메뉴 리스트 */}
      <View style={styles.menuList}>
        {menuItems.map(item => (
          <View key={item.id} style={styles.menuItem}>
            <Image source={item.image} style={styles.menuImage} />
            <View style={styles.menuText}>
              <Text style={styles.menuTitle}>{item.title}</Text>
              <Text style={styles.menuDescription}>{item.description}</Text>
              <Text style={styles.menuPrice}>{item.price.toLocaleString()}원</Text>
            </View>
          </View>
        ))}
      </View>

      {/* 장바구니 보기 버튼 */}
      <View style={styles.cartButton}>
        <Button title="장바구니 보기" onPress={() => {}} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  slider: {
    width: '100%',
    height: 200,
  },
  slideImage: {
    width: 393,
    height: 241,
    marginRight: 10,
    borderRadius: 10,
  },
  foodInfo: {
    paddingTop: 21,
    paddingLeft: 30,
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  rating: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  ratingText: {
    fontSize: 14,
    color: '#ffb400',
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  deliveryInfoTitle: {
    fontSize: 20,
    fontWeight: 'regular',
    color: '#333',
    marginBottom: 12,
    textAlign: 'center',
  },
  deliveryInfo: {
    width: 333,
    height: 157,
    marginVertical: 28,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 20,
  },
  arReview: {
    fontSize: 16,
    color: '#333',
    marginVertical: 10,
  },
  menuList: {
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    marginBottom: 15,
    paddingHorizontal: 30,
  },
  menuImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  menuText: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuDescription: {
    fontSize: 14,
    color: '#555',
  },
  menuPrice: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  cartButton: {
    marginBottom: 20,
    marginHorizontal: 30,
  },
});
