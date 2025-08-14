// src/screens/restaurantdetail/components/RestaurantImageCarousel.js
import React, { useRef, useState } from 'react';
import { FlatList, Image, StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import ArrowBack from "../../../assets/icons/arrow_back.svg";
import { useNavigation } from "@react-navigation/native";

// =====[ 더미 이미지 설정 ]====================================================
// 더미 이미지만 사용 (백엔드 images prop 무시)
const USE_DUMMY_PHOTOS = true;

// 로컬 더미 사용 여부 (true면 아래 ALL_LOCAL_DUMMIES 사용)
const USE_LOCAL_DUMMY_PHOTOS = true;

// 로컬 더미 이미지 "풀" (원하는 만큼 추가)
// 예: src/assets/images/ham1.jpg, ham2.jpg, ham3.jpg, ham4.jpg ...
const ALL_LOCAL_DUMMIES = [
  require('../../../assets/images/ham1.jpeg'),
  require('../../../assets/images/ham2.jpeg'),
  require('../../../assets/images/ham3.jpeg'),
  require('../../../assets/images/ham4.jpg'),
  // 필요 시 계속 추가
  // require('../../../assets/images/ham5.jpg'),
  // require('../../../assets/images/ham6.jpg'),
];

// (옵션) 원격 더미 (로컬 더미가 없거나 사용하지 않을 때)
const { width } = Dimensions.get('window');
const getDummyRemotePhotos = (count = 4) =>
  Array.from({ length: count }).map((_, i) =>
    // width x 230 크기로 고정
    `https://picsum.photos/seed/rc-${i}/${Math.round(width)}/230`
  );

// placeholder 아이콘 (이미지 로드 실패/없을 때)
const placeholderImage = require('../../../assets/icons/ForkBot.png');
// ===========================================================================

function CarouselImage({ uri }) {
  const [error, setError] = useState(false);

  // 로컬 require(...)는 number 타입
  const isLocal = typeof uri === 'number';

  if (!uri || error) {
    return (
      <View style={styles.slideImage}>
        <Image
          source={placeholderImage}
          style={styles.placeholderIcon}
          resizeMode="contain"
        />
      </View>
    );
  }

  if (isLocal) {
    return <Image source={uri} style={styles.slideImage} resizeMode="cover" />;
  }

  return (
    <Image
      source={{ uri }}
      style={styles.slideImage}
      resizeMode="cover"
      onError={() => setError(true)}
    />
  );
}

export default function RestaurantImageCarousel({ images = [] }) {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);

  // 백엔드 images는 완전히 무시하고 더미로 대체
  let imageData = [];
  if (USE_DUMMY_PHOTOS && USE_LOCAL_DUMMY_PHOTOS && ALL_LOCAL_DUMMIES.length > 0) {
    // 로컬 더미가 4장 미만이면 반복해서 채움
    const need = 4;
    const n = ALL_LOCAL_DUMMIES.length;
    imageData = Array.from({ length: need }).map((_, i) => ALL_LOCAL_DUMMIES[i % n]);
  } else if (USE_DUMMY_PHOTOS) {
    imageData = getDummyRemotePhotos(4);
  } else {
    // (비사용) 더미 끄고 백엔드 이미지 사용하고 싶을 때
    imageData = images.length > 0 ? images : [null];
  }

  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
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
          <View
            key={index}
            style={[styles.dot, currentIndex === index && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    position: 'relative',
    backgroundColor: '#fff',
  },
  slideImage: {
    width: width,
    height: 230,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  indicatorOverlay: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 2,
  },
  activeDot: {
    backgroundColor: '#FFF8F8',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 16,
    zIndex: 10,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 20,
    padding: 6,
  },
  placeholderIcon: {
    width: 60,
    height: 60,
    alignSelf: 'center',
    tintColor: '#ccc',
  },
});
