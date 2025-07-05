import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ForkPointScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>포크포인트 페이지</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
});