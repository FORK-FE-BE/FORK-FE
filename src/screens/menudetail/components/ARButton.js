
import React from 'react';
import { TouchableOpacity, Text, Linking, StyleSheet } from 'react-native';

export default function ARButton({ glbFileName }) {
  const handlePress = () => {
    const url = `https://ye-eun-min201.github.io/usdz-hosting/ar.html?model=${glbFileName}`;


    Linking.openURL(url);
  };

  // const handlePress = () => {
  //   // props 제거하고 파일명 직접 지정
  //   const url = `https://ye-eun-min201.github.io/usdz-hosting/ar.html?model=hambuger02_1.glb`;
  //   Linking.openURL(url);
  // };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.text}>AR 보기</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
        backgroundColor: '#EDF4FF',
        borderRadius: 10,
        paddingVertical: 14,
        alignItems: 'center',
        marginBottom: 24,
        borderColor: '#006DF0',
        borderWidth:1.2,
  },
  text: {
    color: '#006DF0',
    fontSize: 18,
    fontFamily: 'Paperlogy-Bold',
  },
});
