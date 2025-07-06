import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AddressManageScreen() {
  const navigation = useNavigation();

  const dummyAddresses = [
    {
      title: '서울특별시 마포구 와우산로',
      sub: '홍익대학교 제1기숙사 101호',
      note: '문 앞에 두고 벨 눌러주세요',
    },
    {
      title: '서울시 종로구 세종대로 175',
      sub: 'KT 광화문빌딩',
      note: '경비실 맡겨주세요',
    },
    {
      title: '경기도 성남시 분당구 판교로',
      sub: '네이버 그린팩토리 4층',
      note: '1층 로비에 맡겨주세요',
    },
  ];

  return (
    <View style={styles.container}>
      {/* 상단 타이틀 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/images/arrow_back.png')}
            style={styles.arrow_back}
          />
        </TouchableOpacity>
        <Text style={styles.title}>주소관리</Text>
        {/* 오른쪽 빈 공간 확보용 */}
        <View style={styles.headerSide} />
      </View>

      <ScrollView
        style={styles.addressList}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {dummyAddresses.map((addr, index) => (
          <View key={index} style={styles.addressCard}>
            <View style={styles.row}>
              <Image
                source={
                  index === 0
                    ? require('../assets/images/Mappin_selected.png')
                    : require('../assets/images/Mappin.png')
                }
                style={styles.locationIcon}
              />

              <View style={{ flex: 1 }}>
                <Text style={styles.addressTitle}>{addr.title}</Text>
                <Text style={styles.addressSub}>{addr.sub}</Text>
                <Text style={styles.addressNote}>{addr.note}</Text>

                <View style={styles.buttonRow}>
                  <TouchableOpacity style={styles.outlineButton}>
                    <Text style={styles.outlineButtonText}>수정</Text>
                  </TouchableOpacity>
                  {index !== 0 && (
                    <TouchableOpacity style={styles.outlineButton}>
                      <Text style={styles.outlineButtonText}>삭제</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>

            {index !== dummyAddresses.length - 1 && <View style={styles.divider} />}
          </View>
        ))}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  arrow_back: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Paperlogy-Medium',
    color: '#000000',
  },
  headerSide: {
    width: 30, // 왼쪽 아이콘과 동일한 너비
    alignItems: 'center',
  },

  addressList: {
    gap: 30,
  },
  addressCard: {
    gap: 10,
    paddingVertical: 10, // 카드 상하 간격
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  locationIcon: {
    width: 24,
    height: 24,
    marginTop: 5,
  },
  addressTitle: {
    fontSize: 16,
    fontFamily: 'Paperlogy-SemiBold',
    color: '#000',
    marginBottom: 4,
  },
  addressSub: {
    fontSize: 14,
    fontFamily: 'Paperlogy-Medium',
    color: '#000',
    marginBottom: 4,
  },
  addressNote: {
    fontSize: 12,
    fontFamily: 'Paperlogy-Medium',
    color: '#888',
    marginBottom: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
  },
  outlineButton: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 20,
  },
  outlineButtonText: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Paperlogy-Medium',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    marginTop: 20,
  },

});