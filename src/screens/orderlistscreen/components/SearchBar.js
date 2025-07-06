import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import SearchIcon from '../../../assets/icons/search.svg';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="치킨? 한식? 뭐가 땡겨요?"
        placeholderTextColor="#888"
      />
      <TouchableOpacity>
        <SearchIcon width={24} height={24}/>
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
    backgroundColor: '#F6F6F6', // 연회색 배경
    borderRadius: 1000,
    flexDirection: 'row',          // 입력창 + 아이콘 가로 정렬
    alignItems: 'center',
    paddingHorizontal: 15,  
  },
  input: {
    fontFamily: 'Paperlogy-Regular',
    flex: 1,
    fontSize: 16,
    color: '#000',
    marginLeft: 10,
  },


});