import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import Polygon from '../../../assets/icons/Polygon 2.svg';
import Bell from '../../../assets/icons/Bell.svg';
import { useNavigation } from "@react-navigation/native";
import { useAddress } from "../../../contexts/AddressContext";

export default function HeaderBar() {
  const navigation = useNavigation();
  const { selectedAddress } = useAddress();

  const hasLabel = selectedAddress?.label?.trim(); // ← 공백도 걸러냄

  const labelToShow = hasLabel
    ? selectedAddress.label
    : selectedAddress
      ? `${selectedAddress.province} ${selectedAddress.city} ${selectedAddress.roadName} ${selectedAddress.buildingNumber}`
      : '주소 선택'; // selectedAddress 자체도 없을 경우 fallback

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Address')}>
        <View style={styles.addressRow}>
          <Text style={styles.addressText}>{labelToShow}</Text>
          <Image
            source={require('../../../assets/icons/polygon.png')}
            style={styles.addressIcon}
          />
        </View>
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
    paddingHorizontal: 16
  },
  addressContainer: {
    flexDirection: 'row', // 텍스트와 아이콘을 가로로 배치
    alignItems: 'center',

  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 25,
    fontSize: 16,
    fontFamily: "Paperlogy-SemiBold",
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
  },
  addressText: {
    fontSize: 16,
    fontFamily: "Paperlogy-Medium",
  },
  addressIcon: {
    width: 14,
    height: 8,
    marginLeft: 10
  },
});

