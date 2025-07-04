import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import Polygon from '../../../assets/icons/Polygon 2.svg';
import Bell from '../../../assets/icons/Bell.svg';

const Component = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addressContainer}>
        <Text style={styles.text}>포크구 포크로 111</Text>
        <Polygon style={styles.Polygon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Bell style={styles.Bell} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: 'row', // 텍스트와 아이콘을 가로로 배치
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addressContainer: {
    flexDirection: 'row', // 텍스트와 아이콘을 가로로 배치
    alignItems: 'center',

  },
  text: {
    marginLeft: 25,
    width: 130,
    fontSize: 16,
    fontFamily: "Paperlogy-Medium",
    color: "#000",
    textAlign: "left",
  },
  Polygon: {
    width: 17,
    height: 10,
    marginLeft: 5,
  },
  Bell: {
    width: 24,
    height: 24,
    marginRight: 25,
  }

});

export default Component;
