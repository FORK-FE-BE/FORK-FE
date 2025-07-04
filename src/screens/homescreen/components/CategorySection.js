// src/components/MiddleSection.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';


const CategoryItem = ({ label, icon }) => {
  const isComponent = typeof icon === 'function'; // 대문자 Icon 컴포넌트
  return (
    <TouchableOpacity style={styles.categoryItem} activeOpacity={0.7}>
      {isComponent ? (
        React.createElement(icon)
      ) : (
        <Image source={icon} style={styles.iconImage} />
      )}
      <Text style={styles.categoryLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

// MiddleSection 컴포넌트
export default function CategorySection() {
  const categories = [
    { key: '1', label: '중식', icon: require('../../../assets/icons/category1.png') },
    { key: '2', label: '디저트', icon: require('../../../assets/icons/category2.png') },
    { key: '3', label: '치킨', icon: require('../../../assets/icons/category3.png') },
    { key: '4', label: '햄버거', icon: require('../../../assets/icons/category4.png') },
    { key: '5', label: '한식', icon: require('../../../assets/icons/category5.png') },
    { key: '6', label: '분식', icon: require('../../../assets/icons/category6.png') },
    { key: '7', label: '일식', icon: require('../../../assets/icons/category7.png') },
    { key: '8', label: '피자', icon: require('../../../assets/icons/category8.png') },
    { key: '9', label: '찌개', icon: require('../../../assets/icons/category9.png') },
    { key: '10', label: '1인분', icon: require('../../../assets/icons/category10.png') },
  ];

  return (
    <View style={styles.container}>
      {/* 카테고리 그리드 */}
      <FlatList
        data={categories}
        numColumns={5} // 한 줄에 4개씩 표시
        keyExtractor={item => item.key}
        contentContainerStyle={styles.categoryList}
        renderItem={({ item }) => (
          <CategoryItem label={item.label} icon={item.icon} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: '#fff',
  },

  categoryList: {
    paddingHorizontal: 16,
    paddingBottom: 20,
    marginTop: 46,
  },
  categoryItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flexBasis: '20%', // 5열
    marginBottom: 16,
  },
  categoryLabel: {
    marginTop: 8,
    fontSize: 13,
    color: '#222',
    textAlign: 'center',
    fontFamily: "Paperlogy-Regular",
  },
  iconImage: {
    width: 54,  // 이미지 너비
    height: 54, // 이미지 높이
    resizeMode: 'contain', // 비율 유지하며 크기 조정
    borderRadius: 100, // 둥근 모서리
  },




});
