// src/screens/restaurantdetail/components/RestaurantInfoSection.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function RestaurantInfoSection({restaurantInfo}) {
  if (!restaurantInfo) {
    return null; // 또는 <View><Text>로딩 중...</Text></View> 등
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.restaurantName}>{restaurantInfo.name}</Text>
        <TouchableOpacity style={styles.originInfoButton}>
          <Text style={styles.originInfoText}>원산지 정보</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.ratingRow}>
        <Text style={styles.star}>★</Text>
        <Text style={styles.ratingText}>{restaurantInfo.rating?.toFixed(2)} ({restaurantInfo.reviewCount})</Text>
      </View>

      <Text style={styles.description}>
        “시간을 삶고, 정성을 식혔다. 팔당냉면.”
      </Text>

      <View style={styles.deliveryCard}>
        <Text style={styles.deliveryTitle}>배달 정보</Text>
        <View style={styles.divider} />
        <View style={styles.deliveryRow}>
          <Text style={styles.label}>최소 주문</Text>
          <Text style={styles.value}>20,000원</Text>
        </View>
        <View style={styles.deliveryRow}>
          <Text style={styles.label}>조리 시간</Text>
          <Text style={styles.value}>7-25 분</Text>
        </View>
        <View style={styles.deliveryRow}>
          <Text style={styles.label}>위치 안내</Text>
          <Text style={styles.value}>평양시 수성구 121길 18</Text>
        </View>
        <View style={styles.deliveryRow}>
          <Text style={styles.label}>결제 방법</Text>
          <Text style={styles.value}>바로 결제</Text>
        </View>
      </View>

      <View style={styles.rewardBox}>
        <Text style={styles.rewardText}>
          AR 리뷰 작성시 최대 <Text style={styles.boldBlue}>5,000</Text> 포인트 적립
        </Text>
        <View style={styles.separator} />
        <View style={styles.iconContainer}>
          <Image
            source={require('../../../assets/icons/image1.png')}
            style={styles.icon}
          />
        </View>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 21,
    paddingHorizontal: 30,
    backgroundColor:'#fff',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  restaurantName: {
    fontSize: 24,
    fontFamily: 'Paperlogy-SemiBold',
  },
  originInfoButton: {
    backgroundColor: '#D9D9D9',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 30,
  },
  originInfoText: {
    fontSize: 14,
    color: '#5B5B5B',
    fontFamily: 'Paperlogy-Medium',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  star: {
    fontSize: 20,
    color: '#FFD700',
    marginRight: 5,
  },
  ratingText: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Paperlogy-Medium',
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
    fontFamily: 'Paperlogy-Light',
  },
  deliveryCard: {
    marginTop: 30,
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  deliveryTitle: {
    fontSize: 20,
    fontFamily: 'Paperlogy-SemiBold',
    textAlign: 'center',
    marginBottom: 12,
    marginTop:12,
  },
  divider: {
    height: 1,
    width:333,
    backgroundColor: '#D9D9D9',
    marginBottom: 16,
  },
  deliveryRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap:25,
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    fontFamily: 'Paperlogy-Medium',
    color: '#222',
    marginStart:23
  },
  value: {
    fontSize: 16,
    fontFamily: 'Paperlogy-Regular',
    color: '#222',
  },
  rewardBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#EDF4FF',
    borderRadius: 14,
    paddingHorizontal: 18,
    borderWidth: 1.5,
    borderColor: '#59F',

},
  rewardText: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Paperlogy-Regular',
    marginVertical:16,
  },
  boldBlue: {
    color: '#006DF0',
    fontFamily: 'Paperlogy-Bold',
  },
  separator: {
    width: 1,
    height: 45,
    backgroundColor: '#CACACA',
    marginHorizontal: 12,
  },
  iconContainer: {
    backgroundColor: '#0076FF',
    borderRadius: 999,
    padding: 10,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
});
