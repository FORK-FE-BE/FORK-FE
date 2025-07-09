import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

export default function EditProfileScreen() {
  const [profileImage, setProfileImage] = useState(null);
  const navigation = useNavigation();

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('권한 필요', '사진 접근 권한이 필요합니다.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const handleLogout = () => {
    Alert.alert(
      '로그아웃',
      '정말 로그아웃 하시겠습니까?',
      [
        { text: '취소', style: 'cancel' },
        {
          text: '확인',
          onPress: () => {
            // 여기에 로그아웃 처리 로직 삽입
            console.log('로그아웃 처리됨');
            // navigation.navigate('Login'); // 필요시 로그인 화면으로
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      {/* 상단 타이틀 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/images/arrow_back.png')}
            style={styles.arrow_back}
          />
        </TouchableOpacity>
        <Text style={styles.title}>내 정보 수정</Text>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.logout}>로그아웃</Text>
        </TouchableOpacity>
      </View>

      {/* 프로필 사진 */}
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={pickImage}>
          <Image
            source={
              profileImage
                ? { uri: profileImage }
                : require('../../dummyData/dummyImages/defaultProfile.png')
            }
            style={styles.profileImage}
          />
          <View style={styles.plusIcon}>
            <Image
              source={require('../../assets/images/plusIcon.png')}
              style={styles.plusIconImage}
            />
          </View>
        </TouchableOpacity>
      </View>

      {/* 정보 수정 영역 */}
      <View style={styles.infoBox}>
        <InfoRow label="닉네임" value="명상하는포크" />
        <InfoRow label="이름" value="hamjji PARK" />
        <InfoRow label="대표 이메일" value="iamstillhungry@hmastet.ac.kr" />
        <InfoRow label="비밀번호 변경" isNavigable />
        <InfoRow label="전화번호 변경" isNavigable />
      </View>
    </View>
  );
}

const InfoRow = ({ label, value, isNavigable }) => (
  <View style={styles.row}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value || (isNavigable ? '>' : '')}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 40,
    paddingHorizontal: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  logout: {
    fontSize: 14,
    fontFamily: 'Paperlogy-Medium',
    color: '#000000',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 45,
    marginTop: 30,
  },
  plusIcon: {
    position: 'absolute',
    bottom: 0,
    right: -2,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 2,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusIconImage: {
    width: 14,
    height: 14,
  },
  infoBox: {
    marginTop: 40,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  label: {
    color: '#000',
    fontSize: 14,
    fontFamily: 'Paperlogy-Medium',
  },
  value: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Paperlogy-Regular',
  },
});
