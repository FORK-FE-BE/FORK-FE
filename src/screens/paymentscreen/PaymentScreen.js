import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ArrowBack from '../../assets/icons/arrow_back.svg';

export default function PaymentScreen() {
  const navigation = useNavigation();
  const [storeRequest, setStoreRequest] = useState('예: 완전 맵게 해주세요!!!!!!');
  const [riderRequest, setRiderRequest] = useState('예: 빨리좀 와주세요');
  const [paymentMethod, setPaymentMethod] = useState('카카오 페이');

  const paymentOptions = [
    '카카오 페이',
    '토스페이',
    '신용카드 결제',
    '네이버 결제',
    '계좌결제'
  ];

  return (
    <ScrollView style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <ArrowBack width={24} height={24} />
        </TouchableOpacity>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>주문하기</Text>
        </View>
      </View>

      {/* 상세 정보 */}
      <Text style={styles.sectionTitle}>상세정보</Text>
      <View style={styles.infoBox}>
        <Text style={styles.subTitle}>배달주소</Text>
        <Text style={styles.text}>📍 용산구 이천로 13다길 18{"\n"}푸르미 아파트 13동 1101호</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.subTitle}>나의 연락처</Text>
        <Text style={styles.text}>010-1234-5678</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.subTitle}>가게 요청사항</Text>
        <TextInput
          style={styles.input}
          value={storeRequest}
          onChangeText={setStoreRequest}
        />
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.subTitle}>라이더 요청사항</Text>
        <TextInput
          style={styles.input}
          value={riderRequest}
          onChangeText={setRiderRequest}
        />
      </View>

      {/* 결제 요약 */}
      <View style={styles.summaryBox}>
        <View style={styles.row}><Text style={styles.label}>주문금액</Text><Text style={styles.value}>30,000원</Text></View>
        <View style={styles.row}><Text style={styles.label}>메뉴금액</Text><Text style={styles.value}>28,000원</Text></View>
        <View style={styles.row}><Text style={styles.label}>배달비</Text><Text style={styles.value}>1,000원</Text></View>
        <View style={styles.row}><Text style={styles.label}>쿠폰 할인</Text><Text style={styles.value}>-1,000원</Text></View>
        <View style={styles.row}><Text style={styles.total}>결제금액</Text><Text style={styles.total}>31,400원</Text></View>
      </View>

      {/* 결제 수단 */}
      <View style={styles.infoBox}>
        <Text style={styles.PaymentsubTitle}>결제수단</Text>
        {paymentOptions.map(option => (
          <TouchableOpacity key={option} style={styles.radioRow} onPress={() => setPaymentMethod(option)}>
            <View style={styles.radioCircle}>
              {paymentMethod === option && <View style={styles.selectedRb} />}
            </View>
            <Text style={styles.text}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 결제 버튼 */}
      <TouchableOpacity style={styles.payButton}>
        <Text style={styles.payButtonText}>31,400원 결제하기</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 0,
    padding: 8,
    zIndex: 10,
  },
  titleWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontFamily: 'Paperlogy-SemiBold',
  },
  sectionTitle: { fontSize: 22, fontFamily: 'Paperlogy-SemiBold', marginBottom: 20,marginTop:52 },
  infoBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 24,
    marginBottom: 14,
    borderWidth: 1.4,
    borderColor: '#D9D9D9'
},
  subTitle: {
    fontSize: 18,
    fontFamily: 'Paperlogy-SemiBold',
    marginBottom: 6,
  },

  PaymentsubTitle: {
    fontSize: 20,
    fontFamily: 'Paperlogy-SemiBold',
    marginBottom: 10,
    
  },
  text: {
    fontSize: 16,
    fontFamily: 'Paperlogy-SemiBold',
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 14,
    marginTop:10,
    fontFamily: 'Paperlogy-Regular'
  },
  summaryBox: {
    borderWidth:1,
    borderColor:'#D9D9D9',
    borderRadius: 10,
    padding: 16,
    marginBottom: 14,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  label: {
    fontSize: 18,
    fontFamily: 'Paperlogy-Regular',
  },
  value: {
    fontSize: 18,
    fontFamily: 'Paperlogy-Regular',
  },
  total: {
    fontSize: 20,
    fontFamily: 'Paperlogy-Bold',
    marginTop: 10,
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  radioCircle: {
    height: 18,
    width: 18,
    borderRadius: 9,
    borderWidth: 3,
    borderColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  selectedRb: {
    height: 18,
    width: 18,
    borderRadius: 9,
    borderWidth: 5,
    borderColor:'#2789FF'
  },
  payButton: {
    marginTop: 24,
    backgroundColor: '#268CFF',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  payButtonText: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Paperlogy-Bold',
  },
});