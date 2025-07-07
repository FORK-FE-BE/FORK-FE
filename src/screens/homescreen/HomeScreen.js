// 
// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍜 FORK 홈 </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // 배경색 예시
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // 텍스트 색상 예시
  },
});
