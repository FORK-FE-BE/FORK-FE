// src/screens/restaurantdetail/components/RestaurantInfoSection.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

export default function RestaurantInfoSection({ restaurantInfo }) {

  if (!restaurantInfo) {
    return null;
  }

  // console.log("🏠 fullRoadAddress:", restaurantInfo.fullRoadAddress);
  // console.log("📍 address:", restaurantInfo.address);
  // console.log("📍 조합된 주소:", `${restaurantInfo.address?.city} ${restaurantInfo.address?.roadName} ${restaurantInfo.address?.buildingNumber}`);

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
        <Text style={styles.ratingText}>{restaurantInfo.rating?.toFixed(2)} ({restaurantInfo.reviewCount || '-'})</Text>
      </View>

      {restaurantInfo.introText && (
        <Text style={styles.description}>
          "{restaurantInfo.introText}"
        </Text>
      )}

      <View style={styles.deliveryCard}>
        <Text style={styles.deliveryTitle}>배달 정보</Text>
        <View style={styles.divider} />

        <View style={styles.deliveryRow}>
          <Text style={styles.label}>최소 주문</Text>
          <Text style={styles.value}>
            {restaurantInfo.minDeliveryPrice || '-'}원
          </Text>
        </View>

        <View style={styles.deliveryRow}>
          <Text style={styles.label}>조리 시간</Text>
          <Text style={styles.value}>
            {(restaurantInfo.minDeliveryTime && restaurantInfo.maxDeliveryTime)
              ? `${restaurantInfo.minDeliveryTime}~${restaurantInfo.maxDeliveryTime} 분`
              : '-'}
          </Text>
        </View>

        <View style={styles.deliveryRow}>
          <Text style={styles.label}>위치 안내</Text>
          <Text style={styles.value}>
            {`${restaurantInfo.province} ${restaurantInfo.city} ${restaurantInfo.roadName} ${restaurantInfo.buildingNumber}`}
          </Text>
        </View>


        <View style={styles.deliveryRow}>
          <Text style={styles.label}>결제 방법</Text>
          <Text style={styles.value}>{restaurantInfo.paymentMethod || '-'}</Text>
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
    paddingTop: 20,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  restaurantName: {
    fontSize: 22,
    fontFamily: 'Paperlogy-SemiBold',
  },
  originInfoButton: {
    backgroundColor: '#eee',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 30,
  },
  originInfoText: {
    fontSize: 14,
    color: '#5B5B5B',
    fontFamily: 'Paperlogy-Regular',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 0,
  },
  star: {
    fontSize: 20,
    color: '#FFD700',
    marginRight: 5,
  },
  ratingText: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Paperlogy-SemiBold',
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
    fontFamily: 'Paperlogy-Regular',
  },
  deliveryCard: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  deliveryTitle: {
    fontSize: 16,
    fontFamily: 'Paperlogy-SemiBold',
    textAlign: 'center',
    marginBottom: 12,
    marginTop: 12,
  },
  divider: {
    height: 1,
    width: 333,
    backgroundColor: '#D9D9D9',
    marginBottom: 16,
  },
  deliveryRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 25,
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Paperlogy-Medium',
    color: '#222',
    marginStart: 30
  },
  value: {
    fontSize: 14,
    fontFamily: 'Paperlogy-Regular',
    color: '#222',
    //backgroundColor: '#dddddd',
    width: 200
  },
  rewardBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#EDF4FF',
    borderRadius: 10,
    paddingHorizontal: 18,
    borderWidth: 1.5,
    borderColor: '#59F',

  },
  rewardText: {
    flex: 1,
    fontSize: 14,
    color: '#000000',
    fontFamily: 'Paperlogy-Regular',
    marginVertical: 16,
  },
  boldBlue: {
    color: '#006DF0',
    fontFamily: 'Paperlogy-Bold',
  },
  separator: {
    borderLeftWidth: 1,
    borderColor: '#CACACA',
    height: 45,
    marginHorizontal: 12,
    borderStyle: 'dashed',
  },

  iconContainer: {
    backgroundColor: '#0076FF',
    borderRadius: 999,
    padding: 10,
  },
  icon: {
    width: 18,
    height: 18,
    tintColor: '#fff',
  },
});
