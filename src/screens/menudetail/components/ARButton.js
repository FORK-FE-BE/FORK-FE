
import React from 'react';
import { TouchableOpacity, Text, Linking, StyleSheet } from 'react-native';

export default function ARButton({ glbFileName }) {
  const handlePress = () => {
    const url = `https://ye-eun-min201.github.io/usdz-hosting/ar.html?model=${glbFileName}`;

    
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.text}>AR 보기</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007aff',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
