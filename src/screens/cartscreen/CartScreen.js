
import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Alert
} from 'react-native';
import BottomNavigationBar from '../utils/BottomNavigationBar';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function CartScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const [activeTab] = useState('cart');

  // 예시: 메뉴 상세에서 전달된 데이터
  const cartItem = route.params?.menu ?? {
    title: '[세트 메뉴]\n마라탕 + 탕후루 + 짬뽕국물 1.25L',
    price: 30000,
    quantity: 1,
    toppings: [],
  };

  const [quantity, setQuantity] = useState(cartItem.quantity);
  const [isVisible, setIsVisible] = useState(true);

  const totalPrice = cartItem.price * quantity;

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>장바구니</Text>
      </View>

      {/* 매장명 */}
      <View style={styles.storeBox}>
        <Text style={styles.storeName}>마라탕후루 본점</Text>
      </View>

      {/* 상품 카드 */}
      {isVisible && (
        <View style={styles.card}>
          <Text style={styles.menuTitle}>{cartItem.title}</Text>
          <Text style={styles.price}>가격 : {cartItem.price.toLocaleString()}원</Text>
          <Text style={styles.topping}>
            토핑 : {cartItem.toppings.length > 0 ? cartItem.toppings.join(', ') : '없음'}
          </Text>

          {/* 수량 및 삭제 */}
          <View style={styles.quantityWrapper}>
            <TouchableOpacity onPress={() => setIsVisible(false)}>
              <Text>🗑️</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
              <Text>➕</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.addMenuButton}
            onPress={() => navigation.navigate('RestaurantDetail', { category: '중식' })}
          >
            <Text style={styles.addMenuText}>메뉴 추가하러 가기</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* 결제 요약 */}
      <View style={styles.paymentBox}>
        <Text style={styles.paymentTitle}>결제금액 확인을 확인해주세요</Text>
        <View style={styles.amountBox}>
          <View style={styles.rowBetween}>
            <Text style={styles.totalLabel}>총 금액</Text>
            <Text style={styles.totalValue}>{totalPrice.toLocaleString()}원</Text>
          </View>
          <View style={styles.divider} />
          <View style={[styles.rowBetween, { marginTop: 8 }]}>
            <Text style={styles.finalLabel}>결제금액</Text>
            <Text style={styles.finalValue}>{(totalPrice + 1000).toLocaleString()}원</Text>
          </View>
        </View>
      </View>

      {/* 하단 바 */}
      <View style={styles.bottomBar}>
        <Text style={styles.bottomPrice}>총 결제금액</Text>
        <Text style={styles.bottomPriceNumber}>{(totalPrice + 1000).toLocaleString()}원</Text>
        <TouchableOpacity
          style={styles.orderButton}
          onPress={() => navigation.navigate('Payment')}
        >
          <Text style={styles.orderButtonText}>주문하러 가기</Text>
        </TouchableOpacity>
      </View>

      {/* 하단 네비게이션 */}
      <View style={styles.bottomNavigation}>
        <BottomNavigationBar
          activeTab={activeTab}
          onTabPress={(tabKey) => {
            if (tabKey !== route.name.toLowerCase()) {
              navigation.navigate(
                tabKey === 'home' ? 'Home' :
                tabKey === 'cart' ? 'CartScreen' :
                tabKey === 'bot' ? 'KbotScreen' :
                tabKey === 'order' ? 'OrderList' :
                tabKey === 'my' ? 'MyFork' : 'Home'
              );
            }
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#EDF4FF' },
  header: {
    flexDirection: 'row', alignItems: 'center', paddingTop: 10,
    paddingHorizontal: 20, backgroundColor: '#fff',
  },
  headerTitle: {
    flex: 1, textAlign: 'center', fontSize: 24,
    fontFamily: 'Paperlogy-Medium', marginBottom: 16,
  },
  storeBox: {
    padding: 20,
  },
  storeName: {
    fontSize: 22,
    fontFamily: 'Paperlogy-SemiBold',
    marginLeft: 14,
  },
  card: {
    backgroundColor: '#fff',
    margin: 24,
    borderRadius: 14,
    padding: 16,
    elevation: 3,
  },
  menuTitle: {
    fontSize: 20,
    fontFamily: 'Paperlogy-SemiBold',
    marginBottom: 8,
  },
  price: {
    fontSize: 15,
    color: '#7C7C7C',
    fontFamily: 'Paperlogy-Regular',
  },
  topping: {
    fontSize: 15,
    color: '#7C7C7C',
    fontFamily: 'Paperlogy-Regular',
    marginBottom: 10,
  },
  quantityWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  quantityText: {
    fontSize: 16,
    fontFamily: 'Paperlogy-Regular',
  },
  addMenuButton: {
    borderTopWidth: 1,
    borderTopColor: '#CACACA',
    paddingTop: 10,
    marginTop: 10,
  },
  addMenuText: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Paperlogy-SemiBold',
  },
  paymentBox: {
    padding: 24,
  },
  paymentTitle: {
    fontFamily: 'Paperlogy-SemiBold',
    fontSize: 20,
    marginBottom: 10,
  },
  amountBox: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  divider: {
    borderBottomColor: '#CACACA',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  totalLabel: {
    fontSize: 18,
    fontFamily: 'Paperlogy-Bold',
  },
  totalValue: {
    fontSize: 18,
    fontFamily: 'Paperlogy-Bold',
  },
  finalLabel: {
    fontSize: 20,
    fontFamily: 'Paperlogy-SemiBold',
  },
  finalValue: {
    fontSize: 20,
    fontFamily: 'Paperlogy-SemiBold',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  bottomPrice: {
    fontSize: 16,
    fontFamily: 'Paperlogy-Regular',
  },
  bottomPriceNumber: {
    fontSize: 20,
    fontFamily: 'Paperlogy-Bold',
  },
  orderButton: {
    backgroundColor: '#268CFF',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  orderButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Paperlogy-Bold',
  },
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
