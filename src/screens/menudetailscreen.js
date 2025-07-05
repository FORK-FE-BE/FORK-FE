// MenuDetailScreen.js with custom checkboxes and Paperlogy Fonts (no react-native-paper)
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useFonts } from 'expo-font';


export default function menudetailscreen() {
  // 폰트 로드
  const [fontsLoaded] = useFonts({
    'Paperlogy-Thin': require('../assets/fonts/Paperlogy-1Thin.ttf'),
    'Paperlogy-ExtraLight': require('../assets/fonts/Paperlogy-2ExtraLight.ttf'),
    'Paperlogy-Light': require('../assets/fonts/Paperlogy-3Light.ttf'),
    'Paperlogy-Regular': require('../assets/fonts/Paperlogy-4Regular.ttf'),
    'Paperlogy-Medium': require('../assets/fonts/Paperlogy-5Medium.ttf'),
    'Paperlogy-SemiBold': require('../assets/fonts/Paperlogy-6SemiBold.ttf'),
    'Paperlogy-Bold': require('../assets/fonts/Paperlogy-7Bold.ttf'),
    'Paperlogy-ExtraBold': require('../assets/fonts/Paperlogy-8ExtraBold.ttf'),
    'Paperlogy-Black': require('../assets/fonts/Paperlogy-9Black.ttf'),
  });

  if (!fontsLoaded) return null;

  const [extraCheese, setExtraCheese] = useState(false);
  const [extraEgg, setExtraEgg] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const basePrice = 11000;
  const extraCheesePrice = 1000;
  const extraEggPrice = 500;

  const totalPrice = basePrice + (extraCheese ? extraCheesePrice : 0) + (extraEgg ? extraEggPrice : 0);

  return (
    <ScrollView style={styles.container}>
<Image source={require('../assets/food.png')} style={styles.placeholderImage} />
<Text style={styles.overlay}>더욱 자세한 정보를 원한다면, AR로 보기를 눌러보세요</Text>

      <View style={styles.infoContainer}>
      <View style={styles.tagContainer}>
        <Text style={[styles.tag, styles.tagPrimary]}>인기 1위</Text>
        <Text style={[styles.tag, styles.tagSecondary]}>사장님 추천</Text>
        </View>

        <Text style={styles.title}>평양 라멘</Text>
        <Text style={styles.subtitle}>평양 현지맛 그대로 깊고 얼싸한 스프</Text>
        <View style={styles.priceRow}>
        <Text style={styles.priceLabel}>가격</Text>
        <Text style={styles.priceValue}>{basePrice.toLocaleString()}원</Text>
        </View>

        <TouchableOpacity style={styles.arButton}>
          <Text style={styles.arText}>AR로 보기</Text>
        </TouchableOpacity>

        <View style={styles.section} />
        

        <View style={styles.optionContainer}>
  <Text style={styles.optionTitle}>추가선택</Text>

  <TouchableOpacity
    onPress={() => setExtraCheese(!extraCheese)}
    style={styles.checkboxRow}
  >
    <View style={[styles.customCheckbox, extraCheese && styles.checkboxChecked]} />
    <View style={styles.optionTextRow}>
      <Text style={styles.optionLabel}>차슈 추가</Text>
      <Text style={styles.optionPrice}>+1,000원</Text>
    </View>
  </TouchableOpacity>

  <TouchableOpacity
    onPress={() => setExtraEgg(!extraEgg)}
    style={styles.checkboxRow}
  >
    <View style={[styles.customCheckbox, extraEgg && styles.checkboxChecked]} />
    <View style={styles.optionTextRow}>
      <Text style={styles.optionLabel}>계란 추가</Text>
      <Text style={styles.optionPrice}>+500원</Text>
    </View>
  </TouchableOpacity>
</View>

<View style={styles.section} />

{/* 수량 + 담기 버튼 한 줄로 */}
<View style={styles.quantityRow}>
  <Text style={styles.optionTitle}>수량</Text>
  <View style={styles.quantityControlBox}>
    <TouchableOpacity onPress={() => setQuantity(Math.max(1, quantity - 1))}>
      <Text style={styles.quantityBtn}>-</Text>
    </TouchableOpacity>
    <Text style={styles.quantityText}>{quantity}</Text>
    <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
      <Text style={styles.quantityBtn}>+</Text>
    </TouchableOpacity>
  </View>
</View>

<View style={styles.finalSection} />


<TouchableOpacity style={styles.fullAddButton}>
  <Text style={styles.fullAddButtonText}>{(totalPrice * quantity).toLocaleString()} 원 담기</Text>
</TouchableOpacity>

        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  placeholderImage: {
    width: '100%',
    height: 236,
    backgroundColor: '#ddd',
  },
  overlay: {
    position: 'absolute',
    top: 200,
    alignSelf: 'flex-end',
    marginRight:6,
    backgroundColor: 'rgba(0,0,0,0.8)',
    color: '#fff',
    paddingRight: 12,
    paddingLeft:12,
    paddingTop:6,
    paddingBottom:6,
    borderRadius: 30,
    fontFamily: 'Paperlogy-Regular',
    fontSize:13,
  },

  tagContainer: {
    flexDirection: 'row',
    gap: 8, // 만약 gap이 적용되지 않으면 marginRight 사용
    marginBottom: 8,
    marginLeft:29,

  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 3,
    fontSize: 12,
    fontFamily: 'Paperlogy-Medium',
    color: '#fff',
    overflow: 'hidden',
  },
  tagPrimary: {
    backgroundColor: '#EDF4FF',
    color:'#59F',
  },
  tagSecondary: {
    backgroundColor: '#F5F6F8',
    color:'#5B5B5B',
  },
  

  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    marginTop:10,
    gap: 233, // gap이 적용되지 않으면 marginRight 사용
  },
  priceLabel: {
    fontSize: 20,
    fontFamily: 'Paperlogy-SemiBold',
    color: '#252525',
    paddingLeft:29,
  },
  priceValue: {
    fontSize: 20,
    fontFamily: 'Paperlogy-SemiBold',
    color: '#252525',
  },
  
  infoContainer: {paddingTop:20 },
  label: { color: '#888', marginBottom: 5, fontFamily: 'Paperlogy-Regular' },
  title: { paddingLeft:29,fontSize: 24, fontWeight: 'bold', marginBottom: 13, fontFamily: 'Paperlogy-SemiBold' },
  subtitle: {paddingLeft:29, color: '#555', fontSize:14, marginBottom: 12, fontFamily: 'Paperlogy-Light' },
  price: { fontSize: 16, marginBottom: 20, fontFamily: 'Paperlogy-Medium' },
  arButton: {
    borderWidth: 1.5,
    backgroundColor:'#EDF4FF',
    borderColor: '#5599FF',
    
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
    width:335,
    marginLeft:29,
  },

  arText: { color: '#006DF0', fontSize: 18, fontFamily: 'Paperlogy-Bold' },
  optionContainer: { marginBottom: 20 },
  optionTitle: { marginTop:16,marginLeft:29,paddingBottom:15,
    fontWeight: 'bold', paddingBlockStartLeft:29,
     marginBottom: 10, fontFamily: 'Paperlogy-SemiBold',
    fontSize:20 },
  checkboxRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  customCheckbox: {
    width: 18,
    height: 18,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#D9D9D9',
    marginRight: 13,
    backgroundColor: '#fff',
    marginLeft:29,
  },
  checkboxChecked: {
    backgroundColor: '#2789FF',
    borderColor: '#007bff',
  },
  optionTextRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight:29,
  },
  optionLabel: {
    fontSize: 15,
    fontFamily: 'Paperlogy-Regular',
    color: '#252525',
    marginBottom:2,
  },
  optionPrice: {
    fontSize: 16,
    fontFamily: 'Paperlogy-Regular',
    color: '#555',
  },
  
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
    marginLeft:29,
    
  },
  quantityBtn: { fontSize: 20, fontWeight: 'bold', fontFamily: 'Paperlogy-Medium' },
  quantityText: { fontSize: 16, fontFamily: 'Paperlogy-Regular' },
  addButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  quantityRow: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 20,
  marginHorizontal: 29,
  
},
quantityControlWrapper: {
  flexDirection: 'column',
},
addButtonInline: {
  backgroundColor: '#007bff',
  paddingVertical: 14,
  paddingHorizontal: 20,
  borderRadius: 5,
  alignItems: 'center',
},


  section: {
    height: 10,
    width:393,
    backgroundColor: '#EFEFEF',
    marginBottom:13,
  },

  finalSection: {
    height: 1,
    width:393,
    backgroundColor: '#EFEFEF',
    marginBottom:13,
  },
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 194, 
    marginTop: 16,
    marginBottom: 20,
    border:'#fff'
  },
  quantityControlBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#D9D9D9',
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  quantityBtn: {
    fontSize: 20,
    fontFamily: 'Paperlogy-Bold',
    paddingHorizontal: 10,
  },
  quantityText: {
    fontSize: 18,
    fontFamily: 'Paperlogy-SemiBold',
    marginHorizontal: 8,
  },
  fullAddButton: {
    backgroundColor: '#2E8BFF',
    marginHorizontal: 29,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  fullAddButtonText: {
    color: '#fff',
    fontSize: 23,
    fontFamily: 'Paperlogy-Bold',
  },
  
});
