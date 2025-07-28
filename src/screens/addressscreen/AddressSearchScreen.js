import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HeaderBar from '../../components/common/HeaderBar'; // 헤더 컴포넌트

export default function AddressSearchScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* 상단 헤더 */}
            <HeaderBar title="주소 검색" />

            {/* 본문 */}
            <View style={styles.content}>
                <Text style={styles.title}>배달 받을 주소를 검색해주세요</Text>

                {/* 검색창 */}
                <View style={styles.searchBox}>
                    <Image
                        source={require('../../assets/icons/search.png')}
                        style={styles.searchIcon}
                    />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="지번, 도로명, 건물명으로 검색"
                    />
                </View>

                {/* 현재 위치로 찾기 버튼 */}
                <TouchableOpacity style={styles.locationButton}>
                    <Text style={styles.locationButtonText}>현재 위치로 찾기</Text>
                </TouchableOpacity>
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
        fontFamily:'Paperlogy-Medium'
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
});
