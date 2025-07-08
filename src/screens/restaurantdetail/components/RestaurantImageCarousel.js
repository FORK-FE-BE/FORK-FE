// src/screens/restaurantdetail/components/RestaurantImageCarousel.js
import React, { useRef, useState } from 'react';
import { FlatList, Image, StyleSheet, View, Dimensions } from 'react-native';

const slides = [
  { id: '1', uri: require('../../../data/dummyImages/image1.jpg') },
  { id: '2', uri: require('../../../data/dummyImages/image2.jpg') },
  { id: '3', uri: require('../../../data/dummyImages/image3.jpg') },
  { id: '4', uri: require('../../../data/dummyImages/image4.jpg') },
  { id: '5', uri: require('../../../data/dummyImages/image5.jpg') },
];

const { width } = Dimensions.get('window');

export default function RestaurantImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
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
        data={slides}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Image source={item.uri} style={styles.slideImage} />
        )}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
      />
      <View style={styles.indicatorOverlay}>
        {slides.map((_, index) => (
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
    backgroundColor:'#fff'
  },
  slideImage: {
    width: width,
    height: 241,
    resizeMode: 'cover',
   
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
});