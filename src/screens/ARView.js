import React from 'react';
import { requireNativeComponent, Platform, View, Text } from 'react-native';

const ARNativeView = Platform.OS === 'ios'
  ? requireNativeComponent('ARViewManager')
  : () => <View><Text>ARKit은 iOS에서만 지원됩니다</Text></View>;

export default function ARView() {
  return <ARNativeView style={{ flex: 1 }} />;
}
