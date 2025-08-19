import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as WebBrowser from 'expo-web-browser';

// 메뉴 리스트 (하루마다 변경됨)
const menuList = ['햄버거', '피자', '치킨'];

// 메뉴별 이미지 매핑
const menuData = {
  햄버거: [
    require('../../../assets/images/ham1.jpeg'),
    require('../../../assets/images/ham2.jpeg'),
    require('../../../assets/images/ham3.jpeg'),
  ],
  피자: [
    require('../../../assets/images/pizza1.png'),
    require('../../../assets/images/pizza2.png'),
    require('../../../assets/images/pizza3.png'),
  ],
  치킨: [
    require('../../../assets/images/chi1.png'),
    require('../../../assets/images/chi3.png'),
    require('../../../assets/images/chi2.png'),
  ],
};

export default function MiddleSection() {
  const today = new Date();
  const menuName = menuList[today.getDay() % menuList.length]; // 요일에 따라 메뉴 선택
  const images = menuData[menuName] || []; // 해당 메뉴 이미지 가져오기

  return (
    <LinearGradient
      colors={['#C8E5FF', '#FFFFFF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      {/* 오늘의 메뉴 표시 */}
      <View style={styles.pillShape}>
        <Image
          source={require('../../../assets/icons/ForkBot.png')}
          style={styles.pillIcon}
        />
        <Text style={styles.pillText}>
          오늘의 메뉴: <Text style={styles.highlight}>{menuName}</Text>
        </Text>
      </View>

      {/* 메뉴별 이미지 3개 */}
      <View style={styles.imageRow}>
        {images.map((img, idx) => (
          <Image
            key={idx}
            source={img}
            style={[styles.foodImage, idx < images.length - 1 && { marginRight: 4 }]}
          />
        ))}
      </View>

      {/* AR 비교 버튼 */}
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.gradientButtonWrapper}
        onPress={() =>
          WebBrowser.openBrowserAsync(
            `https://ye-eun-min201.github.io/usdz-hosting/ar-viewer.html?menu=${menuName}`
          )
        }
      >
        <LinearGradient
          colors={['#69DDE8', '#0080FF']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientButton}
        >
          <Text style={styles.buttonText}>눌러서 가게별로 AR 비교하기</Text>
        </LinearGradient>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    flexShrink: 0,
    paddingBottom: 0,
  },

  pillShape: {
    height: 40,
    flexDirection: 'row',
    paddingHorizontal: 12,
    borderRadius: 30,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: 16,
    marginLeft: 16,
  },

  pillText: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Paperlogy-Medium',
  },

  pillIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginRight: 6,
  },

  highlight: {
    color: '#006DF0',
  },

  imageRow: {
    flexDirection: 'row',
    marginTop: 15,
    alignSelf: 'center',
  },

  foodImage: {
    width: 105,
    height: 105,
    borderRadius: 10,
    resizeMode: 'cover',
  },

  gradientButtonWrapper: {
    marginTop: 20,
    alignSelf: 'center',
  },

  gradientButton: {
    width: 325,
    height: 50,
    borderRadius: 52,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Paperlogy-SemiBold',
  },
});
