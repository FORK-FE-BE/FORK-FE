import React, { useRef } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import RestaurantImageCarousel from './components/RestaurantImageCarousel';
import RestaurantInfoSection from './components/RestaurantInfoSection';
import RestaurantMenuWithCart from './components/RestaurantMenuWithCart';
import CartFixedBar from './components/CartFixedBar'; 

export default function RestaurantDetail() {
  const scrollRef = useRef();

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={styles.scrollContent}
      >
        <RestaurantImageCarousel />
        <RestaurantInfoSection />
        <RestaurantMenuWithCart scrollRef={scrollRef} />
      </ScrollView>

      <CartFixedBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 120, // 고정 버튼 영역 만큼 여백
  },
});
