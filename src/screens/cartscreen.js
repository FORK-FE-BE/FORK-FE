import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useFonts } from 'expo-font';

export default function CartScreen() {
  const [fontsLoaded] = useFonts({
    'Paperlogy-Regular': require('../assets/fonts/Paperlogy-4Regular.ttf'),
    'Paperlogy-Medium': require('../assets/fonts/Paperlogy-5Medium.ttf'),
    'Paperlogy-Bold': require('../assets/fonts/Paperlogy-7Bold.ttf'),
  });

  if (!fontsLoaded) return <Text>폰트 로딩 중...</Text>;

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        {/* 뒤로가기 없애 */}
        {/* <Image source={require('../assets/icons/arrow_back.svg')} style={styles.backArrowImage} /> */}
        <Text style={styles.headerTitle}>장바구니</Text>
      </View>

      {/* 매장명 */}
      <View style={styles.storeBox}>
        <Text style={styles.storeName}>마라탕후루 본점</Text>
        <Image source={require('../assets/image 59.png')} style={styles.RightArrowImage} />

      </View>

      {/* 상품 카드 */}
      <View style={styles.card}>
        <Text style={styles.menuTitle}>[세트 메뉴]{'\n'}마라탕 + 탕후루 + 짬뽕국물 1.25L</Text>
        <Text style={styles.price}>가격 : 30,000원</Text>
        <Text style={styles.topping}>토핑 : 없음</Text>

        {/* 수량 및 버튼 */}
        <View style={styles.quantityBox}>
          <TouchableOpacity style={styles.quantityBtn}><Text style={styles.icon}>🗑</Text></TouchableOpacity>
          <Text style={styles.count}>1</Text>
          <TouchableOpacity style={styles.quantityBtn}><Text style={styles.icon}>＋</Text></TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.addMenuButton}>
          <Text style={styles.addMenuText}>메뉴 추가하러 가기</Text>
        </TouchableOpacity>
      </View>

      {/* 결제 박스 */}
      <View style={styles.paymentBox}>
        <Text style={styles.paymentTitle}>결제금액 확인을 확인해주세요</Text>

        <View style={styles.amountBox}>
          <View style={styles.rowBetween}>
            <Text style={styles.totalLabel}>총 금액</Text>
            <Text style={styles.totalValue}>30,000원</Text>
          </View>
          <View style={styles.rowBetween}>
            <Text style={styles.subLabel}>메뉴금액</Text>
            <Text style={styles.subValue}>28,000원</Text>
          </View>
          <View style={styles.rowBetween}>
            <Text style={styles.subLabel}>배달비</Text>
            <Text style={styles.subValue}>1,000원</Text>
          </View>

          <View style={[styles.rowBetween, { marginTop: 10 }]}>
            <Text style={styles.finalLabel}>결제금액</Text>
            <Text style={styles.finalValue}>31,400원</Text>
          </View>
        </View>
      </View>

      {/* 하단 고정 버튼 */}
      <View style={styles.bottomBar}>
        <Text style={styles.bottomPrice}>총 결제금액{"\n"}31,400원</Text>
        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.orderButtonText}>주문하러 가기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F2F6FF' },
  header: { flexDirection: 'row', alignItems: 'center', paddingTop: 50, paddingHorizontal: 20, backgroundColor: '#fff' },
  backArrowImage: { width: 24, height: 24 },
  headerTitle: { flex: 1, textAlign: 'center', fontSize: 22, fontFamily: 'Paperlogy-Medium' ,marginTop:15,marginBottom:16},

  storeBox: { flexDirection: 'row',    
    alignItems: 'center',  justifyContent: 'space-between', padding: 20, backgroundColor: '#EDF4FF' },
  storeName: { fontSize: 16, fontFamily: 'Paperlogy-Bold' },

  card: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 16,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  menuTitle: { fontSize: 16, fontFamily: 'Paperlogy-Bold', marginBottom: 10 },
  price: { fontSize: 14, color: '#555', fontFamily: 'Paperlogy-Regular' },
  topping: { fontSize: 14, color: '#555', fontFamily: 'Paperlogy-Regular', marginBottom: 10 },
  quantityBox: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  quantityBtn: { paddingHorizontal: 12, paddingVertical: 6, backgroundColor: '#eee', borderRadius: 6 },
  icon: { fontSize: 16 },
  count: { marginHorizontal: 10, fontSize: 16 },
  addMenuButton: { borderTopWidth: 1, borderTopColor: '#ccc', paddingVertical: 12, marginTop: 10 },
  addMenuText: { textAlign: 'center', color: '#007AFF', fontSize: 14 },

  paymentBox: { backgroundColor: '#F2F6FF', padding: 20 },
  paymentTitle: { fontFamily: 'Paperlogy-Bold', fontSize: 15, marginBottom: 10 },
  amountBox: { backgroundColor: '#fff', borderRadius: 12, padding: 16 },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 },
  totalLabel: { fontSize: 15, fontFamily: 'Paperlogy-Bold' },
  totalValue: { fontSize: 15, fontFamily: 'Paperlogy-Bold' },
  subLabel: { fontSize: 13, color: '#999', fontFamily: 'Paperlogy-Regular' },
  subValue: { fontSize: 13, color: '#999', fontFamily: 'Paperlogy-Regular' },
  finalLabel: { fontSize: 16, fontFamily: 'Paperlogy-Medium' },
  finalValue: { fontSize: 16, fontFamily: 'Paperlogy-Medium' },

  bottomBar: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 20,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  bottomPrice: { fontSize: 14, fontFamily: 'Paperlogy-Regular', color: '#555' },
  orderButton: { backgroundColor: '#268CFF', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 20 },
  orderButtonText: { color: '#fff', fontSize: 15, fontFamily: 'Paperlogy-Bold' },
});
