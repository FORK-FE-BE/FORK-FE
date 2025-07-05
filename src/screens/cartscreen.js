// CartScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function CartScreen() {
  const [extraCheese, setExtraCheese] = useState(false);
  const [extraEgg, setExtraEgg] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const basePrice = 11000;
  const extraCheesePrice = 1000;
  const extraEggPrice = 500;

  const totalPrice = basePrice + (extraCheese ? extraCheesePrice : 0) + (extraEgg ? extraEggPrice : 0);

  return (
    <ScrollView style={styles.container}>
      {/* 이미지 영역 */}
      {/* <Image source={require('../assets/image1.jpg')} style={styles.image} /> */}
      <View style={styles.placeholderImage} />
      <Text style={styles.overlay}>더욱 자세한 정보를 원한다면, AR로 보기를 눌러보세요</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>인기 1위   사장님 추천</Text>
        <Text style={styles.title}>평양 라멘</Text>
        <Text style={styles.subtitle}>평양 현지맛 그대로 깊고 얼싸한 스프</Text>
        <Text style={styles.price}>가격   {basePrice.toLocaleString()}원</Text>

        <TouchableOpacity style={styles.arButton}>
          <Text style={styles.arText}>AR로 보기</Text>
        </TouchableOpacity>

        <View style={styles.optionContainer}>
          <Text style={styles.optionTitle}>추가선택</Text>

          <TouchableOpacity
            onPress={() => setExtraCheese(!extraCheese)}
            style={styles.checkboxRow}
          >
            <View style={[styles.checkboxBox, extraCheese && styles.checkboxChecked]} />
            <Text style={styles.optionLabel}>차슈 추가   + 1,000원</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setExtraEgg(!extraEgg)}
            style={styles.checkboxRow}
          >
            <View style={[styles.checkboxBox, extraEgg && styles.checkboxChecked]} />
            <Text style={styles.optionLabel}>계란추가   + 500원</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.quantityContainer}>
          <Text style={styles.optionTitle}>수량</Text>
          <View style={styles.quantityControl}>
            <TouchableOpacity onPress={() => setQuantity(Math.max(1, quantity - 1))}>
              <Text style={styles.quantityBtn}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
              <Text style={styles.quantityBtn}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>{(totalPrice * quantity).toLocaleString()} 원 담기</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  placeholderImage: {
    width: '100%',
    height: 250,
    backgroundColor: '#ddd',
  },
  overlay: {
    position: 'absolute',
    top: 220,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    color: '#fff',
    padding: 5,
    borderRadius: 5,
  },
  infoContainer: { padding: 20 },
  label: { color: '#888', marginBottom: 5 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 5 },
  subtitle: { color: '#555', marginBottom: 10 },
  price: { fontSize: 16, marginBottom: 20 },
  arButton: {
    borderWidth: 1,
    borderColor: '#007bff',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  arText: { color: '#007bff', fontSize: 16 },
  optionContainer: { marginBottom: 20 },
  optionTitle: { fontWeight: 'bold', marginBottom: 10 },
  checkboxRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  checkboxBox: {
    width: 20,
    height: 20,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#555',
    marginRight: 10,
    backgroundColor: '#fff',
  },
  checkboxChecked: {
    backgroundColor: '#007bff',
  },
  optionLabel: { fontSize: 16 },
  quantityContainer: { marginBottom: 20 },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: 100,
    justifyContent: 'space-between',
  },
  quantityBtn: { fontSize: 20, fontWeight: 'bold' },
  quantityText: { fontSize: 16 },
  addButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});