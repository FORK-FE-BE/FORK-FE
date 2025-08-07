import React, { useState } from 'react';
import {
    View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, Modal, FlatList
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useUser } from '../../contexts/UserContext'; // 🔹 추가: userId 가져오기 위해
import HeaderBar from '../../components/common/HeaderBar';
import { BASE_URL } from '../../constants';

const predefinedLabels = ['우리집', '회사', '직접입력'];

export default function AddressDetailScreen() {
    const { selectedAddress } = useRoute().params;
    const navigation = useNavigation();
    const { user } = useUser(); // 🔹 현재 로그인한 유저
    const userId = user?.userId;

    const [detail, setDetail] = useState('');
    const [label, setLabel] = useState('');
    const [customLabel, setCustomLabel] = useState('');
    const [riderMsg, setRiderMsg] = useState('');
    const [gateCode, setGateCode] = useState('');
    const [direction, setDirection] = useState('');
    const [riderModalVisible, setRiderModalVisible] = useState(false);

    const riderMsgOptions = [
        '문 앞에 두고 벨 눌러주세요',
        '문 앞에 놔주세요',
        '직접 전달해주세요',
        '경비실에 맡겨주세요',
    ];

    const handleSubmit = async () => {
        if (!userId) {
            Alert.alert('로그인 오류', '사용자 정보가 없습니다.');
            return;
        }

        if (!selectedAddress?.siNm || !selectedAddress?.sggNm || !selectedAddress?.rn) {
            Alert.alert('주소 선택 오류', '주소 정보가 유효하지 않습니다.');
            return;
        }

        const body = {
            province: selectedAddress.siNm,
            city: selectedAddress.sggNm,
            roadName: selectedAddress.rn,
            buildingNumber:
                selectedAddress.buldSlno === '0'
                    ? selectedAddress.buldMnnm
                    : `${selectedAddress.buldMnnm}-${selectedAddress.buldSlno}`,
            detail: detail.trim(),
            postalCode: selectedAddress.zipNo,
            label: label === '직접입력' ? customLabel.trim() : label,
        };

        console.log('🧾 전송할 주소 데이터:', body);

        try {
            await axios.post(`${BASE_URL}/api/user/${userId}/profile/address`, body);

            Alert.alert('주소가 등록되었습니다.', '', [
                {
                    text: '확인',
                    onPress: () => navigation.navigate('Address'), //주소 조회 화면으로 이동
                },
            ]);
        } catch (e) {
            console.error(e);
            Alert.alert('주소 등록 실패', '서버와의 연결에 문제가 발생했습니다.');
        }
    };



    return (
        <ScrollView style={styles.container}>
            <HeaderBar title="주소 상세" />
            <View style={styles.subContainer}>
                <View style={styles.mapPlaceholder}><Text>지도화면</Text></View>
                <Text style={styles.addrMain}>{selectedAddress.roadAddr}</Text>
                <Text style={styles.addrSub}>{selectedAddress.jibunAddr}</Text>

                <TextInput style={styles.input} placeholder="상세 주소 입력" value={detail} onChangeText={setDetail} />

                <View style={styles.labelRow}>
                    {predefinedLabels.map((l) => (
                        <TouchableOpacity
                            key={l}
                            style={[styles.labelBtn, label === l && styles.selectedLabel]}
                            onPress={() => setLabel(l)}
                        >
                            <Text style={styles.labelText}>{l}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                {label === '직접입력' && (
                    <TextInput
                        style={styles.input}
                        placeholder="별칭 입력"
                        value={customLabel}
                        onChangeText={setCustomLabel}
                    />
                )}

                <Text style={styles.Title2}>라이더님께</Text>

                <TouchableOpacity style={styles.input} onPress={() => setRiderModalVisible(true)}>
                    <Text style={styles.labelText}>
                        {riderMsg || '라이더님께 남길 말씀'}
                    </Text>
                </TouchableOpacity>

                <Text style={styles.Title2}>공동현관 비밀번호</Text>

                <TextInput style={styles.input} placeholder="예) 1234" value={gateCode} onChangeText={setGateCode} />

                <Text style={styles.Title2}>찾아오는 길 안내</Text>
                <TextInput 
                style={styles.input} placeholder="예) 편의점 옆 건물이에요" value={direction} onChangeText={setDirection} />

                <TouchableOpacity style={styles.registerBtn} onPress={handleSubmit}>
                    <Text style={styles.registerBtnText}>주소 등록</Text>
                </TouchableOpacity>

                <Modal visible={riderModalVisible} transparent animationType="slide">
                    <View style={styles.modalContainer}>
                        <FlatList
                            data={riderMsgOptions}
                            keyExtractor={(item) => item}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.modalItem}
                                    onPress={() => {
                                        setRiderMsg(item);
                                        setRiderModalVisible(false);
                                    }}
                                >
                                    <Text>{item}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </Modal>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    subContainer: {
        paddingHorizontal: 16
    },
    mapPlaceholder: {
        backgroundColor: '#ccc',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 10
    },
    Title2: {
        color: '#595959',
        fontFamily: 'Paperlogy-Medium',
        fontSize: 16,
        marginTop: 12,
    },
    addrMain: {
        fontSize: 18,
        fontFamily: 'Paperlogy-SemiBold',
        marginBottom: 4,
        color: '#000'
    },
    addrSub: {
        fontSize: 16,
        color: '#000',
        fontFamily: 'Paperlogy-Regular',
        marginBottom: 10
    },
    input: {
        borderWidth: 1,
        borderColor: '#DEDFDE',
        borderRadius: 6,
        paddingHorizontal: 20,
        paddingVertical: 16,

        fontFamily: 'Paperlogy-Medium',
        fontSize: 16,

        marginTop: 12
    },
    labelRow: { flexDirection: 'row', gap: 12, marginTop: 12 },
    labelBtn: {
        borderWidth: 1,
        borderColor: '#DEDFDE',
        borderRadius: 6,
        paddingHorizontal: 30,
        paddingVertical: 12,
    },
    selectedLabel: { borderColor: '#000' },
    labelText: {
        fontFamily: 'Paperlogy-Medium',
        fontSize: 16,
        color: '#949595'
    },
    registerBtn: {
        backgroundColor: '#0383FE',
        padding: 14, borderRadius: 6,
        alignItems: 'center',
        marginTop: 24,
    },
    registerBtnText: {
        fontFamily: 'Paperlogy-SemiBold',
        color: '#fff',
        fontSize: 18
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalItem: {
        backgroundColor: '#fff',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
});
