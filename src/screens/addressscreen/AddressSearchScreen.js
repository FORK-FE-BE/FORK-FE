import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet,
    FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HeaderBar from '../../components/common/HeaderBar';
import axios from 'axios';

export default function AddressSearchScreen() {
    const navigation = useNavigation();
    const [keyword, setKeyword] = useState('');
    const [results, setResults] = useState([]);
    const JUSO_API_KEY = 'devU01TX0FVVEgyMDI1MDcyOTE1MzQ0MDExNTk5OTk=';

    const searchAddress = async () => {
        try {
            const response = await axios.get('https://business.juso.go.kr/addrlink/addrLinkApi.do', {
                params: {
                    confmKey: JUSO_API_KEY,
                    currentPage: 1,
                    countPerPage: 5,
                    keyword,
                    resultType: 'json',
                },
            });
            const jusoList = response.data?.results?.juso || [];
            setResults(jusoList);
        } catch (error) {
            console.error('주소 검색 오류:', error);
        }
    };

    const renderAddressItem = ({ item }) => (
        <TouchableOpacity
            style={styles.resultItem}
            onPress={() => navigation.navigate('AddressDetail', { selectedAddress: item })}
        >
            <Text style={styles.roadAddr}>{item.roadAddr}</Text>
            <Text style={styles.jibunAddr}>{item.jibunAddr}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <HeaderBar title="주소 검색" />

            <View style={styles.content}>
                <Text style={styles.title}>배달 받을 주소를 검색해주세요</Text>

                <View style={styles.searchBox}>
                    <Image
                        source={require('../../assets/icons/search.png')}
                        style={styles.searchIcon}
                    />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="지번, 도로명, 건물명으로 검색"
                        value={keyword}
                        onChangeText={setKeyword}
                        onSubmitEditing={searchAddress}
                        returnKeyType="search"
                    />
                </View>

                {/* 검색 결과 리스트 */}
                <FlatList
                    data={results}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderAddressItem}
                    contentContainerStyle={styles.resultList}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        paddingHorizontal: 16,
        paddingTop: 10,
    },
    title: {
        fontSize: 20,
        fontFamily: 'Paperlogy-SemiBold',
        color: '#202020',
        marginBottom: 16,
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F4F5F7',
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginBottom: 10,
    },
    searchIcon: {
        width: 24,
        height: 24,
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#202020',
        fontFamily: 'Paperlogy-Medium',
    },
    resultList: {
        paddingTop: 8,
    },
    resultItem: {
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingVertical: 12,
    },
    roadAddr: {
        fontSize: 16,
        fontFamily: 'Paperlogy-Medium',
        color: '#333',
    },
    jibunAddr: {
        fontSize: 14,
        fontFamily: 'Paperlogy-Regular',
        color: '#888',
        marginTop: 2,
    },
});
