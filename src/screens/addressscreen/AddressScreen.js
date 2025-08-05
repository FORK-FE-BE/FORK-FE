import React, { useEffect, useState } from 'react';
import {
    View, Text, FlatList, TouchableOpacity, StyleSheet, Image, ActivityIndicator
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useAddress } from '../../contexts/AddressContext';
import HeaderBar from '../../components/common/HeaderBar';
import { useUser } from '../../contexts/UserContext';
import {BASE_URL} from "../../constants";

export default function AddressScreen() {
    const navigation = useNavigation();
    const { selectedAddress, setSelectedAddress } = useAddress();
    const [addresses, setAddresses] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useUser();
    const userId = user?.userId; // 현재 로그인한 사용자 ID

    useEffect(() => {
        const fetchAddresses = async () => {
            if (!userId) {
                console.warn('로그인된 사용자 정보가 없습니다.');
                return;
            }

            try {
                const response = await axios.get(`${BASE_URL}/api/user/${userId}/profile/address`);
                const rawData = response.data;

                const formatted = rawData.map((item) => ({
                    id: item.id,
                    label: item.label,
                    main: `${item.province} ${item.city} ${item.roadName} ${item.buildingNumber}`,
                    detail: item.detail,
                    isSelected: item.isDefault === 1,
                }));

                setAddresses(formatted);

                if (formatted.length === 1) {
                    setSelectedAddress(formatted[0].main);
                }
            } catch (error) {
                console.error('주소 목록 불러오기 오류:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAddresses();
    }, [userId]); // ← userId가 바뀔 때마다 다시 실행되도록



    const handleSelect = async (address) => {
        try {
            await axios.patch(
                `${BASE_URL}/api/user/${userId}/profile/address/${address.id}/default`
            );

            // 주소 전체 객체로 Context에 저장 (label + main 포함)
            setSelectedAddress(address);

            navigation.goBack();
        } catch (error) {
            console.error('기본 주소 설정 실패:', error);
            Alert.alert('기본 주소 설정 실패', '서버와 연결할 수 없습니다.');
        }
    };



    const sortedAddresses = [...addresses].sort((a, b) => {
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
                                ? require('../../assets/icons/location_on.png')
                                : require('../../assets/icons/location_off.png')
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
                <TouchableOpacity style={styles.searchBox} onPress={() => navigation.navigate('AddressSearch')}>
                    <Image
                        source={require('../../assets/icons/search.png')}
                        style={styles.searchIcon}
                    />
                    <Text style={styles.searchPlaceholder}>지번, 도로명, 건물명으로 검색</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity style={styles.locationButton}>
                    <Text style={styles.locationButtonText}>현재 위치로 찾기</Text>
                </TouchableOpacity> */}

                <TouchableOpacity style={styles.addAddressRow} onPress={() => navigation.navigate('AddressSearch')}>
                    <Image
                        source={require('../../assets/icons/home.png')}
                        style={styles.addIcon}
                    />
                    <Text style={styles.addText}>주소 추가</Text>
                </TouchableOpacity>

                <View style={styles.divider} />
            </View>

            {loading ? (
                <ActivityIndicator size="large" color="#007AFF" style={{ marginTop: 50 }} />
            ) : (
                <FlatList
                    data={sortedAddresses}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    card: { paddingHorizontal: 16, paddingVertical: 16 },
    row: { flexDirection: 'row', alignItems: 'flex-start' },
    icon: { width: 24, height: 24, marginRight: 20, marginTop: 10 },
    titleRow: { flexDirection: 'row', alignItems: 'center' },
    label: { fontSize: 18, fontFamily: 'Paperlogy-SemiBold', marginRight: 8, color: '#202020' },
    badge: { backgroundColor: '#EDF7FF', borderRadius: 4, paddingHorizontal: 8, paddingVertical: 4 },
    badgeText: { fontSize: 11, color: '#007AFF', fontFamily: 'Paperlogy-Medium' },
    main: { fontSize: 14, fontFamily: 'Paperlogy-Medium', marginTop: 4, color: '#202020' },
    detail: { fontSize: 13, fontFamily: 'Paperlogy-Medium', color: '#8C8D8F', marginTop: 10 },
    checkIcon: { width: 30, height: 30, marginLeft: 8, marginTop: 10 },
    separator: { height: 1, backgroundColor: '#eee', marginHorizontal: 20 },
    topSection: { paddingHorizontal: 16, paddingTop: 12, paddingBottom: 10, backgroundColor: '#fff' },
    searchBox: {
        flexDirection: 'row', alignItems: 'center', backgroundColor: '#F4F5F7',
        borderRadius: 5, paddingVertical: 16, paddingHorizontal: 12, marginBottom: 30,
    },
    searchIcon: { width: 24, height: 24, marginRight: 8 },
    searchPlaceholder: { fontFamily: 'Paperlogy-Medium', color: '#7F8083', fontSize: 16 },
    locationButton: {
        borderWidth: 1, borderColor: '#DEDFDE', borderRadius: 5,
        paddingVertical: 12, alignItems: 'center', marginBottom: 30,
    },
    locationButtonText: { fontSize: 16, fontFamily: 'Paperlogy-Medium', color: '#4C4C4C' },
    divider: { height: 1, backgroundColor: '#eee', marginBottom: 0 },
    addAddressRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
    addIcon: { width: 20, height: 20, marginRight: 10 },
    addText: { fontSize: 16, fontFamily: 'Paperlogy-SemiBold', color: '#202020' },
});
