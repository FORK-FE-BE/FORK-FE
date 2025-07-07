import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import SearchIcon from '../../../assets/icons/search.svg';
import { TouchableOpacity } from 'react-native';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="음식이나 가게를 검색해보세요"
        placeholderTextColor="#888"
      />
      <TouchableOpacity>
        <SearchIcon style={styles.searchIcon} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginTop: 19,
    width: '90%',
    height: 45,
    backgroundColor: '#FFFFFF',
    borderRadius: 1000,
    borderWidth: 1,
    borderColor: '#006DF0',
    alignItems: 'center', // 아이콘을 세로 중앙 정렬
    flexDirection: 'row',  // 텍스트 입력과 아이콘을 가로로 배치
    paddingHorizontal: 15, // 아이콘과 텍스트 입력 사이에 여백 추가    
  },
  input: {
    fontFamily: 'Paperlogy-Regular',
    flex: 1,
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },

});