import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAddress } from '../../contexts/AddressContext';
import HeaderBar from '../../components/common/HeaderBar';

// 이미지 import (이미지 파일은 assets/icons/ 폴더 기준)
// const homeIcon = require('../../assets/icons/home.png');
// const locationIcon = require('../../assets/icons/location_off.png');
// const checkIcon = require('../../assets/icons/check.png');

const dummyAddresses = [
    {
        id: 1,
        label: '주소1',
        main: '주소 1 + 세부 주소 123동 123호',
        detail: '문 앞에 두고 벨 눌러주세요',
        isSelected: true,
    },
    {
        id: 2,
        label: '주소2',
        main: '주소 2 + 세부 주소 456동 789호',
        detail: '경비실에 맡겨주세요',
        isSelected: false,
    },
    {
        id: 3,
        label: '주소3',
        main: '주소 3 + 세부 주소 888동 999호',
        detail: '문 앞에 두세요',
        isSelected: false,
    },
];

export default function AddressScreen() {
    const navigation = useNavigation();
    const { selectedAddress, setSelectedAddress } = useAddress();

    const handleSelect = (address) => {
        setSelectedAddress(address.main);
        navigation.goBack();
    };

    // 현재 주소를 기준으로 목록 정렬
    const sortedAddresses = [...dummyAddresses].sort((a, b) => {
        if (a.main === selectedAddress) return -1;
        if (b.main === selectedAddress) return 1;
        return 0;
    });

    const renderItem = ({ item }) => {
        const isCurrent = item.main === selectedAddress;

        return (
            <TouchableOpacity style={styles.card} onPress={() => handleSelect(item)}>
                <View style={styles.row}>
                    <Image
                        source={
                            isCurrent
                                ? require('../../assets/icons/location_on.png')  // 선택된 주소는 파란색 핀
                                : require('../../assets/icons/location_off.png') // 나머지는 회색 핀
                        }
                        style={styles.icon}
                    />
                    <View style={{ flex: 1 }}>
                        <View style={styles.titleRow}>
                            <Text style={styles.label}>{item.label}</Text>
                            {isCurrent && (
                                <View style={styles.badge}>
                                    <Text style={styles.badgeText}>현재 설정된 주소</Text>
                                </View>
                            )}
                        </View>
                        <Text style={styles.main}>{item.main}</Text>
                        <Text style={styles.detail}>{item.detail}</Text>
                    </View>
                    {isCurrent && (
                        <Image
                            source={require('../../assets/icons/check.png')}
                            style={styles.checkIcon}
                        />
                    )}
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <HeaderBar title="주소 설정" />
            <View style={styles.topSection}>
                {/* 검색창 */}
                <TouchableOpacity style={styles.searchBox} onPress={() => navigation.navigate('AddressSearch')}>
                    <Image
                        source={require('../../assets/icons/search.png')}
                        style={styles.searchIcon}
                    />
                    <Text style={styles.searchPlaceholder}>지번, 도로명, 건물명으로 검색</Text>
                </TouchableOpacity>

                {/* 현재 위치로 찾기 버튼 */}
                <TouchableOpacity style={styles.locationButton}>
                    <Text style={styles.locationButtonText}>현재 위치로 찾기</Text>
                </TouchableOpacity>

                {/* 주소 추가 버튼 */}
                <TouchableOpacity style={styles.addAddressRow} onPress={() => navigation.navigate('AddressSearch')}>
                    <Image
                        source={require('../../assets/icons/home.png')}
                        style={styles.addIcon}
                    />
                    <Text style={styles.addText}>주소 추가</Text>
                </TouchableOpacity>

                {/* 회색 선 */}
                <View style={styles.divider} />
            </View>

            <FlatList
                data={sortedAddresses}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //backgroundColor: 'black'
    },
    card: {
        paddingHorizontal: 16,
        paddingVertical: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 20,
        marginTop: 10,
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        fontSize: 18,
        fontFamily: 'Paperlogy-SemiBold',
        marginRight: 8,
        color: '#202020'
    },
    badge: {
        backgroundColor: '#EDF7FF',
        borderRadius: 4,
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    badgeText: {
        fontSize: 11,
        color: '#007AFF',
        fontFamily: 'Paperlogy-Medium',
    },
    main: {
        fontSize: 14,
        fontFamily: 'Paperlogy-Medium',
        marginTop: 4,
        color: '#202020'
    },
    detail: {
        fontSize: 13,
        fontFamily: 'Paperlogy-Medium',
        color: '#8C8D8F',
        marginTop: 10,
    },
    checkIcon: {
        width: 30,
        height: 30,
        marginLeft: 8,
        marginTop: 10,
    },
    separator: {
        height: 1,
        backgroundColor: '#eee',
        marginHorizontal: 20,
    },

    topSection: {
        paddingHorizontal: 16,
        paddingTop: 12,
        paddingBottom: 10,
        backgroundColor: '#fff',
    },

    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F4F5F7',
        borderRadius: 5,
        paddingVertical: 16,
        paddingHorizontal: 12,
        marginBottom: 10,
    },

    searchIcon: {
        width: 24,
        height: 24,
        marginRight: 8,
    },

    searchPlaceholder: {
        fontFamily: 'Paperlogy-Medium',
        color: '#7F8083',
        fontSize: 16,
    },

    locationButton: {
        borderWidth: 1,
        borderColor: '#DEDFDE',
        borderRadius: 5,
        paddingVertical: 12,
        alignItems: 'center',
        marginBottom: 30,
    },

    locationButtonText: {
        fontSize: 16,
        fontFamily: 'Paperlogy-Medium',
        color: '#4C4C4C',
    },

    divider: {
        height: 1,
        backgroundColor: '#eee',
        marginBottom: 0,
    },

    addAddressRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },

    addIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },

    addText: {
        fontSize: 16,
        fontFamily: 'Paperlogy-SemiBold',
        color: '#202020',
    },

});
