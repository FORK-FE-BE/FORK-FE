import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import BottomNavigationBar from '../utils/BottomNavigationBar';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function CartScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const [activeTab] = useState('cart');

  const [quantity, setQuantity] = useState(1);
  const [isVisible, setIsVisible] = useState(true); // 상품 카드 표시 여부

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
          <Text style={styles.menuTitle}>[세트 메뉴]{'\n'}마라탕 + 탕후루 + 짬뽕국물 1.25L</Text>
          <Text style={styles.price}>가격 : 30,000원</Text>
          <Text style={styles.topping}>토핑 : 없음</Text>

          {/* 수량 및 버튼 */}
          <View style={styles.quantityWrapper}>
            <TouchableOpacity onPress={() => setIsVisible(false)}>
              <Image source={require('../../assets/icons/Trash.png')} style={styles.iconImage} />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
              <Image source={require('../../assets/icons/Union.png')} style={styles.iconImage} />
            </TouchableOpacity>
          </View>

          {/* 메뉴 추가하러 가기 버튼 */}
          <TouchableOpacity
            style={styles.addMenuButton}
            onPress={() => {
              console.log("카테고리 클릭: 중식");
              navigation.navigate('restaurantdetail', { category: '중식' });
            }}
          >
            <Text style={styles.addMenuText}>메뉴 추가하러 가기</Text>
          </TouchableOpacity>
        </View>
      )}

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

    <View style={styles.divider} />

    <View style={[styles.rowBetween, { marginTop: 8 }]}>
      <Text style={styles.finalLabel}>결제금액</Text>
      <Text style={styles.finalValue}>31,400원</Text>
    </View>
  </View>
</View>
    

      {/* 하단 바 */}
      <View style={styles.bottomBar}>
        <Text style={styles.bottomPrice}>총 결제금액{"\n"}</Text>
        <Text style={styles.bottomPriceNumber}> {quantity * 31400}원</Text>
       
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
  container: { flex: 1,width:'100%',backgroundColor: '#EDF4FF' },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Paperlogy-Medium',
    marginBottom: 16
  },

  storeBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  storeName: {
    fontSize: 22,
    fontFamily: 'Paperlogy-SemiBold',
    marginTop: 20,
    marginLeft: 14
  },

  card: {
    backgroundColor: '#fff',
    marginLeft: 24,
    marginRight: 24,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    borderColor: '#D9D9D9',
  },
  menuTitle: {
    fontSize: 20,
    fontFamily: 'Paperlogy-SemiBold',
    marginLeft:24,
    marginBottom: 15,
    marginTop: 20
  },
  price: {
    fontSize: 15,
    marginLeft:24,
    color: '#7C7C7C',
    fontFamily: 'Paperlogy-Regular'
  },
  topping: {

    fontSize: 15,
    marginLeft:24,
    color: '#7C7C7C',
    fontFamily: 'Paperlogy-Regular',
    marginBottom: 10
  },

  quantityWrapper: {

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 8,
    width: 100,
    alignSelf: 'flex-end',
    marginTop: 10,
    marginRight:24,
    backgroundColor: '#fff',
  },
  iconImage: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  quantityText: {
    fontSize: 16,
    fontFamily: 'Paperlogy-Regular',
    color: '#000',
  },

  addMenuButton: {
    borderTopWidth: 1.3,
    borderTopColor: '#CACACA',
    paddingVertical: 12,
    marginTop: 20,
    marginBottom:10
  },
  addMenuText: {
    textAlign: 'center',    
    fontSize: 20,
    fontFamily: 'Paperlogy-SemiBold',
  },

  paymentBox: {
    padding:32,
  },
  paymentTitle: {
    fontFamily: 'Paperlogy-SemiBold',
    fontSize: 22,
    marginBottom: 10,
    color: '#000'
  },
  amountBox: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    width:'107%',
    marginLeft:-10,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  finalLabel: {
    fontSize: 20,
    fontFamily: 'Paperlogy-Medium'
  },
  finalValue: {
    fontSize: 16,
    fontFamily: 'Paperlogy-Bold'
  },

  bottomBar: {
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
    shadowRadius: 10
  },
  bottomPrice: {
    fontSize: 16,
    fontFamily: 'Paperlogy-Regular',
    color: '#555'
  },
  bottomPriceNumber: {
    fontSize: 21,
    fontFamily: 'Paperlogy-Bold',
    color: '#555',
    left:-112,
    top:10,
  },



  orderButton: {
    backgroundColor: '#268CFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10
    },
  orderButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Paperlogy-Bold'
  },

  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff'
  },
  
  totalLabel: {
    fontSize: 20,
    fontFamily: 'Paperlogy-Bold',
    color: '#000',
  },
  totalValue: {
    fontSize: 20,
    fontFamily: 'Paperlogy-Bold',
    color: '#000',
  },
  subLabel: {
    fontSize: 17,
    fontFamily: 'Paperlogy-Regular',
    color: '#8A8A8A',
  },
  subValue: {
    fontSize: 17,
    fontFamily: 'Paperlogy-Regular',
    color: '#8A8A8A',
  },
  divider: {
    borderBottomColor: '#CACACA',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  finalLabel: {
    fontSize: 20,
    fontFamily: 'Paperlogy-SemiBold',
    color: '#000',
  },
  finalValue: {
    fontSize: 20,
    fontFamily: 'Paperlogy-SemiBold',
    color: '#000',
  },
  

  
});
