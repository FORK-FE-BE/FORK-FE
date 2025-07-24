import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';

import oneImage from '../../../assets/images/one.png';
import {useCart} from "../../../contexts/CartContext";
import {useNavigation} from "@react-navigation/native";
export default function CartFixedBar() {
  const {cart} = useCart();
  const navigation = useNavigation();
  return (
    <View style={styles.fixedBar}>
      <View>
        <Text style={styles.priceText}>{cart?.totalPrice?.toLocaleString() ?? 0}원</Text>
        <Text style={styles.subText}>3,000원 더 담으면 주문가능</Text>
      </View>
      <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('CartScreen')}>
        <View style={styles.cartContent}>
            {/*<Image source={oneImage} style={styles.oneImage} />*/}
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
    paddingVertical: 18,
    paddingHorizontal: 28,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderColor: '#ddd',
  },
  priceText: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Paperlogy-Bold',
  },
  subText: {
    fontSize: 16,
    color: '#969696',
    fontFamily: 'Paperlogy-Medium',
    marginTop:6,
  },
  cartButton: {
    backgroundColor: '#268aff',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  cartText: {
    color: '#FFF9F9',
    fontSize: 18,
    fontFamily: 'Paperlogy-Bold',
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
