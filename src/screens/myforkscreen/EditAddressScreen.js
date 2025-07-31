import React, { useEffect, useState } from 'react';
import {
    View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, Modal, FlatList
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useUser } from '../../contexts/UserContext';
import HeaderBar from '../../components/common/HeaderBar';

const predefinedLabels = ['우리집', '회사', '직접입력'];

export default function EditAddressScreen() {
    const { address } = useRoute().params; // 🔹 기존 주소 정보
    const navigation = useNavigation();
    const { user } = useUser();
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

    useEffect(() => {
        if (address) {
            setDetail(address.detail || '');
            setLabel(predefinedLabels.includes(address.label) ? address.label : '직접입력');
            setCustomLabel(predefinedLabels.includes(address.label) ? '' : address.label || '');
            // 라이더 메시지, 공동현관 비밀번호 등도 백엔드에서 제공한다면 추가
        }
    }, [address]);

    const handleUpdate = async () => {
        if (!userId || !address?.id) {
            Alert.alert('에러', '사용자 정보 또는 주소 ID가 없습니다.');
            return;
        }

        const body = {
            province: address.province,
            city: address.city,
            roadName: address.roadName,
            buildingNumber: address.buildingNumber,
            detail: detail.trim(),
            postalCode: address.postalCode,
            label: realLabel,
        };


        console.log('🧾 수정할 주소 데이터:', body);

        try {
            await axios.put(
                `http://43.202.234.190:8080/api/user/${userId}/profile/address/${address.id}`,
                body
            );

            Alert.alert('주소가 수정되었습니다.', '', [
                {
                    text: '확인',
                    onPress: () => navigation.navigate('AddressManage'), // 주소 관리 화면으로 이동
                },
            ]);
        } catch (e) {
            console.error(e);
            Alert.alert('주소 수정 실패', '서버와의 연결에 문제가 발생했습니다.');
        }
    };

    const realLabel =
        label === '직접입력'
            ? customLabel.trim() || null // 빈 문자열이면 null 처리
            : label;

    if (label === '직접입력' && !customLabel.trim()) {
        Alert.alert('별칭을 입력해주세요!');
        return;
    }

    return (
        <ScrollView style={styles.container}>
            <HeaderBar title="주소 수정" />
            <View style={styles.subContainer}>
                <View style={styles.mapPlaceholder}><Text>지도화면</Text></View>
                <Text style={styles.addrMain}>{`${address.province} ${address.city} ${address.roadName} ${address.buildingNumber}`}</Text>
                <Text style={styles.addrSub}>{address.detail || ''}</Text>

                <TextInput style={styles.input} placeholder="상세 주소 입력" value={detail} onChangeText={setDetail} />

                <View style={styles.labelRow}>
                    {predefinedLabels.map((l) => (
                        <TouchableOpacity
                            key={l}
                            style={[
                                styles.labelBtn,
                                (label === l || (l === '직접입력' && label === '직접입력')) && styles.selectedLabel
                            ]}
                            onPress={() => {
                                if (l === '직접입력') {
                                    setLabel('직접입력');
                                } else {
                                    setLabel(l);
                                    setCustomLabel(''); // 🔥 반드시 추가
                                }
                            }}
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
                    <Text style={styles.labelText}>{riderMsg || '라이더님께 남길 말씀'}</Text>
                </TouchableOpacity>

                <Text style={styles.Title2}>공동현관 비밀번호</Text>
                <TextInput style={styles.input} placeholder="예) 1234" value={gateCode} onChangeText={setGateCode} />

                <Text style={styles.Title2}>찾아오는 길 안내</Text>
                <TextInput
                    style={styles.input}
                    placeholder="예) 편의점 옆 건물이에요"
                    value={direction}
                    onChangeText={setDirection}
                />

                <TouchableOpacity style={styles.registerBtn} onPress={handleUpdate}>
                    <Text style={styles.registerBtnText}>주소 수정</Text>
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
