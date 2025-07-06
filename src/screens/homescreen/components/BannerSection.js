import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import FORKIcon from '../../../assets/icons/FORKIcon.svg';
import Image1 from '../../../assets/icons/image1.png';
import { RotateInDownLeft } from 'react-native-reanimated';

export default function BannerSection() {
  return (
    <View style={styles.banner}>
      {/* 텍스트 섹션 */}
      <View style={styles.textContainer}>
        <Text style={styles.bannerTitle}>나만의 크봇 만들어보기</Text>
        <Text style={styles.bannerDesc}>피하고 싶은 음식을 등록해보세요!</Text>
        <TouchableOpacity style={styles.bannerButton}>
          <Text style={styles.bannerButtonText}>크봇 설정하러 가기</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.imageContainer}>
        <Image source={Image1}
          style={[styles.Image1, { transform: [{ rotate: '30deg' }] }]}
          resizeMode="contain" // 이미지 비율 유지, 잘리지 않도록 설정
        />
        <FORKIcon style={styles.FORKIcon} />

      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    flexDirection: 'row', // 수평 레이아웃
    alignItems: 'center', // 세로 중앙 정렬
    borderRadius: 16, // 모서리 둥글게
    marginTop: 28,
    marginLeft: 33,
    marginBottom:25,
  },
  textContainer: {
    flex: 1, // 텍스트 섹션이 아이콘과 버튼을 제외한 공간을 차지
  },
  bannerTitle: {
    fontFamily: 'Paperlogy-SemiBold', // 글꼴
    fontSize: 20, // 글꼴 크기
    color: '#222', // 글자 색
  },
  bannerDesc: {
    fontFamily: 'Paperlogy-Regular',
    fontSize: 13,
    color: '#666',
  },
  imageContainer: {
    marginRight: 30,
    position: 'relative', // 부모 View에 relative 설정
    justifyContent: 'center',
    alignItems: 'center', // 이미지들을 중앙에 정렬
  },
  Image1: {

    position: 'absolute', // 첫 번째 이미지를 절대 위치로 설정
    marginRight: 90,
    marginBottom: 30,
    overflow: "hidden",
    width: '100%', // 아이콘 크기
    height: '140%', // 아이콘 크기
  },
  FORKIcon: {
    width: '100%', // 아이콘 크기
    height: '100%', // 아이콘 크기
  },

  bannerButton: {
    backgroundColor: '#fff', // 버튼 배경색
    borderRadius: 8, 
    paddingHorizontal: 21, // 버튼의 가로 패딩
    paddingVertical:5,
    marginTop: 8, // 버튼과 텍스트 간 간격
    alignSelf: 'flex-start', // 버튼을 왼쪽 정렬
  },
  bannerButtonText: {
    fontFamily: 'Paperlogy-SemiBold', // 글꼴
    color: '#006DF0', // 글자 색 (버튼 색과 일치)

  },
});