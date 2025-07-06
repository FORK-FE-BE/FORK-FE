import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ReceivedGiftsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>받은 선물 페이지</Text>
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