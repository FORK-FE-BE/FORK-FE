import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function KbotSettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>나의 크봇 설정</Text>
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