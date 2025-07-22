import React, { useState } from 'react';
import ArrowBack from '../../../assets/icons/arrow_back.svg';

import { useCart } from '../../contexts/CartContext';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import Checkbox from 'expo-checkbox';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';

export default function MenuDetailScreen() {
  const { addToCart } = useCart(); 
  const navigation = useNavigation();
  const route = useRoute();

  // 더미 데이터
  const dummyMenu = {
    title: '평양 라멘',
    description: '평양 현지맛 그대로 깊고 얼싸한 소프',
    price: 11000,
    image: require('../../assets/images/one.png'),
  };

  
  const menu = route.params?.item ?? dummyMenu;

  const [quantity, setQuantity] = useState(1);
  const [extraTea, setExtraTea] = useState(false);
  const [extraEgg, setExtraEgg] = useState(false);

  const basePrice = menu.price;
  const extraPrice = (extraTea ? 1000 : 0) + (extraEgg ? 500 : 0);
  const totalPrice = (basePrice + extraPrice) * quantity;

  const handleAddToCart = () => {
    const cartItem = {
      title: menu.title,
      description: menu.description,
      image: menu.image,
      price: basePrice,
      quantity,
      extra: {
        tea: extraTea,
        egg: extraEgg
      }
    };
    addToCart(cartItem);
    navigation.navigate('CartScreen'); 
  };

  return (
    <ScrollView style={styles.container}>
                  <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                      <ArrowBack width={24} height={24} />
                  </TouchableOpacity>
      <Image source={menu.image} style={styles.image} />

      <View style={styles.overlayTextBox}>
        <Text style={styles.overlayText}>더욱 자세한 정보를 원한다면, AR로 보기를 눌러보세요</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.rankLabel}>인기 1위   사장님 추천</Text>
        <Text style={styles.menuTitle}>{menu.title}</Text>
        <Text style={styles.menuDesc}>{menu.description}</Text>
        <Text style={styles.price}>가격     {basePrice.toLocaleString()}원</Text>

        <TouchableOpacity
  style={styles.arButton}
  onPress={() => {
    WebBrowser.openBrowserAsync(
      'https://ye-eun-min201.github.io/usdz-hosting/PinkDonut.usdz'
    );
  }}
>
  <Text style={styles.arButtonText}>AR로 보기</Text>
</TouchableOpacity>

      </View>

      <View style={styles.optionBox}>
        <Text style={styles.optionTitle}>추가선택</Text>
        <View style={styles.optionRow}>
          <Checkbox value={extraTea} onValueChange={setExtraTea} />
          <Text style={styles.optionLabel}>차슈 추가</Text>
          <Text style={styles.optionPrice}>+ 1,000원</Text>
        </View>
        <View style={styles.optionRow}>
          <Checkbox value={extraEgg} onValueChange={setExtraEgg} />
          <Text style={styles.optionLabel}>계란추가</Text>
          <Text style={styles.optionPrice}>+ 500원</Text>
        </View>
      </View>

      <View style={styles.quantityBox}>
        <Text style={styles.optionTitle}>수량</Text>
        <View style={styles.counterBox}>
          <TouchableOpacity onPress={() => setQuantity(Math.max(1, quantity - 1))}>
            <Text style={styles.counterBtn}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
            <Text style={styles.counterBtn}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.cartButton} onPress={handleAddToCart}>
        <Text style={styles.cartButtonText}>{totalPrice.toLocaleString()} 원 담기</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 220,
  },
  overlayTextBox: {
    position: 'absolute',
    top: 190,
    width: '100%',
    alignItems: 'center',
  },
  overlayText: {
    backgroundColor: 'black',
    color: 'white',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    fontSize: 13,
    fontFamily: 'Paperlogy-Regular',
  },
  infoBox: {
    padding: 24,
  },
  rankLabel: {
    color: '#888',
    fontSize: 12,
    marginBottom: 6,
    fontFamily: 'Paperlogy-Regular',
  },
  menuTitle: {
    fontSize: 22,
    fontFamily: 'Paperlogy-Bold',
  },
  menuDesc: {
    fontSize: 14,
    color: '#666',
    marginVertical: 10,
    fontFamily: 'Paperlogy-Regular',
  },
  price: {
    fontSize: 16,
    fontFamily: 'Paperlogy-Bold',
  },
  arButton: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#007aff',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  arButtonText: {
    color: '#007aff',
    fontSize: 16,
    fontFamily: 'Paperlogy-Regular',
  },
  optionBox: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  optionTitle: {
    fontSize: 16,
    fontFamily: 'Paperlogy-Bold',
    marginBottom: 12,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  optionLabel: {
    fontSize: 15,
    flex: 1,
    fontFamily: 'Paperlogy-Regular',
  },
  optionPrice: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Paperlogy-Regular',
  },
  quantityBox: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  counterBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  counterBtn: {
    fontSize: 20,
    paddingHorizontal: 20,
    fontFamily: 'Paperlogy-Regular',
  },
  quantityText: {
    fontSize: 18,
    fontFamily: 'Paperlogy-Bold',
    paddingHorizontal: 12,
  },
  cartButton: {
    marginTop: 20,
    backgroundColor: '#007aff',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginHorizontal: 24,
    marginBottom: 24,
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Paperlogy-Bold',
  },
});
