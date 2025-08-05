import React, { useState, useEffect } from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../../contexts/UserContext';
import axios from 'axios';
import HeaderBar from '../../components/common/HeaderBar';

export default function AddressManageScreen() {
  const navigation = useNavigation();
  const { user } = useUser();
  const userId = user?.userId;

  const [addressList, setAddressList] = useState([]);

  const fetchAddresses = async () => {
    if (!userId) return;

    try {
      const response = await axios.get(`http://43.202.234.190:8080/api/user/${userId}/profile/address`);
      const sorted = [...response.data].sort((a, b) => b.isDefault - a.isDefault);
      setAddressList(sorted);
    } catch (error) {
      console.error('주소 조회 실패:', error);
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, [userId]);

  const handleEdit = (address) => {
    navigation.navigate('EditAddress', { address });
  };

  const handleDelete = (addressId) => {
    Alert.alert(
      '주소 삭제',
      '정말로 이 주소를 삭제하시겠습니까?',
      [
        { text: '닫기', style: 'cancel' },
        {
          text: '삭제하기',
          style: 'destructive',
          onPress: async () => {
            try {
              await axios.delete(
                `http://43.202.234.190:8080/api/user/${userId}/profile/address/${addressId}`
              );
              Alert.alert('삭제되었습니다.');
              fetchAddresses(); // 🔄 목록 갱신
            } catch (error) {
              console.error('주소 삭제 실패:', error);
              Alert.alert('삭제 실패', '서버와의 연결에 문제가 발생했습니다.');
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <HeaderBar title="주소 관리" />

      {/* 주소 리스트 */}
      <ScrollView
        style={styles.addressList}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {addressList.map((addr, index) => (
          <View key={addr.id} style={styles.addressCard}>
            <View style={styles.row}>
              <Image
                source={
                  addr.isDefault === 1
                    ? require('../../assets/icons/location_on.png')
                    : require('../../assets/icons/location_off.png')
                }
                style={styles.locationIcon}
              />

              <View style={{ flex: 1 }}>
                <Text style={styles.addressTitle}>
                  {addr.label}
                </Text>
                <Text style={styles.addressSub}>
                  {`${addr.province} ${addr.city} ${addr.roadName} ${addr.buildingNumber} ${addr.detail}`}
                </Text>

                {/* 수정/삭제 버튼 */}
                <View style={styles.buttonRow}>
                  <TouchableOpacity
                    style={styles.outlineButton}
                    onPress={() => handleEdit(addr)} // 여기 추가
                  >
                    <Text style={styles.outlineButtonText}>수정</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.outlineButton}
                    onPress={() => handleDelete(addr.id)} // 연결
                  >
                    <Text style={styles.outlineButtonText}>삭제</Text>
                  </TouchableOpacity>

                </View>
              </View>
            </View>

            {index !== addressList.length - 1 && <View style={styles.divider} />}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', flex: 1 },
  title: { fontSize: 20, fontFamily: 'Paperlogy-Medium', color: '#000000' },
  addressList: { gap: 0 },
  addressCard: { gap: 0, paddingVertical: 10 },
  row: { flexDirection: 'row', gap: 12, paddingHorizontal: 16 },
  locationIcon: { width: 24, height: 24, marginTop: 5 },
  addressTitle: { fontSize: 16, fontFamily: 'Paperlogy-SemiBold', color: '#000', marginBottom: 4 },
  addressSub: { fontSize: 14, fontFamily: 'Paperlogy-Medium', color: '#000', marginBottom: 10 },
  addressNote: { fontSize: 12, fontFamily: 'Paperlogy-Medium', color: '#888', marginBottom: 8 },
  buttonRow: { flexDirection: 'row', gap: 12 },
  outlineButton: {
    borderWidth: 1, borderColor: '#D9D9D9', paddingHorizontal: 16, paddingVertical: 4, borderRadius: 20,
  },
  outlineButtonText: { fontSize: 14, color: '#000', fontFamily: 'Paperlogy-Medium' },
  divider: { borderBottomWidth: 1, borderBottomColor: '#D9D9D9', marginTop: 20 },
});
