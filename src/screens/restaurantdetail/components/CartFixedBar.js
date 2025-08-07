import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import oneImage from '../../../assets/images/one.png';
import { useCart } from "../../../contexts/CartContext";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useUser } from '../../../contexts/UserContext';
import { BASE_URL } from '../../../constants';

export default function CartFixedBar({ minOrderPrice }) {
  const { cart } = useCart();
  const navigation = useNavigation();
  const [totalPrice, setTotalPrice] = useState(0);
  const { user } = useUser();

  const remaining = minOrderPrice - totalPrice;
  const statusMessage =
    (cart.length === 0 || totalPrice === 0)
      ? (minOrderPrice
        ? `${minOrderPrice.toLocaleString()}원 이상 담아야 주문 가능`
        : '최소 주문 금액 정보를 불러오는 중...')
      : remaining > 0
        ? `${remaining.toLocaleString()}원 더 담으면 주문 가능`
        : '배달이 가능해요!';

  useFocusEffect(
    useCallback(() => {
      const fetchCartData = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/api/cart/${user.userId}`);
          const total = response.data.totalPrice;
          setTotalPrice(total);
        } catch (error) {
          console.error('장바구니 정보 불러오기 실패:', error);
        }
      };

      if (user?.userId) {
        fetchCartData();
      }
    }, [user?.userId])
  );

  return (
    <View style={styles.fixedBar}>
      <View>
        <Text style={styles.priceText}>
          {typeof totalPrice === 'number' ? totalPrice.toLocaleString() + '원' : '0원'}
        </Text>
        <Text style={styles.subText}>{statusMessage}</Text>
      </View>

      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => navigation.navigate('CartScreen')}
      >
        <View style={styles.cartContent}>
          <Text style={styles.cartText}>장바구니 보기</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  fixedBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderColor: '#ddd',
    height: 100
  },
  priceText: {
    fontSize: 22,
    fontFamily: 'Paperlogy-SemiBold',
  },
  subText: {
    fontSize: 15,
    color: '#969696',
    fontFamily: 'Paperlogy-Medium',
    marginTop: 0,
  },
  cartButton: {
    backgroundColor: '#268aff',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  cartText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Paperlogy-SemiBold',
  },
  badge: {
    backgroundColor: '#fff',
    color: '#268aff',
    borderRadius: 999,
    overflow: 'hidden',
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginRight: 6,
    fontFamily: 'Paperlogy-Bold',
  },
  cartContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  oneImage: {
    width: 22,
    height: 22,
    marginRight: 6,
    resizeMode: 'contain',
  },

});
