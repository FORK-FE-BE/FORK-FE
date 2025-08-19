// src/screens/restaurantdetail/components/RestaurantImageCarousel.js
import React, { useRef, useState } from 'react';
import { FlatList, Image, StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import ArrowBack from "../../../assets/icons/arrow_back.svg";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get('window');

// =====[ 더미 이미지 설정 ]====================================================
const USE_DUMMY_PHOTOS = true;          // 백엔드 없을 때만 더미 사용
const USE_LOCAL_DUMMY_PHOTOS = true;    // 로컬 더미 우선

const ALL_LOCAL_DUMMIES = [
  require('../../../assets/images/ham1.jpeg'),
  require('../../../assets/images/ham2.jpeg'),
  require('../../../assets/images/ham3.jpeg'),
  require('../../../assets/images/ham4.jpg'),
];

const getDummyRemotePhotos = (count = 4) =>
  Array.from({ length: count }).map((_, i) =>
    `https://picsum.photos/seed/rc-${i}/${Math.round(width)}/230`
  );

const placeholderImage = require('../../../assets/icons/ForkBot.png');
// ===========================================================================

function CarouselImage({ uri }) {
  const [error, setError] = useState(false);
  const isLocal = typeof uri === 'number';

  if (!uri || error) {
    return (
      <View style={styles.slideImage}>
        <Image source={placeholderImage} style={styles.placeholderIcon} resizeMode="contain" />
      </View>
    );
  }

  return isLocal
    ? <Image source={uri} style={styles.slideImage} resizeMode="cover" />
    : <Image source={{ uri }} style={styles.slideImage} resizeMode="cover" onError={() => setError(true)} />;
}

export default function RestaurantImageCarousel({ images = [] }) {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);

  // 1) 백엔드 이미지가 있으면 그걸 사용
  const hasBackend = Array.isArray(images) && images.filter(Boolean).length > 0;

  let imageData = [];
  if (hasBackend) {
    // 백엔드 URL 배열 (storePictureUrl)
    imageData = images.filter(Boolean);
  } else if (USE_DUMMY_PHOTOS && USE_LOCAL_DUMMY_PHOTOS && ALL_LOCAL_DUMMIES.length > 0) {
    // 2) 로컬 더미 (부족하면 반복)
    const need = 4;
    const n = ALL_LOCAL_DUMMIES.length;
    imageData = Array.from({ length: need }).map((_, i) => ALL_LOCAL_DUMMIES[i % n]);
  } else if (USE_DUMMY_PHOTOS) {
    // 3) 원격 더미
    imageData = getDummyRemotePhotos(4);
  } else {
    // 4) 아무 것도 없으면 placeholder가 나오도록 null 채움
    imageData = [null, null, null, null];
  }

  // 최대 4장으로 정규화(과하면 자르고, 부족하면 null로 채워 인디케이터 개수 맞춤)
  if (imageData.length < 4) {
    imageData = [...imageData, ...Array(4 - imageData.length).fill(null)];
  } else if (imageData.length > 4) {
    imageData = imageData.slice(0, 4);
  }

  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0 && viewableItems[0].index != null) {
      setCurrentIndex(viewableItems[0].index);
    }
  });
  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <View style={styles.carouselContainer}>
      <FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={imageData}
        keyExtractor={(item, index) => `${typeof item === 'number' ? 'local' : item}-${index}`}
        renderItem={({ item }) => <CarouselImage uri={item} />}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
      />

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <ArrowBack width={24} height={24} />
      </TouchableOpacity>

      <View style={styles.indicatorOverlay}>
        {imageData.map((_, index) => (
          <View key={index} style={[styles.dot, currentIndex === index && styles.activeDot]} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  carouselContainer: { position: 'relative', backgroundColor: '#fff' },
  slideImage: { width, height: 230, resizeMode: 'cover', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' },
  indicatorOverlay: { position: 'absolute', bottom: 10, left: 0, right: 0, flexDirection: 'row', justifyContent: 'center' },
  dot: { width: 4, height: 4, borderRadius: 4, backgroundColor: '#ccc', marginHorizontal: 2 },
  activeDot: { backgroundColor: '#FFF8F8' },
  backButton: { position: 'absolute', top: 20, left: 16, zIndex: 10, backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 20, padding: 6 },
  placeholderIcon: { width: 60, height: 60, alignSelf: 'center', tintColor: '#ccc' },
});
