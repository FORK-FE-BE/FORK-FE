import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AddressManageScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>위치정보 페이지</Text>
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